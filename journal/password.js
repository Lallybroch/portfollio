const pass = prompt("Password?")
const link = document.getElementById("pass-link")
if (pass == "2476") {
    link.innerHTML = "To Journal"
    link.href = "journal.html"
}
else {
    link.innerHTML = "Incorrect, Click here to retry"
    link.href = ""
}