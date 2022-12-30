// funcion para calcular el descuento al precio de un producto
let montoCompra = Number(prompt("diga el monto: "));
let tipoProducto = prompt("diga tipo producto: ");
function aplicarDescuento(montoCompra, tipoProducto) {

while(montoCompra<0){
    alert("Agregar un monto positivo")
}

let descuento = 0;
if(montoCompra){
  if (montoCompra > 20 && montoCompra < 40) {
    descuento = montoCompra * 0.1;
    alert("Tu descuento es : " +descuento + " y tobtuviste un cupon del 20% en tu proxima compra "
    );
  } else if (montoCompra > 40 && montoCompra < 60) {
    descuento = montoCompra * 0.15;
    alert("Tu descuento es : " + descuento + " y tobtuviste un cupon del 30% en tu proxima compra "
    );
  } else if (tipoProducto === "electronico") {
    descuento += montoCompra * 0.05;
    alert("Tu descuento es : " +descuento + " y tobtuviste un cupon del 30% en tu proxima compra "
    );
  } else if (tipoProducto === "electrodomestico") {
    descuento += montoCompra * 0.1;
    alert( "Tu descuento es : " +descuento + " y tobtuviste un cupon del 30% en tu proxima compra "
    );

  } else {
    descuento = 0;
    alert("Sin descuento");
  }

  return descuento;
  
}
else{
alert("Esto no es un numero");
}
}
console.log(aplicarDescuento(montoCompra, tipoProducto));






