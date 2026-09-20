
let szamlalo = 0;
let penzecske = 200;

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

const vasarlasMegerosites = document.getElementById('vasarlasMegerosites');
const dialog = document.getElementById('dialog');
const dollar = document.getElementById('$$$');

penz.textContent = penzecske;
erlelesGomb1.style.display = 'none';
visszaszamlalo1.style.display = 'none';
erlelesGomb2.style.display = 'none';
visszaszamlalo2.style.display = 'none';
erlelesGomb3.style.display = 'none';
visszaszamlalo3.style.display = 'none';

function HordoVasarlas(ar, hordoVasarlasGombId, melyikHordoGombId,visszaszamlaloId, kovetkezoHordoId ) {
    const hordoVasarlasGomb = document.getElementById(hordoVasarlasGombId);
    const visszaszamlalo = document.getElementById(visszaszamlaloId);
    const melyikHordoGomb = document.getElementById(melyikHordoGombId);
    const kovetkezoHordo = document.getElementById(kovetkezoHordoId);
    const dollar = document.getElementById('$$$');
    dollar.textContent = ar + "$";
    console.log(ar + "$");
    if (penzecske>=ar) {
      penzecske-=ar;
      penz.textContent = penzecske;
      melyikHordoGomb.style.display = 'inline-block';
      hordoVasarlasGomb.style.display = 'none';
      if (kovetkezoHordo) {
        kovetkezoHordo.classList.remove('rejtett');
      }
    }
}
function dialogElokeszites(ar){
  dollar.textContent = ar + "$";
}
vasarlas1gomb.addEventListener('click', function(){
    dialogElokeszites(10)
    dialog.showModal();
})
vasarlas2gomb.addEventListener('click', function(){
  HordoVasarlas(20, "vasarlas2", "erlelesGomb2", "visszaszamlalo2", "hordocella3")
})
vasarlas3gomb.addEventListener('click', function(){
  HordoVasarlas(100, "vasarlas3", "erlelesGomb3", "visszaszamlalo3")
})

vasarlasMegerosites.addEventListener('click', function(){
  HordoVasarlas(10, "vasarlas1","erlelesGomb1", "visszaszamlalo1", "hordocella2")
  dialog.close();
})
function idoRendezese(mp) {
  let ora =  Math.floor((mp/60)/60);
  let perc = Math.floor((mp/60)-ora*60);
  let masodPerc = mp%60
  if (perc < 10) {
    perc = "0" + perc;
  }
  if (masodPerc < 10) {
    masodPerc = "0" + masodPerc;
  }
  if (mp < 60) {
    return ""+masodPerc;
  } else if (mp >= 60 && mp < 3600) {
    return perc + ":" + masodPerc;
  } else {
    return ora + ":" + perc + ":" + masodPerc;
  }

}
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
    szamlalo+=5;
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
const inventory = document.getElementById('inv');
let kivalasztottHely = null;
function helyKivalasztva(helyId) {
  inventory.classList.remove('rejtett');
  kivalasztottHely = helyId;
}
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

function invLetrehozas(invSlotDbSzam) {
  let id = 0
  const inventory = document.getElementById('inv');
  for (let i = 0; i < invSlotDbSzam; i++) {
    const slot = document.createElement("button");
    id++;
    slot.id = "id"+id;
    slot.className = "slot";
    inventory.appendChild(slot);
  }
}
function targyElhelyezes(){

}
invLetrehozas(36);
invSlotButton1.addEventListener('click', function (){
  targyKivalasztasa("invId1")
})
invSlotButton2.addEventListener('click', function (){
  targyKivalasztasa("invId2")
})
invSlotButton3.addEventListener('click', function (){
  targyKivalasztasa("invId3")
})

