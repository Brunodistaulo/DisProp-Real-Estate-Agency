const registerValidation = (input) => {
  let errors = {};
  //validaciones de name
  if (!input.name) {
    errors.name = "El nombre es requerido";
  }
  // EMAIL
  if (!input.email) {
    errors.email = "El email es requerido";
  } else if (!/\S+@\S+.\S+/.test(input.email)) {
    errors.email = "El email no es valido";
  }
  // BIRTHDATE
  if (!input.birthdate) {
    errors.birthdate = "La fecha de nacimiento es requerida";
  }

  // DNI
  if (!input.nDni) {
    errors.nDni = "El DNI es requerido";
  } else if (!/^\d{8}$/.test(input.nDni)) {
    errors.nDni = "El DNI debe tener 8 digitos";
  }
  // USERNAME
  if (!input.username) {
    errors.username = "El username es requerido";
  }
  // PASSWORD
  if (!input.password) {
    errors.password = "La contraseña es requerida";
  } else if (input.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  return errors;
};

export default registerValidation;
