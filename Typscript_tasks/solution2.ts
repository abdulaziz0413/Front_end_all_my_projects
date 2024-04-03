let myVariable1: number = 100
if (true) {
    let myVariable1: number = 10; // bu faqat shu blok ichida ta'sir qiladi va bu boshqa o'zgaruvchi hisoblanadi
}
console.log(myVariable1); // javob 100 chiqadi bu eng boshidagi o'zgaruvchi hisoblanadi

const myVariable2: string = "it's constanta";
//myVariable2="you are right" bu xatolik beradi. Chunki constantaga qayta qiymat berilmaydi




    var myVariable3: boolean = true;
    if (myVariable3) {
        var myVariable3: boolean = false; 
    }
    console.log(myVariable3); // bu yerda false ga o'zgargan bo'ladi




