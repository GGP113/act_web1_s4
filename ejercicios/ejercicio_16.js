/*### 16. **Sumar argumentos variables**
- **Tarea**: Crea una función que sume un número variable de argumentos.
- **Tipo de función**: Función flecha con parámetro rest
- **Ejemplo**: `sumar(1, 2, 3, 4)` → `10`*/

let sumar = (...numeros) => {

    let suma =0

    for (let n of numeros){

        suma +=n
    }

    return suma


}


