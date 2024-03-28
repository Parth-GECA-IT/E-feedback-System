const indicatorElements = document.querySelectorAll('.rating-indicator');

indicatorElements.forEach((indicator, index) => {
    const ratingPercentage = ratingData[index] / totalRatings * 100;
    indicator.style.width = `${ratingPercentage}%`;
});

function Empty2DArray(rows, cols) {
    const array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < cols; j++) {
            array[i][j] = null;
        }
    }
    return array;
}
let arr = Empty2DArray(10, 5);

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        arr[i][j] = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    }
}

for (let i = 1, j = 0; i <= 10,j<5; i++) {
    document.querySelector(`.ques${i}`).insertAdjacentHTML("afterend", `<div class="rating-bars">
            
            <div class="rating-bar">
                <span class="rating-label">5 ★</span>
                <div class="rating-indicator" style="width: ${arr[i - 1][j]}%"></div>
                <span class="rating-count">${arr[i - 1][j]}</span>
            </div>
            <div class="hide">${j++}</div>
            <div class="rating-bar">
                <span class="rating-label">4 ★</span>
                <div class="rating-indicator" style="width: ${arr[i - 1][j]}%"></div>
                <span class="rating-count">${arr[i - 1][j]}</span>
            </div>
            <div class="hide">${j++}</div>
            <div class="rating-bar">
                <span class="rating-label">3 ★</span>
                <div class="rating-indicator" style="width: ${arr[i - 1][j]}%"></div>
                <span class="rating-count">${arr[i - 1][j]}</span>
            </div>
            <div class="hide">${j++}</div>
            <div class="rating-bar">
                <span class="rating-label">2 ★</span>
                <div class="rating-indicator" style="width: ${arr[i - 1][j]}%"></div>
                <span class="rating-count">${arr[i - 1][j]}</span>
            </div>
            <div class="hide">${j++}</div>
            <div class="rating-bar">
                <span class="rating-label">1 ★</span>
                <div class="rating-indicator" style="width: ${arr[i - 1][j]}%"></div>
                <span class="rating-count">${arr[i - 1][j]}</span>
            </div>
            <div class="hide">${j=0}</div>
        </div>`)
}