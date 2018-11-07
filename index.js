function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let elements = document.querySelectorAll('.ranked-list li');
   
   for(let i=0; i<elements.length; i++){
     elements[i].innerHTML = parseInt(elements[i].innerHTML) + n;
   }
  
}

function deepestChild(){
  let node = document.querySelector('div#grand-node');
  
  while(node.children.length != 0){
    let temp = node.children;
    node = temp.children;
    
  }
  return node;
}