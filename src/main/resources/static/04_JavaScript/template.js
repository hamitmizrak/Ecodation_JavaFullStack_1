//tek satır
/* multi line comment*/

// alert("Merhabalar Alert");
// window: herşeyin tepesindeki object
// window.alert("Merhabalar Window alert")

// document: o sayfa demektir.
// document.write("Merhabalar DW")

// Developerler için yapılan değişikliği kodlayıcı gözleminden görmek
// console.log("Merhabalar Console log")
/////////////////////////////////////////////////////////////////////////////////////////////////////
//statement
// var: dynamics variable
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
// NaN=Not A Number
// console.log(16/"asd")

// Infinity : sonsuz
// var sayi=3/0;
// console.log(sayi);

// Bu sayı değil mi : true dönüyorsa bu sayı değildir.
// console.log(isNaN(sayi5));

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
//tamsayı
// let sayi1=44;
// console.log(sayi1);

//virgüllü sayı
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
// let metinsel="secret Html5 Css3 js Html5  ";

// //kelime harf sayısını verir
// //length: harf sayısını verir unutmayalım () yazmıyoruz.
// console.log(metinsel.length);

// //kelimenin hepsini büyük harfe çevirir
// console.log(metinsel.toUpperCase());

// //kelimenin hepsini küçük harfe çevirir
// console.log(metinsel.toLowerCase());

// //vermiş olduğumuz indise karşılık harfi bana döner
// //charAt(): 0(sıfır) indisten başlar
// //alternative: charCodeAt()
// console.log(metinsel.charAt(10));

// //indexOf(): soldan sağa doğru arama yapar ilk bulduğu yerin sayısını döner
// //alternatice: search()
// console.log(metinsel.indexOf("Html5"))

// //lastindexOf(): sağa sola doğru arama yapar ilk bulduğu yerin sayısını döner
// console.log(metinsel.lastIndexOf("Html5"))

// //substring:kelimeyi parçalama
// //alternative:slice()
// console.log(metinsel.substring(6));
// console.log(metinsel.substring(0,6)); //0<=X<6

// // trim: boşlukları almak için kullanıyoruz
// console.log(metinsel.length)
// console.log(metinsel.trim().length)

// //replace: değiştirmek için kullanıyoruz
// //replace(eskisi,yenisi)
// console.log(metinsel.replace(metinsel,"asd"))
// let kelime=metinsel.split("*");
// alert("data:  "+kelime);

/////////////////////////////////////////////
// try {
//   alet('Merhablar');
// } catch (error) {
//   alert("name:"+error.name)
//   alert("message"+error.message)
//   throw  "Doğru yaz"; //kendi istisna durumumuzu oluşturuyoruz.
// } finally {
//   console.log('db.close')
//   console.log('port.close')
// }

/////////////////////////////////////////////
//function-1
//kod tekrarlarımızın önüne geçmek,
//clean code yazmamıza yardımcı
//okunarbiliriğini artırmak
//proje  hızlı sağlamak

// //function-1.1
// function hesaplama() {
//   let x1, x2, x3
//   x1 = 10
//   x2 = 20
//   x3 = x1 + x2
//   console.log(x3)
// }
//hesaplama();

//function-1.2 ==> Parametreli
// function hesaplama2(x1, x2) {
//   let x3
//   x3 = x1 + x2
//   console.log(x3)
// }
//hesaplama2(10,20);

//function-1.3 ==> return
// function hesaplama2(x1, x2) {
//   return x1 + x2
// }
//değişkeni başka bir hesaplamada kullanmak istersek
// let cay = hesaplama2(10, 20);
//console.log(cay)

// function-2
// normal
// function ekrandaYaz1() {
//   console.log('Normal Ekranda göster')
// }
//ekrandaYaz1();

// değişkenli function
// let isimsiz1 = function ekrandaYaz2() {
//   console.log('değişkenli function')
// }
//isimsiz1();

//anonymous function : isimsiz fonksiyon
// let isimsiz2 = function () {
//   console.log('anonymous function')
// }
//isimsiz2();

//function-3
//arrow function : ok fonksiyon
// ()=>{}
// let arrow = () => {
//   console.log('arrow function ')
// }
//arrow();

//function-4
//Immedia Function: fonksiyonu çağırmadan kullanıyoruz.
// ()()
// (function ekrandaYaz2() {
//   console.log('değişkenli function')
// })()

