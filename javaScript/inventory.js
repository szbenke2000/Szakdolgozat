let inventory;
inventory = document.getElementById('inv');
document.addEventListener("DOMContentLoaded", () => {
  inventory = document.getElementById('inv');
  // INVENTORY NAGYSÁG MEGADÁSA
  // -----------------!!!!!!!!!!!!!------------------
  invLetrehozas(36);
  // -----------------!!!!!!!!!!!!!------------------
});
let kivalasztottHely = null;
function helyKivalasztva(helyId) {
  inventory.showModal();
  kivalasztottHely = helyId;
}
function invLetrehozas(invSlotDbSzam) {
  let id = 0
  for (let i = 0; i < invSlotDbSzam; i++) {
    const slot = document.createElement("button");
    id++;
    slot.id = "id"+id;
    slot.className = "slot";
    slot.addEventListener("click", function() {
        kivalasztottHely.textContent = slot.id;
        inventory.close();
    })
    inventory.appendChild(slot);
  }
}



let helyGomb1= document.getElementById('hely1');
let helyGomb2= document.getElementById('hely2');
let helyGomb3= document.getElementById('hely3');

helyGomb1.addEventListener('click', function (){
  helyKivalasztva(helyGomb1);
})
helyGomb2.addEventListener('click', function (){
  helyKivalasztva(helyGomb2);
})
helyGomb3.addEventListener('click', function (){
  helyKivalasztva(helyGomb3);
})
//INVENTORY NAGYSÁG MEGADÁSA
//-----------------!!!!!!!!!!!!!------------------
//-----------------!!!!!!!!!!!!!------------------
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




