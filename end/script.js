/*
  Create an array of 'pet' objects.
  Each object should have the following properties: name, type, breed, age and photo
*/

const pets = [
  {
    name: 'Joe',
    type: 'Dog',
    breed: 'Australian Shepherd',
    age: 5,
    photo: 'images/australian-shepherd.jpg'
  },
  {
    name: 'Simba',
    type: 'Cat',
    breed: 'Persian',
    age: 7,
    photo: 'images/persian-cat.jpg'
  },
  {
    name: 'Comet',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    photo: 'images/golden-retriever.jpg'
  }
]

let html = '';

for(let i = 0; i < pets.length; i++) {
  let pet = pets[i];
  
  html += `
    <div class="outerCard">
      <div class="card">
        <img src="${pet.photo}" alt="${pet.name}" />
        <h2>${pet.name}</h2>
        <p>${pet.type} - ${pet.breed}</p>
        <p>Age: ${pet.age}</p>
      </div>
    </div>
  `;
}

document.querySelector('main').innerHTML = html;