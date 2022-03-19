//tek satır
/* multi line comment*/

// alert("Merhabalar Alert");
// //window: herşeyin atası
// window.alert("Merhabalar Window alert")

// //document: o sayfa demektir.
// document.write("Merhabalar DW")

// Developerler için yapılan değişikliği kodlayıcı gözleminden görmek
// console.log("Merhabalar Console log")
/////////////////////////////////////////////////////////////////////////////////////////////////////
//statement
//var: dynamics variable
// var sayi=44;
// console.log(sayi);

//let,const ES6(2015)

// var x1,x2,x3,x4;
// x1=10;
// x2=20;
// x3=30;
// x4=x1+x2+x3;
// console.log(x4);

// //camel case
// let  letLocal="Bu alan";
// letLocal=55;
// console.log(letLocal);

// //Local ve sabit değişkenlerde kullanıyoruz
// const pi=3.14;
// console.log(pi);

//////////////////////////////////////////////////////////////////
//type: number, string, boolean
// var scope=14.55;
// console.log(typeof scope)

///////////////////////////////////////////////////////////////
// var sayi52="Merhabalar";
// console.log(sayi52);

// //sayı ile başlanmaz
// var 52sayi="Merhabalar";
// console.log(52sayi);

// //_ ile başlanır
// var _sayi="Merhabalar";
// console.log(_sayi);

// //$ ile başlanır
// var $_sayi="Merhabalar";
// console.log($_sayi);

//////////////////////////////////////////////////////////////
//operator
// var x1,x2,x3;

//logic operators
//&&=Ve ||=VeYa  !=not

//mathematics operator
// + - * /=bölüm %=bölümünden kalan

//Comparision operator
// > >= < <= = == === >> <<

//increment X++
//deincrement X--

//postfix increment ++X
//postfix deincrement --X

// x1=10;
// x2=2;
// console.log( (x1-x2) );
// console.log( (x1*x2) )
// console.log( (x1/x2) )
// console.log( (x1%x2 ))
// console.log( (x1+x2) )
// console.log( (x1**x2) ) // 10^2

/////////////////////////////////////////////////////////////
//kullanıcıdan veri almak istiyorum.

//prompt: string döner
// var _sayi= Number(prompt("Lütfen bir sayı giriniz"));
// let sonuc=(_sayi**_sayi);
// console.log(sonuc)

//cast: Number() ===> artık biz sayıya çevirdik
//cast: String() ===> artık biz kelimeye çevirdik

//Escape characters: backslash
// console.log("\"");
// console.log("`");
// console.log("~");

// alert("sonuc ${''}")

//////////////////////////////////////////////////////////////
// // NaN=Not A Number
// console.log(16/"asd")

// // Infinity : sonsuz
// var sayi=3/0;
// console.log(sayi);

/////////////////////////////////////////////////////////
//Math
// console.log(Math.PI)
// console.log(Math.E)

// //Mutlaka Abs olmalı
// console.log(Math.abs(-44))

// console.log(Math.sqrt(Math.abs(-16)))

// console.log(Math.min(1, 2, 3, 6, 4, 5, 6, 8, -999))
// console.log(Math.max(1, 2, 3, 6, 4, 5, 6, 8, -999))

// //aşağı yuvarlamak
// console.log(Math.floor(4, 9))

// //yukarı yuvarlamak
// console.log(Math.ceil(4.1))

// console.log(Math.round(3.4))

// //üslü sayılar
// console.log(Math.pow(4, 2))

// //random:rastgele sayılar üretmek için
// console.log(Math.round(Math.random() * 2 + 1))

//////////////////////////////////////////////////////////

//SAYISAL
// let sayi1=44;
// console.log(sayi1);

// let sayi2=44.23;
// console.log(sayi2);

// //cast(dönüştürme)
// let sayi3=Number("55");
// console.log(sayi3)

// const bilimselGosterim=452e+5;
// console.log(bilimselGosterim)

// //diğer tabanlardan 10luk tabana çevirme
// //2 lik sayı: 0-1
// const binaryNumber=0b1011;
// console.log(binaryNumber)

// //16 lik sayı: 0123456789ABCDEF
// const hexadecimalNumber=0xABC;
// console.log(hexadecimalNumber)

// //10 luk tabandan diğer tabanları
// let sayi4=66;
// console.log(sayi4.toString(2));//binary
// console.log(sayi4.toString(8));//octal
// console.log(sayi4.toString(10));//decimal
// console.log(sayi4.toString(16));//hexadecimal

// //NaN
// const sayi5=44/"asd";
// console.log(sayi5)

// //isNaN
// //Bu sayı değil mi : true dönüyorsa bu sayı değildir.
// console.log(isNaN(sayi5));



//////////////////////////////////////////////////////////
//METINSEL
let metinsel="secret Html5 Css3 js Html5  ";

//kelime harf sayısını verir
//length: harf sayısını verir unutmayalım () yazmıyoruz.
console.log(metinsel.length);

//kelimenin hepsini büyük harfe çevirir
console.log(metinsel.toUpperCase());

//kelimenin hepsini küçük harfe çevirir
console.log(metinsel.toLowerCase());

//vermiş olduğumuz indise karşılık harfi bana döner
//charAt(): 0(sıfır) indistenn başlar
console.log(metinsel.charAt(10));

//indexOf(): soldan sağa doğru arama yapar ilk bulduğu yerin sayısını döner
console.log(metinsel.indexOf("Html5"))

//lastindexOf(): sağa sola doğru arama yapar ilk bulduğu yerin sayısını döner
console.log(metinsel.lastIndexOf("Html5"))

//substring:kelimeyi parçalama
console.log(metinsel.substring(6));
console.log(metinsel.substring(0,6)); //0<=X<6

// trim: boşlukları almak için kullanıyoruz
console.log(metinsel.length)
console.log(metinsel.trim().length)

//replace: değiştirmek için kullanıyoruz
//replace(eskisi,yenisi)
console.log(metinsel.replace(metinsel,"asd"))
