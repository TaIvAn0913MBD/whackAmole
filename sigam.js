let ab = 0;
const soil = document.getElementById("soil");
const start = document.getElementById("Start");
const end = document.getElementById("End");
let chad = document.createElement("div");
let rizz = document.createElement("div");
function ehel() {
  for (i = 0; i < 9; i++) {
    let pipe = document.createElement("div");
    pipe.style.backgroundImage = "url('./pipe.png')";
    pipe.style.backgroundSize = "contain";
    pipe.style.height = "200px";
    pipe.style.width = "200px";
    pipe.style.zIndex = "9";
    pipe.id = i.toString();
    soil.appendChild(pipe);
  }
}

function random() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function plant() {
  let plant = document.createElement("div");
  plant.style.backgroundImage = "url('./plant.png')";
  plant.style.backgroundSize = "cover";
  plant.style.backgroundPositionX = "center";
  plant.style.backgroundPositionY = "top";
  plant.style.height = "100px";
  plant.style.width = "180px";
  rizz.appendChild(plant);
  plant.style.zIndex = "20";
  plant.style.position = "relative";
  let too3 = document.getElementById(random());
  if (too3.hasChildNodes() == false) {
    too3.appendChild(rizz);
  }
  console.log(random());
}
function result() {
  let mole = document.createElement("div");
  mole.style.backgroundImage = "url('./mole.png')";
  mole.style.backgroundSize = "cover";
  mole.style.backgroundPosition = "center";
  mole.style.height = "150px";
  mole.style.width = "180px";
  chad.appendChild(mole);
  let too2 = document.getElementById(random());
  if (too2.hasChildNodes() == false) {
    too2.appendChild(chad);
  }
  console.log(random());
}
let scorer = document.getElementById("score");
function score() {
  ab += 10;
  scorer.innerHTML = ab;
}
function hasah() {
  soil.innerHTML = "";
  scorer.innerHTML = "0";
  alert("you looooose");
}

function a() {
  ehel();
  scorer.innerHTML = "0";
  setInterval(function () {
    rizz.style.cursor = "cell";
    // if (chad.hasChildNodes() == true) {
    //   chad.innerHTML = "";
    // }
    if (rizz.hasChildNodes() == true) {
      rizz.innerHTML = "";
    }

    rizz.onclick = hasah;

    // if (chad.hasChildNodes() == false) {
    //   return result();
    // }
    if (rizz.hasChildNodes() == false) {
      return plant();
    }
  }, 2000);
  setInterval(function () {
    chad.style.cursor = "pointer";
    if (chad.hasChildNodes() == true) {
      chad.innerHTML = "";
    }

    chad.onclick = score;

    if (chad.hasChildNodes() == false) {
      return result();
    }
  }, 2000);
}
function gg() {
  soil.innerHTML = "";
  alert("you have reached score of" + " " + ab);
  scorer.innerHTML = "0";
}
start.onclick = a;
end.onclick = gg;
