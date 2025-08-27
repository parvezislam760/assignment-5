let coins = 100;
let heartCount = 0;
let copyCount = 0;

document.querySelectorAll('.heart').forEach((heart) => {
    heart.addEventListener('click',() => {
        heartCount++;

        document.getElementById('heartCount').innerText = heartCount;
    });
});