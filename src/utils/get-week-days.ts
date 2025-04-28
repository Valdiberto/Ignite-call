interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  const weekdays = Array.from(Array(7).keys())
    .map((day) => {
      const weekDay = formatter.format(new Date(Date.UTC(2021, 5, day)))
      if (!weekDay || weekDay.trim() === '') {
        console.error('Empty string encountered for weekday:', day)
        return '' // Garantir que não passaremos um valor vazio
      }
      return weekDay
    })
    .filter((weekDay) => weekDay !== '') // Filtra strings vazias

  return weekdays.map((weekDay) => {
    if (short) {
      return weekDay.substring(0, 3).toUpperCase()
    }
    return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
  })
}
