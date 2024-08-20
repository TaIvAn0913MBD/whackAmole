let a = document.createElement("input");
a.style.height = "35px";
a.style.background = "black";
a.style.color = "orange";
a.style.borderRadius = "6px";
a.style.border = "orange 2px solid";
a.style.width = "150px";
a.style.padding = "5px";
let b = document.createElement("input");
b.style.background = "black";
b.style.color = "orange";
b.style.borderRadius = "6px";
b.style.border = "orange 2px solid";
b.style.padding = "5px";
// let tem1 = document.createTextNode("+");
let tem2 = document.createTextNode("=");
let n = document.createElement("select");
n.style.background = "black";
n.style.color = "orange";
n.style.borderRadius = "6px";
n.style.border = "orange 2px solid";
n.style.width = "50px";
n.style.padding = "5px";
let nemeh = document.createElement("option");
nemeh.innerHTML = "+";
nemeh.value = "+";
nemeh.style.fontSize = "25px";
let hasah = document.createElement("option");
hasah.value = "-";
hasah.innerHTML = "-";
hasah.style.fontSize = "25px";
let urj = document.createElement("option");
urj.innerHTML = "*";
urj.value = "*";
urj.style.fontSize = "25px";
let huvaa = document.createElement("option");
huvaa.innerHTML = "/";
huvaa.value = "/";
huvaa.style.fontSize = "25px";
let uldegdel = document.createElement("option");
uldegdel.innerHTML = "%";
uldegdel.value = "%";
uldegdel.style.fontSize = "25px";
let c = document.createElement("button");
c.type = "submit";
c.style.width = "50px";
c.style.color = "orange";
c.style.fontSize = "25px";
c.style.background = "black";
c.style.borderRadius = "6px";
c.style.border = "orange 2px solid";

n.appendChild(nemeh);
n.appendChild(hasah);
n.appendChild(urj);
n.appendChild(huvaa);
n.appendChild(uldegdel);

c.appendChild(tem2);
let body = document.getElementsByTagName("body")[0];
body.appendChild(a);
body.appendChild(n);
body.appendChild(b);
body.appendChild(c);
let beta = document.createElement("div");
body.appendChild(beta);
body.style.paddingTop = "50vh";
body.style.paddingLeft = "38vw";
body.style.backgroundColor = "black";
function bodoh() {
  function gg() {
    while (beta.hasChildNodes()) {
      beta.removeChild(beta.firstChild);
    }
  }
  gg();
  if (n.value === "/") {
    let rizz = document.createElement("div");
    rizz.style.background = "black";
    rizz.style.color = "orange";
    rizz.style.borderRadius = "6px";
    rizz.style.border = "orange 2px solid";
    rizz.style.paddingLeft = "5px";
    rizz.style.paddingRight = "5px";
    rizz.style.height = "45px";
    rizz.style.display = "flex";
    rizz.style.justifyContent = "center";
    rizz.style.alignItems = "center";
    sigma = 0;
    console.log(a.value);
    console.log(b.value);
    sigma += Number(a.value) / Number(b.value);
    rizz.textContent = sigma;
    beta.appendChild(rizz);
    console.log(sigma);
  }
  if (n.value === "*") {
    let rizz = document.createElement("div");
    rizz.style.background = "black";
    rizz.style.color = "orange";
    rizz.style.borderRadius = "6px";
    rizz.style.border = "orange 2px solid";
    rizz.style.paddingLeft = "5px";
    rizz.style.paddingRight = "5px";
    rizz.style.height = "45px";
    rizz.style.display = "flex";
    rizz.style.justifyContent = "center";
    rizz.style.alignItems = "center";

    sigma = 0;
    console.log(a.value);
    console.log(b.value);
    sigma += Number(a.value) * Number(b.value);
    rizz.textContent = sigma;
    beta.appendChild(rizz);
    console.log(sigma);
  }
  if (n.value === "%") {
    let rizz = document.createElement("div");
    rizz.style.background = "black";
    rizz.style.color = "orange";
    rizz.style.borderRadius = "6px";
    rizz.style.border = "orange 2px solid";
    rizz.style.paddingLeft = "5px";
    rizz.style.paddingRight = "5px";
    rizz.style.height = "45px";
    rizz.style.display = "flex";
    rizz.style.justifyContent = "center";
    rizz.style.alignItems = "center";
    sigma = 0;
    console.log(a.value);
    console.log(b.value);
    sigma += Number(a.value) % Number(b.value);
    rizz.textContent = sigma;
    beta.appendChild(rizz);
    console.log(sigma);
  }
  if (n.value === "+") {
    let rizz = document.createElement("div");
    rizz.style.background = "black";
    rizz.style.color = "orange";
    rizz.style.borderRadius = "6px";
    rizz.style.border = "orange 2px solid";
    rizz.style.paddingLeft = "5px";
    rizz.style.paddingRight = "5px";
    rizz.style.height = "45px";
    rizz.style.display = "flex";
    rizz.style.justifyContent = "center";
    rizz.style.alignItems = "center";
    sigma = 0;
    console.log(a.value);
    console.log(b.value);
    sigma += Number(a.value) + Number(b.value);
    rizz.textContent = sigma;
    beta.appendChild(rizz);
    console.log(sigma);
  }
  if (n.value === "-") {
    let rizz = document.createElement("div");
    rizz.style.background = "black";
    rizz.style.color = "orange";
    rizz.style.borderRadius = "6px";
    rizz.style.border = "orange 2px solid";
    rizz.style.paddingLeft = "5px";
    rizz.style.paddingRight = "5px";
    rizz.style.height = "45px";
    rizz.style.display = "flex";
    rizz.style.justifyContent = "center";
    rizz.style.alignItems = "center";
    sigma = 0;
    console.log(a.value);
    console.log(b.value);
    sigma += Number(a.value) - Number(b.value);
    rizz.textContent = sigma;
    beta.appendChild(rizz);
    console.log(sigma);
  }
}
body.style.display = "flex";
body.style.gap = "5px";
c.onclick = bodoh;

