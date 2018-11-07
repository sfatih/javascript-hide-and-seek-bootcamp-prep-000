function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let elements = document.querySelectorAll('.ranked-list li');
  
   for(let i= 0 ; i < elements.length; i++){
     
     elements[i].innerHtml= parseInt(elements[i].innerHtml)+n
   }
  
}

function deepestChild(){
  let node = document.querySelector('div#grand-node');
  
  while(node.childNodes.length>1){
    
  }
  
}