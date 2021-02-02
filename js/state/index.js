import { observable } from '../observ'
import { firstStep } from './firstStep'
import {
  secondStep,
  educationState,
  langState,
  programmState
} from './secondStep'
import { thirdStep, workState } from './thirdStep'
import { fourStep } from './fourStep'
import { fiveStep, familyState } from './fiveStep'
import { sixStep } from './sixStep'

const dict = {
  educationState: JSON.parse(JSON.stringify(educationState)),
  langState: JSON.parse(JSON.stringify(langState)),
  programmState: JSON.parse(JSON.stringify(programmState)),
  workState: JSON.parse(JSON.stringify(workState)),
  familyState: JSON.parse(JSON.stringify(familyState))
}

/**
 * Метод будет копипаститься так как
 * пока не придумал как его красиво и грамотно импортировать во все компоненты
 * так как он завязан на dict и на ${target}Step
 *
 * @param {sting} target
 */
export const addToArray = (target) => {
  console.log(state[target])
  state[target].push(dict[`${target}State`])
  return state[target].length - 1
}

export const state = observable({
  ...firstStep,
  ...secondStep,
  ...thirdStep,
  ...fourStep,
  ...fiveStep,
  ...sixStep
})
