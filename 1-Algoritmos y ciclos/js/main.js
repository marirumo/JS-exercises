/*
Crear un programa que solicite la edad de 10 personas y pueda diferencias si son elders o menores de edad

1. Crear variable para elders de edad e inicializarla
2. Crear variable para menores de edad e inicializarla
3. Crear condicion donde se alamcenarán los datos
4. Solicitar que se ingresen las edades
5. Si es mayor o igual a 18 asignar a mayor
6. Si es menor o igual a 18 asignar a menor


for (inicio; condicion; actualización) {
    //codigo a ejecutar si es true
}
else{
    //código a ejecutar si es false
}

*/

let elders = 0;
let youngsters =0;


for (counter = 1; counter <=10; counter++){
    let age = prompt('Por favor, ingresa la edad de la persona' + counter)

    if (age >= 18){
    
        elders = elders + 1;
        
    }
    
    else {
        
        youngsters++;
    }

}

alert ("La cantidad de mayores de edad es " +elders + "\n La cantidad de menores de edad es " +youngsters)

