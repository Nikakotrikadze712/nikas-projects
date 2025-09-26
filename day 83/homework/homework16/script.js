let tempeerature = Number(prompt('enter temperature: '))
if(tempeerature <= 0) {
    console.log('Freezing')
}
else if(tempeerature <= 25) {
    console.log('warm')
}
else{
    console.log('Hot')
}