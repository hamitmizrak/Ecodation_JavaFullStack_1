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

//CSS-2 tane özellik
// $(function () {
//     let valueJquery=$('#deneme_id');
// //   $('#deneme_id').css('color', 'red')
// // valueJquery.css('color', 'red')
// //  $('#deneme_id').css('color', 'red').css("font-size","25px");
// // $('#deneme_id').css({
// //     // color:"red",
// //     "color":"red",
// //     "font-size":"25px",
// //     "border":"1px solid blue",
// //     "margin-top":"5px",
// //     "box-shadow":"1px 1px 4px 1px rgba(5,5,5,.8)"
// // })


// //CSS-3 tane özellik
// let multipleObject={
//     // color:"red",
//     "color":"red",
//     // fontSize:"25px",
//     "font-size":"25px",
//     "border":"1px solid blue",
//     "margin-top":"5px",
//     "box-shadow":"1px 1px 4px 1px rgba(5,5,5,.8)"
// }

// $('#deneme_id').css(multipleObject)
// })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Html
$(function(){
    $("#deneme_id").html("<b><i>jquery html</i></b>");
    $("#deneme_id2").text("<b><i>jquery html</i></b>");
});


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//value
$(function (){
    $("#adi").val();
})


//Method Effect
//hide:gizlemek show:göstermek
//fade,slide,stop,animate
$("p").hide("fast");
$("p").hide("slow");
$("p").hide(3000);
$("p").hide(2000,function () {
    alert("Gizlendi")
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//click,dblclick,mouseUp,mouseDown
$(function (){
    function gonder(){


    }
   
})

//++++++++++++++++++++++++++++++++++++++++++
//addClass(),removeClass(),toggleClass()

//+++++++++++++++++++++++++++++++++++++++++++
//attr():
//removeAttr()
// $(function () {
//         $("#img_id").attr("width","50%").attr("height","100px")
//     })

//effect: hide,show,
