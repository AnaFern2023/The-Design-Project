// console.log("Hello");

const confirmPage = document.querySelector('footer section form[type="email"]')
const deleteForPopUp = document.getElementById("deleteForPopUp")
const addForPopUp = document.getElementById("addForPopUp")

function subscribe() {
    // console.log("Hallo");
    // popUp.classList.add("popUp");
    deleteForPopUp.style.display = "none";
    addForPopUp.style.display = "block"
}

function backToWebsite() {
    deleteForPopUp.style.display = "block";
    addForPopUp.style.display = "none"
}
