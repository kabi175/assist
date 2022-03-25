import moment from 'moment'
import test from 'unit.js'
import calender from '../src/hooks/calender.js'

const { useCalender, nextMonth, prevMonth, monthNamefromMoment } = calender

describe('test-useCalander', () => {
  it('march 2022', () => {
    const calander = useCalender('March', '2022')
    test.array(calander).hasLength(5)
    test
      .object(calander[0])
      .hasValues({ 0: null, 1: null, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 })
  })

  it('april 2022', () => {
    const calander = useCalender('April', '2022')
    test.array(calander).hasLength(5)
    test
      .object(calander[0])
      .hasValues({ 0: null, 1: null, 2: null, 3: null, 4: null, 5: 1, 6: 2 })
  })
})

describe('test-nextMonth', () => {
  it('april 2022', () => {
    const newDate = nextMonth('April', '2022')
    test
      .object({
        month: newDate.month(),
        year: newDate.year(),
      })
      .hasValues({ month: 4, year: 2022 })
  })
  it('Dec 2022', () => {
    const newDate = nextMonth('December', '2022')
    test
      .object({
        month: newDate.month(),
        year: newDate.year(),
      })
      .hasValues({ month: 0, year: 2023 })
  })
})

describe('test-PrevMonth', () => {
  it('jan 2022', () => {
    const newDate = prevMonth('January', '2022')
    test
      .object({
        month: newDate.month(),
        year: newDate.year(),
      })
      .hasValues({ month: 11, year: 2021 })
  })
  it('april 2022', () => {
    const newDate = prevMonth('April', '2022')
    test
      .object({
        month: newDate.month(),
        year: newDate.year(),
      })
      .hasValues({ month: 2, year: 2022 })
  })
})

describe('test-monthName', () => {
  it('april', () => {
    const month = 'April'
    const date = moment().month(month).year('2022')
    const got = monthNamefromMoment(date)
    test.string(got).is(month)
  })
})
