const roomStatuses = {
    "H1": "available", 
    "H2": "available",  
    "H3": "available", 
    "H4": "available", 
    "H5": "reserved", 
    "H6": "available",
    "H7": "available",
    "H8": "reserved",  
    "H9": "available", 
    "H10": "available", 
    "H11": "reserved",  
    "H12": "available", 
    "H13": "available", 
    "H14": "reserved",  
    "H15": "available", 
    "H16": "available",
    "H17": "reserved",  
    "H18": "available",
    "H19": "reserved", 
    "H20": "reserved",  };

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
