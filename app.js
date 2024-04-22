//Global function
 //output: یک هزار و دویست و پنجاه
console.log(Num2persian(1250))

//String Prototype
 //output: دو هزار و یک
console.log("2001".num2persian())
//Non-Digits
"%20s01".num2persian(); //output: دو هزار و یک
"2,001".num2persian(); //output: دو هزار و یک

//Number Prototype
(84000).num2persian(); //output: هشتاد و چهار هزار

//Float
(12.450).num2persian(); //output: دوازده ممیز چهل و پنج صدم

//Negative numbers
(-11).num2persian(); //output: منفی یازده
