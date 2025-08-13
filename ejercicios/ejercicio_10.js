
/*
### 10. **Calcular factorial**
- **Tarea**: Crea una función que calcule el factorial de un número.
- **Tipo de función**: Función recursiva
- **Ejemplo**: `factorial(5)` → `120`

*/



function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));