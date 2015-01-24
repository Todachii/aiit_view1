'use strict';

var is2Under = function(num) {
  var liClass = 'box';
  if(num < 0.2){
    liClass = 'notice-box';
  }
  return liClass;
};

window.onload = function(){
  var arrayRound = [];
  for(var i = 0 ; i < 100 ; i ++){
    arrayRound.push({ num:  Math.round(Math.random()*10000)/10000 } );
  }
  var roundapp = '';
  for(var j = 0; j < arrayRound.length; j++){
    roundapp = roundapp + '<li class="'+is2Under(arrayRound[j].num)+'">'+arrayRound[j].num+'</li>';
  }
  document.getElementById('roundapp').innerHTML = roundapp;
};

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    'callPhantom' in window && window.callPhantom();

  }, 1000);
}, false);
