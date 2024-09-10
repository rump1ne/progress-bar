let progressValue = 0;

function increaseProgress() {
    if (progressValue < 100) {
        progressValue += 10;
        document.getElementById("progress").style.width = progressValue + "%";
        document.getElementById("progress").innerText = progressValue + "%";
    }
}

function decreaseProgress() {
    if (progressValue > 0) {
        progressValue -= 10;
        document.getElementById("progress").style.width = progressValue + "%";
        document.getElementById("progress").innerText = progressValue + "%";
    }
}