// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function discountPrice(){
    const inputPriceValue = document.getElementById("inputPrice").value;
    const inputDiscountValue = document.getElementById("inputDiscount").value;

    const precioConDescuento = calcularPrecioConDescuento(inputPriceValue, inputDiscountValue);
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });
