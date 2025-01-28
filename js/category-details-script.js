const products = [[
    {
        id: 1,
        name: "Gradient Graphic T-shirt",
        rating: 3.5,
        price: 145,
        image: "../assets/product_pages/page1/Gradient-Graphic-T-shirt.jpeg"
    },
    {
        id: 2,
        name: "Polo with Tipping Details",
        rating: 4.5,
        price: 180,
        image: "../assets/product_pages/page1/Polo-with-Tipping-Details.jpeg"
    },
    {
        id: 3,
        name: "Black Striped T-shirt",
        rating: 5.0,
        price: 120,
        originalPrice: 160,
        discount: 30,
        image: "../assets/product_pages/page1/Black Striped T-shirt.jpg"
    },
    {
        id: 4,
        name: "Skinny Fit Jeans",
        rating: 3.5,
        price: 240,
        originalPrice: 260,
        discount: 20,
        image: "../assets/product_pages/page1/Skinny Fit Jeans.avif"
    },
    {
        id: 5,
        name: "Checkered Shirt",
        rating: 4.5,
        price: 180,
        image: "../assets/product_pages/page1/Checkered Shirt.jpeg"
    },
    {
        id: 6,
        name: "Sleeve Striped T-shirt",
        rating: 4.5,
        price: 130,
        originalPrice: 160,
        discount: 30,
        image: "../assets/product_pages/page1/Sleeve Striped T-shirt.avif"
    },
    {
        id: 7,
        name: "Vertical Striped Shirt",
        rating: 5.0,
        price: 212,
        originalPrice: 232,
        discount: 20,
        image: "../assets/product_pages/page1/Vertical Striped Shirt.jpeg"
    },
    {
        id: 8,
        name: "Courage Graphic T-shirt",
        rating: 4.0,
        price: 145,
        image: "../assets/product_pages/page1/Courage Graphic T-shirt.jpg"
    },
    {
        id: 9,
        name: "Classic White Tee",
        rating: 4.5,
        price: 95,
        image: "../assets/product_pages/page1/Classic White Tee.jpeg"
    },
    {
        id: 10,
        name: "Denim Jacket",
        rating: 5.0,
        price: 280,
        originalPrice: 320,
        discount: 25,
        image: "../assets/product_pages/page1/Denim Jacket.jpeg"
    },
    {
        id: 11,
        name: "Casual Hoodie",
        rating: 4.0,
        price: 160,
        image: "../assets/product_pages/page1/Casual Hoodie.jpeg"
    },
    {
        id: 12,
        name: "Slim Fit Chinos",
        rating: 4.5,
        price: 175,
        image: "../assets/product_pages/page1/Slim Fit Chinos.jpeg"
    },
    {
        id: 13,
        name: "Printed Summer Shirt",
        rating: 3.5,
        price: 135,
        originalPrice: 150,
        discount: 10,
        image: "../assets/product_pages/page1/Printed Summer Shirt.jpeg"
    },
    {
        id: 14,
        name: "Cargo Shorts",
        rating: 4.0,
        price: 120,
        image: "../assets/product_pages/page1/Cargo Shorts.jpeg"
    },
    {
        id: 15,
        name: "Basic Polo Shirt",
        rating: 4.5,
        price: 90,
        image: "../assets/product_pages/page1/Basic Polo Shirt.jpeg"
    },
    {
        id: 16,
        name: "Linen Casual Shirt",
        rating: 5.0,
        price: 195,
        originalPrice: 220,
        discount: 15,
        image: "../assets/product_pages/page1/Linen Casual Shirt.jpeg"
    }
],[
    {
        id: 17,
        name: "Oversized Hoodie",
        rating: 4.5,
        price: 170,
        image: "../assets/product_pages/page2/Oversized Hoodie.jpeg",
    },
    {
        id: 18,
        name: "Cotton Crewneck Sweater",
        rating: 4.0,
        price: 160,
        image: "../assets/product_pages/page2/Cotton Crewneck Sweater.jpeg",
    },
    {
        id: 19,
        name: "Casual Sweatpants",
        rating: 4.5,
        price: 100,
        image: "../assets/product_pages/page2/Casual Sweatpants.jpeg",
    },
    {
        id: 20,
        name: "Classic Chino Pants",
        rating: 4.0,
        price: 120,
        image: "../assets/product_pages/page2/Classic Chino Pants.jpeg",
    },
    {
        id: 21,
        name: "Hooded Sweatshirt",
        rating: 4.5,
        price: 135,
        image: "../assets/product_pages/page2/Hooded Sweatshirt.jpeg",
    },
    {
        id: 22,
        name: "Casual Trousers",
        rating: 4.0,
        price: 150,
        image: "../assets/product_pages/page2/Casual Trousers.jpeg",
    },
    {
        id: 23,
        name: "Slim Fit Jeans",
        rating: 5.0,
        price: 220,
        originalPrice: 250,
        discount: 12,
        image: "../assets/product_pages/page2/Slim Fit Jeans.jpeg",
    },
    {
        id: 24,
        name: "Plaid Shirt",
        rating: 4.5,
        price: 85,
        image: "../assets/product_pages/page2/Plaid Shirt.jpeg",
    },
    {
        id: 25,
        name: "Ribbed Knit Sweater",
        rating: 4.0,
        price: 140,
        image: "../assets/product_pages/page2/Ribbed Knit Sweater.jpeg",
    },
    {
        id: 26,
        name: "Striped Polo Shirt",
        rating: 4.5,
        price: 125,
        image: "../assets/product_pages/page2/Striped Polo Shirt.jpeg",
    },
    {
        id: 27,
        name: "Denim Shorts",
        rating: 4.5,
        price: 90,
        image: "../assets/product_pages/page2/Denim Shorts.jpeg",
    },
    {
        id: 28,
        name: "Graphic Print Tee",
        rating: 4.0,
        price: 100,
        image: "../assets/product_pages/page2/Graphic Print Tee.jpeg",
    },
    {
        id: 29,
        name: "Linen Shirt",
        rating: 5.0,
        price: 190,
        originalPrice: 220,
        discount: 15,
        image: "../assets/product_pages/page2/Linen Shirt.jpeg",
    },
    {
        id: 30,
        name: "Fleece Jacket",
        rating: 4.0,
        price: 170,
        image: "../assets/product_pages/page2/Fleece Jacket.jpeg",
    },
    {
        id: 31,
        name: "Chino Shorts",
        rating: 4.0,
        price: 80,
        image: "../assets/product_pages/page2/Chino Shorts.jpeg",
    },
    {
        id: 32,
        name: "Denim Vest",
        rating: 4.5,
        price: 160,
        image: "../assets/product_pages/page2/Denim Vest.jpeg",
    }
],[
    {
        id: 33,
        name: "Graphic Baseball Tee",
        rating: 4.0,
        price: 135,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3"
    },
    {
        id: 34,
        name: "Vintage Checkered Shirt",
        rating: 4.5,
        price: 160,
        image: "https://images.unsplash.com/photo-1574747721173-0f9e53fe7f3e?ixlib=rb-4.0.3"
    },
    {
        id: 35,
        name: "Sweater with Hoodie",
        rating: 3.5,
        price: 145,
        image: "https://images.unsplash.com/photo-1557747500-04ac8a9be23d?ixlib=rb-4.0.3"
    },
    {
        id: 36,
        name: "Polo T-shirt with Stripes",
        rating: 4.5,
        price: 125,
        image: "https://images.unsplash.com/photo-1567783503-778c1b3199fc?ixlib=rb-4.0.3"
    },
    {
        id: 37,
        name: "Plaid Button-up Shirt",
        rating: 4.0,
        price: 150,
        image: "https://images.unsplash.com/photo-1558935879-14a55db8d1fc?ixlib=rb-4.0.3"
    },
    {
        id: 38,
        name: "Casual Chambray Shirt",
        rating: 5.0,
        price: 210,
        originalPrice: 240,
        discount: 12,
        image: "https://images.unsplash.com/photo-1566732839-5394c83c14ed?ixlib=rb-4.0.3"
    },
    {
        id: 39,
        name: "V-neck Sweater",
        rating: 4.0,
        price: 160,
        image: "https://images.unsplash.com/photo-1586952267254-dcf042f1d783?ixlib=rb-4.0.3"
    },
    {
        id: 40,
        name: "Flannel Shirt",
        rating: 4.5,
        price: 175,
        image: "https://images.unsplash.com/photo-1583869389522-60a7307c4a74?ixlib=rb-4.0.3"
    },
    {
        id: 41,
        name: "Cropped Sweatshirt",
        rating: 4.0,
        price: 120,
        image: "https://images.unsplash.com/photo-1559152978-3782edbd4874?ixlib=rb-4.0.3"
    },
    {
        id: 42,
        name: "Long Sleeve Henley",
        rating: 4.5,
        price: 140,
        image: "https://images.unsplash.com/photo-1593586491039-6c1f1559b9b0?ixlib=rb-4.0.3"
    },
    {
        id: 43,
        name: "Tech Stretch Shirt",
        rating: 5.0,
        price: 250,
        originalPrice: 280,
        discount: 10,
        image: "https://images.unsplash.com/photo-1587753877019-2209538d6c7b?ixlib=rb-4.0.3"
    },
    {
        id: 44,
        name: "Button-down Work Shirt",
        rating: 4.0,
        price: 135,
        image: "https://images.unsplash.com/photo-1555938759-e0280171d6a2?ixlib=rb-4.0.3"
    },
    {
        id: 45,
        name: "Lightweight Bomber Jacket",
        rating: 4.5,
        price: 230,
        image: "https://images.unsplash.com/photo-1544046432-30931d0e46c7?ixlib=rb-4.0.3"
    },
    {
        id: 46,
        name: "Fitted Blazer",
        rating: 4.5,
        price: 220,
        image: "https://images.unsplash.com/photo-1550278244-c788fa2db5c1?ixlib=rb-4.0.3"
    },
    {
        id: 47,
        name: "Utility Jacket",
        rating: 4.0,
        price: 200,
        image: "https://images.unsplash.com/photo-1534906622526-cbcfbd88c2d1?ixlib=rb-4.0.3"
    }
],[
    {
        id: 48,
        name: "Printed Graphic Tee",
        rating: 4.0,
        price: 120,
        image: "https://images.unsplash.com/photo-1560485102-6b58997cfdb1?ixlib=rb-4.0.3"
    },
    {
        id: 49,
        name: "Striped Sweater",
        rating: 4.5,
        price: 155,
        image: "https://images.unsplash.com/photo-1562220305-c9ef8d4a9c51?ixlib=rb-4.0.3"
    },
    {
        id: 50,
        name: "Casual Blazer",
        rating: 4.5,
        price: 250,
        image: "https://images.unsplash.com/photo-1577173206640-c7222baf8ab7?ixlib=rb-4.0.3"
    },
    {
        id: 51,
        name: "Varsity Jacket",
        rating: 4.0,
        price: 190,
        image: "https://images.unsplash.com/photo-1532675313-67808c5a98a9?ixlib=rb-4.0.3"
    },
    {
        id: 52,
        name: "Short Sleeve Henley Shirt",
        rating: 4.5,
        price: 145,
        image: "https://images.unsplash.com/photo-1574528938093-5e5192fe35da?ixlib=rb-4.0.3"
    },
    {
        id: 53,
        name: "Canvas Jacket",
        rating: 4.5,
        price: 170,
        image: "https://images.unsplash.com/photo-1573901977593-f4f421518987?ixlib=rb-4.0.3"
    },
    {
        id: 54,
        name: "Luxe Wool Coat",
        rating: 5.0,
        price: 450,
        originalPrice: 500,
        discount: 10,
        image: "https://images.unsplash.com/photo-1535524963-fb05ea144f37?ixlib=rb-4.0.3"
    },
    {
        id: 55,
        name: "Denim Overalls",
        rating: 4.5,
        price: 220,
        image: "https://images.unsplash.com/photo-1601310532495-303876afc130?ixlib=rb-4.0.3"
    },
    {
        id: 56,
        name: "Corduroy Shirt Jacket",
        rating: 4.0,
        price: 180,
        image: "https://images.unsplash.com/photo-1573983915863-c9c861052d79?ixlib=rb-4.0.3"
    },
    {
        id: 57,
        name: "Casual Polo Shirt",
        rating: 4.5,
        price: 130,
        image: "https://images.unsplash.com/photo-1575569525286-0385fd40f4e9?ixlib=rb-4.0.3"
    },
    {
        id: 58,
        name: "Windbreaker Jacket",
        rating: 5.0,
        price: 280,
        originalPrice: 320,
        discount: 12,
        image: "https://images.unsplash.com/photo-1594478121104-5c2a5a220dfe?ixlib=rb-4.0.3"
    },
    {
        id: 59,
        name: "Lightweight Parka",
        rating: 4.5,
        price: 240,
        image: "https://images.unsplash.com/photo-1553218469-6dbfa824abeb?ixlib=rb-4.0.3"
    },
    {
        id: 60,
        name: "Cotton Button-up Shirt",
        rating: 4.5,
        price: 135,
        image: "https://images.unsplash.com/photo-1541712348-41fe50ed6a16?ixlib=rb-4.0.3"
    },
    {
        id: 61,
        name: "Relaxed Fit Jeans",
        rating: 4.0,
        price: 180,
        image: "https://images.unsplash.com/photo-1583270246078-e3a42c827d7d?ixlib=rb-4.0.3"
    },
    {
        id: 62,
        name: "Crewneck Sweatshirt",
        rating: 4.0,
        price: 140,
        image: "https://images.unsplash.com/photo-1593772132158-90ea3b68bb97?ixlib=rb-4.0.3"
    }
]];

