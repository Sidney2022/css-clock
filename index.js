const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".minute-hand")
const hourHand = document.querySelector(".hour-hand")
const display = document.querySelector(".display")


function setDate() {
    const now = new Date();
    var seconds = now.getSeconds();
    const secondsDegrees = ( (seconds / 60) * 360 ) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    if (sound_toggler.classList.contains('sound-active')) {
    const audio = new Audio("./click.mp3");
    audio.play()
    }
    // key.classList.add('sound-active')
    // audio.onended = () =>   key_wrapper.classList.remove('sound-active')

    const minutes = now.getMinutes();
    const minutesDegrees = ( (minutes / 60) * 360 ) + 90
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours();
    // const ampm = hours >= 12 ? "PM" : "AM";
    // hr_12_form = hours % 2
    const hoursDegrees = ( (hours % 12 / 12) * 360 ) + (minutes / 60) * 30 + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    

    seconds = seconds > 10 ? seconds : `0${seconds}`
    // display.textContent= `${hours} : ${minutes} : ${seconds}`
}

setInterval(setDate, 1000)

var clock_element = document.querySelector('.clock')
var sound_toggler = document.querySelector('.sound-toggler')

sound_toggler.addEventListener('click', () => {
if (sound_toggler.classList.contains('sound-active')) {
    sound_toggler.classList.remove('sound-active')
} else {
    sound_toggler.classList.add('sound-active')
}
})


    // input elements
var sec_hand_input = document.querySelector('#sec-hand-col')
var min_hand_input = document.querySelector('#min-hand-col')
var hour_hand_input = document.querySelector('#hour-hand-col')

var clock_numbers_input = document.querySelector('#clock-digits-col')
var clock_frame_input = document.querySelector('#clock-frame-col')
var clock_bg_input = document.querySelector('#clock-bg-col')

// actual elements
var second_hand_element = document.querySelector('.second-hand')
var minute_hand_element = document.querySelector('.minute-hand')
var hour_hand_element = document.querySelector('.hour-hand')
var clock_numbers = document.querySelector('.clock-digits')

var clock_bg_image = document.querySelectorAll('.clock-bg-image')



sec_hand_input.addEventListener('input', () => {
second_hand_element.style.background=sec_hand_input.value
})
min_hand_input.addEventListener('input', () => {
minute_hand_element.style.background=min_hand_input.value
})
hour_hand_input.addEventListener('input', () => {
hour_hand_element.style.background=hour_hand_input.value
})

clock_frame_input.addEventListener('input', () => {
clock_element.style.borderColor=clock_frame_input.value
})
clock_bg_input.addEventListener('input', () => {
clock_element.style.background=clock_bg_input.value
})

clock_numbers_input.addEventListener('input', () => {

// clock_numbers.style.visibility='visible'
// clock_numbers.style.opacity=1
clock_numbers.style.color=clock_numbers_input.value
})

clock_bg_image.forEach(imageElem => {
imageElem.addEventListener('click', () => {
var computedStyles =getComputedStyle(imageElem)        // alert('hi')
// alert(computedStyles.background)
clock_element.style.background = computedStyles.background
})
})



const navbar = document.querySelector('.navbar')
const clock_color_scheme = document.querySelector('.clock-color-scheme')
navbar.addEventListener('click', () => {
if (clock_color_scheme.classList.contains('scheme-active')) {
clock_color_scheme.classList.remove('scheme-active')
} else {
clock_color_scheme.classList.add('scheme-active')
}
})




