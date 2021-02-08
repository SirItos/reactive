import $ from 'jquery'
import { hellper } from './index'
import { resizeSlick } from '../slider'
import { state } from '../state'

export default function component() {
  const { getInputTemplate, getSelectTemplate } = hellper()
  state.armyStatus.value = null
  const changeStatus = () => {
    const test = state.armyStatus.value
    const allInputs = $('.army-container').find('input, select,.predpis_label')
    allInputs.each(function (index) {
      if (index === 0) return

      test !== 'военнообязанный(ая)'
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
    getSelectTemplate({
      state: state.armyStatus,
      label: 'Сведения о военной службе',
      rules: [],
      req: true,
      change: changeStatus,
      options: [
        {
          value: 'военнообязанный(ая)'
        },
        {
          value: 'невоеннообязанный(ая)'
        },
        {
          value: 'призывник'
        }
      ]
    }),

    {
      element: {
        tag: 'div',
        classes: 'col-12 mt-2 army-details flex flex-center '
      },
      children: [
        getInputTemplate(
          'Серия и номер военного билета',
          [
            {
              label: 'name',
              value: 'army_doc'
            }
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
            }
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
            }
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
            }
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
            }
          ],
          state.cat,
          ''
        ),

        {
          element: {
            tag: 'div',
            classes: 'col-12 col-sm-10 col-md-8 flex mt-4 mb-4 predpis_label'
          },
          children: [
            {
              element: {
                tag: 'div',
                classes: 'col-9',
                inner: 'Наличие мобилизационного предписания '
              }
            },
            getSelectTemplate({
              state: state.predpis,
              label: '',
              rules: [],

              change: changeStatus,
              options: [
                {
                  value: 'Да'
                },
                {
                  value: 'Нет'
                }
              ],
              container: 'input-group col-3'
            })
          ]
        },
        getInputTemplate(
          'Род войск ',
          [
            {
              label: 'name',
              value: 'army_type'
            }
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
            }
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
            }
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
