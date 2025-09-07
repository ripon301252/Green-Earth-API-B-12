const loadAllPlants = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(api => displayAllPlants(api.plants))
        .catch(err => console.log(err))
}

const displayAllPlants = (plants) => {
    // console.log(plants)
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    plants.forEach(plant => {
        const cards = document.createElement('div')
        cards.innerHTML = `
         <div id="card-title" class=" p-2 card bg-white  space-y-5 rounded-xl">
            <div class=" rounded-lg"><img class = 'md:w-[250px] w-full md:h-[120px] h-[150px] rounded-md' src="${plant.image}" alt=""></div>
                <h3 onclick = 'loadTreeDetails(${plant.id})'  class="font-bold text-sm cursor-pointer">${plant.name}</h3>
                <p class="text-[12px]">A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green</p>
                <div class="flex justify-between items-center ">
                    <p class="font-bold text-sm text-[#15803d] bg-[#dcfce7] py-1 px-3 rounded-xl">${plant.category}</p>
                    <p class="text-xs font-bold"><span>৳</span> <span>${plant.price}</span></p>
                </div>
                    <button class="bg-[#15803d] text-sm text-[#ffffff] py-2 px-6 rounded-full cursor-pointer w-full cart-title">Add to Cart</button>
        </div>
    
    `
        cardContainer.appendChild(cards)
    })


}

loadAllPlants('all-tree-btn')