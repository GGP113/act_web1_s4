/*

### 3. **Sumar elementos de un arreglo**
- **Tarea**: Crea una función que sume todos los números de un arreglo.
- **Tipo de función**: Función flecha
- **Ejemplo**: `sumarArreglo([1, 2, 3])` → `6`
*/



const sumar = (a) => {

    let suma =0
    for(let i =0; i< a.length; i++){

        suma += a[i]

    }
  
    
    
    return suma;
};


console.log(sumar([1, 2, 3]))




