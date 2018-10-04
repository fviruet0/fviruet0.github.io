var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Good evening welcome to QuickFit!';
} else if (hourNow > 12) {
	greeting = 'Good afternoon welcome to QuickFit!';
} else if (hourNow > 0) {
	greeting = 'Welcome to QuickFit!';
}

document.write('<h3>' + greeting + '</h3>');