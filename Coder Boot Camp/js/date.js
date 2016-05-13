var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
var datetime = month.toString() + day.toString()

function todaysDate() {
	if(day < 10) {
		datetime = month.toString() + ("0" + day)
	} if(month == 10) {
		if(day == 18) {
		document.getElementById("colorchange").style.color = "green"
		} else { 
		document.getElementById("colorchange").style.color = "red"
		}
	}
}  