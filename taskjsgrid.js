let score = 0;

document.getElementById('createTableBtn').addEventListener('click', function() {
    // Prompt the user for the number of rows and columns
    const rows = parseInt(prompt('Enter the number of rows:'), 10);
    const cols = parseInt(prompt('Enter the number of columns:'), 10);

    // Validate input
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert('Please enter valid positive numbers for rows and columns.');
        return;
    }

    // Create the table element
    const table = document.createElement('table');

    // Generate the rows and columns
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            if (i === 0 && j === 0) {
                // Add the first image to the first cell
                const img1 = document.createElement('img');
                img1.src = 'bird.png'; // Replace with your image path
                img1.alt = 'Moving Image';
                img1.id = 'movingImage';
                td.appendChild(img1);
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    // Clear any existing table and append the new table
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);

    // Place the second image in a random cell
    const img2 = document.createElement('img');
    img2.src = 'caterpillar.png'; // Replace with your image path
    img2.alt = 'Second Image';
    img2.id = 'secondImage';
    placeImageRandomly(img2, table);

    // Display the control buttons
    document.getElementById('controls').style.display = 'block';
});

document.getElementById('moveUpBtn').addEventListener('click', function() {
    moveImage('up');
});

document.getElementById('moveDownBtn').addEventListener('click', function() {
    moveImage('down');
});

document.getElementById('moveLeftBtn').addEventListener('click', function() {
    moveImage('left');
});

document.getElementById('moveRightBtn').addEventListener('click', function() {
    moveImage('right');
});

function moveImage(direction) {
    const img1 = document.getElementById('movingImage');
    const img2 = document.getElementById('secondImage');
    const currentCell = img1.parentElement;
    const table = currentCell.closest('table');
    const rows = table.rows;
    let rowIndex = currentCell.parentNode.rowIndex;
    let cellIndex = currentCell.cellIndex;

    switch (direction) {
        case 'up':
            if (rowIndex > 0) {
                rows[rowIndex - 1].cells[cellIndex].appendChild(img1);
            } else {
                alert('Cannot move out of the table');
            }
            break;
        case 'down':
            if (rowIndex < rows.length - 1) {
                rows[rowIndex + 1].cells[cellIndex].appendChild(img1);
            } else {
                alert('Cannot move out of the table');
            }
            break;
        case 'left':
            if (cellIndex > 0) {
                rows[rowIndex].cells[cellIndex - 1].appendChild(img1);
            } else {
                alert('Cannot move out of the table');
            }
            break;
        case 'right':
            if (cellIndex < rows[rowIndex].cells.length - 1) {
                rows[rowIndex].cells[cellIndex + 1].appendChild(img1);
            } else {
                alert('Cannot move out of the table');
            }
            break;
        default:
            return;
    }

    // Check if the two images are in the same cell
    if (img1.parentElement === img2.parentElement) {
        score++;
        document.getElementById('scoreBtn').innerText = `Score: ${score}`;
        placeImageRandomly(img2, table);
    }
}

function placeImageRandomly(image, table) {
    const rows = table.rows;
    const rowIndex = Math.floor(Math.random() * rows.length);
    const cellIndex = Math.floor(Math.random() * rows[0].cells.length);
    rows[rowIndex].cells[cellIndex].appendChild(image);
}
