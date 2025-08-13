/*

### 15. **Invertir una cadena**
- **Tarea**: Crea una función que invierta una cadena de texto.
- **Tipo de función**: Función recursiva
- **Ejemplo**: `invertir("hola")` → `aloh`

*/

function invertir(palabra, newPalabra = "", contador1 = 1, contador2 = 0) {
  let letra = palabra.slice(
    palabra.length - contador1,
    palabra.length - contador2
  );

  newPalabra += letra;

  if (newPalabra.length === palabra.length) {
    return newPalabra; 
  }

  return invertir(palabra, newPalabra, contador1 + 1, contador2 + 1);
}

console.log(invertir("hola"));


