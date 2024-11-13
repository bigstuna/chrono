function calculateTime() {
    const startTime = document.getElementById("start").value; 
    const endTime = document.getElementById("end").value;

    if (startTime && endTime) { 
        const start = new Date(`1970-01-01T${startTime}:00`); 
        const end = new Date(`1970-01-01T${endTime}:00`); 

        const difference = (end - start) / 1000 / 60; // Différence en minutes 

        if (difference < 0) {
            alert("L'heure de fin doit être après l'heure de début !"); 
            return; 
        }
        
        const hours = Math.floor(difference / 60); 
        const minutes = difference % 60; document.getElementById("workTime").textContent = `${hours}h ${minutes}min`; 
    }else{ 
        alert("Veuillez saisir les heures de début et de fin !"); 
    } 
}