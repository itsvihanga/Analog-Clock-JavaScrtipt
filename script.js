setInterval(setclock , 1000)

const hourhand = document.querySelector(['hour-hand'])
const minutshand = document.querySelector(['minuts-hand'])
const secondhand = document.querySelector(['second-hand'])

function setclock(){
    const currentDate = new Date();
    const second = currentDate.getSeconds()/60
    const minutes = (second + currentDate.getMinutes()) / 60 
    const hours = (minutes + currentDate.getHours()) /12
    setRotation(secondhand,second)
    setRotation(minutshand,minutes)
    setRotation(hourhand,hours)
}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setclock()