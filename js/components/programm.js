import { hellper } from './index'
import { state } from '../state'

export default function component(index = 0) {
  const { getInputTemplate } = hellper()

  const template = [
    {
      element: {
        tag: 'div',
        classes: 'input-group col-12 col-sm-10 col-md-8 '
      },
      children: [
        {
          element: {
            tag: 'div',
            classes: 'col-12 flex full-width__col ',
            inner: 'Программы, которыми владею'
          },
          children: [
            getInputTemplate(
              null,
              [
                {
                  label: 'name',
                  value: 'program_0'
                },
                {
                  label: 'data-id',
                  value: 'prog_0'
                }
              ],
              state.programm[index].name,
              null
            )
          ]
        }
      ]
    }
  ]

  return {
    template
  }
}
