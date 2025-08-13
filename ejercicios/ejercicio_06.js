/*

### 6. **Filtrar números mayores a 10**
- **Tarea**: Crea una función que reciba un arreglo y devuelva solo los números mayores a 10.
- **Tipo de función**: Función de orden superior
- **Ejemplo**: `filtrarMayores([5, 12, 8, 15])` → `[12, 15]`


*/

function mayorA10(numeros) {
  let numMayor10 = [];
 

  for (let i = 0; i < numeros.length ; i++) {

    if (numeros[i] > 10) {
      numMayor10.push(numeros[i])
    }

    
  }

  
  return numMayor10
}

const filtrarMayores = mayorA10([5, 12, 8, 15])
console.log(filtrarMayores)
