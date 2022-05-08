//Calcular costo total de vacaciones en cuotas


//Se piden datos al usuario para conocer el precio total
const welcome = () => {
    const destiny = prompt (`¿A dónde vas a viajar?`);
    const fly = Number(prompt (`¿Cuánto costó tu vuelo`));
    const hotel = Number(prompt (`¿Cuánto costó la reserva de hotel`));
    
    let totalPrice = fly + hotel;
   
alert(`Tus vacaciones a ${destiny} van a costar  ${totalPrice} `);

 if (!isNaN(totalPrice)){
    feedCalculator(totalPrice);

}
}

//precio por cuota
const feedCalculator = (totalPrice, selection) => {
    let feeds = parseInt(prompt("¿En cuantas cuotas quieres pagar tus vacaciones: 2, 3, 6, o 9?"));

    if (feeds === 2) {

        final = totalPrice / feeds + (0.03*totalPrice)
        alert("El precio total a pagar es de: " +final + " por " +feeds+ " meses");

    }
    if (feeds === 3){

        final = totalPrice / feeds + (0.06*totalPrice)
        alert("El precio a pagar es de: " + final + " por " +feeds+ " meses");

    }
    if  (feeds === 6){

        final = totalPrice / feeds + (0.09*totalPrice)
        alert("El precio a pagar es de: " + final + " por " +feeds+ " meses");

    }
    else if  (feeds === 9){

        final = totalPrice / feeds + (0.10*totalPrice)
        alert("El precio a pagar es de: " + final + " por " +feeds+ " meses");

    }
}

welcome();