function greetUser() {
    let name = document.getElementById("nameInput").value;
	if (name.trim() === "") {
        alert("Veuillez entrer votre nom.");
    } else {
        alert(" Bonjour, " + name + " ! ");
		}
}

function toggleHelp() {
    let helpSection = document.getElementById("helpSection");
	let button = document.getElementById("toggleHelpButton")
    if (helpSection.style.display === "none") {
        helpSection.style.display = "block";
		button.textContent = "Cacher l'aide";
    } else {
        helpSection.style.display = "none";
		button.textContent = "Afficher l'aide";
		}
}