//your JS code here. If required.
function submitted() {
	const fname = document.getElementById("fname").value.trim();
	const lname = document.getElementById("lname").value.trim();
	const number = document.getElementById("number").value.trim();
	const email = document.getElementById("email").value.trim();

	alert(`First Name: ${fname} Last Name: ${lname} Phone Number: ${number} Email ID: ${email}`);
}

