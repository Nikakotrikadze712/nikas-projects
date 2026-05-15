//შექმენი ობიექტი ავტომობილების შესახებ --> brand , model , year , color შენიდ დავალებაა რომ შებამისი მეთოდის დახმარებით მიიღო სია სადაც იქნბება კიდევ სიები key , value წყვილებით , შენი დავალებაა კონსოლში გამოიტანო key ები ცალკე value ბი ცალკე(გამოიყენე for ან forEach)
const car = {
  brand: 'BMW',
  model: 'M4',
  year: 2014,
  color: 'Black'
}

const entries = Object.entries(car)

entries.forEach(function(item) {
  console.log('Key:', item[0])
  console.log('Value', item[1])
})