const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const btnArrow = document.querySelector('.arrow');

const date = new Date();

const errInfo1 = document.createElement('p');
const err1 = document.querySelector('.err1');
const errInfo2 = document.createElement('p');
const err2 = document.querySelector('.err2');
const errInfo3 = document.createElement('p');
const err3 = document.querySelector('.err3');
errInfo1.textContent = 'This field is required';
errInfo2.textContent = 'This field is required';
errInfo3.textContent = 'This field is required';

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

	if (day.value > 31 || day.value === '') {
		redD.classList.add('redColor');
		day.classList.add('dayErr');
		errInfo1.classList.add('errInfoColor');
		err1.append(errInfo1);
	} else if (day.value !== '') {
		day.classList.remove('dayErr');
		err1.textContent = '';
		redD.classList.remove('redColor');
	}

	if (month.value > 12 || month.value === '') {
		redM.classList.add('redColor');
		month.classList.add('dayErr');
		errInfo2.classList.add('errInfoColor');
		err2.append(errInfo2);
	} else if (month.value !== '') {
		month.classList.remove('dayErr');
		err2.textContent = '';
		redM.classList.remove('redColor');
	}

	if (year.value > date.getFullYear() || year.value === '') {
		redY.classList.add('redColor');
		year.classList.add('dayErr');
		errInfo3.classList.add('errInfoColor');
		err3.append(errInfo3);
	} else if (year.value !== '') {
		year.classList.remove('dayErr');
		err3.textContent = '';
		redY.classList.remove('redColor');
	}
};

const colorBtnStart = () => {
	btnArrow.classList.add('active');
};

const colorBtnEnd = () => {
	btnArrow.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', main);
