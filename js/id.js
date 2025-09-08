const loadCategoryId = (id) => {
console.log(id)
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(api => displayCategoryId (api.plants))
        .catch(err => console.log(err))
}

const displayCategoryId  = (cardIds) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    console.log(cardIds)
    cardIds.forEach(cardId => {
       const treeCard = document.createElement('div');
       treeCard.innerHTML = `
            <div id="card-title" class=" p-3 card  bg-white space-y-5 rounded-xl">
            <div class=" rounded-lg"><img class = 'md:w-[250px] w-full md:h-[130px] h-[170px] rounded-md' src="${cardId.image}" alt=""></div>
                <h3 onclick = 'loadTreeDetails(${cardId.id})' class="font-bold text-sm cursor-pointer">${cardId.name}</h3>
                <p class="text-[12px]">A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green</p>
                <div class="flex justify-between items-center ">
                    <p class="font-bold text-sm text-[#15803d] bg-[#dcfce7] py-1 px-3 rounded-xl">${cardId.category}</p>
                    <p class="text-xs font-bold"><span>৳</span> <span>${cardId.price}</span></p>
                </div>
                    <button class="bg-[#15803d] text-sm text-[#ffffff] py-2 px-6 rounded-full cursor-pointer w-full cart-title">Add to Cart</button>
        </div>
       `
       cardContainer.appendChild(treeCard)
    })
}

