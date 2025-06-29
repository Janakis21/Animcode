// p5.js animations for visualizing algorithms
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
    // This will be used for dynamic animations
    // You can call specific animation functions based on the algorithms
}

function visualizeSorting(arr) {
    background(255);
    let w = width / arr.length;
    for (let i = 0; i < arr.length; i++) {
        fill(0, 100, 255);
        rect(i * w, height - arr[i], w, arr[i]);
    }
}

// Example: Call this function when a sorting algorithm is triggered
function startSortingAnimation() {
    // Example array
    let arr = [30, 70, 10, 50, 90, 40, 20, 80];
    visualizeSorting(arr);
}
