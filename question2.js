    let result=document.createElement("result")
    let count = 0;
    let result_2 = document.createElement("result_2")
    document.getElementById("add").addEventListener("click",function(){
        let list = document.getElementById("item").value.toLowerCase()

        if(list === ""){
            alert("enter item")
            return;
        }

        let li = document.createElement("li");
        li.textContent = list;
        document.getElementById("list").appendChild(li);
        document.getElementById("item").value = ""
    })

    document.getElementById("remove").addEventListener("click",function(){
        let list = document.getElementById("item").value.toLowerCase()
        if(list === ""){
            alert("Enter item to remove");
            return;
        }
        let items = document.querySelectorAll("#list li");
        for(let i = 0;i < items.length;i++){
            if(items[i].textContent.toLowerCase()=== list){
                items[i].remove();
                break;
            }
        }
        result_2.textContent = `you have removed ${list} from list`
        result_2.style.color = "red"
        result_2.style.fontWeight = "bold";
        document.getElementById("result").appendChild(result_2);

        count++;

        result.textContent = `you have removed ${count} from list`
        result.style.color = "green"
        result.style.fontWeight = "bold";
        document.getElementById("result").appendChild(result);


    })
