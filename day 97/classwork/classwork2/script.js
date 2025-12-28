var number = function(busStops){
  let array1 = 0
  let array2 = 0
  for (let i = 0; i < busStops.length;i++) {
    array1 += busStops[i][0]
    array2 += busStops [i][1]
  }
  return array1 - array2
}