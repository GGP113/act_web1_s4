/*

### 19. **Retrasar ejecución de un mensaje**
- **Tarea**: Crea una función que imprima un mensaje después de un tiempo definido por el usuario.
- **Tipo de función**: Función anónima con `setTimeout`
- **Ejemplo**: `retrasarMensaje("Hola", 2000)` → Imprime "Hola" tras 2 segundos.

*/


let retrasarMensaje = function(mensaje, retraso){

    setTimeout(function(){
        console.log(`${mensaje}`)
    }
    , retraso)
}


console.log(retrasarMensaje("Hola", 2000))