 document.getElementById('card-container').addEventListener('click', (e) => {

    if(e.target.localName !== 'button') {
        return;
    }
        
    console.log(e.target.localName === 'button')
    const totalPrice = document.getElementById('total-price').innerText;
   
    let treeName = '';
    let price = '';

    if(e.target.className.includes('cart-title')){
        const cartBtn = e.target
        treeName = cartBtn.parentNode.children[1].innerText;
        price = cartBtn.parentNode.children[3].children[1].children[1].innerText;
        // console.log(price)
        const priceTotal = Number(price) + Number(totalPrice);

       document.getElementById('total-price').innerText = priceTotal;
        alert(`${treeName} has been added to the cart.`);
    }

    const cartContainer = document.getElementById('cart-container');

    const cartHistory = document.createElement('div');
    cartHistory.innerHTML = `
        <div class=" bg-[#f0fdf4] rounded-md flex justify-between items-center p-3 mt-3">
            <div>
                <h1 class="font-bold">${treeName}</h1>
                <p class="text-[#889396] "><span>৳</span><span id="price-title"> ${price}</span> × 1</p>
            </div>
            <div class="">
                <p id = 'delete' class = 'cursor-pointer text-2xl text-[#889396]'>×</p>
            </div>
        </div>
    `;
    cartContainer.appendChild(cartHistory)
 })


 // Delete button
document.getElementById('cart-container').addEventListener('click', (e) => {

    if (e.target.id === 'delete') {
        
        const perCart = e.target.parentNode.parentNode.parentNode;
        
        
        const price = Number(perCart.querySelector('#price-title').innerText);

        const totalPrices = document.getElementById('total-price');
        const currentTotal = Number(totalPrices.innerText);
        totalPrices.innerText = currentTotal - price;

       
        perCart.remove();
    }
});
