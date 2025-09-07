const loadTreeDetails = (modalCardId) => {
    const url = `https://openapi.programming-hero.com/api/plant/${modalCardId}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(api => displayTreeDetails(api.plants))
        .catch(err => console.log(err))
}



// {
//     "id": 30,
//     "image": "https://i.ibb.co.com/0jLycYdv/Water-Hyacinth-min.jpg",
//     "name": "Water Hyacinth",
//     "description": "A floating plant with violet flowers that provide shade to aquatic creatures. Known for rapid growth in ponds.",
//     "category": "Aquatic Plant",
//     "price": 250
// }

const displayTreeDetails = (tree) => {
    console.log(tree)
    const treeDetailsContainer = document.getElementById('tree-details-container');
    treeDetailsContainer.innerHTML = `
      
        <div class = 'space-y-5 '>
            <h3 class="text-lg font-bold">${tree.name}</h3>
            <div><img class = ' md:w-[462px] w-[262px] md:h-[230px] h-[130px] rounded-md' src="${tree.image}" alt=""></div>
            <p class="text-sm"><span class = 'font-bold text-base'>Category : </span>${tree.category}</p>
            <p class="text-base font-bold"><span>৳</span> <span>${tree.price}</span></p>
            <p class="text-sm"><span class = 'font-bold text-base'>Description :</span> ${tree.description}</p>
        </div>

    
    
    `
    document.getElementById('tree_modal').showModal()
}