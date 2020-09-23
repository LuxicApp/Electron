$(document).ready(function() { 
    $('#musicbarPlayPause').click(function(){
      var src = $("#musicbarPlayPause img").attr('src');
  
      if(src=="assets/cdn/icons/musicbarcontrols.svg#controlPlay")
        $("#musicbarPlayPause img").attr('src',"assets/cdn/icons/musicbarcontrols.svg#controlPause");
      else
        $("#musicbarPlayPause img").attr('src',"assets/cdn/icons/musicbarcontrols.svg#controlPlay");
    });
  });