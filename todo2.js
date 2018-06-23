var inputTextBox = document.querySelector("#inputTextBox");
var todoListDisplay = document.querySelector("#todoListDisplay");
var enterButton = document.querySelector("#enterButton");
var markAll = document.querySelector("#markAll");
var unmarkAll = document.querySelector("#unmarkAll");
var deleteAll = document.querySelector("#deleteAll");
var deletePopUp = document.querySelector("#deletePopUp");
var yes = document.querySelector("#yes");
var no = document.querySelector("#no");
var reverseALL = document.querySelector("#reverseALL");


//When user click on enterButton it start the listData() function 
enterButton.addEventListener("click", function () {
    listData();
});

//When user click on inputTextBox it start the listData() function
inputTextBox.addEventListener("keyup", function () {
    if (event.keyCode === 13) {
        listData();
    }
})





var listData = function () {
    if (inputTextBox.value !== "") {
        var list = []
        list.push(inputTextBox.value);        
        // var list2 = "";
        for (var i = 0; i < list.length; i++) {
            var para = document.createElement("P");            
            var paraText = document.createTextNode(inputTextBox.value);
            para.appendChild(paraText);
            todoListDisplay.appendChild(para);
            // list2 = list2 + "<p id='arrItem'>" + list[i] +  "</p>";
            // todoListDisplay.innerHTML = list;
            inputTextBox.value = null;
            arrList();
            
            
        }
    }
    // else if(inputTextBox.value === ""){
    //     list.pop();
    // }
}

var arrList = function () {
    var targetP = document.querySelectorAll("#todoListDisplay p");
    for (var i = 0; i < targetP.length; i++) {
        targetP[i].addEventListener("click", function () {
            this.classList.add("unselect");              
            // console.log(this)          
        });
    }
}



// when user click on arrya items
// var arrList = function () {
//     var arrItem = document.querySelectorAll("#arrItem");
//     for (var i = 0; i < arrItem.length; i++) {
//         arrItem[i].addEventListener("click", function () {
//             this.classList.toggle("unselect");
//         });
//     }
// }

// var f1 = function () {
//     for(var i = 0; i < arrItem.length; i++){
//         console.log(list[i])
//     }

// }
// markAll.addEventListener("click", function(){
// function unslectedAdd (){
//     var arrItem = document.querySelectorAll("#arrItem");    
//     for (var i = 0; i < arrItem.length; i++) {
//             arrItem[i].addEventListener("click", function () {
//                 this.classList.add("unselect");                  
//             });
//     }
// }

//when user click on mark all button 
markAll.addEventListener("click", function () {
    var targetP = document.querySelectorAll("#todoListDisplay p");
    for (var i = 0; i < targetP.length; i++) {
        targetP[i].classList.add("unselect");
    }
});

//when user click on unmark all button 
unmarkAll.addEventListener("click", function () {
    var targetP = document.querySelectorAll("#todoListDisplay p");
    for (var i = 0; i < targetP.length; i++) {
        targetP[i].classList.remove("unselect");
    }
});

//when user click on delete all button 
deleteAll.addEventListener("click", function () {
    var targetP = document.querySelectorAll("#todoListDisplay p");
    var ans = "yes";
    deletePopUp.style.display = "block"
    for (var i = 0; i < targetP.length; i++) {
        yes.addEventListener("click", function () {
            list = []
            todoListDisplay.innerHTML = null;
            list2 = ""
            listData();
            deletePopUp.style.display = "none"
        })
        no.addEventListener("click", function () {
            deletePopUp.style.display = "none"
        })
    }
});

reverseALL.addEventListener("click", function () {
    var targetP = document.querySelectorAll("#todoListDisplay p");
    for (var i = 0; i < targetP.length; i++) {
        if (markAll) {
            targetP[i].classList.toggle("unselect");
        }

    }
});