let item=document.getElementById("item")
let add=document.getElementById("add")
let remove=document.getElementById("remove")
let list=document.getElementById("list")
//let todo_list=[]
let numberofItems=0;
let numberofRemoves=0;
let itemremoved= document.createElement("p")
let numberofremoved=document.createElement("p")
    
function style(){
    let items=document.querySelectorAll("#list li")
    for(let i=0;i<items.length;i++){
        items[i].style.background="white"
        if((i+1)%2==0){
            items[i].style.background="yellow"
        }
    }    
}

function addItem(task){
// todo_list[numberofItems]=task;
   let li = document.createElement("li");
   li.textContent=task;
   list.appendChild(li)
    numberofItems++;
   style()
}

function removeItem(task){ 
    let items=document.querySelectorAll("#list li")
    for(let i=0;i<items.length;i++){
        if(items[i].textContent.toLowerCase()==task.toLowerCase()){
            /*if(i%2==0){
                items[i].style.background="white"
            }*/
            numberofRemoves++;
            items[i].remove()
            break;
        }
    }
    itemremoved.innerHTML=task;
    document.body.appendChild(itemremoved)
    itemremoved.style.color="red"
}

add.addEventListener("click",function(){
    addItem(item.value)
    item.value=""
})

remove.addEventListener("click",function(){
    removeItem(item.value)
    item.value=""
  
    numberofremoved.innerHTML=`(${numberofRemoves}) item removed`
    document.body.appendChild(numberofremoved)
    numberofremoved.style.color="green"
    style();
})