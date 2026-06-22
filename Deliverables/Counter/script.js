// ===== DOM ELEMENTS =====
// Get references to all HTML elements we need to interact with
const counterDisplay = document.getElementById("counterDisplay");   // Shows the current count
const incrementBtn = document.getElementById("incrementBtn");       // + button
const decrementBtn = document.getElementById("decrementBtn");       // - button
const resetBtn = document.getElementById("resetBtn");               // Reset button
const message = document.getElementById("message");                 // Warning message area

// ===== STATE =====
// This variable holds the current counter value
// It is the single source of truth for our app
let count = 0;

// ===== CORE FUNCTION =====
// Updates the screen to match the current count
// Call this every time count changes
function updateDisplay() {
  counterDisplay.textContent = count;
}

// ===== INCREMENT =====
// When user clicks + button, increase count by 1
incrementBtn.addEventListener("click", () => {
  count++;               // Increase the value
  updateDisplay();       // Show the new value on screen
});

// ===== DECREMENT =====
// When user clicks - button, decrease count by 1
// But never let it go below 0
decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    // Safe to decrease
    count--;
    updateDisplay();
  } else {
    // Already at 0 — show warning
    document.body.style.backgroundColor = "pink";              // Flash pink background
    message.textContent = "Counter cannot go below 0!";        // Show error text

    // Clear the warning after 1.5 seconds
    setTimeout(() => {
      document.body.style.backgroundColor = "";   // Remove pink background
      message.textContent = "";                   // Clear error text
    }, 1500);
  }
});

// ===== RESET =====
// When user clicks reset button, set count back to 0
resetBtn.addEventListener("click", () => {
  count = 0;             // Reset the value
  updateDisplay();       // Show 0 on screen
});