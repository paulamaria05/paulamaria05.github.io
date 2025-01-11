// Variables for canvas drawing
const canvas = document.getElementById('emotionCanvas');
const savedDrawings = []; // Array to store saved drawings

if (canvas) {
    const ctx = canvas.getContext('2d');
    let drawing = false; // Track drawing state

    // Event listeners for drawing
    canvas.addEventListener('mousedown', (event) => {
        drawing = true;
        ctx.beginPath(); // Begin new path for drawing
        ctx.moveTo(event.offsetX, event.offsetY); // Set starting point
    });

    canvas.addEventListener('mouseup', () => {
        drawing = false;
        ctx.closePath(); // Close the path
    });

    canvas.addEventListener('mousemove', (event) => {
        if (!drawing) return; // Only draw when mouse is pressed
        ctx.lineWidth = 3; // Thickness of the line
        ctx.lineCap = 'round'; // Smooth ends
        ctx.strokeStyle = '#000'; // Black color
        ctx.lineTo(event.offsetX, event.offsetY); // Draw to current mouse position
        ctx.stroke(); // Render the stroke
    });

    // Clear canvas
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
    }

    // Save canvas as an image
    function saveDrawing() {
        const dataURL = canvas.toDataURL(); // Convert canvas content to data URL
        savedDrawings.push(dataURL); // Save data URL to the array
        updateSavedDrawings(); // Update saved drawings section
    }

    // Update saved drawings section
    function updateSavedDrawings() {
        const savedDrawingsContainer = document.getElementById('savedDrawings');
        savedDrawingsContainer.innerHTML = ''; // Clear current list of saved drawings

        savedDrawings.forEach((drawing, index) => {
            const img = document.createElement('img');
            img.src = drawing;
            img.alt = `Drawing ${index + 1}`;
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.margin = '10px';
            img.style.border = '1px solid #ccc';
            img.style.borderRadius = '5px';
            savedDrawingsContainer.appendChild(img);
        });
    }

    // Expose clearCanvas and saveDrawing globally
    window.clearCanvas = clearCanvas;
    window.saveDrawing = saveDrawing;
}
