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
