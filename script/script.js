const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const btnArrow = document.querySelector('.arrow');

const yearValue = document.querySelector('.yearValue');
const monthValue = document.querySelector('.monthValue');
const daysValue = document.querySelector('.daysValue');

const main = () => {
    btnArrow.addEventListener('click', handleSubmit);
};

const handleSubmit = (event) => {
    event.preventDefault(); 

    const inputDay = parseInt(day.value);
    const inputMonth = parseInt(month.value) - 1; 
    const inputYear = parseInt(year.value);

    const currentDate = new Date();
    const birthDate = new Date(inputYear, inputMonth, inputDay);

    if (isNaN(inputDay) || isNaN(inputMonth) || isNaN(inputYear)) {
        displayError('All fields are required');
        return;
    }

    if (birthDate.getDate() !== inputDay ||
        birthDate.getMonth() !== inputMonth ||
        birthDate.getFullYear() !== inputYear) {
        displayError('Invalid date');
        return;
    }

    if (birthDate > currentDate) {
        displayError('Birth date cannot be in the future');
        return;
    }
    const age = calculateAge(birthDate, currentDate);
    displayAge(age);
};

const calculateAge = (birthDate, currentDate) => {
    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        ageYears--;
        ageMonths += 12; 
    }

    if (ageDays < 0) {
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        ageDays += lastDayOfMonth;
        ageMonths--;
    }

    return { years: ageYears, months: ageMonths, days: ageDays };
};

const displayAge = (age) => {
    yearValue.textContent = age.years;
    monthValue.textContent = age.months;
    daysValue.textContent = age.days;
};

const displayError = (message) => {
    console.error('Validation error:', message);
};

document.addEventListener('DOMContentLoaded', main);
