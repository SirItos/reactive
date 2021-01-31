import { hellper } from './index'
import { state } from '../state'

export default function educationComp(index = 0) {
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
              'Наименование учебного заведения',
              [
                {
                  label: 'name',
                  value: 'sch_name'
                }
              ],
              state.education[index].name,
              'mt-2'
            ),
            getInputTemplate(
              'Период обучения',
              [
                {
                  label: 'name',
                  value: 'sch_period'
                }
              ],
              state.education[index].period,
              'mt-2'
            ),
            getInputTemplate(
              'Полученная специальность',
              [
                {
                  label: 'name',
                  value: 'sch_spec'
                }
              ],
              state.education[index].spec,
              'mt-2'
            ),
            getInputTemplate(
              'Номер диплома',
              [
                {
                  label: 'name',
                  value: 'sch_diplom_number'
                }
              ],
              state.education[index].diplomNumber,
              'mt-2'
            ),
            getInputTemplate(
              'Дата выдачи',
              [
                {
                  label: 'name',
                  value: 'sch_name'
                },
                {
                  label: 'type',
                  value: 'date'
                }
              ],
              state.education[index].diplomDate,
              'mt-2'
            )
          ]
        }
      ]
    }
  ]

  return {
    state,
    template
  }
}
