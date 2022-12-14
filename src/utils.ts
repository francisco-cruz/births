import moment from "moment";


export const validateBirth = (input:HTMLInputElement, inputValue:String, legalAgeValue:Number ) => {
  const yaerBirth = moment(inputValue).format("YYYY");
  const age = moment().format("YYYY") - yaerBirth;

    const isNotLegalAge = age < legalAgeValue;
    const day = moment(inputValue).format("DD");
    const month = moment(inputValue).format("MM");
    const valideYaer = isValideYaer(yaerBirth);
    const validaeDate = isValideDate(day, month, yaerBirth);


    // Validation of Yaer
    const isValideYaer = (yaerBirth) => {
        const lowestValidYear = 1892;
        return yaerBirth >= lowestValidYear ? true : false;
    };


    // Validation of Date
    const isValideDate = (day, month, yaer) => {
        const valideDay = moment(`${yaer}/${month}/${day}`).format("l");
        return valideDay === "Invalid date" ? false : true;
    };


    // Validation of the future date
    const isFutureDate = (date) => {
        return moment(date).isAfter(moment());
    };

    if (inputValue == "") {
        errorValidation(input, "Fill in this field.");
        return false;
    }

    if (isFutureDate(inputValue) || !validaeDate || !valideYaer) {
        errorValidation(input, "Invalid date.");
        return false;
    }

    if (ageLegalValue !== "" && isNotLegalAge) {
        errorValidation(input, `Prohibited minors`);
        return false;
    }

    successValidation(input)
    return true;
};


const errorValidation = (input, message) => {
    input.style.border = "1px solid #dc3545";
    small.style.display = "block";
    small.innerText = message;
};


const successValidation = (input) => {
    small.style.display = "none";
    input.style.border = "1px solid #198754";
};

