/*


### 13. **Reemplazar espacios por guiones**
- **Tarea**: Crea una función que reemplace los espacios en una cadena por guiones.
- **Tipo de función**: Expresión de función
- **Ejemplo**: `reemplazarEspacios("Hola Mundo")` → `Hola-Mundo`

*/

let reemplazarEspacios = function (palabra) {
  let subPalabras = palabra.split(" ");

  let palabraGuiones = "";
  let newChar = "";

  for (let n = 0; n < subPalabras.length - 1; n++) {
    newChar = subPalabras[n] + "-";
    palabraGuiones += newChar;
  }

  console.log(palabraGuiones + subPalabras[subPalabras.length - 1]);
};

reemplazarEspacios("Hola Mundo");
