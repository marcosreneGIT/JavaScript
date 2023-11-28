let num = [5, 3, 2, 9, 4]

num[5] = 6
num.push(7)

num.sort()
console.log(`Tamanho: ${num.length}`)
console.log(`Primerio elemento: ${num[0]}`)

console.log('Vetor: ')
for (var i = 0; i < num.length; i++){
    console.log(num[i])
}
i = 0

for (var i in num){
    console.log(num[i])
}

console.log(num.indexOf(2))