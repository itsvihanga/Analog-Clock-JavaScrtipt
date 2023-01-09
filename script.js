setInterval(setclock, 1000)

const hourhand = document.querySelector(['hour-hand'])
const minutshand = document.querySelector(['minuts-hand'])
const secondhand = document.querySelector(['second-hand'])

function setclock() {
    const currentDate = new Date();
    const secondratio = currentDate.getSeconds() / 60
    const minutesratio = (secondratio + currentDate.getMinutes()) / 60
    const hoursratio = (minutesratio + currentDate.getHours()) / 12
    setRotation(secondhand, secondratio)
    setRotation(minutshand, minutesratio)
    setRotation(hourhand, hoursratio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setclock()


