const students = [
  { name: 'ciro', vip: true },
  { name: 'eva', vip: false },
  { name: 'vera', vip: true },
  { name: 'barto', vip: true },
  { name: 'robson', vip: false }
]

const JustVips = students.filter(item => item.vip)
console.log(JustVips)

const List = [20, 3, 2, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = List.filter(number => {
  if (number % 2 !== 0) return false
  if (number % 5 !== 0) return false

  return true
})
console.log(newList)

const companies = [
  { name: 'sansung', marketValue: 50, CEO: 'kim Hyun Suk', foundedOn: 1938 },
  { name: 'Microsoft', marketValue: 415, CEO: 'kim Hyun Suk', foundedOn: 1975 },
  { name: 'Intel', marketValue: 117, CEO: 'kim Hyun Suk', foundedOn: 1968 },
  { name: 'Facebook', marketValue: 383, CEO: 'kim Hyun Suk', foundedOn: 2004 },
  { name: 'Spotify', marketValue: 30, CEO: 'kim Hyun Suk', foundedOn: 2006 },
  { name: 'Apple', marketValue: 845, CEO: 'kim Hyun Suk', foundedOn: 1976 }
]
const newCompanies = companies.filter(ano => {
  return ano.foundedOn > 1975 && ano.marketValue >= 200
})
console.log(newCompanies)
