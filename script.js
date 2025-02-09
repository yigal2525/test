document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // מונע טעינה מחדש של הדף

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name && email && phone) {
        document.getElementById("response-message").innerText = "✅ תודה! הפרטים נשלחו בהצלחה.";
        document.getElementById("contact-form").reset(); // ניקוי הטופס
    } else {
        document.getElementById("response-message").innerText = "❌ יש למלא את כל השדות.";
    }
});
