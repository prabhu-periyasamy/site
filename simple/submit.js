function showBasicForm() {
    document.getElementById("basic-form").style.display = "block";
    document.getElementById("all-form").style.display = "none";
    document.querySelector(".form-success").style.display = "none"; // Hide success message on form switch
}

function showAllForm() {
    document.getElementById("basic-form").style.display = "none";
    document.getElementById("all-form").style.display = "block";
    document.querySelector(".form-success").style.display = "none"; // Hide success message on form switch
}