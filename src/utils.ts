import moment from "moment";

export const validateBirth = (input: HTMLInputElement, inputValue: string, legalAgeValue: string) => {
    const day = moment(inputValue).format("DD");
    const month = moment(inputValue).format("MM");
    const yearBirth = Number(moment(inputValue).format("YYYY"));
    const age : number = getAge(inputValue)
    const isNotLegalAge = age < Number(legalAgeValue);

    const validYear = Boolean(isValidYear(yearBirth));
    const validDate = Boolean(isValidDate(day, month, yearBirth));


    if (inputValue == "") {
        errorValidation(input, "Fill in this field.");
        console.log("Fill in this field");
        return false;
    }

    if (isFutureDate(inputValue) || !validDate || !validYear) {
        errorValidation(input, "Invalid date.");
        console.log("Invalid date.");
        return false;
    }

    if (legalAgeValue != "" && isNotLegalAge) {
        errorValidation(input, `Prohibited minors`);
        console.log("Prohibited minors");

        return false;
    }

    successValidation(input)
    return true;
};

// Validation of the date

const isValidDate = (day: string, month: string, yearBirth: number) => {
    const validDay = moment(`${yearBirth}/${month}/${day}`).format("l");

    return validDay === "Invalid date" ? false : true;
};

// Validation of the year
const isValidYear = (yearBirth: number) => {
    const lowestValidYear = Number(moment().format("YYYY")) - 130;
    return (yearBirth) >= lowestValidYear ? true : false;
};

// Validation of the future date
const isFutureDate = (inputValue: string) => {
    console.log(inputValue);
    return moment(inputValue).isAfter(moment());
};



const errorValidation = (input: HTMLInputElement, message: string) => {
    input.style.border = "1px solid #dc3545";
    // small.style.display = "block";
    // small.innerText = message;
};


const successValidation = (input: HTMLInputElement) => {
    // small.style.display = "none";
    input.style.border = "1px solid #198754";
};


const  getAge = (dateString: string) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

