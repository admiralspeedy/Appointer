document.getElementById("firstName").addEventListener("blur", validateFirstName);
document.getElementById("firstName").addEventListener("keyup", validateFirstName);
document.getElementById("lastName").addEventListener("keyup", validateLastName);
document.getElementById("lastName").addEventListener("blur", validateLastName);
document.getElementById("months").addEventListener("blur", validateDate);
document.getElementById("days").addEventListener("blur", validateDate);
document.getElementById("years").addEventListener("blur", validateDate);
document.getElementById("country").addEventListener("blur", validateLocation);
document.getElementById("province").addEventListener("blur", validateLocation);
document.getElementById("city").addEventListener("blur", validateLocation);
document.getElementById("province").addEventListener("blur", populateCities);
document.getElementById("salon").addEventListener("blur", validateSalon);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("email").addEventListener("keyup", validateEmail);
document.getElementById("createAccount").addEventListener("click", createStylistAccount);
