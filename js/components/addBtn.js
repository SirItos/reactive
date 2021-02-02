import { hellper } from './index'
import { render } from '../renderFunction'
import { resizeSlick } from '../slider'
import { addToArray } from '../state'
import education from './education'
import lang from './lang'
import programm from './programm'
import work from './work'
import family from './family'

export default function component({ target, text }) {
  const { btnTemplate } = hellper()

  const compDict = { education, lang, programm, work, family }
  const addAction = () => {
    const newIndex = addToArray(target)
    const root = document.querySelector(`#questionnaire .${target}-container`)
    compDict[target](newIndex).template.forEach((element) => {
      render(element, root)
    })
    resizeSlick()
  }
  const template = [btnTemplate(text, addAction)]

  return {
    template
  }
}
