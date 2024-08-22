const appointmentValidation = (input) => {
    let errors = {};

    // Validación de la fecha
    if (!input.date) {
        errors.date = "La fecha es requerida";
    } else if (new Date(input.date) < new Date().setHours(0, 0, 0, 0)) {
        errors.date = "La fecha no puede ser anterior a la actual";
    }

    // Validación de la hora
    if (!input.time) {
        errors.time = "La hora es requerida";
    }

    // Validación de la propiedad
    if (!input.property) {
        errors.property = "La propiedad es requerida";
    }

    // Validación de la localidad
    if (!input.location) {
        errors.location = "La localidad es requerida";
    }

    return errors;
};

export default appointmentValidation;
