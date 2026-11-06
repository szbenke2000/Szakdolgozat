const helyekgrid = document.querySelector(".helyek-grid");

let kivalasztottHely = null;
let kivalasztottHelySzamlalo = null;
function helyekKeszites() {
  for (let i = 0; i < 5; i++) {
    const oszlop = document.createElement("div");
    oszlop.className = "oszlop";
    const hely = document.createElement("div");
    const fozes = document.createElement("div");
    const rekesz = document.createElement("div");
    hely.className = "hely";
    hely.id = "hely" + (i+1);
    fozes.className = "fozes";
    rekesz.className = "rekesz";
    oszlop.appendChild(hely);
    oszlop.appendChild(fozes);
    oszlop.appendChild(rekesz);

    helyekgrid.appendChild(oszlop)
    hely.addEventListener('click', function (e) {
      kivalasztottHely = hely;
      inventoryModal.showModal();
    });
  }
}
helyekKeszites()

