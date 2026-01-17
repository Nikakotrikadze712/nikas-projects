function persistence(num) {
   let str = String(num)
   let count = 0
   
   while (str.length > 1) {
     let amplify = 1
     for (let i = 0;i < str.length;i++) {
       amplify *= Number(str[i])
     }
     str = String(amplify)
     count++
   }
  return count
}