/////////////////////////////////////////////
//isim ve soyisimi console çıktısı gösterecek
// 1-)Normal Function
// 2-)değişkenli function
// 3-)anonymous
// 4-)arrow function ()=>{}
// 5-)Hemen function ()()

///////////////////////////////////////////////
//condition
// let karar=()=>{
//     let sayi="5";

//     if(sayi===5){
//         console.log("sayı 5 tir")
//     }else{
//         console.log("farklıdır")
//     }
// }
// karar();

// //ternary
// let karar2=()=>{
// //ternary: ya dpğru ya yanlış ==> ()?:;
// let sayi="5";
// console.log((sayi===5) ?"sayı 5 tir":"farklıdır")
// }
// karar2();

// //çoklu if -elseif-else
// let karar3 = () => {
//   let sayi = 5

//   if (sayi === 1) {
//     console.log('sayı 1 tir')
//   } else if (sayi == 2) {
//     console.log('sayı 2 tir')
//   } else if (sayi == 3) {
//     console.log('sayı 3 tir')
//   } else if (sayi == 4) {
//     console.log('sayı 4 tir')
//   } else if (sayi == 5) {
//     console.log('sayı 5 tir')
//   } else {
//     console.log('farklıdır')
//   }
// }
// karar3()

// //switch case
// let karar4 = () => {
//     let sayi = 5
//     switch (sayi) {
//       case 1:
//         console.log('sayı 1 tir')
//         break

//       case 2:
//         console.log('sayı 2 tir')
//         break

//       case 3:
//         console.log('sayı 3 tir')
//         break

//       case 4:
//         console.log('sayı 4 tir')
//         break
//       case 5:
//         console.log('sayı 5 tir')
//         break

//       default:
//         console.log('farklıdır')
//         break
//     }
//   }
//   karar4();

//////////////////////////////////////////////////////
//Loop
// console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12);

//FOR
//Başlangıç: let i=1
//Bitiş: i<=10
//artırmak i++
//artırmak i=i+1
//artırmak i+=1
// for(let i=1; i<=10; i+=1){
// console.log(i+". sayı")
// }

//while
//Başlangıç: let i=1
//Bitiş: i<=10
//artırmak i++
//artırmak i=i+1
//artırmak i+=1
// while(true){
// }

// let k=1;
// while(k<=10){
//     console.log(k+". sayı")
//     k++;
// }


//do-while
// let m=1;
// do {
//     console.log("ister şart sağlansın ister sağlamasın 1 kere çalışır"+m)
//     m++;
// } while (m==1);

// console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12)
//toplamada etkisiz eleman 0

// let sum = 0 //başlangıç
// for (let index = 1; index <= 100; index++) {
//   sum = sum + index
// }
// console.log(sum)

// kullanıcıdan alına bir sayıyı negatif mi pozitif mi? arrow function
// let isNegative = () => {
//   let number = Number(prompt('Lütfen bir sayı giriniz'))
//   let result = number < 0 ? 'negatiftir' : 'pozitiftir'
//   console.log(result)
// }
//isNegative();

//continue:Es geçer
//break:döngünün çalışmasını engeller(durdurur)
//return:metodun çalışmasını engeller(durdurur)

// let number5 = () => {
//   let sum = 0 //başlangıç
//   for (let index = 1; index <= 10; index++) {
//     if(index>=8) break;
//       if(index==4){
//           continue; 
//       }
//     sum = sum + index
//   }
//   console.log("sonuç: "+sum)
// }
// number5();


//S-1)
//a-1) 1-10 arasındaki tek çift sayılar
//a-2) 1-10 arasındaki 4 dahil olmayacak ==> continue
//a-3-) 1-100 arasında 5'e bölünebilen kaç tane sayı vardır ve bu sayılar?
// let isEven = () => {
//   let number = Number(prompt('Lütfen bir sayı giriniz'))
//   let result = number % 2 == 0 ? 'çifttir' : 'tektir'
//   console.log(result)
// }
// isEven()

//dereceyi fahrenhayta çeviren function yazalım ?
//Mutlak değer hesaplayan function yazalım ? Math.abs() ?
//üslü sayı alan fonksiyon yazalım Math.pow()
//v.k.i E B
//Kullanıcıdan aldığımız adımız ve soyadımızı string metotlarını kullanacağız.

