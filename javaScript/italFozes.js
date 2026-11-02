const osszesItal = [];

const gagyiHordoItalok = [
  {nev: "kobambi", esely: 60, bevetel: 1, csillag: 0, src: "kepek/kobambi.png"},
  {nev: "dreher", esely: 30, bevetel: 3, csillag: 0, src: "kepek/dreher.png"},
  {nev: "pecsisor", esely: 10, bevetel: 10, csillag: 0, src: "kepek/pecsisor.png"},
]
const csillagok ={
  1: 0.65,
  2: 0.9,
  3: 1,
  4: 1.2,
  5: 1.45,
}

function italPorgetes() {
  const random = Math.random();
  let kapottItal;
  if (random < 0.6) {
    kapottItal = gagyiHordoItalok[0];
  }
  if (random <= 0.9 && random >= 0.6) {
    kapottItal = gagyiHordoItalok[1];
  }
  if (random > 0.9) {
    kapottItal = gagyiHordoItalok[2];
  }
  const ujCsillag = Math.floor(Math.random() * 5) + 1;
  const szorzo = csillagok[ujCsillag];
  const ujBevetel = (kapottItal.bevetel*szorzo).toFixed(2);
  const kinyitottSor = {
    nev: kapottItal.nev,
    bevetel: ujBevetel,
    csillag: ujCsillag,
    src: kapottItal.src
  }
  osszesItal.unshift(kinyitottSor);
  targyHozzaadas(kinyitottSor);
  console.log("nev: " + kinyitottSor.nev + "\ncsillag: " + kinyitottSor.csillag)
}


