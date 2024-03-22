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



document.addEventListener('DOMContentLoaded', function() {
    var mover = document.getElementById('mover');
    var container = document.getElementById('container');
    var moving = true; // Flag to control movement
    var posX = 0;
    var dir = 1;
    var intervalId;

    function moveMover() {
        if (moving) {
            // Calculate new position
            posX += dir * 5; // Adjust speed as needed
            if (posX + mover.offsetWidth >= container.offsetWidth || posX <= 0) {
                dir *= -1; // Change direction at bounds
            }
            mover.style.left = posX + 'px';
        }
    }

    function startMoving() {
        if (!intervalId) { // Prevent multiple intervals
            intervalId = setInterval(moveMover, 20); // Adjust timing for smoother animation
        }
    }

    function stopMoving() {
        clearInterval(intervalId); // Clear existing interval
        intervalId = null; // Reset interval ID
    }

    mover.addEventListener('mouseover', function() {
        moving = false; // Stop moving
        mover.style.transition = 'transform 0.5s ease'; // Smooth transition for stopping
        mover.style.transform = 'scale(1.1)'; // Visual cue for stopping
    });

    mover.addEventListener('mouseout', function() {
        moving = true; // Resume moving
        mover.style.transform = 'scale(1)'; // Reset scaling
        startMoving(); // Restart movement
    });

    startMoving(); // Initial call to start moving
});





