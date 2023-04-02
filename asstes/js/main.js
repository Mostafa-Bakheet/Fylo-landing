id = "btn-card"
id = "btn-card"
id = "input-card"

input = document.getElementById("input-card");
btn = document.getElementById("btn-card");

btn.addEventListener("click", () => {
    if (!input.value)
        alert("Please Enter Valid email address!");
    else
        return true;

});