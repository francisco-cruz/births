import moment from "moment";

export const validateBirth = (input: HTMLInputElement, inputValue: string, legalAgeValue: string) => {
    const day: string = moment(inputValue).format("DD");
    const month: string = moment(inputValue).format("MM");
    const yearBirth: number = Number(moment(inputValue).format("YYYY"));
    const age: number = getAge(inputValue)
    const isNotLegalAge: boolean = age < Number(legalAgeValue);

    const validYear: boolean = isValidYear(yearBirth);
    const validDate: boolean = isValidDate(day, month, yearBirth);


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
    console.log("success");

    return true;
};


const getAge = (dateString: string) => {
    const currentDate: number = Number(moment().format("YYYYMMDD"));
    const birthDate: number = Number(moment(dateString).format("YYYYMMDD"));
    let age = currentDate - birthDate;
    const month: number = Number(moment(currentDate).format("MM")) - Number(moment(birthDate).format("MM"))

    if (month < 0 || (month === 0 && currentDate < birthDate)) {
        age--;
    }

    return age;
}


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
    return moment(inputValue).isAfter(moment());
};


// error validation

const errorValidation = (input: HTMLInputElement, message: string) => {
    input.style.border = "1px solid #dc3545";
    // small.style.display = "block";
    // small.innerText = message;
};


// success validation

const successValidation = (input: HTMLInputElement) => {
    // small.style.display = "none";
    input.style.border = "1px solid #198754";
};
