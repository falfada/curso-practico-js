// const precioOriginal = 100;
// const descuento = 15;

const coupons = [
  {
    name: "Newbie",
    discount: 10,
  },
  {
    name: "Old customer",
    discount: 20,
  },
  {
    name: "SALE",
    discount: 50,
  },
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function discountPrice() {
  const inputPriceValue = document.getElementById("inputPrice").value;
  const inputDiscountValue = document.getElementById("inputDiscount").value;

  const isCouponValueValid = function (coupon) {
    return coupon.name === inputDiscountValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  const resultPrice = document.getElementById("resultPrice");

  if (!userCoupon) {
    resultPrice.innerText = "El cupón " + inputDiscountValue + " no es válido";
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(
      inputPriceValue,
      descuento
    );
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });
