//templatem js
/* */

//Form Register
$(function () {
  $('#btnSubmit').click(function () {
    // alert("Tıkladı")

    //input değerlerini almak
    let nameInput, emailInput, passwordInput, telNumberInput
    nameInput = $('#name_surname').val();
    // nameInput = jQuery.trim(nameInput);

    emailInput = $('#email').val();
    // emailInput = jQuery.trim(emailInput);

    passwordInput = $('#password').val();
    // passwordInput = jQuery.trim(passwordInput);

    telNumberInput = $('#tel_number').val();
    // telNumberInput = jQuery.trim(telNumberInput);

    //validata data
    //validation_name , validation_email  , validation_password , validation_number
    let validationName, validationEmail, validationPassword, validationNumber
    validationName = $('#validation_name')
    validationEmail = $('#validation_email')
    validationPassword = $('#validation_password')
    validationNumber = $('#validation_number')
 
    //validation control
    //NAME SURNAME
    if (nameInput == '') {
      $(validationName).html('Adı veya Soyadı boş geçilemez ...');
    }else if(nameInput != ''){
        $(validationName).html('');
    }

     //PASSWORD
     if (passwordInput == '') {
        $(validationPassword).html('Şifre Boş geçilemez ...');
      }else if(passwordInput != ''){
        $(validationPassword).html('');
    }

    //EMAİL
    if (emailInput == '') {
      $(validationEmail).html('Email boş geçilemez ...');
    } else if (validateEmail(emailInput)==false) {
      $(validationEmail).html('Email uygun formatta yazmadınız ...');
    } 
  //   else if(emailInput.length<30){
  //     $(validationEmail).html('Email 30 karakterden küçük olamaz ...');
  // }
     else {
        $(validationEmail).html('');
    }

    //TEL NUMBER
    if (telNumberInput == '') {
      $(validationNumber).html('Telefon numarası boş geçilemez ...');
      
    } else if (validatePhone(validationNumber)==false) {
        $(validationNumber).html("Sayı girmelisiniz veya 'Telefon numarası uygun formatta yazmadınız");
    }


    //regex Email
    function validateEmail(email){
        var regex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }


    //regex number
    //https://regexr.com/3c53v
    function validatePhone(telephone){
        var regex= /^\(?([0-9]{3})\)?([0-9]{3})?([0-9]{4})$/;
        let deneme=regex.test(telephone);
        return deneme ;
    }

  })
})
