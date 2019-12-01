function validate() {
    let a = document.forms["form"]["name"].value;
    if (a == "") {
        alert("Input name");
        return false;
    }
    let b = document.forms["form"]["E-mail"].value;
    if (b == "") {
        alert("Input e-mail");
        return false;
    }
    let a = document.forms["form"]["Comment"].value;
    if (a == "") {
        alert("Input Comment");
        return false;
    }
  }
  $('#form').submit(function(e){
    e.preventDefault();
    let a;
    if (document.forms["form"]["name"].value != "" && document.forms["form"]["E-mail"].value !="" && document.forms["form"]["Comment"].valuex !="")
    $.ajax({
        type:"POST",
        url:"https://formcarry.com",
        data:$(this).serialize()
    })
    if (document.forms["form"]["name"].value != "" && document.forms["form"]["E-mail"].value !="" && document.forms["form"]["Comment"].value !="")
    {
        a=function done(){
        $(this).find("input").val("");
        alert("Thanks for you comment!");
        $('#form').trigger("reset");
    } 
}
    else {
       a=function fail(){
        alert("Wrong");
    }
}   
    a();
    return false;
  });

$('document').ready(function(){
$('.button').on('click', function(e){      
    e.preventDefault();
    let href = $(this).attr('href');
    getContent(href, true);
});

$('.close').click(function(){
     $('.pop_up').fadeOut();
     $('main').css('filter','none');
     window.history.back();
  });
});

window.addEventListener("popstate", function(e) {
getContent(location.pathname, false);
});

function getContent(url, addEntry) {
    if(addEntry === true) {
     $('.pop_up').fadeIn();
     $('main').css('filter','blur(5px)');
     window.history.pushState({page:1}, null, '?#form_popup');}
     else {
         $('.pop_up').fadeOut();
         $('main').css('filter','none');
         window.history.replaceState({page:0},null,'https://dadenusto2.github.io/');
     }
    }
