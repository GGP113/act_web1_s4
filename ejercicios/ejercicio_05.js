/*
### 5. **Contar vocales en una cadena**
- **Tarea**: Crea una función que cuente las vocales (a, e, i, o, u) en una cadena.
- **Tipo de función**: Función recursiva
- **Ejemplo**: `contarVocales("hola")` → `2`

*/

/*

function contarVocales(texto) {
  let contadorA = 0;
  let contadorE = 0;
  let contadorI = 0;
  let contadorO = 0;
  let contadorU = 0;

  for (let i = 0; i < texto.length; i++) {
    let letra = texto.slice(texto.length - 1 - i, texto.length - i);

    switch (letra) {
      case "a":
      case "A":
        contadorA++;
        break;

      case "e":
      case "E":
        contadorE++;
        break;

      case "i":
      case "I":
        contadorI++;
        break;
      case "o":
      case "O":
        contadorO++;
        break;

      case "u":
      case "U":
        contadorU++;
        break;
    }
  }

  

  return contadorA + contadorE + contadorI + contadorO + contadorU
}



console.log(contarVocales("hola") )

*/


function contarVocales(texto) {
  // Caso base: si la cadena está vacía, ya no hay vocales que contar
  if (texto.length === 0) return 0;

  // Tomamos la primera letra
  let letra = texto[0];

  // Comprobamos si es vocal
  let esVocal = "aeiouAEIOU".includes(letra) ? 1 : 0;

  // Llamada recursiva con el resto del texto
  return esVocal + contarVocales(texto.slice(1));
}



console.log(contarVocales("hola") )
