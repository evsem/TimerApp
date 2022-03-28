//DOMContentLoaded - только при первичной загрузке сайта
document.addEventListener('DOMContentLoaded', () => {
  //Устанавливаем дату, до которой будет работать таймер
  const newDate = new Date('Apr 1 2022 00:00:00')

  //Получаем статичные значения через классы
  let daysVal = document.querySelector('.box_itemTimer__days .itemTimer_value')
  let hoursVal = document.querySelector(
    '.box_itemTimer__hours .itemTimer_value'
  )
  let minutesVal = document.querySelector(
    '.box_itemTimer__minutes .itemTimer_value'
  )
  let secondsVal = document.querySelector(
    '.box_itemTimer__seconds .itemTimer_value'
  )

  //Сама функция отсчёта времени
  const timeCount = () => {
    //Находим текущее значение времени
    let now = new Date()

    //Сколько дней осталось
    let leftUntil = newDate - now

    //Перевод миллисекунд в дни, часы, минуты и секунды
    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24)
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60
    let seconds = Math.floor(leftUntil / 1000) % 60

    //Вносим вышеопределённые значения в зарезервированные переменные
    daysVal.textContent = days
    hoursVal.textContent = hours
    minutesVal.textContent = minutes
    secondsVal.textContent = seconds
  }

  //Важно сначала вызвать саму функцию, затем только эту же функцию в интервале, иначе отсчёт начнётся только через секунду после загрузки страницы
  timeCount()
  setInterval(timeCount, 1000)
})
