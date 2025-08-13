/*### 20. **Calcular promedio de un arreglo**
- **Tarea**: Crea una función que calcule el promedio de un arreglo de números.
- **Tipo de función**: Función flecha
- **Ejemplo**: `promedio([10, 20, 30])` → `20`*/


let promedio = (lista) => {

    let suma =0
    let promedio =0

    for( let i=0; i<lista.length; i++ ){

        suma += lista[i]


    }

    promedio = suma/lista.length


    return promedio
}


