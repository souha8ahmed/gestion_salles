const roomStatuses = {
    "F1": "available", 
    "F2": "available",  
    "F3": "available", 
    "F4": "available", 
    "F5": "reserved", 
    "F6": "available",
    "F7": "available",
    "F8": "reserved",  
    "F9": "available", 
    "F10": "available", 
    "F11": "reserved",  
    "F12": "available", 
    "F13": "available", 
    "F14": "reserved",  
    "F15": "available", 
    "F16": "available",
    "F17": "reserved",  
    "F18": "available",
    "F19": "reserved", 
    "F20": "reserved",  };

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
