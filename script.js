const slider = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})

// Disable context menu
/*
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}
*/
function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    // https://css-tricks.com/using-requestanimationframe/
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

//Contents 01 Starfruit
let btn1Starfruit = document.getElementById('btn1Starfruit')
let btn1Mango = document.getElementById('btn1Mango')
let btn1Lemon = document.getElementById('btn1Lemon')
let next1 = document.getElementById('next1')


btn1Starfruit.addEventListener('click', function() {
    let audioStarfruit = document.getElementById('audioStarfruit')
    audioStarfruit.play()
    document.getElementById('btn1Starfruit').setAttribute("style", "box-shadow: 0 0 0")
    btn1Starfruit.style.backgroundColor = 'chartreuse'
    btn1Starfruit.style.color = 'red'
    next1.style.visibility = 'visible'
    btn1Mango.disabled = 'true'
    btn1Lemon.disabled = 'true'
})

btn1Mango.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn1Mango').setAttribute("style", "box-shadow: 0 0 0")
    btn1Mango.style.backgroundColor = 'red'
    btn1Mango.style.color = 'yellow'
    btn1Mango.disabled = 'true'
    
})
btn1Lemon.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn1Lemon').setAttribute("style", "box-shadow: 0 0 0")
    btn1Lemon.style.color = 'yellow'
    btn1Lemon.style.backgroundColor = 'red'
    btn1Lemon.disabled = 'true'
})
//Contents 02 Lemon
let btn2Lemon = document.getElementById('btn2Lemon')
let btn2Mango = document.getElementById('btn2Mango')
let btn2Coconut = document.getElementById('btn2Coconut')
let next2 = document.getElementById('next2')


btn2Lemon.addEventListener('click', function() {
    let audioLemon = document.getElementById('audioLemon')
    audioLemon.play()
    document.getElementById('btn2Lemon').setAttribute("style", "box-shadow: 0 0 0")
    btn2Lemon.style.backgroundColor = 'chartreuse'
    btn2Lemon.style.color = 'red'
    next2.style.visibility = 'visible'
    btn2Mango.disabled = 'true'
    btn2Coconut.disabled = 'true'
})

btn2Mango.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn2Mango').setAttribute("style", "box-shadow: 0 0 0")
    btn2Mango.style.backgroundColor = 'red'
    btn2Mango.style.color = 'yellow'
    btn2Mango.disabled = 'true'
    
})

btn2Coconut.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn2Coconut').setAttribute("style", "box-shadow: 0 0 0")
    btn2Coconut.style.backgroundColor = 'red'
    btn2Coconut.style.color = 'yellow'
    btn2Coconut.disabled = 'true'
})
//Contents 03 Mango
let btn3Mango = document.getElementById('btn3Mango')
let btn3Guava = document.getElementById('btn3Guava')
let btn3Coconut = document.getElementById('btn3Coconut')
let next3 = document.getElementById('next3')


btn3Mango.addEventListener('click', function() {
    let audioMango = document.getElementById('audioMango')
    audioMango.play()
    document.getElementById('btn3Mango').setAttribute("style", "box-shadow: 0 0 0")
    btn3Mango.style.backgroundColor = 'chartreuse'
    btn3Mango.style.color = 'red'
    next3.style.visibility = 'visible'
    btn3Guava.disabled = 'true'
    btn3Coconut.disabled = 'true'
})

btn3Guava.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn3Guava').setAttribute("style", "box-shadow: 0 0 0")
    btn3Guava.style.backgroundColor = 'red'
    btn3Guava.style.color = 'yellow'
    btn3Guava.disabled = 'true'
    
})

btn3Coconut.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn3Coconut').setAttribute("style", "box-shadow: 0 0 0")
    btn3Coconut.style.backgroundColor = 'red'
    btn3Coconut.style.color = 'yellow'
    btn3Coconut.disabled = 'true'
})
//Contents 04 Coconut
let btn4Coconut = document.getElementById('btn4Coconut')
let btn4Guava = document.getElementById('btn4Guava')
let btn4Melon = document.getElementById('btn4Melon')
let next4 = document.getElementById('next4')


btn4Coconut.addEventListener('click', function() {
    let audioCoconut = document.getElementById('audioCoconut')
    audioCoconut.play()
    document.getElementById('btn4Coconut').setAttribute("style", "box-shadow: 0 0 0")
    btn4Coconut.style.backgroundColor = 'chartreuse'
    btn4Coconut.style.color = 'red'
    next4.style.visibility = 'visible'
    btn4Guava.disabled = 'true'
    btn4Melon.disabled = 'true'
})

btn4Guava.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn4Guava').setAttribute("style", "box-shadow: 0 0 0")
    btn4Guava.style.backgroundColor = 'red'
    btn4Guava.style.color = 'yellow'
    btn4Guava.disabled = 'true'
    
})

btn4Melon.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn4Melon').setAttribute("style", "box-shadow: 0 0 0")
    btn4Melon.style.backgroundColor = 'red'
    btn4Melon.style.color = 'yellow'
    btn4Melon.disabled = 'true'
})
//Contents 05 Guava
let btn5Guava = document.getElementById('btn5Guava')
let btn5Watermelon = document.getElementById('btn5Watermelon')
let btn5Melon = document.getElementById('btn5Melon')
let next5 = document.getElementById('next5')


btn5Guava.addEventListener('click', function() {
    let audioGuava = document.getElementById('audioGuava')
    audioGuava.play()
    document.getElementById('btn5Guava').setAttribute("style", "box-shadow: 0 0 0")
    btn5Guava.style.backgroundColor = 'chartreuse'
    btn5Guava.style.color = 'red'
    next5.style.visibility = 'visible'
    btn5Watermelon.disabled = 'true'
    btn5Melon.disabled = 'true'
})

btn5Watermelon.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn5Watermelon').setAttribute("style", "box-shadow: 0 0 0")
    btn5Watermelon.style.backgroundColor = 'red'
    btn5Watermelon.style.color = 'yellow'
    btn5Watermelon.disabled = 'true'
    
})

btn5Melon.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn5Melon').setAttribute("style", "box-shadow: 0 0 0")
    btn5Melon.style.backgroundColor = 'red'
    btn5Melon.style.color ='yellow'
    btn5Melon.disabled = 'true'
})
