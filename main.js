const inputCantidad = document.querySelector('.input-cantidad'); 
const totalPago = document.querySelector('.total-pago'); 
const btnResumen = document.querySelector('.resumen'); 
const btnBorrar = document.querySelector('.borrar') 
const categoriaSeleccionada = document.getElementById('seleccion') 


// Agregar evento de clic al botón "Resumen"
btnResumen.addEventListener('click', () => {
    let cantidad = parseInt(inputCantidad.value);
    if (isNaN(cantidad) || cantidad <= 0) {
        totalPago.textContent = "Ingrese una cantidad válida";
        return; 
    }

    let categoria = categoriaSeleccionada.value;
    let precioBase = 200; 

    let porcentajeDescuento = 0; 

    if (categoria === 'sinDescuento') {
        precioBase
    }
    else if (categoria === 'estudiante') {
        porcentajeDescuento = 80; 
    } else if (categoria === 'trainee') {
        porcentajeDescuento = 50; 
    } else if (categoria === 'junior') {
        porcentajeDescuento = 15; 
    }

    let montoPorcentaje = (precioBase * porcentajeDescuento) / 100;
    let precioFinal = precioBase - montoPorcentaje;

    let totalPagar = cantidad * precioFinal;

    totalPago.textContent = "Total a Pagar: $" + totalPagar;
});

// Agregar evento de clic al botón "Borrar"
btnBorrar.addEventListener('click',() => {
    
    inputCantidad.value = '';
    categoriaSeleccionada.value = '1'; 
    totalPago.textContent = "Total a Pagar: $";
});