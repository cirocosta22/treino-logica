const button = document.getElementById('convert-button')
const select = document.getElementById('convert-select')
const dolar = 5.4
const euro = 5.9

const convertValues = () => {
  const input = document.getElementById('convert-input').value
  const realValue = document.getElementById('real-value-text')
  const realvalueDolar = document.getElementById('real-value-dolar')
  if (select.value === 'U$ Dolar americano') {
    realValue.innerHTML = 'R$ ' + input
    realvalueDolar.innerHTML = 'US$ ' + input / dolar.toFixed()
  }
  if (select.value === '€ Euro') {
    realValue.innerHTML = 'R$ ' + input
    realvalueDolar.innerHTML = '€' + input / euro.toFixed()
  }
}

const convertSelect = () => {
  const currencyName = document.getElementById('currency-name')
  const currencyImg = document.getElementById('currency-img')

  if (select.value === '€ Euro') {
    currencyName.innerHTML = '€ Euro'
    currencyImg.src = './img/Design sem nome 1.png'
  } else {
    currencyName.innerHTML = 'Dolar Americano'

    currencyImg.src = './img/estados-unidos (1) 1.png'
  }
}
button.addEventListener('click', convertValues)
select.addEventListener('change', convertSelect)
