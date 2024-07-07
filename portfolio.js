let change = "change"
let selfDisplay = document.getElementById("selfDisplay")
let bgImage = "portfolio-img.png";
let textArray = [
    "I'm Ismail Barakat Opeyemi, a Frontend Developer."

]
let phase = []

let i = 0;
let d = 0;
let countDown = false;
let show = "yes"

function display() {
    if (i < textArray.length) {

        selfDisplay.innerHTML = phase.join('')

        if (!countDown && d <= textArray[i].length) {
            phase.push(textArray[i][d])
            d++


        }
    }
    setTimeout(display, 200)

}
display()
document.getElementById("caseA").src = bgImage
let lStorage = []

let data = JSON.parse(localStorage.getItem("data"))
if (data != null) {
    lStorage = data;
}

function savename() {
    let storageName = document.getElementById("name")
    let storageEmail = document.getElementById("email")
    let storageComment = document.getElementById("comment")


    lStorage.push(
        { name: storageName.value, email: storageEmail.value, Comment: storageComment.value }
    );


    localStorage.setItem("data", JSON.stringify(lStorage));
    alert("Your message has been delivered")
    window.location.reload()
}