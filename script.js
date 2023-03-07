console.log('Hello I am Ojas');

setInterval(() => {
    
    let d = new Date()
    h = d.getHours()
    m = d.getMinutes()
    s = d.getSeconds()
    hrot = 30*h + m/2
    mrot = 6*m
    srot = 6*s

    let hour = document.querySelector('.hrs')
    let minute = document.querySelector('.min')
    let second = document.querySelector('.sec')

    hour.style.transform = `rotate(${hrot}deg)`
    minute.style.transform = `rotate(${mrot}deg)`
    second.style.transform = `rotate(${srot}deg)`

    console.log(d)

}, 1000)
