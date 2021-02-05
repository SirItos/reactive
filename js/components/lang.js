import { observable } from '../observ'
import { render } from '../renderFunction'
import { resizeSlick } from '../slider'
import { hellper } from './index'
import { state } from '../state'

export default function component(index = 0) {
  const { getInputTemplate, getSelectTemplate } = hellper()

  const template = [
    {
      element: {
        tag: 'div',
        classes: ' col-12 flex justify-between'
      },
      children: [
        getInputTemplate(
          'Иностранный язык',
          [
            {
              label: 'name',
              value: 'lang_0'
            },
            { label: 'required', value: index === 0 ? 'required' : '' }
          ],
          state.lang[index].name,
          'mt-2'
        ),
        getSelectTemplate({
          state: state.lang[index].lvl,
          label: '',
          rules: [],
          options: [
            {
              value: 1
            },
            {
              value: 2
            },
            {
              value: 3
            },
            {
              value: 4
            }
          ],
          req: false,
          container: 'input-group mt-2'
        })
      ]
    }
  ]

  return {
    template
  }
}
