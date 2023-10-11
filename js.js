let m = document.getElementById("m"),
  f = document.getElementById("f"),
  c = document.getElementById("c"),
  w = document.getElementById("w");

  window.onload = function() {
    m.focus();
  }
  f.onkeyup = function () {
    m.value = f.value * 4200.83;
    c.value = f.value * 24;
  };
  m.onkeyup = function () {
    f.value = m.value / 4200.83;
    c.value = ((f.value - Math.trunc(f.value)) * (4200.83)) / 175.03;
    f.value = Math.trunc(f.value);
    w.value = ((c.value - Math.trunc(c.value)) * (175.03)) / 7.29;
    c.value = Math.trunc(c.value);
    w.value =  parseFloat(w.value).toFixed(2);
  };
  c.onkeyup = function () {
    m.value = c.value * 175.03;
    f.value = c.value / 24 ;
    w.value = c.value * (175.03 / 7.29);
    w.value =  parseFloat(w.value).toFixed(2);
  };
  