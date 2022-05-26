
//DOM Bienvenida
const intro = document.getElementById('intro')
const welcome = document.getElementById('welcome')

const inputName = document.getElementById('username')
const usernameDiv = document.getElementById('usernameOut')

const vacations = document.getElementById('destiny')
const placeOut = document.getElementById('holiday')

const firstbtn = document.getElementById('saveBtn')

function welcomeS() {
  intro.remove();
  usernameDiv.innerHTML = inputName.value;
  placeOut.innerHTML = vacations.value;
  welcome.classList.remove('show');
}

firstbtn.addEventListener('click', welcomeS);

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

const tranSection = document.getElementById("calcTr");
const plus = document.getElementById('addTran');
const next = document.getElementById('save');


function transportScreen() {
  welcome.remove();

  let election = 'M';
  while (election === 'M') {
    kind = prompt('🛫¿En qué transporte  vas a viajar?🛫')
    price = Number(prompt('💰¿Cuánto costó?💰'))
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
    depto = prompt('🏰¿En dónde te vas a hospedar?🏰')
    price = Number(prompt('💰¿Cuánto costó?💰'))
    accommodation.push(new Hotel(depto, price))

    add = prompt('Si necesitas agregar otro lugar de hospedaje escribe "M", si deseas continuar presiona cualquier tecla')
  }

  let priceHotel = [];
  for (i in accommodation)
    priceHotel.push(accommodation[i].price);

  let sumH = 0;

  for (let i = 0; i < priceHotel.length; i++) {
    sumH += priceHotel[i];
  }

  let totalPrice = sumT + sumH;
  let total = document.getElementById('total')
  let totalMsg = document.createElement("div");

  total.appendChild(totalMsg);

  const feedCalculator = (totalPrice, selection) => {
    let feeds = parseInt(prompt("💲¿En cuantas cuotas quieres pagar tus vacaciones: 2, 3, 6, o 9?💲"));

    switch (feeds) {

      case 2: final = totalPrice / feeds + (0.03 * totalPrice)
        totalMsg.innerHTML = `<h2>👉El precio total a pagar es de: ${final} por ${feeds}  meses<h2>`;
        break

      case 3: final = totalPrice / feeds + (0.06 * totalPrice)
      totalMsg.innerHTML = `<h2>👉El precio total a pagar es de: ${final} por ${feeds}  meses<h2>`;
        break

      case 6: final = totalPrice / feeds + (0.09 * totalPrice)
      totalMsg.innerHTML = `<h2>👉El precio total a pagar es de: ${final} por ${feeds}  meses<h2>`;
        break

      case 9: final = totalPrice / feeds + (0.10 * totalPrice)
      totalMsg.innerHTML = `<h2>👉El precio total a pagar es de: ${final} por ${feeds}  meses<h2>`;

    }
  }

  feedCalculator(totalPrice);
  
}


next.addEventListener('click', transportScreen);