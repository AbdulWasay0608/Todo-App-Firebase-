










// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// // import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyBQyIQkjGkMbHrrVyEjekzYXeOPFb4J7k4",
// //   authDomain: "todo-app-0608.firebaseapp.com",
// //   databaseURL: "https://todo-app-0608-default-rtdb.firebaseio.com",
// //   projectId: "todo-app-0608",
// //   storageBucket: "todo-app-0608.appspot.com",
// //   messagingSenderId: "776562026049",
// //   appId: "1:776562026049:web:662ed5867d17d9bc73c8c0",
// //   measurementId: "G-JCSG3LF2BQ"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// // const Db = getDatabase();


// // // =====FIREBASE END=====//


// // var inpVal = document.getElementById('inp')
// // var list = document.getElementById('list')


// // window.delRow = function( btn ){   
    
// //    remove(ref(Db , `Todos/${id}`))
    
// //     btn.parentNode.remove()
    

// //     }


    
// // window.deleteAll = function() {
// //     var del = document.getElementById('list')
// //     del.innerHTML=""
// // }


// // window.add = function(){


// //     var obj = {
// //        todo: inpVal.value
// //     }

// //     var Userref = push(ref(Db, 'Todos/'))
// //     obj.id = Userref.key

// //     set(Userref, obj)

    

// // var li = document.createElement("li") 
// //     var liVal = document.createTextNode(inpVal.value)
// //     li.setAttribute("class", "text-white fs-3  ")
// //     li.appendChild(liVal)



// // var del = document.createElement("button")
// // var delText = document.createTextNode("Delete")
// // del.appendChild(delText)
// // del.setAttribute( "class", "btn btn-danger ms-3" )
// // del.setAttribute( "onclick", "delRow( '${app.id}' )" )
// // li.appendChild(del)


// // var edit = document.createElement("button")
// // var editText = document.createTextNode("Edit")
// // edit.appendChild(editText)
// // edit.setAttribute( "class", "btn btn-success" )
// // edit.setAttribute( "onclick", "editRow( ${app.id} )" )
// // li.appendChild(edit)


// // list.appendChild(li)

// // inpVal.value = ""

// //     }




// //     window.editRow = function() {

// //         let editBtnid = event.target.id
    
    
// //         let editBtn = event.target.parentNode.firstChild.nodeValue = prompt("Edit",event.target.parentNode.firstChild.nodeValue)
        
// //         let editTodo = {
// //             todo : editBtn,
// //             key : editBtnid
// //         }

    
// // }



// // FIREBASE

//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
//   import { getDatabase,ref,set,push,onValue,remove,update } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyANf31dSFMhCRqta4kxUKpfGY0yedwMFTQ",
//     authDomain: "todo-app-0608.firebaseapp.com",
//   databaseURL: "https://todo-app-0608-default-rtdb.firebaseio.com",
//   projectId: "todo-app-0608",
//   storageBucket: "todo-app-0608.appspot.com",
//   messagingSenderId: "776562026049",
//   appId: "1:776562026049:web:662ed5867d17d9bc73c8c0",
//   measurementId: "G-JCSG3LF2BQ"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const database = getDatabase();


  
  
  
//   // LI UL FUNCTION
//   window.AddTask = function (){
// var obj = {
//     todo: document.getElementById('input').value
// }
// console.log(obj);
// var userRef = push(ref(database , 'todos/'))

// obj.id = userRef.key

// set(userRef , obj)
//     }

//     // GET DATA2

//     window.get = function(){
//         var listData = document.getElementById('List')

//         onValue(ref(database , 'todos/'),function(todo){
//             listData.innerHTML = ""

//             var todos = Object.values(todo.val())
            
//             for(var i = 0; i < todos.length; i++){
//                 var app = todos[i]
//                 console.log(app.todo);
//                 listData.innerHTML += `
//                 <li class = "listing" > TODO : ${app.todo} <button class = "edit-btn"
//                 onclick = "ToDoUpdate('${app.id}' )" > EDIT </button>
                
//                 <button class = "del-btn"
//                 onclick = "Tododel('${app.id}')"  > DELETE</button>
                
//                 </li>`
//             }
//             var inp = document.getElementById('input').value = "";
//         })
//     }
//     get()
    
//     // DELETE DATA WORK
    
//     window.Tododel = function(id){
//     remove(ref(database , `todos/${id}`))
// }

// window.delAll = function (){
//     remove(ref(database , `todos/`))

// }

// window.ToDoUpdate = function(id){
//     var newTodo = prompt("enter your data")

//     update(ref(database , `todos/${id}`),{
//         todo : newTodo
//     })
// }
// // TODO APP INPUT WORK
// var inpValue = document.getElementById("input");

// var listValue = document.getElementById("List");


// // DELETE ALL FUNCTION
// window.delAll = function(){
//     listValue.innerHTML = "";
// }


// // EDIT FUNCTION
//  function editWork (ew){
//     ew.parentNode.firstChild.nodeValue = prompt();
//     console.log(ew);
// }


// // DELETE FUNCTION
//   function deleteWork (dw){
//       dw.parentNode.remove();
//        console.log(dw);
//     }

