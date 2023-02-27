// console.log("Hello");

const confirmPage = document.querySelector('footer section form input[type="email"]')
const deleteForPopUp = document.getElementById("deleteForPopUp")
const addForPopUp = document.getElementById("addForPopUp")

function subscribe() {
    // console.log("Hallo");
    // popUp.classList.add("popUp");
    deleteForPopUp.style.display = "none";
    addForPopUp.style.display = "block"
    console.log("Your Email is " + confirmPage.value)
}

function backToWebsite() {
    deleteForPopUp.style.display = "block";
    addForPopUp.style.display = "none"
}
