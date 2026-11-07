let inventory;
inventory = document.getElementById('inv');
invLetrehozas(36);


function invLetrehozas(invSlotDbSzam) {
  for (let i = 0; i < invSlotDbSzam; i++) {
    const slot = document.createElement("button");
    slot.id = "slot"+(i+1);
    slot.className = "slot";
    slot.addEventListener("click", function(){
      const slotKep = slot.querySelector("img");
      if (kivalasztottHely && !kivalasztottHely.querySelector('img')) {
        kivalasztottHely.innerHTML = "";
        kivalasztottHely.innerHTML =
          `
        <img style="height: ${slotKep.style.height}; width: ${slotKep.style.width}" src="${slotKep.src}" alt="">
        `;

        rekeszbeTermeles();
        inventory.close();
      }
    });
    inventory.appendChild(slot);
  }
}

function targyHozzaadas(ital){
  let elsoUresSlot = null;
  const slotok = document.querySelectorAll('#inv .slot');
  for (let i = 0; i < slotok.length; i++) {
    if (slotok[i].children.length === 0) {
      elsoUresSlot = slotok[i];
      break;
    }
  }
  if (elsoUresSlot) {
    elsoUresSlot.dataset.nev = ital.nev;
    elsoUresSlot.dataset.csillag = ital.csillag;
    elsoUresSlot.dataset.bevetel = ital.bevetel;
    const kep = document.createElement('img');
    kep.src = ital.src;
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







