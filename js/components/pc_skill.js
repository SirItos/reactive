import { state } from '../state'
import { hellper } from './index'
export default function component() {
  const { getSelectTemplate } = hellper()

  const template = [
    getSelectTemplate({
      state: state.pc_skill,
      label: 'Уровень владения компьютером',
      rules: [],
      req: true,
      options: [
        {
          value: 'программист'
        },
        {
          value: 'хороший пользователь'
        },
        {
          value: 'пользователь'
        },
        {
          value: 'не работаю'
        }
      ]
    })
  ]

  return {
    template
  }
}
