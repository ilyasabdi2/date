// =========================
// DATA
// =========================

let selectedDate = "";
let selectedTime = "";
let selectedFood = "";


// =========================
// GET SCREENS
// =========================

const welcomeScreen = document.getElementById("welcomeScreen");
const dateScreen = document.getElementById("dateScreen");
const timeScreen = document.getElementById("timeScreen");
const foodScreen = document.getElementById("foodScreen");
const finalScreen = document.getElementById("finalScreen");


// =========================
// SCREEN SWITCHER
// =========================

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(function(item) {
        item.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =========================
// YES BUTTON
// =========================

document
    .getElementById("yesButton")
    .addEventListener("click", function() {

        showScreen(dateScreen);

    });


// =========================
// NO BUTTON
// =========================

document
    .getElementById("noButton")
    .addEventListener("click", function() {

        const button = this;

        button.textContent = "Are you sure? 🥺";

        button.style.transform = "translateX(25px)";

        setTimeout(function() {

            button.textContent = "NO...";

            button.style.transform = "translateX(0)";

        }, 1200);

    });


// =========================
// DATE
// =========================

const dateInput = document.getElementById("dateInput");


// Prevent choosing dates in the past

const today = new Date();

const year = today.getFullYear();

const month = String(
    today.getMonth() + 1
).padStart(2, "0");

const day = String(
    today.getDate()
).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


// Continue from date

document
    .getElementById("dateNextButton")
    .addEventListener("click", function() {

        if (!dateInput.value) {

            alert("Please choose a date 💗");

            return;
        }

        selectedDate = dateInput.value;

        showScreen(timeScreen);

    });


// =========================
// TIME
// =========================

const timeButtons =
    document.querySelectorAll(".time-button");


timeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        timeButtons.forEach(function(item) {
            item.classList.remove("selected");
        });

        this.classList.add("selected");

        selectedTime = this.dataset.time;

    });

});


// Continue from time

document
    .getElementById("timeNextButton")
    .addEventListener("click", function() {

        if (!selectedTime) {

            alert("Please choose a time 💕");

            return;
        }

        showScreen(foodScreen);

    });


// =========================
// FOOD
// =========================

const foodButtons =
    document.querySelectorAll(".food-button");


foodButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        foodButtons.forEach(function(item) {
            item.classList.remove("selected");
        });

        this.classList.add("selected");

        selectedFood = this.dataset.food;

    });

});


// =========================
// FINAL SCREEN
// =========================

document
    .getElementById("foodNextButton")
    .addEventListener("click", function() {

        if (!selectedFood) {

            alert("Choose something delicious first 😋");

            return;
        }

        document.getElementById("finalDate").textContent =
            formatDate(selectedDate);

        document.getElementById("finalTime").textContent =
            selectedTime;

        document.getElementById("finalFood").textContent =
            selectedFood;

        showScreen(finalScreen);

    });


// =========================
// DATE FORMATTER
// =========================

function formatDate(dateString) {

    const date = new Date(dateString + "T00:00:00");

    return date.toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        }
    );

}


// =========================
// RESTART
// =========================

document
    .getElementById("restartButton")
    .addEventListener("click", function() {

        selectedDate = "";
        selectedTime = "";
        selectedFood = "";

        dateInput.value = "";

        timeButtons.forEach(function(button) {
            button.classList.remove("selected");
        });

        foodButtons.forEach(function(button) {
            button.classList.remove("selected");
        });

        showScreen(welcomeScreen);

    });