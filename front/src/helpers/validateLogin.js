const loginValidation = (input) => {
  let errors = {};
  if (!input.username) {
    errors.username = "El usuario es requerido";
  }
  if (!input.password) {
    errors.password = "La contraseña es requerida";
  }
  return errors;
};

export default loginValidation;

