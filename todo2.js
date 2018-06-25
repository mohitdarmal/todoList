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
inputTextBox.addEventListener("keydown", function () {
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
            var targetP = document.querySelectorAll("#todoListDisplay p");
            var para = document.createElement("P");
            var span = document.createElement("span");
            var paraText = document.createTextNode(inputTextBox.value);
            var spanText = document.createTextNode("delete");
            para.appendChild(paraText);
            span.appendChild(spanText);
            todoListDisplay.appendChild(para);
            // para.appendChild(span);
            // targetP.insertBefore(span, targetP.childNodes[i]);
            // list2 = list2 + "<p id='arrItem'>" + list[i] +  "</p>";
            // todoListDisplay.innerHTML = list;
            inputTextBox.value = null;
            arrList();           
        }
        }
    }

var arrList = function () {
    var targetP = document.querySelectorAll("#todoListDisplay p");
    var targetSpan = document.querySelectorAll("#todoListDisplay p span");
    for (var i = 0; i < targetP.length; i++) {
        targetP[i].onclick = function () {
            this.classList.toggle("unselect");                                             
        }
        // targetSpan[i].addEventListener("click", function (){
        //     this.classList.add("deleteButton");
        //     // targetP[i].classList.add("deleteButton") 
        //     // targetP[i].style.display = "none"
        //     // f3();
        // })
    }
    
}

// function f3(){    
//     var targetSpan = document.querySelectorAll("#todoListDisplay span");
//     var targetP = document.querySelectorAll("#todoListDisplay p");
//     for (var i = 0; i < targetP.length; i++) {
//         targetP[i].style.display = "none"
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
    var button = document.querySelectorAll("#button");    
    var body = document.querySelector("body");
    var container = document.querySelector("#container");
    var h1 = document.querySelector("h1");
    var ans = "yes";
    deletePopUp.style.display = "block"
    body.style.background = "rgba(0, 0, 0, 0.84)"
    container.style.opacity = "0.2"
    h1.style.color = "white"

    for (var i = 0; i < targetP.length; i++) {
        yes.addEventListener("click", function () {
            list = []
            todoListDisplay.innerHTML = null;
            list2 = ""
            listData();
            deletePopUp.style.display = "none"
            body.style.background = ""
            container.style.opacity = "1"
            h1.style.color = "#000"
        })
        no.addEventListener("click", function () {
            deletePopUp.style.display = "none"
            body.style.background = ""
            container.style.opacity = "1"
            h1.style.color = "#000"
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