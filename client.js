/*jshint esversion: 6*/

console.log('top');

$(document).ready(readyNow);
function readyNow(){
  console.log('js doc ready');
  appendToDom();
}

function appendToDom(){
$('#generate').on('click', function(){
  console.log('on click');
$('#container').css('background-color', 'red');
  });//end click
}//end func





console.log('bottom');
