let products = [];

function getProducts(){
    return fetch('https://ecommerce.routemisr.com/api/v1/products')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayProducts();
        })
        .catch(error => console.error('Error fetching products:', error));
}

getProducts();

function displayProducts(){
    var allProducts = '';
    for (let i = 0; i < products.data.length; i++) {
        const product = products.data[i];
        allProducts += `
            <div class="col-md-3">
                <div class="card fade-in">
                    <div class="pro-con">
                        <img style="width: 100%;" src="${product.imageCover}" alt="${product.title}">
                    </div>
                    <div class="pro-info">
                        <span class="pro-brand">${product.brand?.name || 'Brand'}</span>
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <span class="pro-price">$${product.price}</span>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('products-container').innerHTML = allProducts;
}



async function signUp() {
    var username = document.getElementById('userName').value;
    var email = document.getElementById('userEmail').value;
    var password = document.getElementById('userPass').value;
    var rePassword = document.getElementById('userRePass').value;
    var phone = document.getElementById('userPhone').value;

    var data = {
        name: username,
        email: email,
        password: password,
        rePassword: rePassword,
        phone: phone
    };
    console.log("data:", data);

    var res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    var message = document.getElementById('message');
    if (res.ok) {
        var data = await res.json();
        message.textContent = "Signup successful! Welcome, " + data.user.name;
    } else {
        message.textContent = "Error signing up";
    }
    console.log(res);
}

async function signIn() {
    var email = document.getElementById('userEmailSignIn').value;
    var password = document.getElementById('userPassSignIn').value;

    var data = {
        email: email,
        password: password
    };
    console.log("data:", data);

    var res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    var message = document.getElementById('message');
    if (res.ok) {
        var data = await res.json();
        message.textContent = "Welcome back, " + data.user.name;
    } else {
        message.textContent = "Error signing in";
    }
    console.log(res);
}


var btn = document.querySelector('#signupBtn');
btn.addEventListener('click', async function(event) {
    event.preventDefault();
    var result = await signUp();
    console.log(result);
});

var btn2 = document.querySelector('#signinBtn');
btn2.addEventListener('click', async function(event) {
    event.preventDefault();
    var result = await signIn();
    console.log(result);
});