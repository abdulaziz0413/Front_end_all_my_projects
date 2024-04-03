var myVariable1 = 100;
if (true) {
    var myVariable1_1 = 10; // bu faqat shu blok ichida ta'sir qiladi va bu boshqa o'zgaruvchi hisoblanadi
}
console.log(myVariable1); // javob 100 chiqadi bu eng boshidagi o'zgaruvchi hisoblanadi
var myVariable2 = "it's constanta";
//myVariable2="you are right" bu xatolik beradi. Chunki constantaga qayta qiymat berilmaydi
var myVariable3 = true;
if (myVariable3) {
    var myVariable3 = false;
}
console.log(myVariable3); // bu yerda false ga o'zgargan bo'ladi
