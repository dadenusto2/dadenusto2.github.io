function openbox(box){
    if(document.body.clientWidth <= 425)
        id=arguments[0];
    else id=arguments[0] + 8;
    display = document.getElementById(id).style.display;
    for(i=1;i<17;i++){
        if(document.getElementById(i).style.display=='block'){
            document.getElementById(i).style.display='none';
        }
    }  
    for(i=21;i<37;i++){
        if(document.getElementById(i).style.display=='block'){
            document.getElementById(i).style.display='none';
        }
    }
    for(i=41;i<57;i++){
        if(document.getElementById(i).style.display=='block'){
            document.getElementById(i).style.display='none';
        }
    }
    if(display=='none'){
          document.getElementById(id).style.display='block';
    }else{
          document.getElementById(id).style.display='none';
    }
}
/* Article FructCode.com */
$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     "https://formcarry.com/s/P7UpH6DEyGf",
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	$('#result_form').html('Name: '+result.Name+'<br>E-mail: '+result.email+'<br>Comment: '+result.Comment);
    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
    	}
 	});
}
  
