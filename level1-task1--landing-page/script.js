/*
Website  : MobileHub
Developer: Thanigai
Role     : Web Development Intern
Company  : Oasis Infobyte
*/

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert(
            "Thank you for visiting MobileHub!\n\n" +
            "Created by Thanigai\n" +
            "Web Development Intern – Oasis Infobyte"
        );
    });
});

console.log("MobileHub loaded successfully");
console.log("Developed by Thanigai | Oasis Infobyte Intern");
