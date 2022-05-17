//Se inicializan variables
let place = ''
let accommodation = []
let mobility = []


//clases    
class Transport {
  constructor(kind, price) {
    this.name = kind
    this.price = price
  }
}

class Hotel {
  constructor(depto, price) {
    this.depto = depto
    this.price = price
  }
}


//Se piden datos de transporte al usuario
place = prompt('¿A dónde vas a viajar?')

let election = 'M';
while (election === 'M') {
  kind = prompt('¿Como vas a viajar')
  price = Number(prompt('¿Cuánto costó?'))
  mobility.push(new Transport(kind, price))

  election = prompt('Si necesitas agregar otro transporte escribe "M", si deseas continuar presiona cualquier tecla')
}

let priceMobility = [];
for (i in mobility)
  priceMobility.push(mobility[i].price);

let sumT = 0;

for (let i = 0; i < priceMobility.length; i++) {
  sumT += priceMobility[i];
}

//Se piden datos de alojamiento al usuario
let add = 'M';
while (add === 'M') {
  depto = prompt('¿Donde te vas a hospedar')
  price = Number(prompt('¿Cuánto costó?'))
  accommodation.push(new Hotel(depto, price))

  add = prompt('Si necesitas agregar otro transporte escribe "M", si deseas continuar presiona cualquier tecla')
}

let priceHotel = [];
for (i in accommodation)
  priceHotel.push(accommodation[i].price);

let sumH = 0;

for (let i = 0; i < priceHotel.length; i++) {
  sumH += priceHotel[i];
}

let totalPrice = sumT + sumH;

//cuotas
const vacations = () => {
  alert(`Tus vacaciones a ${place} van a costar  ${totalPrice} `);

  if (!isNaN(totalPrice)) {
    feedCalculator(totalPrice);

  }
}

//precio por cuota
const feedCalculator = (totalPrice, selection) => {
  let feeds = parseInt(prompt("¿En cuantas cuotas quieres pagar tus vacaciones: 2, 3, 6, o 9?"));

  switch (feeds) {

    case 2: final = totalPrice / feeds + (0.03 * totalPrice)
      alert("El precio total a pagar es de: " + final + " por " + feeds + " meses");
      break

    case 3: final = totalPrice / feeds + (0.06 * totalPrice)
      alert("El precio total a pagar es de: " + final + " por " + feeds + " meses");
      break

    case 6: final = totalPrice / feeds + (0.09 * totalPrice)
      alert("El precio total a pagar es de: " + final + " por " + feeds + " meses");
      break

    case 9: final = totalPrice / feeds + (0.10 * totalPrice)
      alert("El precio a pagar es de: " + final + " por " + feeds + " meses");

  }
}

vacations();
