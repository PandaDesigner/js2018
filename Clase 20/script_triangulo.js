let figuraGeometrica = prompt("TRIANGULO, RECTANGULO o CIRCULO Calula el Area");
let results;
let calculoFigura = () => {
  if (
    figuraGeometrica === "Triangulo" ||
    figuraGeometrica === "triangulo" ||
    figuraGeometrica === "TRIANGULO" ||
    figuraGeometrica === "triángulo" ||
    figuraGeometrica === "Triángulo"
  ) {
    //b * h/2
    let baseTriangulo = prompt("introduzca la base del Triángulo");
    let alturaTriangulo = prompt("introduzca el Altura del Triángulo");
    results = (parseInt(baseTriangulo) * parseInt(alturaTriangulo)) / 2;
    return results;
  } else if (
    figuraGeometrica === "Rectángulo" ||
    figuraGeometrica === "rectángulo" ||
    figuraGeometrica === "rectangulo" ||
    figuraGeometrica === "Rectangulo" ||
    figuraGeometrica === "RECTANGULO" ||
    figuraGeometrica === "RECTÁNGULO"
  ) {
    //b * h
    let baseRectangulo = prompt("Introduzca la Base del RECTÁNGULO");
    let alturaRectangulo = prompt("Introduzca la Altura del RECTÁNGULO");
    results = parseInt(baseRectangulo) * parseInt(alturaRectangulo);
    return results;
  } else if (
    figuraGeometrica === "Circulo" ||
    figuraGeometrica === "circulo" ||
    figuraGeometrica === "CIRCULO"
  ) {
    let diametroCirculo = prompt("Introduzca el Diametro del circulo");
    results = Math.PI * parseInt(diametroCirculo);
    return results;
  }
};
calculoFigura(figuraGeometrica);
console.log(`El Area del ${figuraGeometrica} es igual a ${results}`);
