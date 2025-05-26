// script.js
let points = 0;

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickButton');
    const pointsDisplay = document.getElementById('pointsDisplay');
    loadPoint();
});

document.getElementById('clickButton').addEventListener('click', function() {
    points++;
    pointsDisplay.textContent = `ポイント：${points}`;
    savePoint();
});

document.getElementById('clickButton').addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.9)';
});

document.getElementById('clickButton').addEventListener('mouseup', function() {
    this.style.transform = 'scale(1)';
});

// ポイントをクッキーに保存する
function savePoint() {
    const point = points;
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30日間有効
    document.cookie = `point=${point}; expires=${expires.toUTCString()}`;
}

// クッキーからポイントを読み込む
function loadPoint() {
    const cookie = document.cookie;
    const point = cookie.match(/point=([^;]*)/);
    if (point) {
        points = parseInt(point[1]);
        const pointsDisplay = document.getElementById('pointsDisplay');
        pointsDisplay.textContent = `ポイント：${points}`; // ポイントの値を更新
    }
}