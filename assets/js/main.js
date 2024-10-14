const elBtnClick = [...document.querySelectorAll(".btn-click")];
const elBtnActive = [...document.querySelectorAll('.btn-active')];

for (let i = 0; i < elBtnClick.length; i++) {
    elBtnClick[i].addEventListener("click", function () {
        elBtnActive[i].classList.toggle("d-none");
    })
}


fetch('http://127.0.0.1:5500/assets/js/data.json')
    .then(response => {
        if(!response.ok){
            throw new Error("Xatolik");
            
        }
        return response.json()
    })

    .then(data => {
        console.log(data)
        let products = document.querySelector('.products')
        for (let item of data) {
            console.log(item)
            let category = item.category
            let name = item.name
            let price = item.price
            let { image: {desktop}   } = item
            console.log(category)

            let card = document.createElement('div')
            card.classList.add('products-card')
            console.log(card)

            card.innerHTML = `
                   <div class="products-image">
                                <img src="${desktop}" alt="Waffle image" class="products-photo">
                                <button class="products-btn btn-click">
                                    <span class="btn-content">
                                      <img src="./assets/images/icon-add-to-cart.svg" alt="Add cart icon">
                                     Add to Cart
                                    </span>
                                    <span class="btn-active d-none">
                                      <img src="./assets/images/icon-decrement-quantity.svg" alt="Minus icon">
                                      <span class="">1</span>
                                      <img src="./assets/images/icon-increment-quantity.svg" alt="Plus icon">
                                    </span>
                                </button>
                            </div>
                            <div class="products-body">
                            <p class="products-category">${category}</p>
                            <h4 class="products-name">${name}</h4>
                            <span class="products-price">$  <b class="products-count">${price}</b></span>
            
            `

            products.append(card)


        }

    })