// // FIREBASE WORKING

//         var value = input.value;
//         console.log(value);
        
//         var idRef = ref(database , "todo/")
//         var id = push(idRef).key
//         console.log(id);
        
//         var obj = {
//             todo: value,
//             id: id, 
//         }
        
//         var refrence = ref(database , `todo/${id}`)
//         console.log(refrence);
        
//         set(refrence , obj);
//         alert(value)
//     inpValue.value = "";


//     // EDIT BUTTON WORK
//     var editBtn = document.createElement("button");
//     console.log(editBtn);
//     // 
//     var editText = document.createTextNode("Edit");
//     console.log(editText);
//     // 
//     editBtn.appendChild(editText);
//     Li.appendChild(editBtn);
//     // 
//     editBtn.setAttribute("class" , "editButton");
//     editBtn.setAttribute("onclick" , "editWork(this)");
    
    
//     // DELETE WORK
//     var delBtn = document.createElement("button");
//     console.log(delBtn);
//     // 
//     var delText = document.createTextNode("Delete");
//     console.log(delBtn);
//     // 
//     delBtn.appendChild(delText);
//     Li.appendChild(delBtn);
// // 
//     delBtn.setAttribute("class" , "deleteButton");
//     delBtn.setAttribute("onclick" , "deleteWork(this)");
// // }

// // GET DATA

// function getTodo (){
//     var refrence = ref(database, "todo/")
//     console.log(refrence);

//     onValue(refrence , function(gd){
//         var dataObj = (gd.val());
//         var listData = Object.values(dataObj);
//         console.log(listData);
// rendorList(listData)
//     })
// }
// getTodo()

// function rendorList(dataArr){

//     for(var i = 0; i < dataArr.length; i++ ){
//         listValue.innerHTML = "";
//         listValue.innerHTML += `<li> 
//         ${dataArr[i].todo} </li>`
//     }
// }





// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyANf31dSFMhCRqta4kxUKpfGY0yedwMFTQ",
    authDomain: "todo-app-0608.firebaseapp.com",
  databaseURL: "https://todo-app-0608-default-rtdb.firebaseio.com",
  projectId: "todo-app-0608",
  storageBucket: "todo-app-0608.appspot.com",
  messagingSenderId: "776562026049",
  appId: "1:776562026049:web:662ed5867d17d9bc73c8c0",
  measurementId: "G-JCSG3LF2BQ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  var database = firebase.database();
  
  // Get DOM elements
  var todoInput = document.getElementById('todo-input');
  var addButton = document.getElementById('add-button');
  var deleteAllButton = document.getElementById('delete-all-button');
  var todoList = document.getElementById('todo-list');
  
  // Function to add a todo
  function addTodo() {
    var todoText = todoInput.value.trim();
  
    if (todoText !== '') {
      // Generate a unique key for the todo
      var todoKey = database.ref().child('todos').push().key;
  
      // Save the todo in the database
      var updates = {};
      updates['/todos/' + todoKey] = { text: todoText };
      database.ref().update(updates);
  
      // Clear the input field
      todoInput.value = '';
    }
  }
  
  // Function to delete a todo
  function deleteTodo(todoKey) {
    database.ref('/todos/' + todoKey).remove();
  }
  
  // Function to delete all todos
  function deleteAllTodos() {
    database.ref('/todos').remove();
  }
  
  // Function to edit a todo
  function editTodo() {
    var todoKey = this.getAttribute('data-key');
    var newTodoText = prompt('Enter the new todo text:');
    
    if (newTodoText !== null) {
      newTodoText = newTodoText.trim();
      if (newTodoText === '') {
        // Delete the todo if the text is empty
        deleteTodo(todoKey);
           return;
      }
  
      // Update the todo in the database
      var updates = {};
      updates['/todos/' + todoKey + '/text'] = newTodoText;
      database.ref().update(updates);
    }
  }
  
  // Function to render todos
  function renderTodos(snapshot) {
    var todos = snapshot.val();
    todoList.innerHTML = '';
  
    for (var todoKey in todos) {
      var todoText = todos[todoKey].text;
  
      var li = document.createElement('li');
      li.innerHTML = '<span>' + todoText + '</span>' +
        '<button data-key="' + todoKey + '" class="edit-button">Edit</button>' +
        '<button data-key="' + todoKey + '" class="delete-button">Delete</button>';
  
      todoList.appendChild(li);
    }
  
    // Attach event listeners to edit and delete buttons
    var editButtons = document.getElementsByClassName('edit-button');
    var deleteButtons = document.getElementsByClassName('delete-button');
  
    for (var i = 0; i < editButtons.length; i++) {
      editButtons[i].addEventListener('click', editTodo);
      deleteButtons[i].addEventListener('click', function() {
        var todoKey = this.getAttribute('data-key');
        deleteTodo(todoKey);
      });
    }
  }
  
  // Attach event listeners to buttons
  addButton.addEventListener('click', addTodo);
  deleteAllButton.addEventListener('click', deleteAllTodos);
  
  // Listen for changes in the database and render todos
  database.ref('/todos').on('value', renderTodos);
  
