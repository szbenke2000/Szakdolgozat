inventory = document.getElementById('inv');
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
    inventory.appendChild(slot);
  }
}
invLetrehozas(36);
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
    kep.style.width = '70px';
    kep.style.height = '100px';
    elsoUresSlot.appendChild(kep);
  }
}


