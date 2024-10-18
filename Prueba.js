const frutas =  [ ] ; 
frutas . push ( "banana" ,  "manzana" ,  "melocotón" ) ; 
console . log ( frutas . length ) ;  // 3

frutas [ 5 ]  =  "mango" ; 
console . log ( frutas [ 5 ] ) ;  // 'mango' 
console . log ( Object . keys ( frutas ) ) ;  // ['0', '1', '2', '5'] 
console . log ( frutas . length ) ;  // 6

frutas . length =  10 ; 
console . log ( frutas ) ;  // ['banana', 'manzana', 'melocotón', vacío x 2, 'mango', vacío x 4] 
console . log ( Object . keys ( frutas ) ) ;  // ['0', '1', '2', '5'] 
console . log ( frutas . length ) ;  // 10 
console . log ( frutas [ 8 ] ) ;  // indefinido



const frutas = ['Manzana', 'Banana', 'Naranja'];

frutas.forEach(function(fruta, indice) {
  console.log(`${indice}: ${fruta}`);
});

let precio = 200;
let descuento = 0.1;
console.log(`El precio final es ${precio * (1 - descuento)}`); // "El precio final es 180"


const numeros = [30, 20, 10, 40];

numeros.forEach(function(numero) {
  console.log(numero);
});