// let body = document.getElementsByTagName("body")[0];
// let hariu = document.createElement("div");
// hariu.style.marginBottom = "5px";
// hariu.style.height = "50px";
// hariu.style.width = "160px";
// hariu.style.border = "black 1px solid";
// hariu.style.borderRadius = "6px";
// body.appendChild(hariu);
// let a = document.createElement("button");
// let aa = document.createTextNode("1");
// a.style.height = "50px";
// a.style.width = "50px";

// a.appendChild(aa);
// let b = document.createElement("button");
// let bb = document.createTextNode("2");
// b.style.height = "50px";
// b.style.width = "50px";

// b.appendChild(bb);
// let c = document.createElement("button");
// let cc = document.createTextNode("3");
// c.style.height = "50px";
// c.style.width = "50px";

// c.appendChild(cc);
// let d = document.createElement("button");
// let dd = document.createTextNode("4");
// d.style.height = "50px";
// d.style.width = "50px";

// d.appendChild(dd);
// let e = document.createElement("button");
// let ee = document.createTextNode("5");
// e.style.height = "50px";
// e.style.width = "50px";

// e.appendChild(ee);
// let f = document.createElement("button");
// let ff = document.createTextNode("6");
// f.style.height = "50px";
// f.style.width = "50px";

// f.appendChild(ff);
// let g = document.createElement("button");
// let gg = document.createTextNode("7");
// g.style.height = "50px";
// g.style.width = "50px";

// g.appendChild(gg);
// let h = document.createElement("button");
// let hh = document.createTextNode("8");
// h.style.height = "50px";
// h.style.width = "50px";

// h.appendChild(hh);
// let i = document.createElement("button");
// let ii = document.createTextNode("9");
// i.style.height = "50px";
// i.style.width = "50px";

// i.appendChild(ii);
// let j = document.createElement("button");
// let jj = document.createTextNode("0");
// j.style.height = "50px";
// j.style.width = "50px";

// j.appendChild(jj);
// let u = document.createElement("button");
// let uu = document.createTextNode("+");
// u.style.height = "50px";
// u.style.width = "50px";

// u.appendChild(uu);
// let k = document.createElement("button");
// let kk = document.createTextNode("-");
// k.style.height = "50px";
// k.style.width = "50px";

// k.appendChild(kk);
// let n = document.createElement("button");
// let nn = document.createTextNode("/");
// n.style.height = "50px";
// n.style.width = "50px";

// n.appendChild(nn);
// let m = document.createElement("button");
// let mm = document.createTextNode("*");
// m.style.height = "50px";
// m.style.width = "50px";

// m.appendChild(mm);
// let p = document.createElement("button");
// let pp = document.createTextNode("=");
// p.style.height = "50px";
// p.style.width = "50px";

// p.appendChild(pp);
// let div1 = document.createElement("div");
// div1.style.width = "160px";
// div1.style.display = "flex";
// div1.style.flexWrap = "wrap";
// div1.style.gap = "5px";
// body.appendChild(div1);
// div1.appendChild(a);
// div1.appendChild(b);
// div1.appendChild(c);
// div1.appendChild(d);
// div1.appendChild(e);
// div1.appendChild(f);
// div1.appendChild(g);
// div1.appendChild(h);
// div1.appendChild(i);
// div1.appendChild(j);

// div1.appendChild(u);
// div1.appendChild(k);
// div1.appendChild(n);

// div1.appendChild(m);
// div1.appendChild(p);

// function nemeh() {

// }
