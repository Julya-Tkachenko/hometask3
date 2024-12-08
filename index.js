// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (шаблонні рядки)

const userName = prompt("Enter your name");

if (userName === null) {
    alert("Ok, goodbye");
} else if (userName === "") {
    alert("What is your name?");
} else if (Number(userName)) {
    alert("use letters please")
} else {
    alert(`Hello, ${userName}`)
}

const userAgeInput = prompt("Enter your age");

if (userAgeInput === null) {
    alert("Ok, goodbye");
} else if (
    !userAgeInput.trim() || isNaN(userAgeInput)
    || userAgeInput <= 0 || userAgeInput >= 100
) {
    alert("Error:invalid age");
} 
else {
    const userName = +userAgeInput;
    alert(`Ok,you are ${userName} years old`);
}

const userPlace = prompt("Where are you from?");

if (userPlace === null) {
    alert("Ok, goodbye");
} else if (userPlace === "") {
    alert("what is your hometown?");
} else if (Number(userPlace)) {
    alert("use letters please")
} else {
    alert(`wonderful city ${userPlace}`)
}