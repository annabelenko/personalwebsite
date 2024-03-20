document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById('gradient-box');

    // Set an initial radial gradient
    box.style.backgroundImage = `radial-gradient(circle at 50% 50%, #338D88, #235F71, #8929AD, #D3208B)`;

    document.addEventListener('mousemove', function(e) {
        // Get the dimensions and position of the gradient box
        let boxRect = box.getBoundingClientRect();

        // Calculate the cursor's position relative to the gradient box
        let x = e.clientX - boxRect.left;
        let y = e.clientY - boxRect.top;

        // Convert the position to a percentage of the box's dimensions
        let xPercent = (x / boxRect.width) * 100;
        let yPercent = (y / boxRect.height) * 100;

        // Update the radial gradient
        box.style.backgroundImage = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #338D88, #235F71, #8929AD, #D3208B)`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Your replacement code here
    var parent = document.getElementById('container'); // Element that holds the mover
    var mover = document.getElementById('mover'); // The mover, can be anything
    var dir = 1; // The direction we are moving... 1 is right, -1 is left.
    var dist = 10; // The distance we move each "tick"

    // The ID will let us stop it later if we want.
    var intervalId = setInterval(function() {
        // Get the left, remove the "px" from the end and convert it to an integer.
        var posX = parseInt(mover.style.left.replace(/px$/, '')) || 0;

        // Add dir * dist
        posX += dir * dist;

        // If we are moving right and we've gone over the right edge...
        if (dir == 1 && posX + mover.offsetWidth > parent.offsetWidth) {
            // only move right to the edge...
            posX -= posX + mover.offsetWidth - parent.offsetWidth;
            // and change direction.
            dir *= -1
        // If we are moving left and we've gone over the left edge...
        } else if (dir == -1 && posX < 0) {
            // stop at zero...
            posX = 0;
            // and change direction...
            dir *= -1;
        }

        // Set the new position
        mover.style.left = posX + "px";
    }, 100); // this number is how many milliseconds in between each move.
    // Smaller interval time means smoother movement but slower performance.
    var placeholder = document.getElementById('placeholder');
    var img = document.createElement('img');
    img.src = placeholder.innerText.trim(); // Using the text from the placeholder as the source
    img.alt = 'Smiley Face';
    img.width = '300'; // Adjust as needed
    img.height = '300'; // Adjust as needed
    placeholder.parentNode.replaceChild(img, placeholder);
});
function sortTable(column) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("sortableTable");
    switching = true;
    // Make a loop that will continue until no switching has been done
    while (switching) {
        // Start by saying: no switching is done
        switching = false;
        rows = table.rows;
        // Loop through all table rows (except the first, which contains table headers)
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching
            shouldSwitch = false;
            // Get the two elements you want to compare, one from current row and one from the next
            x = rows[i].getElementsByTagName("TD")[column];
            y = rows[i + 1].getElementsByTagName("TD")[column];
            // Check if the two rows should switch place, based on the direction, asc or desc
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            // If a switch has been marked, make the switch and mark that a switch has been done
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    // After sorting, animate the row movement
    animateRows(table);
}

function animateRows(table) {
    var rows = table.getElementsByTagName("tr");
    // Apply a temporary animation class or directly apply styles
    for (let i = 1; i < rows.length; i++) { // Start with 1 to skip table header
        let row = rows[i];
        // Reset the transition, then apply new positioning
        row.style.transition = 'none';
        row.offsetHeight; // Trigger reflow to reset transition
        row.style.transition = 'transform 0.3s ease';
        row.style.transform = 'translateY(' + ((i - 1) * row.offsetHeight) + 'px)';
    }
}



