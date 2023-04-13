const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const btnArrow = document.querySelector('.arrow');

//All Values

const yearValue = document.querySelector('.yearValue');
const monthValue = document.querySelector('.monthValue');
const daysValue = document.querySelector('.daysValue');

//Date

const date = new Date();

//Errorrs information

const errInfo1 = document.createElement('p');
const err1 = document.querySelector('.err1');
const errInfo2 = document.createElement('p');
const err2 = document.querySelector('.err2');
const errInfo3 = document.createElement('p');
const err3 = document.querySelector('.err3');

const main = () => {
	DOMEvents();
};

const DOMEvents = () => {
	btnArrow.addEventListener('click', pressBtn);
	btnArrow.addEventListener('mouseover', colorBtnStart);
	btnArrow.addEventListener('mouseout', colorBtnEnd);
};

const pressBtn = () => {
	const redD = document.querySelector('.redDay');
	const redM = document.querySelector('.redMonth');
	const redY = document.querySelector('.redYear');

	if (day.value === '' || month.value === '' || year.value === '') {
		errInfo1.textContent = 'This field is required';
		errInfo2.textContent = 'This field is required';
		errInfo3.textContent = 'This field is required';
		redD.classList.add('redColor');
		redM.classList.add('redColor');
		redY.classList.add('redColor');
		day.classList.add('dayErr');
		month.classList.add('dayErr');
		year.classList.add('dayErr');
		errInfo1.classList.add('errInfoColor');
		errInfo2.classList.add('errInfoColor');
		errInfo3.classList.add('errInfoColor');
		err1.append(errInfo1);
		err2.append(errInfo2);
		err3.append(errInfo3);
	} else if (day.value > 31 || day.value <= 0) {
		errInfo2.textContent = '';
		errInfo3.textContent = '';
		redD.classList.add('redColor');
		redM.classList.add('redColor');
		redY.classList.add('redColor');
		day.classList.add('dayErr');
		month.classList.add('dayErr');
		year.classList.add('dayErr');
		errInfo1.textContent = 'This field is required';
		errInfo1.classList.add('errInfoColor');
		err1.append(errInfo1);
	} else if (month.value > 12 || month.value <= 0) {
		errInfo1.textContent = '';
		errInfo3.textContent = '';
		redD.classList.add('redColor');
		redM.classList.add('redColor');
		redY.classList.add('redColor');
		day.classList.add('dayErr');
		month.classList.add('dayErr');
		year.classList.add('dayErr');
		errInfo2.textContent = 'This field is required';
		errInfo2.classList.add('errInfoColor');
		err2.append(errInfo2);
	} else if (year.value > date.getFullYear() || year.value <= 0) {
		errInfo1.textContent = '';
		errInfo2.textContent = '';
		redD.classList.add('redColor');
		redM.classList.add('redColor');
		redY.classList.add('redColor');
		day.classList.add('dayErr');
		month.classList.add('dayErr');
		year.classList.add('dayErr');
		errInfo3.textContent = 'This field is required';
		errInfo3.classList.add('errInfoColor');
		err3.append(errInfo3);
	} else if (
		(day.value > 28 && month.value === '2') ||
		(day.value > 28 && month.value === '4') ||
		(day.value > 30 && month.value === '6') ||
		(day.value > 30 && month.value === '9') ||
		(day.value > 30 && month.value === '11')
	) {
		redD.classList.add('redColor');
		redM.classList.add('redColor');
		redY.classList.add('redColor');
		day.classList.add('dayErr');
		month.classList.add('dayErr');
		year.classList.add('dayErr');
		errInfo1.textContent = 'This field is required';
		errInfo1.classList.add('errInfoColor');
		err1.append(errInfo1);
		errInfo2.textContent = 'This field is required';
		errInfo2.classList.add('errInfoColor');
		err2.append(errInfo2);
	} else if (
		day.value <= 31 &&
		month.value <= 12 &&
		year.value <= date.getFullYear()
	) {
		redD.classList.remove('redColor');
		redM.classList.remove('redColor');
		redY.classList.remove('redColor');
		day.classList.remove('dayErr');
		month.classList.remove('dayErr');
		year.classList.remove('dayErr');
		errInfo1.textContent = '';
		errInfo2.textContent = '';
		errInfo3.textContent = '';

		const newDay = new Date(date.getTime() - day.value * 24 * 60 * 60 * 1000);
		daysValue.textContent = newDay.getDate();

		const newMonth = new Date(date);
		newMonth.setMonth(date.getMonth() - month.value);
		monthValue.textContent = newMonth.getMonth();

		const newYear = new Date(date);
		newYear.setFullYear(date.getFullYear() - year.value);
		yearValue.textContent = newYear.getFullYear() - 1;
	}

	btnArrow.classList.remove('active');
};

const colorBtnStart = () => {
	btnArrow.classList.add('active');
};

const colorBtnEnd = () => {
	btnArrow.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', main);
