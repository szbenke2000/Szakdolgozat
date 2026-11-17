const helyekgrid = document.querySelector(".helyek-grid");

let kivalasztottHely = null;
let kivalasztottRekesz = null;
let kivalasztottFozes = null;
let kivalasztottTermeles = null;
function helyekKeszites(rekeszNagysag) {
  for (let i = 0; i < 5; i++) {
    let idozito = 0;
    let italDb = 0;
    let progressBarSzamlalo = 0;
    const oszlop = document.createElement("div");
    oszlop.className = "oszlop";
    const hely = document.createElement("div");
    const fozes = document.createElement("div");
    const rekeszEsGomb = document.createElement("div");
    const rekesz = document.createElement("div");
    const eladasGomb = document.createElement("button");
    const progressBar = document.createElement("div");
    const progressBarBelso = document.createElement("div");
    const vasarlasGomb = document.createElement("button");
    vasarlasGomb.className = "oszlopVasarlasGomb";
    oszlop.appendChild(vasarlasGomb);
    vasarlasGomb.addEventListener("click", () => {
      penzLevonas(40)
      vasarlasGomb.style.display = "none";
      fozes.className = "fozes";
      rekesz.className = "rekesz";
      eladasGomb.className = "eladasGomb";
      rekeszEsGomb.className = "rekeszEsGomb";
      progressBar.className = "progressBar"
      progressBarBelso.className = "progressBarBelso";
      eladasGomb.innerHTML = "BOOST";
      oszlop.appendChild(hely);
      oszlop.appendChild(fozes);
      oszlop.appendChild(progressBar);
      progressBar.appendChild(progressBarBelso);
      oszlop.appendChild(rekesz);
      oszlop.appendChild(rekeszEsGomb);
      rekeszEsGomb.appendChild(rekesz);
      rekeszEsGomb.appendChild(eladasGomb);
    })
    hely.className = "hely";
    hely.id = "hely" + (i + 1);



    helyekgrid.appendChild(oszlop)
    hely.addEventListener('click', function () {
      if (hely.querySelector("img")) {
        hely.innerHTML = ``
        fozes.innerHTML = ``
        rekesz.innerHTML = ``
        italDb = 0;
        progressBarSzamlalo = 0
        progressBarBelso.style.width = "0%";
        clearInterval(idozito);
      }
      kivalasztottHely = hely;
      kivalasztottFozes = fozes;
      kivalasztottRekesz = rekesz;
      kivalasztottTermeles = function () {
        clearInterval(idozito);
        idozito = setInterval(function () {
          if (italDb < rekeszNagysag && hely.querySelector("img")) {
            progressBarSzamlalo += 5;
            progressBarBelso.style.width = progressBarSzamlalo + "%";
            if (progressBarSzamlalo >= 100) {
              progressBarSzamlalo = 0;
              progressBarBelso.style.width = "0%";
              italDb++;
              rekesz.innerHTML = `<div>${italDb}</div>`;
              if (italDb >= rekeszNagysag) {
                rekesz.style.backgroundColor = "green"
              }
            }
          }
        }, 50)
      }
      inventoryModal.showModal();
    });
    eladasGomb.addEventListener('click', function () {
      if (italDb >= rekeszNagysag) {
        penzhozzaadas(italDb)
        italDb = 0;
        rekesz.style.backgroundColor = "crimson"
        rekesz.innerHTML = `
            <div>${italDb}</div>
        `;

      }
    })

  }
}
function betoltoCsik() {

}
helyekKeszites(3)

