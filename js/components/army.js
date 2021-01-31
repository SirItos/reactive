import $ from 'jquery'
import { hellper } from './index'
import { resizeSlick } from '../slider'
import { state } from '../state'

export default function component() {
  const { getInputTemplate } = hellper()

  const changeStatus = (event) => {
    const allInputs = $('.army-container').find('input, select')

    allInputs.each(function (index) {
      if (index === 0) return
      event.target.value !== 'военнообязанный(ая)'
        ? $(this)
            .parent()
            .fadeOut('fast', () => {
              resizeSlick()
            })
        : $(this)
            .parent()
            .fadeIn('fast', () => {
              resizeSlick()
            })
    })
  }

  const template = [
    {
      element: {
        tag: 'div',
        classes: 'input-group col-12 col-sm-10 col-md-8  mt-2'
      },
      children: [
        {
          element: {
            tag: 'select',
            classes: 'input-group_select',
            state: state.armyStatus,
            changeAction: changeStatus,
            attrs: []
          },
          children: [
            {
              element: {
                tag: 'option',
                inner: 'военнообязанный(ая)',
                attrs: [
                  {
                    label: 'value',
                    value: 'военнообязанный(ая)'
                  }
                ]
              }
            },
            {
              element: {
                tag: 'option',
                inner: 'невоеннообязанный(ая)',
                attrs: [
                  {
                    label: 'value',
                    value: 'невоеннообязанный(ая)'
                  }
                ]
              }
            },
            {
              element: {
                tag: 'option',
                inner: 'призывник',
                attrs: [
                  {
                    label: 'value',
                    value: 'призывник'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      element: {
        tag: 'div',
        classes: 'col-12 mt-2 army-details flex flex-center'
      },
      children: [
        getInputTemplate(
          'Серия и номер военного билета',
          [
            {
              label: 'name',
              value: 'army_doc'
            },
            { label: 'required', value: 'required' }
          ],
          state.armyDocNumber,
          ''
        ),
        getInputTemplate(
          'Воинское звание ',
          [
            {
              label: 'name',
              value: 'rank'
            },
            { label: 'required', value: 'required' }
          ],
          state.rank,
          ''
        ),
        getInputTemplate(
          'ВУС №',
          [
            {
              label: 'name',
              value: 'army_vys'
            },
            { label: 'required', value: 'required' }
          ],
          state.vus,
          ''
        ),
        getInputTemplate(
          'Состав',
          [
            {
              label: 'name',
              value: 'sostav'
            },
            { label: 'required', value: 'required' }
          ],
          state.parts,
          ''
        ),
        getInputTemplate(
          'Категория и группа учета',
          [
            {
              label: 'name',
              value: 'category'
            },
            { label: 'required', value: 'required' }
          ],
          state.cat,
          ''
        ),
        {
          element: {
            tag: 'div',
            classes: 'col-12 col-sm-10 col-md-8 flex mt-4 mb-4'
          },
          children: [
            {
              element: {
                tag: 'div',
                classes: 'col-9',
                inner: 'Наличие мобилизационного предписания '
              }
            },
            {
              element: {
                tag: 'select',
                classes: 'input-group_select col-3',
                attrs: [],
                state: state.predpis,
                changeAction: (event) => {
                  state.predpis.value = event.target.value
                }
              },
              children: [
                {
                  element: {
                    tag: 'option',
                    inner: 'Да',
                    attrs: [
                      {
                        label: 'value',
                        value: 'yes'
                      }
                    ]
                  }
                },
                {
                  element: {
                    tag: 'option',
                    inner: 'Нет',
                    attrs: [
                      {
                        label: 'value',
                        value: 'no'
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        getInputTemplate(
          'Род войск ',
          [
            {
              label: 'name',
              value: 'army_type'
            },
            { label: 'required', value: 'required' }
          ],
          state.typeOfArmy,
          ''
        ),
        getInputTemplate(
          'Годность к военной службе ',
          [
            {
              label: 'name',
              value: 'fitness '
            },
            { label: 'required', value: 'required' }
          ],
          state.health,
          ''
        ),
        getInputTemplate(
          'Где состоите на военном учете',
          [
            {
              label: 'name',
              value: 'uchet'
            },
            { label: 'required', value: 'required' }
          ],
          state.aramyRegistered,
          ''
        )
      ]
    }
  ]

  return {
    template
  }
}
