const inputCantidad = document.querySelector('.input-cantidad'); //cantidad entradas
const totalPago = document.querySelector('.total-pago'); //P donde da el total 
const btnResumen = document.querySelector('.resumen'); //btn para accionar la cuenta
const btnBorrar = document.querySelector('.borrar') //btn borrar las selecciones
const categoriaSeleccionada = document.getElementById('seleccion') //categoria

// Agregar evento de clic al botón "Resumen"
btnResumen.addEventListener('click', () => {
    let cantidad = parseInt(inputCantidad.value);
    if (isNaN(cantidad) || cantidad <= 0) {
        // Si la cantidad no es válida, mostrar un mensaje de error
        totalPago.textContent = "Ingrese una cantidad válida";
        return; // Salir de la función para evitar cálculos incorrectos
    }

    let categoria = categoriaSeleccionada.value;
    let precioBase = 200; // Precio base del producto

    let porcentajeDescuento = 0; // Inicializamos el porcentaje de descuento a 0

    if (categoria === '1') {
        porcentajeDescuento = 80; // Porcentaje de descuento para Estudiante
    } else if (categoria === '2') {
        porcentajeDescuento = 50; // Porcentaje de descuento para Trainee
    } else if (categoria === '3') {
        porcentajeDescuento = 15; // Porcentaje de descuento para Junior
    }

    let montoPorcentaje = (precioBase * porcentajeDescuento) / 100;
    let precioFinal = precioBase - montoPorcentaje;

    let totalPagar = cantidad * precioFinal;

    // Mostrar el total a pagar en el P donde se muestra el total
    totalPago.textContent = "Total a Pagar: $" + totalPagar;
});

// Agregar evento de clic al botón "Borrar"
btnBorrar.addEventListener('click',() => {
    // Limpiar los campos al presionar el botón "Borrar"
    inputCantidad.value = '';
    categoriaSeleccionada.value = '1'; // Reiniciar la selección a "Estudiante"
    totalPago.textContent = "Total a Pagar: $";
});