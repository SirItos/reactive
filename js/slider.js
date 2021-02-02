import 'slick-carousel'
import $ from 'jquery'
import { runner, observable } from './observ'
import { validateStep } from './stepValidator'
import { sendRequest, validateCheckbox } from './api'
const data = observable({
  slider: null,
  currentSlide: 0
})

const headers = [
  'Персональные данные',
  'Образование',
  'Опыт работы',
  'Сведения об армии',
  'Состав семьи',
  'Дополнительные вопросы'
]

export const initSlider = (target = '#slider') => {
  data.slider = $(target).slick({
    autoplay: false,
    accessibility: false,
    arrows: false,
    draggable: false,
    infinite: false,
    adaptiveHeight: true
  })
  setMethods()
  runner(changeHeader)
  return data.slider
}

export const resizeSlick = () => {
  data.slider.slick('setPosition')
}

const setMethods = () => {
  $('.next-btn').click((event) => {
    if (validateStep(data.currentSlide)) {
      changeSlide(event)
    }
  })
  $('.prev-btn').click((event) => {
    changeSlide(event, 'slickPrev')
  })
}

export const changeSlide = (event, direction = 'slickNext') => {
  if (!data.slider) return

  if (data.currentSlide === headers.length - 1 && direction === 'slickNext') {
    sendRequest()
    return
  }
  data.slider.slick(direction)
  data.currentSlide = data.slider.slick('slickCurrentSlide')
}

const changeHeader = () => {
  const currentSlide = data.currentSlide
  $('.header-title').text(headers[currentSlide])
  currentSlide > 0 ? $('.prev-btn').fadeIn() : $('.prev-btn').fadeOut()
  $('html, body').animate(
    { scrollTop: $('#questionnaire').offset().top },
    'fast'
  )
  if (currentSlide === headers.length - 1) {
    validateCheckbox(true)
    $('.next-btn').text('Отправить')
  } else {
    validateCheckbox(false)
    $('.next-btn')
      .text('Далее')
      .removeClass('btn-disabled')
      .removeAttr('diabled')
  }
}
