const addBtn = document.getElementById("addBtn");
const userInput = document.getElementById("userInput");
const ul = document.getElementById("ul");



addBtn.addEventListener("click", function () {
     // get the input vaslue of the user
    const userValue = userInput.value;
    // create an li tag in your document

    if(userValue !== ""){
         const createLiElement = document.createElement("li");
    
        // add/append your li tag inside your ul tag in HTML
         ul.append(createLiElement);
         
         // change the innerHTML of your li created tag
         createLiElement.innerHTML = userValue  +  `<div class="icons">
         <p class="p1">+</p>
         <p class="p2">x</p>
         </div>`;
        
        //  remove task icon
        const removeIcon = createLiElement.querySelector(".p2");
        removeIcon.addEventListener("click", function () {
             createLiElement.remove();
         });
        
        //  check task icon
         const addIcon = createLiElement.querySelector(".p1");
         addIcon.addEventListener("click", function () {
              createLiElement.classList.toggle("checked");
          });
        
         // clear user input
         userInput.value = ""
     } else {
        alert("Enter a valid task!");
     }
 })     

   

