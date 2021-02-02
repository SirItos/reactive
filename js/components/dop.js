import { hellper } from './index'
import { state } from '../state'

export default function component() {
  const { getInputTemplate } = hellper()
  const template = [
    getInputTemplate(
      'По чьей рекомендации пришли в Банк?',
      [
        {
          label: 'name',
          value: 'who_recomend'
        }
      ],
      state.recomend,
      'mt-2'
    ),
    getInputTemplate(
      'Есть ли у Вас непогашенные кредиты (залог)? Если да, то где :',
      [
        {
          label: 'name',
          value: 'add'
        }
      ],
      state.credit,
      'mt-2',
      true
    ),

    getInputTemplate(
      'С какого времени Вы готовы приступить к работе?',
      [
        {
          label: 'name',
          value: 'when'
        }
      ],
      state.timeToStart,
      null
    )
  ]

  return {
    template
  }
}