//Kullanıcıdan aldığımız kelime ismi (Hamit) soyismi (Mızrak) maskeleme yapalım ?
//H**** M*****
//Htm5-css3-js-jquery
//////////////////////////////////////////////////////////////////////////////////
//let dizi=[66,"İstanbul","Ankara",true,"Nevşehir","Bolu","Malatya"];
//push()     ==>sona 1 eleman eklemek
//unshift()  ==>baştan 1 eleman eklemek
//pop()      ==>sondan 1 eleman çıkar
//shift()    ==>baştan 1 eleman çıkar
//in         ==>döngü(indis,eleman)
//of(eleman) ==>döngü(eleman)
//delete     ==>eleman silmek
//concat     ==>sona String düzeyde eklemek
//join     ==>Her bir elamanın sonua eklmek 
//toString() ==> Dizideki elemanları String'e çevirir

//Diziler: elemaları bir bütün olarak saklamak ve kullanmak için kullanıyoruz.
//diziler: sıfır(indisinde) başlar

/////////////////////////////////////
// console.log(dizi);
// console.log(dizi[8].concat(" -sona eklenenen"));
// console.log(Number(dizi[0]));

/////////////////////////////////////
//ELEMAN EKLEMEK
//push(): sona eleman eklemek.
//unshift(): başa eleman eklemek
// dizi.push("Battalgazi");
// dizi.unshift("Yeşilyurt");
// for(let i=0; i<dizi.length; i++){
//   console.log(dizi[i]);
// }
// console.log("*************************************")

/////////////////////////////////////
//ELEMAN ÇIKARMAK
//pop():sondan eleman çıkarmak.
//shift():baştan eleman çıkarmak
// dizi.pop();
// dizi.shift()

/////////////////////////////////////
//iterative for
// for(let i=0; i<dizi.length; i++){
//   console.log(dizi[i]);
// }

/////////////////////////////////////
//in: indisi(key) verir
// for(temp in dizi ){
//   console.log(temp)
// }
// console.log("*****************************")

// for(temp in dizi ){
//   console.log(temp+" "+ dizi[temp] );
// }

/////////////////////////////////////
//of: value(değeri) verir
// for(temp of dizi ){
//   console.log(temp)
// }

//console.log(dizi);
/////////////////////////////////////
//delete: dizi elemanı silmek için kullanıyoruz.
// delete dizi[0];

// for(temp of dizi){
//   console.log(temp)
// }

/////////////////////////////////////
//reverse: elemanları tersine çevirir
// alert(dizi.reverse())

/////////////////////////////////////
//concat(): sadece son eleman eklemek
//join(): Her bir elemanının sona eklemek
// alert(dizi.concat("* "))
// alert(dizi.join(".eco "))

/////////////////////////////////////
//toString() ==> Dizideki elemanları String'e çevirir
// alert(dizi.toString());


///////////////////////////////////////////////////////////////////////
//Object
// var person={
//   adi:"Hamit",
//   soyadi:"Mızrak",
//   meslek:true,
//   ilPlaka:44,
//   java:["Java se","Java ee","Spring Framework"],
//   insan:{}
// };
// console.log(person)

//1.Function
// function isGreater(number){
// let result= (number>10) ? "büyük":"küçük";
// console.log(result);
// }
// console.log( isGreater(person.java[0].length)   )

//2.Function : anonymous function
// let anonymous = function (number){
//   let result= (number>10) ? "büyük":"küçük";
//   console.log(result);
//   }
//   console.log( anonymous(person.java[0].length)   )

//3.function :arrow function
// let arrow = (number)=>{
//   let result= (number>10) ? "büyük":"küçük";
//   console.log(result);
//   }
//   console.log( arrow(person.java[0].length)   )

//4.function: Immedia Function
// var sonuc = person.java[0].length;
// (function(temp){
//   let result= (temp>10) ? "büyük":"küçük";
//   console.log(result);
// }(sonuc))


// Debug nedir ?
// Debug nasıl atılır ?
// Ctrl+Shift+D
// var sayi1=10;
// var sayi2=20;
// var sonuc=sayi1+sayi2;
// console.log(sonuc);


////////////////////////////////////////////
//Event:
// function toplama(){
//   var x1=10;
//   var x2=20;
//   alert(x1+x2);
// }


//DOM :
function domFunction(){
  //Html 
  document.getElementById("dom_id").innerHTML="<b>Artık Dom Himayesindesin</b>";
  //document.getElementById("dom_id").innerText="Artık Dom Himayesindesin";
  //document.getElementsByTagName("p")[0].innerHTML="<b>Artık Dom Himayesindesin</b>";
  
  //css
  document.getElementById("dom_id").style.fontSize="45px";
  document.getElementById("dom_id").style.background="red";
  document.getElementById("dom_id").style.color="white";
}