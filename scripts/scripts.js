let modelName = "XYZ";
let duration = 0;

function recalculate() {
    let modelTextElement = document.getElementById("model-text");
    let durationTextElement = document.getElementById("duration-text");
    let costLabel = document.getElementById("calculated-cost");
    let newTotalCost = 0;

    if (modelTextElement.innerHTML === "Model XYZ") {
        newTotalCost = duration * 100;
    } else if (modelTextElement.innerHTML === "Model CPRG") {
        newTotalCost = duration * 213;
    }

    costLabel.innerHTML = newTotalCost;
}

let modelButton = document.getElementById("model-button");

function changeModel() {
    let modelTextElement = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelTextElement.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelTextElement.innerHTML = "Model XYZ";
    }

    recalculate();
}

modelButton.addEventListener("click", changeModel);

let durationButton = document.getElementById("duration-button");

function changeDuration() {
    let durationTextElement = document.getElementById("duration-text");
    let newDuration = prompt("Enter a new duration:");
    duration = parseInt(newDuration);
    durationTextElement.innerHTML = duration;
    recalculate();
}

durationButton.addEventListener("click", changeDuration);
