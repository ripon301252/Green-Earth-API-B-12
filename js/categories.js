const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(api => displayCategories(api.categories))
        .catch(err => console.log(err))
}

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.innerHTML = '';
    for (let category of categories) {
        const categoryBtn = document.createElement('div');
        categoryBtn.innerHTML = `
            <div class='md:text-left text-center'>
                <button id='${category.id}' class="hover:bg-[#1ec25a] hover:text-white py-1 md:pr-12 md:pl-3 px-10 cursor-pointer rounded-md mt-3">
                    ${category.category_name}
                </button>
            </div>
        `;
        categoriesContainer.appendChild(categoryBtn);
    }

    // Event for category buttons
    categoriesContainer.addEventListener('click', (e) => {
        if (e.target.localName === 'button') {
            // console.log(e.target.id)
            handleButtonClick(e.target);
            loadCategoryId(e.target.id)
        }
    });

    // Event for All Trees button
    const allTreeBtn = document.getElementById('all-tree-btn');
    allTreeBtn.addEventListener('click', () => {
        handleButtonClick(allTreeBtn);
    });
}


// all tree buttons handle
const handleButtonClick = (clickedBtn) => {
    const allBtns = document.querySelectorAll('button');
    allBtns.forEach(btn => {
        btn.classList.remove('bg-[#15803d]', 'text-white');
    });
    clickedBtn.classList.add('bg-[#15803d]', 'text-white');
}

// Function to handle class add/remove
// function handleButtonClick(clickedBtn) {
//     const allBtns = document.querySelectorAll('button');
//     allBtns.forEach(btn => {
//         btn.classList.remove('bg-[#15803d]', 'text-white');
//     });
//     clickedBtn.classList.add('bg-[#15803d]', 'text-white');
// }

loadCategories();
