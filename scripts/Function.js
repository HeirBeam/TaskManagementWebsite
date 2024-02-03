

function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username == "user@email.com" && password == "password") {
		alert("Login sucessfully");
		window.location.href = "Homepage.html";
		return false;

	} else {
		alert("The email or password you entered is incorrect");
	} 
	
	
}


function swapStyleSheet(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
}

function updateName(){
	var Name = document.getElementById("FirstName")
    var passwordCheck = prompt("Enter your password to change your First Name to: "+Name.value);
	if (passwordCheck ==="password"){
		alert("Your First Name has been updated")
	} else {
		alert ("The password entered is incorrect");
		window.location.href = "Account.html";
	}
}

function updateLastName(){
	var Name = document.getElementById("LastName")
    var passwordCheck = prompt("Enter your password to change your Last Name to: "+Name.value);
	if (passwordCheck ==="password"){
		alert("Your Last Name has been updated")
	} else {
		alert ("The password entered is incorrect");
		window.location.href = "Account.html";
	}
}

function updatePassword(){
	var Name = document.getElementById("password")
    var passwordCheck = prompt("Enter your old password to change your Password to: "+Name.value);
	if (passwordCheck ==="password"){
		alert("Your Password has been updated")
	} else {
		alert ("The password entered is incorrect");
		window.location.href = "Account.html";
	}
}

function updateEmail(){
	var Name = document.getElementById("email")
    var passwordCheck = prompt("Enter your password to change your Email to: "+Name.value);
	if (passwordCheck ==="password"){
		alert("Your Email has been updated")

	} else {
		alert ("The password entered is incorrect");
		window.location.href = "Account.html";
	}
}

function signout() {
	alert("Goodbye");
	window.location.href = "Index.html";
}

function editPicture() {
	alert("Should be prompted with a page to select a new image")
}


