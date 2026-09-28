
let szamlalo = 0;
let penzecske = 30;

const sorszamid = document.getElementById('sorszam');
const penz = document.getElementById('penz');
const eladasGomb = document.getElementById('eladas');

const vasarlas1gomb = document.getElementById('vasarlas1');
const vasarlas2gomb = document.getElementById('vasarlas2');
const vasarlas3gomb = document.getElementById('vasarlas3');

const erlelesGomb1 = document.getElementById('erlelesGomb1');
const erlelesGomb2 = document.getElementById('erlelesGomb2');
const erlelesGomb3 = document.getElementById('erlelesGomb3');

const visszaszamlalo1 = document.getElementById('visszaszamlalo1');
const visszaszamlalo2 = document.getElementById('visszaszamlalo2');
const visszaszamlalo3 = document.getElementById('visszaszamlalo3');



const dialog = document.getElementById('dialog');

penz.textContent = penzecske;
erlelesGomb1.style.display = 'none';
visszaszamlalo1.style.display = 'none';
erlelesGomb2.style.display = 'none';
visszaszamlalo2.style.display = 'none';
erlelesGomb3.style.display = 'none';
visszaszamlalo3.style.display = 'none';

let kivalasztottAr = 0;
let hordoVasarlasGomb = "";
let melyikHordoGomb = "";
function HordoVasarlas(ar, hordoVasarlasGombId, melyikHordoGombId) {
  kivalasztottAr = ar;
  hordoVasarlasGomb = hordoVasarlasGombId
  melyikHordoGomb = melyikHordoGombId
    const dollar = document.getElementById('$$$');
    dialog.showModal();
    dollar.textContent = ar + "$";
}
const megerositoGomb = document.getElementById('megerositoGomb');
megerositoGomb.addEventListener('click', function(){
  if (penzecske>=kivalasztottAr) {
    penzecske-=kivalasztottAr;
    penz.textContent = penzecske;
    const gombElem = document.getElementById(hordoVasarlasGomb);
    const hordoElem = document.getElementById(melyikHordoGomb);
    hordoElem.style.display = 'inline-block';
    gombElem.style.display = 'none';
    dialog.close();
  } else {
    alert("NINCS PENZ, MAKE MORE!!!")
    dialog.close();
  }
});
vasarlas1gomb.addEventListener('click', function(){
  HordoVasarlas(10, "vasarlas1", "erlelesGomb1", "visszaszamlalo1" )
})
vasarlas2gomb.addEventListener('click', function(){
  HordoVasarlas(20, "vasarlas2", "erlelesGomb2", "visszaszamlalo2")
})
vasarlas3gomb.addEventListener('click', function(){
  HordoVasarlas(100, "vasarlas3", "erlelesGomb3", "visszaszamlalo3")
})

function Visszaszamlalas(MennyiIdeig, visszaSzamlaloId, erlelesGombId) {
  const visszaszamlalo = document.getElementById(visszaSzamlaloId);
  const erlelesGomb = document.getElementById(erlelesGombId);
  visszaszamlalo.style.display = 'inline-block';
  erlelesGomb.style.display = 'none';
  erlelesGomb.disabled = true
  let hatramaradtIdo = "0" + MennyiIdeig;
  const visszaszamlaloInternal = setInterval(function() {
    hatramaradtIdo--;
    visszaszamlalo.textContent = idoRendezese(hatramaradtIdo);
    if (hatramaradtIdo <= -1) {
      clearInterval(visszaszamlaloInternal)
    }
  }, 1000);
  setTimeout(function () {
    visszaszamlalo.textContent = MennyiIdeig;
    erlelesGomb.style.display = 'inline-block';
    visszaszamlalo.style.display = 'none';
    erlelesGomb.disabled = false;
    targyHozzaadas("kepek/kobambi.png")
    sorszamid.textContent = szamlalo;
  }, (MennyiIdeig*1000)+1000);
}

erlelesGomb1.addEventListener('click', function (){
  Visszaszamlalas(3, "visszaszamlalo1", "erlelesGomb1");
});
erlelesGomb2.addEventListener('click', function() {
  Visszaszamlalas(2, "visszaszamlalo2","erlelesGomb2");
});
erlelesGomb3.addEventListener('click', function() {
  Visszaszamlalas(1, "visszaszamlalo3", "erlelesGomb3");
});

eladasGomb.addEventListener('click', function (){
  penzecske += szamlalo*2;
  szamlalo = 0;
  sorszamid.textContent = szamlalo;
  penz.textContent = penzecske;
})
let helyGomb1= document.getElementById('hely1');
let helyGomb2= document.getElementById('hely2');
let helyGomb3= document.getElementById('hely3');
/*
function helyKivalasztva(helyId) {
  const helygomb = document.getElementById(helyId);
  if (szamlalo > 0 && helygomb.textContent !== "sör") {
    szamlalo--;
    sorszamid.textContent = szamlalo;
    helygomb.textContent = "sör";
  }
  if (helygomb.textContent === "sör") {
    console.log("már van sör");
  }
}
*/

helyGomb1.addEventListener('click', function (){
  helyKivalasztva("hely1");
})
helyGomb2.addEventListener('click', function (){
  helyKivalasztva("hely2")
})
helyGomb3.addEventListener('click', function (){
  helyKivalasztva("hely3")
})
invSlotButton1= document.getElementById('invSlotButton1');
invSlotButton2= document.getElementById('invSlotButton2');
invSlotButton3= document.getElementById('invSlotButton3');
/*
function targyKivalasztasa(invId) {
  invId = document.getElementById(invId);
  const hely = document.getElementById(kivalasztottHely);
  const kepHelyen = document.createElement("img")
  kepHelyen.src = invId.src;
  kepHelyen.alt = invId.alt;
  kepHelyen.style.width = invId.style.width;
  kepHelyen.style.height = invId.style.height;
  hely.textContent = "";
  hely.appendChild(kepHelyen);
  inventory.classList.add('rejtett');
}
*/





