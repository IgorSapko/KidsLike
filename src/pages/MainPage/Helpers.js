import { DateTime } from 'luxon';

const startWeek = DateTime.local().startOf('week');
const nameOfdays = [
	{ full: 'Понедельник', short: 'Пн', date: null },
	{ full: 'Вторник', short: 'Вт', date: null },
	{ full: 'Среда', short: 'Ср', date: null },
	{ full: 'Четверг', short: 'Чт', date: null },
	{ full: 'Пятница', short: 'Пт', date: null },
	{ full: 'Суббота', short: 'Сб', date: null },
	{ full: 'Воскресенье', short: 'Вс', date: null },
];
export function nameOfDaysFunc() {
	nameOfdays.map((el, index) => {
		el.date = startWeek.plus({ days: index }).toFormat('dd-MM-yyyy');
	});
	return nameOfdays;
}
export function choosenDay(choosenDay) {
	const findDay = nameOfdays.find(el => el.date === choosenDay);
	return findDay?.full;
}

export function monthInNumbFunc(week) {
	const monthsInNumber = [
		{ num: '01', name: 'Янаваря' },
		{ num: '02', name: 'Февраля' },
		{ num: '03', name: 'Мара' },
		{ num: '04', name: 'Апреля' },
		{ num: '05', name: 'Мая' },
		{ num: '06', name: 'Июня' },
		{ num: '07', name: 'Июля' },
		{ num: '08', name: 'Августа' },
		{ num: '09', name: 'Сентября' },
		{ num: '10', name: 'Октября' },
		{ num: '11', name: 'Ноября' },
		{ num: '12', name: 'Декабря' },
	];
	const thisMontht = monthsInNumber.find(el => {
		if (el.num === week.startWeekDate.substring(3, 5)) return el.name;
	});
	return thisMontht;
}
