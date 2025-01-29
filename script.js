
let CoffeeData = [];
fetch('coffees.json')
.then(response => response.json())
.then(data => {

    CoffeeData = data.coffees;
    GenerateList(CoffeeData);
   
    
    })
.catch(error => console.error('Error:', error));


function GenerateList(data) {

    deleteList();
    const coffeeContainer = document.getElementById('coffeeContainer');
    coffeeContainer.classList.add('coffee');
    coffeeContainer.setAttribute('id', 'coffeeContainer');

   
    data.forEach(coffee => { 
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('name');
        nameSpan.textContent = coffee.name; 
     

        const coffeeListDiv = document.createElement('div');
        coffeeListDiv.classList.add('coffee-list');

       
        const imgObject = document.createElement('img');
        imgObject.src = coffee.image;

        const coffeeDescriptionDiv = document.createElement('div');
        coffeeDescriptionDiv.classList.add('coffee-description');
        coffeeDescriptionDiv.innerHTML = coffee.description;
        
        
    

     
        coffeeContainer.appendChild(nameSpan); 
        coffeeContainer.appendChild(coffeeListDiv);
        coffeeContainer.appendChild(imgObject);
        coffeeContainer.appendChild(coffeeDescriptionDiv);

        coffeeListDiv.appendChild(imgObject);
        coffeeListDiv.appendChild(coffeeDescriptionDiv);
        

    });
    


}
function deleteList(){
    const coffeeContainer = document.getElementById('coffeeContainer');
    if(coffeeContainer){
        coffeeContainer.innerHTML = " ";
    } 
}

function filterAll(data){
    deleteList();
    GenerateList(data);
}
function filterStrong(data){
    deleteList();
var data_filter = data.filter( element => element.c_level == "High");
GenerateList(data_filter);

}
function filterMedium(data){
    deleteList();
var data_filter = data.filter( element => element.c_level == "Medium");
GenerateList(data_filter);

}
function filterLight(data){
    deleteList();
var data_filter = data.filter( element => element.c_level == "Low");
GenerateList(data_filter);

}

function openSidebar() {
    
    const sidebar = document.querySelector('.sidebar'); 
    const navbarMenu = document.querySelector('.navbar-menu');
    const mainContent = document.querySelector('.main-content');

    const currentWidth = parseInt(window.getComputedStyle(sidebar).width);

    if (currentWidth > 0) {
        sidebar.style.width = '0';
        mainContent.style.marginLeft = '5px';
        navbarMenu.classList.add('hidden');
    } else {
        sidebar.style.width = '150px';
        mainContent.style.marginLeft = '150px';
        navbarMenu.classList.remove('hidden');
    }
}

