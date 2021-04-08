const faker = require('faker');
const moment = require('moment');

const fake_data = (lastHour, pointsPerHour) => {
  let data = []
  let date = moment().subtract(12, 'hours');
  for (let i = 0; i < lastHour * pointsPerHour; i ++) {
    date.add(60 / pointsPerHour, 'minutes')
    data.push({
      x: date.format('YYYY-MM-DD HH:mm'),
      y: faker.datatype.number({min:5000, max:10000})
    })
  }
  return data
}

export default async (req, res) => {
  let chartData;
  switch(req.query?.period) {
    case '1h':
      chartData = fake_data(1, 12)
      break;
    case '6h':
      chartData = fake_data(6, 4)
      break;
    case '12h':
      chartData = fake_data(12, 2)
      break;
    case '24h':
      chartData = fake_data(24, 1)
      break;
    case '72h':
      chartData = fake_data(72, 1)
      break;
    default:
      chartData = fake_data(12, 2)
  }
  res.json(JSON.stringify({ chart: chartData }))
}