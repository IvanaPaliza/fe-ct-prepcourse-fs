/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayPadre = [];
   for(var property in objeto){
      var arrayHijo = [property,objeto[property]];
      arrayPadre.push(arrayHijo);
      console.log(arrayPadre)
   }
   return arrayPadre;


}



function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu  código:

   let objeto={};
   let array =string.split("");
   array.sort();
 for ( let i =0; i< array.length; i++){
   let letras = objeto[array[i]] || 0
   ;
   objeto[array[i]]=letras +1;
 }
 return objeto;
   //    for(let i of array)
   // {
   //    var cantidad = objeto[i] || 0;
   //    objeto[i]= cantidad + 1;
   // }


      // console.log(objeto)
   }



function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusc = "";
   var min = "";
   for (let i = 0; i < string.length; i++) {
      if(string[i]=== string[i].toUpperCase()){
         mayusc = mayusc + string[i];
      } else {
         min = min + string[i];
   }
   } return mayusc + min;
   
}
   


function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ")
   for (let i = 0; i < palabras.length; i++) {
      var palabraseparada = palabras[i].split("").reverse().join("");
      palabras[i]= palabraseparada;
      var resultado = palabras.join(" ")
   }
   var resultado = palabras.join(" ");
   return resultado;
   

} 
// console.log(asAmirror("The Henry Challenge is close!"));


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
 var numeroEnLetras = numero.toString()
 var numeroInvertido = numeroEnLetras.split("").reverse().join("");
if (numero)

 console.log(numeroEnLetras.split("").reverse().join(""));  
   if(numeroEnLetras === numeroInvertido){
      return "Es capicua";
   }else return "No es capicua"
}

// var numero = 12345;
// console.log(capicua(numero))

function deleteAbc(string) {

   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newString = "" ;
   for (let i = 0;i < string.length; i ++) {
      if (string[i] !== "a" && string[i] !== "b" && string[i] !== "c"){
         newString = newString + string[i];
   
     }
    }return newString;
   }
// var string = "abcde123"
// console.log(deleteAbc(newString))


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
  return arrayOfStrings.sort((a,b) => a.length - b.length)
   
}


console.log(sortArray([`hola`,`don`, `pepito`]))

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const array = [];
   for(var i =0; i <array2.length;i++){
      if(array1.includes(array2[i])){
         array.push(array2[i])
      }
   }return array;
}
   console.log(buscoInterseccion([1,2,3,4],[3,4,5,6]))
   //  var arreglocomun = [];
   //  var ar1 =array1.toString();
   //  var ar2 =array2.toString();
   //  for(var i= 0; i < ar1.length; i++ ){
   //    ar1[i];

   //  for(var j =0; j < ar2.length; j++){
   //    ar2[j];
   // if( ar1[i]=== ar2[i]){
   //    arreglocomun.push(i);
   // }

    



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
