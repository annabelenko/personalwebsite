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
    filterSelection('software');
});

/*

document.addEventListener('DOMContentLoaded', function() {
    const mover = document.getElementById('mover');
    const container = document.getElementById('gradient-box');
    let direction = 'right';
    let posX = 0;
    let posY = 0;
    const speed = 5; // Speed of movement

    function moveMover() {
        const containerWidth = container.offsetWidth - mover.offsetWidth;
        const containerHeight = container.offsetHeight - mover.offsetHeight;

        switch(direction) {
            case 'right':
                if (posX < containerWidth) posX += speed;
                else direction = 'down';
                break;
            case 'down':
                if (posY < containerHeight) posY += speed;
                else direction = 'left';
                break;
            case 'left':
                if (posX > 0) posX -= speed;
                else direction = 'up';
                break;
            case 'up':
                if (posY > 0) posY -= speed;
                else direction = 'right';
                break;
        }

        mover.style.left = posX + 'px';
        mover.style.top = posY + 'px';
    }

    setInterval(moveMover, 20);
});







*/
