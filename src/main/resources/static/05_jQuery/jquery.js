//JS
//this
// let arrowFun=()=>{
//     let deneme={
//         adi:"Hamit",
//         soyadi:"Mızrak",
//         hesap:function(){
//             return this.adi
//         }
//     }
// }

//function type
// function deneme(){}
// let deneme2=function(){} //anonymous function
// let deneme3=()=>{}
// ()()

////////////////////////////////////////////////
//jQuery:
//single line comment
/* multiple comment*/

// $(function(){

// });

// $().
//CSS: Group selector(*,+,~),class selector(:),element selector(::)
// $("*").action();
// $(this).action();
// $('p:first').action();

//++ jQuery syntax
// $(h1).action()
// $("div.empty").css()==>boşsa
// $("ul li:first").css()==>tek eleman
// $("ul li:last").css()==>son eleman
// $("ul li:odd").css()==>tekse
// $("ul li:even").css() ==>çiftse
// $(".paragraf_class:contains(deneme)").css()==>paragraf_class içinde deneme varsa
// $("#div_id:has(h1)").css() ==>div_id içinde h1 varsa
// $(function(){
//     // $('ul li').css("color","blue");
//     // $('ul li:first').css("color","blue");
//     // $('ul li:last').css("color","blue");
//     $("ul li:not(':contains(Java)')").css("color","blue");
// });
//++++++++++++++++++++++++++++++++++++++++++++++++++++
//document ready: Script sayfa açılır açılmaz hazır olmasını istiyorsam
//$();
// $(document).ready();
// $(document).ready(function(){});
//anonymous function =document ready
// $(function(){

// });

//////////////////////////////////////////
//jquery function
//CSS-1 tane özellik

//classic dom
// $(function () {
//     let valueDom=document.getElementById("deneme_id");
//     //Dom Css
//     valueDom.style.color="red";
//     //Dom Html
//     valueDom.innerHTML="<b>Dom Html</b>"
    
//     //   $('#deneme_id').css('color', 'red').css("font-size")
//     })


$(function () {
    let valueJquery=$('#deneme_id');
//   $('#deneme_id').css('color', 'red')
// valueJquery.css('color', 'red')
//  $('#deneme_id').css('color', 'red').css("font-size","25px");
// $('#deneme_id').css({
//     // color:"red",
//     "color":"red",
//     "font-size":"25px",
//     "border":"1px solid blue",
//     "margin-top":"5px",
//     "box-shadow":"1px 1px 4px 1px rgba(5,5,5,.8)"
// })
let multipleObject={
    // color:"red",
    "color":"red",
    // fontSize:"25px",
    "font-size":"25px",
    "border":"1px solid blue",
    "margin-top":"5px",
    "box-shadow":"1px 1px 4px 1px rgba(5,5,5,.8)"
}

$('#deneme_id').css(multipleObject)

})


//addClass(),removeClass(),toggleClass()
