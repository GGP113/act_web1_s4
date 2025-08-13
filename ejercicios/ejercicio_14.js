/*
### 14. **Generar un ID único**
- **Tarea**: Crea una función que genere un ID único basado en un contador interno.
- **Tipo de función**: IIFE con closure
- **Ejemplo**: `generarId()` → `1`, `generarId()` → `2`



*/


const generarId = (function () {
  let cuenta = 0; 

  return function () {
    cuenta++;
    console.log(cuenta); 
    return cuenta;
  };
})();

