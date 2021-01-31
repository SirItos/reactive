import '../sass/app.sass'
import 'slick-carousel/slick/slick.css'
import $ from 'jquery'
import './jobManager.js'
import './renderFunction.js'
import addBtn from './components/addBtn'
import { componetns } from './components'
import { render } from './renderFunction.js'
import { initSlider } from './slider'
import { setRipple } from './ripple'

const comps = componetns()
const addBtnArray = [
  { target: 'education', text: 'Добавить место обучения' },
  { target: 'work', text: 'Добавить место работы' },
  { target: 'family', text: 'Добавить члена семьи' },
  { target: 'lang', text: 'Добавить язык' },
  { target: 'programm', text: 'Добавить программу' }
]
$(document).ready(() => {
  initSlider('#slider')
  Object.keys(comps).forEach((key) => {
    const root = document.querySelector(`#questionnaire .${key}-container`)

    comps[key].template.forEach((element) => {
      render(element, root)
    })
  })
  addBtnArray.forEach((item) => {
    const root = document.querySelector(
      `#questionnaire .add_${item.target}-container`
    )
    addBtn(item).template.forEach((element) => {
      render(element, root)
    })
  })
  setRipple()
})
