const helyekgrid = document.querySelector(".helyek-grid");
let italDb = 0;
let kivalasztottHely = null;
let kivalasztottRekesz = null;
let kivalasztottFozes = null;
function helyekKeszites() {
  for (let i = 0; i < 5; i++) {
    const oszlop = document.createElement("div");
    oszlop.className = "oszlop";
    const hely = document.createElement("div");
    const fozes = document.createElement("div");
    const rekeszEsGomb = document.createElement("div");
    const rekesz = document.createElement("div");
    const eladasGomb = document.createElement("button");
    hely.className = "hely";
    hely.id = "hely" + (i+1);
    fozes.className = "fozes";
    rekesz.className = "rekesz";
    eladasGomb.className = "eladasGomb";
    rekeszEsGomb.className = "rekeszEsGomb";
    oszlop.appendChild(hely);
    oszlop.appendChild(fozes);
    oszlop.appendChild(rekesz);
    oszlop.appendChild(rekeszEsGomb);
    rekeszEsGomb.appendChild(rekesz);
    rekeszEsGomb.appendChild(eladasGomb);

    helyekgrid.appendChild(oszlop)
    hely.addEventListener('click', function (e) {
      if (hely.querySelector("img")) {
        hely.innerHTML = ``
        fozes.innerHTML = ``
        rekesz.innerHTML = ``
      }
      kivalasztottHely = hely;
      kivalasztottFozes = fozes;
      kivalasztottRekesz = rekesz;
      inventoryModal.showModal();
    });
    eladasGomb.addEventListener('click', function (e) {
      if (italDb >= 10) {
        penzhozzaadas(italDb)
        italDb = 0;
        kivalasztottRekesz.innerHTML = `
            <div>SÖR: ${italDb}</div>
        `;
      }
    })
  }
}
function rekeszbeTermeles() {

  setInterval(function () {
    if (italDb < 10) {
      italDb++;
      kivalasztottRekesz.innerHTML = `
      <div>SÖR: ${italDb}</div>
      `;
    }
    if (italDb === 10) {
      kivalasztottRekesz.innerHTML = `
      <div>SÖR: ${italDb}</div>
      <div>KÉSZ A REKESZ</div>
      `;
      }
  },500)
}

helyekKeszites()

