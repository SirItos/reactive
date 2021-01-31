import { hellper } from './index'
import { state } from '../state'

export default function component(index = 0) {
  const { getInputTemplate } = hellper()

  const template = [
    {
      element: {
        tag: 'div',
        classes: 'content-block col-12 full-width__col mt-4 info_block'
      },
      children: [
        {
          element: {
            tag: 'div',
            classes: 'flex flex-center col-12 col-sm-10 col-md-8 mt-4'
          },
          children: [
            getInputTemplate(
              'Название организации',
              [
                {
                  label: 'name',
                  value: 'org_nname'
                }
              ],
              state.work[index].name,
              'mt-2'
            ),
            getInputTemplate(
              'ФИО непосредственного руководителя ',
              [
                {
                  label: 'name',
                  value: 'boss'
                }
              ],
              state.work[index].fioBoss,
              'mt-2'
            ),
            getInputTemplate(
              'Период работы',
              [
                {
                  label: 'name',
                  value: 'work-period'
                }
              ],
              state.work[index].period,
              'mt-2'
            ),
            getInputTemplate(
              'Должность',
              [
                {
                  label: 'name',
                  value: 'lvl'
                }
              ],
              state.work[index].position,
              'mt-2'
            ),
            getInputTemplate(
              'Выполняемая работа',
              [
                {
                  label: 'name',
                  value: 'work_done'
                },
                {
                  label: 'rows',
                  value: 5
                }
              ],
              state.work[index].responsibilities,
              'mt-2',
              true
            ),
            getInputTemplate(
              'Количество подчиненных:',
              [
                {
                  label: 'name',
                  value: 'slaves_number'
                }
              ],
              state.work[index].slaves,
              'mt-2'
            ),
            getInputTemplate(
              'Причина увольнения:',
              [
                {
                  label: 'name',
                  value: 'why_leave'
                },
                {
                  label: 'rows',
                  value: 5
                }
              ],
              state.work[index].reasonForDismissal,
              'mt-2',
              true
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