function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '★';
        } else if (i === fullStars && hasHalfStar) {
            stars += '⭐';
        } else {
            stars += '☆';
        }
    }
    
    return `${stars} ${rating}/5`;
}

function generatePages() {
    for (let i = 0; i < 4; i++) {
        let productHTML = '';
        products[i].forEach((product,index) => {
            productHTML += `
            <a target="_self" href="https://ajaykathar30.github.io/Project/html/product_details.html" style="text-decoration: none; color:black;">
                <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="rating">${createStarRating(product.rating)}</div>
                <div class="price-info">
                    <span class="price">$${product.price}</span>
                    ${product.originalPrice ? `
                        <span class="original-price">$${product.originalPrice}</span>
                        <span class="discount">-${product.discount}%</span>
                    ` : ''}
                </div>
            </div>
        </div>
                </a>
            `;
        });
        products[i]=productHTML;
    }
}
generatePages();

function renderProducts(page_ind) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = products[page_ind];
}
renderProducts(0);

document.addEventListener('DOMContentLoaded', () => {

    const prev=document.body.querySelector(".prev");
    const next=document.body.querySelector(".next");
    prev.disabled=true;
    const pageButtons = document.querySelectorAll('.page-numbers button');
    pageButtons.forEach((button,index) => {
        button.addEventListener('click', () => {
            pageButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            if (index === 0) {
                next.disabled = false;
                prev.disabled = true;
            } else if (index === pageButtons.length - 1) {
                prev.disabled = false;
                next.disabled = true;
            } else {
                prev.disabled = false;
                next.disabled = false;
            }
            renderProducts(index);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
    next.addEventListener("click",()=>{
        let ind;
        pageButtons.forEach((button,index)=>{
            if(button.classList.contains("active")){
                button.classList.remove("active");
                ind=index;
            }
        })
        pageButtons[ind+1].classList.add("active");
        renderProducts(ind+1);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        if (ind+1 === pageButtons.length - 1) {
            prev.disabled = false;
            next.disabled = true;
        } else {
            prev.disabled = false;
            next.disabled = false;
        }
    })
    prev.addEventListener("click",()=>{
        let ind;
        pageButtons.forEach((button,index)=>{
            if(button.classList.contains("active")){
                button.classList.remove("active");
                ind=index;
            }
        })
        pageButtons[ind-1].classList.add("active");
        renderProducts(ind-1);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        if (ind-1 === 0) {
            next.disabled = false;
            prev.disabled = true;
        } else {
            prev.disabled = false;
            next.disabled = false;
        }
    })
    let logo = document.body.querySelector(".logo");
    logo.addEventListener("click", () => {
        window.location.href = "https://ajaykathar30.github.io/Project/html/home.html";
    })
});