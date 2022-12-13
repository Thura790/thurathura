
var tasks = document.querySelector(".task-list ul")
let tasksUL = document.querySelector(".task-list ul");
let cate    = document.querySelector(".categories ul");
categories = document.querySelector(".categories ul");
document.addEventListener("DOMContentLoaded", () => { 

    // task-list
fetch("tasks.json")
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        data.forEach((task) => {
            LI = document.createElement("LI");
            LI.innerHTML = generateTasks(task);
            tasksUL.appendChild(LI);
        });
    });

  // category
// fetch("categories.json")
//     .then(response => response.json())
//     .then(json => {
//        json.forEach(categories => {
//         let LI = document.createElement('LI');
//         LI.innerHTML= generateCategories(categories);
//         cate.appendChild(LI);
//     });
//   });
});

// --Impletment search task--
let searchDOM = document.querySelector(".nav-left .search input[type='text']");
searchDOM.addEventListener("keyup", function(e){
    searchText = e.target.value;
    tasks.innerHTML="";
fetch("tasks.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((task) => {
            LI = document.createElement("LI");
            if((task["name"].toLowerCase()).includes(searchText.toLowerCase()))
            {
                LI.innerHTML = generateTasks(task);
                tasks.appendChild(LI);
            }
        });
    });
});

// --Impletment add new task--
let btnAddNewTask = document.querySelector("#add-new");
btnAddNewTask.addEventListener("click", function (e) {
    btnAddNewTask.innerHTML="";
    let inptTaskName = document.createElement("input");
    let inptTaskChecked = document.createElement("input");
    inptTaskChecked.setAttribute("type", "checkbox");
    inptTaskName.setAttribute("type", "text");
    inptTaskName.setAttribute("placeholder", "Enter New Task Name...");
    btnAddNewTask.appendChild(inptTaskChecked);
    btnAddNewTask.appendChild(inptTaskName);

    inptTaskName.focus();
    inptTaskName.addEventListener("keyup", function (e){
         if (e.key == "Enter") {
            const currentDate = "12-Apr-2022";
            let new_task_name= e.target.value;
            // alert(new_task_name);
            let task={
                name: new_task_name,
                category: "N/A",
                create_at: currentDate,
                
            };
            LI = document.createElement("LI");
            LI.innerHTML = generateTasks(task);
            tasks.appendChild(LI);
            inptTaskName.value="";
         }
    });
});

//  ---- Implement Filtter  tasks by category ----//
function fill(name){
    tasks.innerHTML="";
    fetch("tasks.json")
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        data.forEach((task) => {
            if (name == "all"){
                LI = document.createElement("LI");
                LI.innerHTML = generateTasks(task);
                tasksUL.appendChild(LI);
            }
            
            if (task.category == name){
                LI = document.createElement("LI");
                LI.innerHTML = generateTasks(task);
                tasksUL.appendChild(LI);
            }
            
        });
    });
}


//  ---- Implement add new category ----//
let btnAddNewCategories = document.querySelector(".add-new-categories");
btnAddNewCategories.addEventListener("click", function (e) {
     // alert("Hello");
    let newCategoryLI =document.createElement("LI");
    newCategoryLI.innerHTML =`<li onclick="fill('all')">
                                <div class="categories-info">
                                    <span class="material-symbols-outlined">format_align_justify</span>
                                    <input type="text">
                                </div>
                               
                             </li>`;
   
    categories.appendChild(newCategoryLI);
    newCategoryInpt = newCategoryLI.querySelector("input");
   
    console.log(newCategoryInpt);
});


function generateTasks(tasks){
    let li =`<div class="task">
                     <input type="checkbox" name=${tasks.name}>
                     <label>${tasks.name}</label>
                 </div>
                <div class="desc">
                    <span>${tasks.category}</span>
                    <span>${tasks.create_at}</span>
                </div>
            `;

    return li;
};

// function generateCategories(categories){
//     let li =`<div class="categories-info">
//                 <span class="${categories.logo}">${categories.text}</span>
//                 <span>${categories.ca}</span> 
//             </div>
//             <div class="badge">
//                 <span>${categories.num}</span>
//             </div>
            
            
//         `;
//         return li;
// };
    

// let btnAddNewTask = document.querySelector("#add-new");
// btnAddNewTask.addEventListener("click", function(e){
//     btnAddNewTask.innerHTML=
// })