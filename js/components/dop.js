import { hellper } from './index'

export default function component() {
  const { getInputTemplate } = hellper()
  const template = [
    getInputTemplate(
      'По чьей рекомендации пришли в Банк?',
      [
        {
          label: 'name',
          value: 'who_recomend'
        },

        { label: 'required', value: 'required' }
      ],
      null,
      'mt-2'
    ),
    getInputTemplate(
      'Есть ли у Вас непогашенные кредиты (залог)? Если да, то где :',
      [
        {
          label: 'name',
          value: 'add'
        },

        { label: 'required', value: 'required' }
      ],
      null,
      'mt-2',
      true
    ),

    getInputTemplate(
      'С какого времени Вы готовы приступить к работе?',
      [
        {
          label: 'name',
          value: 'when'
        },
        { label: 'required', value: 'required' }
      ],
      null,
      null
    )
  ]

  return {
    template
  }
}
