 document.getElementById('card-container').addEventListener('click', (e) => {
    // console.log(e)
    if(e.target.className.includes('cart-title')){
        const cartBtn = e.target
        const treeName = cartBtn.parentNode.children[1].innerText;
        const price = cartBtn.parentNode.children[3].children[1].children[1].innerText;
        console.log(price)
       
        alert(`${treeName} has been added to the cart.`);
    }

    const cartContainer = document.getElementById('cart-container');

    const cartHistory = document.createElement('div');
    cartHistory.innerHTML = `
        <div class=" bg-[#f0fdf4] rounded-md flex justify-between items-center p-3 mt-3">
            <div>
                <h1 class="font-bold">Tree name</h1>
                <p class="text-[#889396]"><span>৳</span><span id="price-title"> 1200</span> x 1</p>
            </div>
            <div class="">
                <p>❌</p>
            </div>
        </div>
               
        
    `;
    cartContainer.appendChild(cartHistory)


 })
