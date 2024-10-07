fetch('coffees.json')
    .then(response => response.json())
    .then(data => {
        GenerateList(data.coffees); 
    })
    .catch(error => console.error('Error:', error));

function GenerateList(data) {
    const coffeeContainer = document.createElement('div');
    coffeeContainer.classList.add('coffee');

   
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
    document.body.appendChild(coffeeContainer);



}
