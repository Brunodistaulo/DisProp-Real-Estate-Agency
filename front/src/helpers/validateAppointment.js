const appointmentValidation = (input) => {
    let errors = {};
    if(!input.date){
        errors.date = "La fecha es requerida";

    }else if(new Date(input.date) < new Date()){
        errors.date = "La fecha no puede ser anterior a la actual";
    }
    if(!input.time){
        errors.time = "La hora es requerida";
    }
    return errors
}

export default appointmentValidation;