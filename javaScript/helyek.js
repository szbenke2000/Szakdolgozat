const helyekgrid = document.querySelector(".helyek-grid");
helyekKeszites()
let kivalasztottHely = null;
let kivalasztottHelySzamlalo = null;
function helyekKeszites() {
  for (let i = 0; i < 9; i++) {
    const hely = document.createElement("button")
    hely.classList.add("hely");
    hely.id = "hely" + i;
    hely.addEventListener("click", function() {
      if (hely.querySelector('img')) {
        hely.textContent = 'ÜRES';
      } else {
        kivalasztottHely = hely;
        inventory.showModal();
      }
    })
    helyekgrid.appendChild(hely);
  }
}

