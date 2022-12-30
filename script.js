// funcion para calcular el descuento al precio de un producto

function aplicarDescuento(montoCompra, tipoProducto) {
    montoCompra = prompt("diga el monto: ");
    tipoProducto = prompt("diga tipo producto: ");
    let descuento = 0;
  
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
    console.log(aplicarDescuento());
  


