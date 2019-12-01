function sendAjaxForm(result_form, ajax_form) {
    s="";
    let n = document.forms["form"]["Name"].value;
    if (n == "") {
      s+="Input name\n";
    }
    let e = document.forms["form"]["E-mail"].value;
    if (e == "") {
        s+="Input e-mail\n";
    }
    let c = document.forms["form"]["Comment"].value;
    if (c == "") {
        s+="Input comment\n";
    }
    if(s!=""){
        alert(s);
        return 0;
    }
    else{
        $.ajax({
            url:     "https://formcarry.com/s/hCN-DAf_L1A",
            type:     "POST", //метод отправки
            dataType: "html", //формат данных
            data: $(ajax_form).serialize()
        });    
        document.forms["form"]["Name"].value="";
        document.forms["form"]["E-mail"].value="";
        document.forms["form"]["Comment"].value="";
        alert("Thanks for your comment!");
        } 
    }
