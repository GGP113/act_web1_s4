/*

### 12. **Multiplicar elementos de un arreglo**
- **Tarea**: Crea una función que multiplique todos los números de un arreglo.
- **Tipo de función**: Función de orden superior
- **Ejemplo**: `multiplicarArreglo([2, 3, 4])` → `24`

*/


/*NO SE SI ESTA BIEN IMPLEMENTADA LA FUNCION*/
const multiplicarArreglo = (arr) => {

    let numUno =arr[0]

    

    for(let i =1;  i< arr.length; i++){

        

        let resultado =numUno*arr[i]

         numUno = resultado


    }

    return numUno
};



console.log(multiplicarArreglo([2, 3, 4])); // [2, 4, 6]