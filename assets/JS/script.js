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

 function exercice4() {
        // Pour récupérer le texte écrit 
        let texte = document.getElementById('texteExercice4').value;
        
        // Pour découper le texte en mots 
        let mots = texte.split(" ");
    
        let resultat = "";
        mots.forEach(function(mot) {
            let p = document.createElement("p");
            p.textContent = mot; 
            document.getElementById("exercice4Resultat").appendChild(p);
        });
    }