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
