// RetroMatch Core Engine - Built in 2026
/**
 * RETROMATCH GAME ENGINE
 * Core Javascript logic for grid creation, card states, and score evaluation.
 */

// --- 1. Game Configurations & State Elements ---
const CARD_ICONS = ['👾', '🕹️', '🚀', '🛸', '💥', '🍄', '💎', '👑'];
let gameCards = [...CARD_ICONS, ...CARD_ICONS]; // Creates 16 cards (8 pairs)

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchesFound = 0;
let score = 0;
let totalTime = 0;
let timerInterval = null;
let isGameRunning = false;

// --- 2. DOM Elements Selection ---
const gameBoard = document.getElementById('game-board');
const scoreCounter = document.getElementById('score-counter');
const timerDisplay = document.getElementById('timer');
const highScoreDisplay = document.getElementById('high-score');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const modalPlayAgainBtn = document.getElementById('modal-play-again-btn');
const finalScoreDisplay = document.getElementById('final-score');
const winModalElement = document.getElementById('winModal');

// Instantiate Bootstrap Modal instance safely
const winModal = new bootstrap.Modal(winModalElement);

// --- 3. Initialization & Event Triggers ---
document.addEventListener('DOMContentLoaded', () => {
    loadHighScore();
    startBtn.addEventListener('click', initGame);
    resetBtn.addEventListener('click', resetGame);
    modalPlayAgainBtn.addEventListener('click', initGame);
});

/**
 * Initializes the clean game canvas grid and triggers state trackers
 */
function initGame() {
    isGameRunning = true;
    score = 0;
    matchesFound = 0;
    totalTime = 0;
    
    scoreCounter.textContent = "0000";
    timerDisplay.textContent = "00:00";
    
    startBtn.classList.add('d-none');
    resetBtn.classList.remove('d-none');
    
    clearInterval(timerInterval);
    startTimer();
    
    shuffleCards(gameCards);
    generateGameBoard();
}

// --- 4. Core Logic Procedures ---

/**
 * Shuffles internal items array utilizing Fisher-Yates approach
 */
function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Iterates through card states to inject HTML layouts dynamically
 */
function generateGameBoard() {
    gameBoard.innerHTML = ''; // Wipe past game structures
    
    gameCards.forEach((icon, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('memory-card');
        cardElement.dataset.iconValue = icon;
        cardElement.dataset.index = index;
        
        cardElement.innerHTML = `
            <div class="card-front">${icon}</div>
            <div class="card-back">?</div>
        `;
        
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

/**
 * Handles the card flip mechanism and verification checks
 */
function flipCard() {
    if (!isGameRunning || lockBoard) return;
    if (this === firstCard) return; // Ignore clicking same asset twice

    this.classList.add('flipped');

    if (!firstCard) {
        // Track first selected choice
        firstCard = this;
        return;
    }

    // Assign second choice card selection
    secondCard = this;
    evaluateMatch();
}

/**
 * Analyzes both active selections to lock elements or flip down
 */
function evaluateMatch() {
    let isMatch = firstCard.dataset.iconValue === secondCard.dataset.iconValue;
    
    if (isMatch) {
        lockMatchedCards();
    } else {
        unflipCards();
    }
}

/**
 * Disables matching items permanently and tallies points
 */
function lockMatchedCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
    score += 100;
    scoreCounter.textContent = String(score).padStart(4, '0');
    matchesFound++;

    resetSelections();

    if (matchesFound === CARD_ICONS.length) {
        triggerWinState();
    }
}

/**
 * Reverts unmatched components back downward safely utilizing time lockouts
 */
function unflipCards() {
    lockBoard = true; // Engage strict lock control protection

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        
        // Deduct marginal penalty points for incorrect mismatches
        if (score >= 10) score -= 10;
        scoreCounter.textContent = String(score).padStart(4, '0');
        
        resetSelections();
    }, 1000); // 1-second visual window delay
}

/**
 * Resets state trackers back to initial states
 */
function resetSelections() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// --- 5. Clock & Storage Data Systems ---

function startTimer() {
    timerInterval = setInterval(() => {
        totalTime++;
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;
        
        timerDisplay.textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function triggerWinState() {
    clearInterval(timerInterval);
    isGameRunning = false;
    
    // Add time bonus multiplier calculation
    let timeBonus = Math.max(0, 500 - totalTime);
    score += timeBonus;
    
    finalScoreDisplay.textContent = score;
    checkHighScore(score);
    
    // Launch Win HUD window cleanly
    winModal.show();
}

function checkHighScore(finalScore) {
    let currentHiScore = parseInt(localStorage.getItem('retroMatchHiScore')) || 0;
    
    if (finalScore > currentHiScore) {
        localStorage.setItem('retroMatchHiScore', finalScore);
        highScoreDisplay.textContent = String(finalScore).padStart(4, '0');
    }
}

function loadHighScore() {
    let currentHiScore = localStorage.getItem('retroMatchHiScore') || 0;
    highScoreDisplay.textContent = String(currentHiScore).padStart(4, '0');
}

function resetGame() {
    clearInterval(timerInterval);
    isGameRunning = false;
    gameBoard.innerHTML = '';
    scoreCounter.textContent = "0000";
    timerDisplay.textContent = "00:00";
    startBtn.classList.remove('d-none');
    resetBtn.classList.add('d-none');
    resetSelections();
}