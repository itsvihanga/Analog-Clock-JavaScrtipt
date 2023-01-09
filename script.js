setInterval(setclock, 1000)

const hourhand = document.querySelector("#hour-hand")
const minutshand = document.querySelector("#minuts-hand")
const secondhand = document.querySelector("#second-hand")

function setclock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondhand, secondRatio)
    setRotation(minutshand, minutesRatio)
    setRotation(hourhand, hoursRatio)
}



function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setclock()