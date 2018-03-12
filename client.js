/*jshint esversion: 6*/
let count = 0;
console.log('top');


$(document).ready(readyNow);
function readyNow(){
  console.log('js doc ready');
  $('#contianer').empty();
  appendToDom();

}

function appendToDom(){

$('#generate').on('click', function (){
  console.log('on click');
$('#container').css('background-color', 'red');
missed();
onClick();
  });//end click
}//end func
function missed(){
  outputElement = $('.buttons');
  $('#generate').on('click');
  outputElement.append('<div id= "something"></div>');
}
function onClick(){
count += 1;
 console.log('count',count);
 $('#container').append(count);
}// cant get this dang thing to  stop being a string

function thing(){
$('#container').append('<button id="swap">Swap</button');
}
console.log('bottom');
