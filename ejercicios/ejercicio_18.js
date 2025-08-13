/*
### 18. **Validar correo electrónico**
- **Tarea**: Crea una función que valide si una cadena es un correo electrónico básico (contiene @ y .com).
- **Tipo de función**: Declaración de función
- **Ejemplo**: `esCorreo("test@example.com")` → `true`

*/

function esCorreo(correo) {
  let com = correo.slice(correo.length - 4, correo.length);

  let control = false;

  for (let i of correo) {
    if (i === "@" && com === ".com") {
      control = true;
      break;
    }
  }

  console.log(control);
  return control
}


