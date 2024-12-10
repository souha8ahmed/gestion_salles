const roomStatuses = {
    "K1": "available", 
    "K2": "available",  
    "K3": "available", 
    "K4": "available", 
    "K5": "reserved", 
    "K6": "available",
    "K7": "available",
    "K8": "reserved",  
    "K9": "available", 
    "K10": "available", 
    "K11": "reserved",  
    "K12": "available", 
    "K13": "available", 
    "K14": "reserved",  
    "K15": "available", 
    "K16": "available",
    "K17": "reserved",  
    "K18": "available",
    "K19": "reserved", 
    "K20": "reserved",  };

const roomButtons = document.querySelectorAll('.grid-button');

roomButtons.forEach(button => {
    const roomId = button.textContent.trim();  // Get the room ID (e.g., F1, F2)

    if (roomStatuses[roomId] === 'available') {
        button.style.backgroundColor = "#28a745"; // Green for available rooms
    } else {
        button.style.backgroundColor = "#dc3545"; // Red for reserved rooms
    }

    button.addEventListener('mouseenter', () => {
        if (roomStatuses[roomId] === 'available') {
            button.style.backgroundColor = "#218838"; // Dark green on hover
        } else {
            button.style.backgroundColor = "#c82333"; // Dark red on hover
        }
    });

    button.addEventListener('mouseleave', () => {
        if (roomStatuses[roomId] === 'available') {
            button.style.backgroundColor = "#28a745"; // Green for available rooms
        } else {
            button.style.backgroundColor = "#dc3545"; // Red for reserved rooms
        }
    });
});
