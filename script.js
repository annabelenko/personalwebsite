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



function filterSelection(category) {
    let items = Array.from(document.getElementsByClassName('portfolio-item'));
    let delay = 500; // This should match the longest duration of your CSS transitions

    // Animate out items that do not match the category
    items.forEach(item => {
        if (!(category === 'all' || item.classList.contains(category))) {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.5)';
        }
    });

    // After the fade-out animation ends, adjust the display property
    setTimeout(() => {
        items.forEach(item => {
            if (category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
                // Trigger reflow for each item
                void item.offsetWidth;
                // Animate in
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            } else {
                item.style.display = 'none';
            }
        });
    }, delay);
}

// Initial call to show all items
document.addEventListener('DOMContentLoaded', function() {
    filterSelection('all');
});



  




