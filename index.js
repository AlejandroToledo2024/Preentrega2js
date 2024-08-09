function mueble(precio, madera, medidas, color) {
    this.precio = precio;
    this.madera = madera;
    this.medidas = medidas;
    this.color = color;
  }
  
  const jgoComedor = new mueble(12000, "MDF", "1.50 * 60", "Roble");
  const sillones = new mueble(9000, "Roble", "2.00 * 80", "blanco");
  const escritorio = new mueble(15000, "MDF Brasilero", "1.80 * 50", "negro");
  const sommier = new mueble(1200, "pino", "2.40 * 1.40", "beige");
  
  let muestraDeMuebles = [];
  muestraDeMuebles.push(jgoComedor);
  muestraDeMuebles.push(sillones);
  muestraDeMuebles.push(escritorio);
  muestraDeMuebles.push(sommier);
  
  console.log(muestraDeMuebles); // Sin corchetes vacíos
  
