$(document).ready(function(){
    $('.anlegen').attr('disabled',true);
    var tag = document.getElementsByName("tag").value;

    $('#tag').keyup(function(){
        if(tag.length !=0){
            $('.anlegen').attr('disabled', false);            
        }else{
            $('.anlegen').attr('disabled',true);
        }
    })
});