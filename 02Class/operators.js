var sellinPrice = 199
var actualPrice = 799

var discountPercent = ((sellinPrice + actualPrice)/actualPrice)  * 100

console.log(discountPercent)
displayPrice = Math.round(discountPercent)

console.log(displayPrice)

console.log(typeof displayPrice)