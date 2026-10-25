let inventory;
inventory = document.getElementById('inv');
invLetrehozas(36);
targyHozzaadas("kepek/kobambi.png")


function invLetrehozas(invSlotDbSzam) {
  let id = 0
  for (let i = 0; i < invSlotDbSzam; i++) {
    const slot = document.createElement("button");
    id++;
    slot.id = "id"+id;
    slot.className = "slot";
    slot.addEventListener("click", function() {
      const slotKep = slot.querySelector("img");
      if (slotKep && !kivalasztottHely.querySelector('img')) {
        kivalasztottHely.textContent = '';
        const helyKep = document.createElement("img");
        helyKep.src = slotKep.src;
        helyKep.style.width = slotKep.style.width;
        helyKep.style.height = slotKep.style.height;
        kivalasztottHely.appendChild(helyKep);
        gyartas(kivalasztottHely)
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







