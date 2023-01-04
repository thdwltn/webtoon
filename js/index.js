// install
// import
import $ from 'jquery'

$(function(){


  // $(mouse).onmouseover = function(){
  //   over();
  // }
over();
close();
open();
})

function over(){
  $('.main>ul>li').on('mouseenter',function(e){
    $(this).children('div.see').css({display:'block'}).fadeIn()
  })
  $('.main>ul>li').on('mouseleave',function(e){
    $(this).children('div.see').css({display:'none'}).fadeOut()
  })
}

function close(){
  $('.close').on('click',function(e){
    $('.fix').css('display','none')
  })
}

function open(){
  $('.event>p').on('click',function(e){
    $('.main').css({display:'block'})
  })
}


//   
//   
//  $mouse.on('mouseenter',function(e){
// 
//     $see.css({display:'block',transform:'scale(1.1)'});
//   })
