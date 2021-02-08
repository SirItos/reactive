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
          'mt-2 ',
          false,
          [],
          'input-group col-12 col-sm-6 pr-4'
        ),
        getSelectTemplate({
          state: state.lang[index].lvl,
          label: 'Уровень владения',
          rules: [],
          options: [
            {
              value: '1 - плохое'
            },
            {
              value: '1 - читаю и перевожу со словарем'
            },
            {
              value: '1 - разговорный'
            },
            {
              value: '1 - в совершенстве'
            }
          ],
          req: false,
          container: 'input-group lag-11 col-6 col-sm-6 col-md-6  '
        })
      ]
    }
  ]

  return {
    template
  }
}
