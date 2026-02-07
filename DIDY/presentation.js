// presentation

const btn = document.getElementById("btnLireStory");
const scenes = document.querySelectorAll(".scene");
const endButtons = document.querySelector(".endButtons");
const btnRevoir = document.getElementById("btnRevoir");
const btnContinuer = document.getElementById("btnContinuer");

let index = 0;

function playScene(i) {
    if (i > 0) {
        scenes[i - 1].classList.remove("active");
        scenes[i - 1].classList.add("exit");
    }

    if (i < scenes.length) {
        scenes[i].classList.add("active");

        setTimeout(() => {
            playScene(i + 1);
        }, 10000);
    } else {
        endButtons.classList.add("show");
    }
}

btn.addEventListener("click", () => {
    document.body.classList.add("active");

    setTimeout(() => {
        playScene(0);
    }, 1400);
});

btnRevoir.addEventListener("click", () => {
    scenes.forEach(scene => {
        scene.classList.remove("active", "exit");
    });
    endButtons.classList.remove("show");
    playScene(0);
});

btnContinuer.addEventListener("click", () => {
    window.location.href = "cool.html";
});