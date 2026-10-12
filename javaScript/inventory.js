let inventory;
inventory = document.getElementById('inv');
invLetrehozas(36);
targyHozzaadas("kepek/kobambi.png")

let kivalasztottHely = null;
function helyKivalasztva(helyId, helySzamlaloId) {
  kivalasztottHely = helyId;
  if (kivalasztottHely.querySelector('img')) {
    kivalasztottHely.textContent = 'ÜRES';
  } else {
    inventory.showModal();
  }
}
function invLetrehozas(invSlotDbSzam) {
  let id = 0
  for (let i = 0; i < invSlotDbSzam; i++) {
    const slot = document.createElement("button");
    id++;
    slot.id = "id"+id;
    slot.className = "slot";
    slot.addEventListener("click", function() {
      const slotKep = slot.querySelector("img");
      if (slotKep && kivalasztottHely && !kivalasztottHely.querySelector('img')) {
        kivalasztottHely.textContent = '';
        const helyKep = document.createElement("img");
        helyKep.src = slotKep.src;
        helyKep.style.width = slotKep.style.width;
        helyKep.style.height = slotKep.style.height;
        kivalasztottHely.appendChild(helyKep);
        inventory.close();
      }
    })
    inventory.appendChild(slot);
  }
}

szam = document.getElementById('szam');
function penzTermeles(hely, begyujtGombId) {
  let begyujtendoPenz = 0;
  const szamlaloInternal = setInterval(function() {
    begyujtendoPenz++;
    hely.textContent = String(begyujtendoPenz);
  },1000)
}
penzTermeles(szam)


let helyGomb1= document.getElementById('hely1');
let helyGomb2= document.getElementById('hely2');
let helyGomb3= document.getElementById('hely3');

let helyGombSzamlalo1= document.getElementById('helySzamlalo1');
let helyGombSzamlalo2= document.getElementById('helySzamlalo2');
let helyGombSzamlalo3= document.getElementById('helySzamlalo3');



helyGomb1.addEventListener('click', function (){
  helyKivalasztva(helyGomb1, helyGombSzamlalo1);
})
helyGomb2.addEventListener('click', function (){
  helyKivalasztva(helyGomb2, helyGombSzamlalo2);
})
helyGomb3.addEventListener('click', function (){
  helyKivalasztva(helyGomb3, helyGombSzamlalo3);
})

function randomKivalasztas(){
  let randomSzam = Math.random();
  if (randomSzam < 0.5) {
    return "kepek/kobambi.png"
  }
  else if (randomSzam > 0.5) {
    return "kepek/dreher.png"
  }
}

function targyHozzaadas(kepSrc){
  let elsoUresSlot = null;
  const slotok = document.querySelectorAll('#inv .slot');
  for (let i = 0; i < slotok.length; i++) {
    if (slotok[i].children.length === 0) {
      elsoUresSlot = slotok[i];
      break;
    }
  }
  if (elsoUresSlot) {
    const kep = document.createElement('img');
    kep.src = kepSrc;
    kep.style.width = '45px';
    kep.style.height = '90px';
    elsoUresSlot.appendChild(kep);
  } else {
    alert("NINCS AZ INVENTORYBAN HELY")
  }
}
bezaroGomb = document.getElementById('bezaroGomb');
bezaroGomb.addEventListener('click', function (){
  inventory.close();
})

ingyenPenzButton = document.getElementById('ingyenpenz');
ingyenPenzButton.addEventListener('click', function (){
  penzhozzaadas(20);
})
penzLevonasButton = document.getElementById('penzlevonas');
penzLevonasButton.addEventListener('click', function (){
  penzhozzaadas(-20);
})






