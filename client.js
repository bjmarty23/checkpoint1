/*jshint esversion: 6*/

console.log('top');

$(document).ready(readyNow);
function readyNow(){
  console.log('js doc ready');
}

function click(){
  $('generate').on('click');
}

console.log('bottom');
