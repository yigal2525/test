const rotatingText = document.getElementById("rotating-text");
const texts = [
    "שירות מוניות מהיר ואמין בכל שעה.",
    "הסעה לנתב\"ג במחירים משתלמים במיוחד.",
    "הזמנות נוחות דרך אפליקציה או טלפון."
];
let currentTextIndex = 0;

function changeText() {
    rotatingText.innerText = texts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % texts.length;
}

setInterval(changeText, 3000);
