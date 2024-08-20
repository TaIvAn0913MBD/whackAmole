// // // document.getElementById("MGL").innerHTML = "Mongolia";
// // // document.getElementsByClassName("USA")[0].innerHTML = "America";
// // // document.getElementsByTagName("div")[2].innerHTML = "Germany";
// // let a = document.createElement("h1");
// // let text = document.createTextNode("Mongolia");
// // a.appendChild(text);
// // let body = document.getElementsByTagName("body")[0];
// // body.appendChild(a);
// // let b = document.createElement("img");

// // b.src =
// //   "https://static.magflags.net/media/catalog/product/cache/4404eeec96f55444b91499f102c4decc/M/N/MN-1x1.5.png";
// // body.appendChild(b);

// let d = document.createElement("div");
// body.appendChild(d);
// d.style.display = "flex";
// d.style.height = "100vh";
// d.style.width = "98vw";
// d.style.justifyContent = "center";
// d.style.alignItems = "center";
// d.style.flexWrap = "wrap";
// d.style.gap = "20px";
// let l = document.createElement("button");
// l.style.width = "50px";
// l.style.height = "50px";
// l.style.backgroundColor = "orange";
// body.appendChild(l);
// let z = Number(prompt("toogoog bich"));
// for (i = 0; i < z; i++) {
//   let c = document.createElement("div");
//   d.appendChild(c);
//   c.style.width = "50px";
//   c.style.height = "50px";

//   function randomcolor() {
//     return Math.floor(Math.random() * 255);
//   }
//   l.addEventListener("click", () => {
//     c.style.backgroundColor =
//       "rgba(" + randomcolor() + "," + randomcolor() + "," + randomcolor() + ")";
//     c.style.border = "1px solid black";
//   });
// }

let sigma = prompt("ugee bich");
let ugee = sigma;
if (sigma.length <= 0) {
  alert("ugee bicheech");
} else {
  let body = document.getElementsByTagName("body")[0];
  let rizz = document.createElement("div");
  body.appendChild(rizz);

  function sort() {
    var l = document.createElement("p");

    l.style.backgroundColor = "black";
    l.style.color = "yellow";
    l.style.width = "min-content";
    l.style.padding = "5px";
    l.style.borderRadius = "6px";
    l.style.fontSize = "24px";
    rizz.appendChild(l);
    l.textContent = ugee;
  }
  function gg() {
    while (rizz.hasChildNodes()) {
      rizz.removeChild(rizz.firstChild);
    }
  }

  let button = document.getElementsByTagName("button")[0];
  button.onclick = sort;
  let clear = document.getElementsByTagName("button")[1];
  clear.onclick = gg;
}

// const input = document.getElementsByTagName("input")[0];
// function skib() {
//   console.log(input.value);
// }
// input.onchange = skib;
