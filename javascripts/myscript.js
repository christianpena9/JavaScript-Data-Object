$(document).ready(function() {
	var date,month,year,day;
	date = new Date();
	day = date.getDate();
	year = date.getFullYear();
	month = date.getMonth();

	monthNames = ['January','February','March','April','May',
	'June','July','August','September','October','November','December'];

	$('#date').text(monthNames[month] + " " + day + ", " + year);
});