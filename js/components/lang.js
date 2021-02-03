import { observable } from '../observ'
import { render } from '../renderFunction'
import { resizeSlick } from '../slider'
import { hellper } from './index'
import { state } from '../state'

export default function component(index = 0) {
  const { getInputTemplate } = hellper()
  state.lang[index].lvl.value = 1
  const changeSelect = (event) => {
    state.lang[index].lvl.value = event.target.value
  }

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
            }
          ],
          state.lang[index].name,
          'mt-2'
        ),
        {
          element: {
            tag: 'div',
            classes: 'col-2 pl-2 flex-center flex'
          },
          children: [
            {
              element: {
                tag: 'select',
                classes: 'input-group_select',
                state: state.lang[index].lvl,
                attrs: [],
                changeAction: changeSelect
              },
              children: [
                {
                  element: {
                    tag: 'option',
                    inner: 1,
                    attrs: [
                      {
                        label: 'value',
                        value: 1
                      }
                    ]
                  }
                },
                {
                  element: {
                    tag: 'option',
                    inner: 2,
                    attrs: [
                      {
                        label: 'value',
                        value: 2
                      }
                    ]
                  }
                },
                {
                  element: {
                    tag: 'option',
                    inner: 3,
                    attrs: [
                      {
                        label: 'value',
                        value: 3
                      }
                    ]
                  }
                },
                {
                  element: {
                    tag: 'option',
                    inner: 4,
                    attrs: [
                      {
                        label: 'value',
                        value: 4
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  return {
    template
  }
}
