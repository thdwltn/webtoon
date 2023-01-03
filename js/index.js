function side(){
  $('aside .side>.front').on('click',function(e){
      $(this).animate({marginRight:100+'px'},400)
      return false;
  })
}