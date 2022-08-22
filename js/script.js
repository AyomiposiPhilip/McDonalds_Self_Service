var codes = {
    "letters": ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    "numbers": ["0","1","2","3","4","5","6","7","8","9"],
}

// happy meal options
var happyMeal = [
    {
        "name": "Happy Meal",
        "price": 3.09,
        "image": "img/foods/happy-meal/happy-meal.jpg",
    }
]

// nuggets options
var nuggets = [
    {
        "name": "20 Chicken Nuggets",
        "price": 4.00,
        "image": "img/foods/nuggets/20mcmuggets.jpg",
    }
]

// fries options
var fries = [
    {
        "name": "Small Fries",
        "price": 0.50,
        "image": "img/foods/fries/small-fries.jfif",
    },
    {
        "name": "Medium Fries",
        "price": 1.00,
        "image": "img/foods/fries/medium-fries.png",
    },
    {
        "name": "Large Fries",
        "price": 1.50,
        "image": "img/foods/fries/large-fries.jpg",
    }
]

// drinks options
var drinks = [
    {
        "name": "Small Fanta",
        "price": 1.20,
        "image": "img/foods/drinks/fanta/small-fanta.jfif",
    },
    {
        "name": "Medium Fanta",
        "price": 2.00,
        "image": "img/foods/drinks/fanta/medium-fanta.jfif",
    },
    {
        "name": "Large Fanta",
        "price": 2.80,
        "image": "img/foods/drinks/fanta/large-fanta.jfif",
    },
    {
        "name": "Small Coke",
        "price": 1.20,
        "image": "img/foods/drinks/coke/small-coke.jpg",
    },
    {
        "name": "Medium Coke",
        "price": 2.00,
        "image": "img/foods/drinks/coke/medium-coke.png",
    },
    {
        "name": "Large Coke",
        "price": 2.80,
        "image": "img/foods/drinks/coke/large-coke.png",
    },
    {
        "name": "Small Oasis",
        "price": 1.20,
        "image": "img/foods/drinks/oasis/small-oasis.jpg",
    },
    {
        "name": "Medium Oasis",
        "price": 2.00,
        "image": "img/foods/drinks/oasis/medium-oasis.jpg",
    },
    {
        "name": "Large Oasis",
        "price": 2.80,
        "image": "img/foods/drinks/oasis/large-oasis.jfif",
    },
    {
        "name": "Small Sprite",
        "price": 1.20,
        "image": "img/foods/drinks/sprite/small-sprite.png",
    },
    {
        "name": "Medium Sprite",
        "price": 2.00,
        "image": "img/foods/drinks/sprite/medium-sprite.png",
    },
    {
        "name": "Large Sprite",
        "price": 2.80,
        "image": "img/foods/drinks/sprite/large-sprite.png",
    },
]

var burgers = [
    {
        "name": "Bacon & Cheese Quarter Pounder",
        "price": 1.50,
        "image": "img/foods/burgers/bacon-and-cheese-quarter-pounder.png",
    },
    {
        "name": "Bacon Buffalo Ranch McChicken",
        "price": 1.50,
        "image": "img/foods/burgers/bacon-buffalo-ranch-mcchicken.png",
    },
    {
        "name": "Bacon Cheddar McChicken",
        "price": 1.50,
        "image": "img/foods/burgers/bacon-cheddar-mcchicken.png",
    },
    {
        "name": "Bacon Clubhouse Burger",
        "price": 1.50,
        "image": "img/foods/burgers/bacon-clubhouse-burger.png",
    },
    {
        "name": "Bacon Habanero Ranch Quarter Pounder",
        "price": 1.50,
        "image": "img/foods/burgers/bacon-habanero-ranch-quarter-pounder.png",
    },
    {
        "name": "Bacon McDouble",
        "price": 1.50,
        "image": "img/foods/burgers/bacon-mcdouble.png",
    },
    {
        "name": "BBQ Ranch Burger",
        "price": 1.50,
        "image": "img/foods/burgers/bbq-ranch-burger.png",
    },
    {
        "name": "Big Mac",
        "price": 1.50,
        "image": "img/foods/burgers/big-mac.png",
    },
    {
        "name": "Buffalo Ranch McChicken",
        "price": 1.50,
        "image": "img/foods/burgers/buffalo-ranch-mcchicken.png",
    },
    {
        "name": "Cheeseburger",
        "price": 1.50,
        "image": "img/foods/burgers/cheeseburger.png",
    },
    {
        "name": "Daily Double",
        "price": 1.50,
        "image": "img/foods/burgers/daily-double.png",
    },
    {
        "name": "Deluxe Quarter Pounder",
        "price": 1.50,
        "image": "img/foods/burgers/deluxe-quarter-pounder.png",
    },
    {
        "name": "Double Cheeseburger",
        "price": 1.50,
        "image": "img/foods/burgers/double-cheeseburger.png",
    },
    {
        "name": "Double Quarter Pounder with Cheese",
        "price": 1.50,
        "image": "img/foods/burgers/double-quarter-pounder-with-cheese.png",
    },
    {
        "name": "Filet-O-Fish",
        "price": 1.50,
        "image": "img/foods/burgers/filet-o-fish.png",
    },
    {
        "name": "Grilled Onion Cheddar Burger",
        "price": 1.50,
        "image": "img/foods/burgers/grilled-onion-cheddar-burger.png",
    },
    {
        "name": "Hamburger",
        "price": 1.50,
        "image": "img/foods/burgers/hamburger.png",
    },
    {
        "name": "Jalapeno Double",
        "price": 1.50,
        "image": "img/foods/burgers/jalapeno double.png",
    },
    {
        "name": "McChicken",
        "price": 1.50,
        "image": "img/foods/burgers/mcchicken.png",
    },
    {
        "name": "McDouble",
        "price": 1.50,
        "image": "img/foods/burgers/mcdouble.png",
    },
    {
        "name": "Premium Crispy Chicken Bacon Clubhouse Sandwich",
        "price": 1.50,
        "image": "img/foods/burgers/premium-crispy-chicken-bacon-clubhouse-sandwich.png",
    },
    {
        "name": "Premium Grilled Chicken Bacon Clubhouse Sandwich",
        "price": 1.50,
        "image": "img/foods/burgers/premium-grilled-chicken-bacon-clubhouse-sandwich.png",
    },
    {
        "name": "Premium Crispy Chicken Classic Sandwich",
        "price": 1.50,
        "image": "img/foods/burgers/premium-crispy-chicken-classic-sandwich.png",
    },
    {
        "name": "Premium Grilled Chicken Bacon Clubhouse Sandwich",
        "price": 1.50,
        "image": "img/foods/burgers/premium-grilled-chicken-classic-sandwich.png",
    },
    {
        "name": "Premium Crispy Chicken Club Sandwich",
        "price": 1.50,
        "image": "img/foods/burgers/premium-crispy-chicken-club-sandwich.png",
    },
    {
        "name": "Premium Grilled Chicken Club Sandwich",
        "price": 1.50,
        "image": "img/foods/burgers/premium-grilled-chicken-club-sandwich.png",
    },
    {
        "name": "Premium Crispy Chicken Ranch BLT Sandwich",
        "price": 1.50,
        "image": "img/foods/burgers/premium-crispy-chicken-ranch-blt-sandwich.png",
    },
    {
        "name": "Premium Grilled Chicken Ranch BLT Sandwich",
        "price": 1.50,
        "image": "img/foods/burgers/premium-grilled-chicken-ranch-blt-sandwich.png",
    },
    {
        "name": "Quarter Pounder with Cheese",
        "price": 1.50,
        "image": "img/foods/burgers/quarter-pounder-with-cheese.png",
    },
    {
        "name": "Southern Style Crispy Chicken Sandwich",
        "price": 1.50,
        "image": "img/foods/burgers/southern-style-crispy-chicken-sandwich.png",
    },
]


var cart = [
    {
        "type": "none",
        "index": 0,
        "price": 0,
        "quantity": 0,
        "cost": 0,
    }
]

var userInfo = {
    "totalCost": 0,
}

function newOrder() {
    window.location.reload();
}


function removeItem(cartIndex) {
    cart[cartIndex].index = 0;
    cart[cartIndex].type = "none";
    cart[cartIndex].quantity = 0;
    cart[cartIndex].cost = 0;
    cart[cartIndex].price = 0;
    openCart();
    calculatePrice();
}


function addRemoveQuantityToItem(action, cartIndex) {
    if (action == "sub") {
        if (cart[cartIndex].quantity > 1) {
            cart[cartIndex].quantity = cart[cartIndex].quantity - 1;
        }
    } else if (action == "add") {
        cart[cartIndex].quantity = cart[cartIndex].quantity + 1;
    }
    openCart();
    addedQuantityPriceCalculate(cartIndex);
    console.log(cart);
}

function pay() {
    clearOptions();
    var code = "";
    for (var num = 0; num < 3; num++) {
        letterRandom = Math.floor(Math.random()* codes.letters.length);
        numberRandom = Math.floor(Math.random()* codes.numbers.length);
        code += codes.letters[letterRandom] + codes.numbers[numberRandom];
    }
    document.getElementById("options").innerHTML += `<br><br><br><br>`;
    document.getElementById("options").innerHTML += `
        <div class="big-text">Your Order ID is `+code+` </div>
        <div class="button">
            <button onclick="newOrder()">New Order</button>
        </div>
    `;
}

function checkOut() {
    // load pay points
    clearOptions();
    document.getElementById("options").innerHTML += `<br><br><br><br>`;
    document.getElementById("options").innerHTML += `
        <div class="title">
            <div class="text">Pay</div>
        </div>
        <div class="form-content">
            <input type="number" id="card-number" placeholder="Card Number" onkeydown="checkKey()">
        </div>
        <div class="form-content">
            <input type="number" id="pin" placeholder="PIN" onkeydown="checkKey()">
        </div>
        <div class="big-text">£ `+userInfo.totalCost+`</div>
        <div class="button">
            <button onclick="pay()">Pay</button>
        </div>
    `;
}


function openCart() {
    if (cart.length == 0) {

    } else {
        clearOptions();
        if (document.getElementById("options").innerHTML == "") {
            document.getElementById("options").innerHTML += `<br><br><br><br>`;
        }
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].type == "burgers") {
                document.getElementById("options").innerHTML += `
                    <div class="cart-item">
                        <div class="image">
                            <img src="`+burgers[cart[i].index].image+`" alt="">
                        </div>
                        <div class="name-price">`+burgers[cart[i].index].name+` <br> <b>£ `+cart[i].cost+`</b></div>
                        <div class="quantity">
                            <div class="minus" onclick="addRemoveQuantityToItem('sub', `+i+`)">
                                <i class="bi bi-dash"></i>
                            </div>
                            <div class="no">`+cart[i].quantity+`</div>
                            <div class="add" onclick="addRemoveQuantityToItem('add', `+i+`)">
                                <i class="bi bi-plus"></i>
                            </div>
                        </div>
                        <div class="cancel" onclick="removeItem(`+i+`)">
                            <i class="bi bi-x-circle" style="color: red;"></i>
                        </div>
                    </div>
                `;
            } else if (cart[i].type == "drinks") {
                document.getElementById("options").innerHTML += `
                    <div class="cart-item">
                        <div class="image">
                            <img src="`+drinks[cart[i].index].image+`" alt="">
                        </div>
                        <div class="name-price">`+drinks[cart[i].index].name+`<br> <b>£ `+cart[i].cost+`</b></div>
                        <div class="quantity">
                            <div class="minus" onclick="addRemoveQuantityToItem('sub', `+i+`)">
                                <i class="bi bi-dash"></i>
                            </div>
                            <div class="no">`+cart[i].quantity+`</div>
                            <div class="add" onclick="addRemoveQuantityToItem('add', `+i+`)">
                                <i class="bi bi-plus"></i>
                            </div>
                        </div>
                        <div class="cancel" onclick="removeItem(`+i+`)">
                            <i class="bi bi-x-circle" style="color: red;"></i>
                        </div>
                    </div>
                `;
            } else if (cart[i].type == "nuggets") {
                document.getElementById("options").innerHTML += `
                    <div class="cart-item">
                        <div class="image">
                            <img src="`+nuggets[cart[i].index].image+`" alt="">
                        </div>
                        <div class="name-price">`+nuggets[cart[i].index].name+`<br> <b>£ `+cart[i].cost+`</b></div>
                        <div class="quantity">
                            <div class="minus" onclick="addRemoveQuantityToItem('sub', `+i+`)">
                                <i class="bi bi-dash"></i>
                            </div>
                            <div class="no">`+cart[i].quantity+`</div>
                            <div class="add" onclick="addRemoveQuantityToItem('add', `+i+`)">
                                <i class="bi bi-plus"></i>
                            </div>
                        </div>
                        <div class="cancel" onclick="removeItem(`+i+`)">
                            <i class="bi bi-x-circle" style="color: red;"></i>
                        </div>
                    </div>
                `;
            } else if (cart[i].type == "happy-meal") {
                document.getElementById("options").innerHTML += `
                    <div class="cart-item">
                        <div class="image">
                            <img src="`+happyMeal[cart[i].index].image+`" alt="">
                        </div>
                        <div class="name-price">`+happyMeal[cart[i].index].name+` <br><b>£ `+cart[i].cost+`</b></div>
                        <div class="quantity">
                            <div class="minus" onclick="addRemoveQuantityToItem('sub', `+i+`)">
                                <i class="bi bi-dash"></i>
                            </div>
                            <div class="no">`+cart[i].quantity+`</div>
                            <div class="add" onclick="addRemoveQuantityToItem('add', `+i+`)">
                                <i class="bi bi-plus"></i>
                            </div>
                        </div>
                        <div class="cancel" onclick="removeItem(`+i+`)">
                            <i class="bi bi-x-circle" style="color: red;"></i>
                        </div>
                    </div>
                `;
            } else if (cart[i].type == "fries") {
                document.getElementById("options").innerHTML += `
                    <div class="cart-item">
                        <div class="image">
                            <img src="`+fries[cart[i].index].image+`" alt="">
                        </div>
                        <div class="name-price">`+fries[cart[i].index].name+`<br> <b>£ `+cart[i].cost+`</b></div>
                        <div class="quantity">
                            <div class="minus" onclick="addRemoveQuantityToItem('sub', `+i+`)">
                                <i class="bi bi-dash"></i>
                            </div>
                            <div class="no">`+cart[i].quantity+`</div>
                            <div class="add" onclick="addRemoveQuantityToItem('add', `+i+`)">
                                <i class="bi bi-plus"></i>
                            </div>
                        </div>
                        <div class="cancel" onclick="removeItem(`+i+`)">
                            <i class="bi bi-x-circle" style="color: red;"></i>
                        </div>
                    </div>
                `;
            }
        }
    }
    document.getElementById("options").innerHTML += `<br><br>`;
    document.getElementById("options").innerHTML += `
        <div class="button">
            <button onclick="checkOut()">Check Out</button>
        </div>
    `;
    document.getElementById("options").innerHTML += `<br><br><br>`;
    calculatePrice();
    console.log(cart);
}


function clearOptions() {
    document.getElementById("options").innerHTML = "";
}

function updateSection(htmlElementIdName) {
    if (htmlElementIdName == "happy-meal") {
        document.getElementById(htmlElementIdName).setAttribute("type", "active");
        document.getElementById("burgers").setAttribute("type", "normal");
        document.getElementById("drinks").setAttribute("type", "normal");
        document.getElementById("fries").setAttribute("type", "normal");
        document.getElementById("nuggets").setAttribute("type", "normal");
        document.getElementById("cart").setAttribute("type", "normal");
    } else if (htmlElementIdName == "drinks") {
        document.getElementById(htmlElementIdName).setAttribute("type", "active");
        document.getElementById("burgers").setAttribute("type", "normal");
        document.getElementById("happy-meal").setAttribute("type", "normal");
        document.getElementById("fries").setAttribute("type", "normal");
        document.getElementById("nuggets").setAttribute("type", "normal");
        document.getElementById("cart").setAttribute("type", "normal");
    } else if (htmlElementIdName == "nuggets") {
        document.getElementById(htmlElementIdName).setAttribute("type", "active");
        document.getElementById("burgers").setAttribute("type", "normal");
        document.getElementById("happy-meal").setAttribute("type", "normal");
        document.getElementById("fries").setAttribute("type", "normal");
        document.getElementById("drinks").setAttribute("type", "normal");
        document.getElementById("cart").setAttribute("type", "normal");
    } else if (htmlElementIdName == "fries") {
        document.getElementById(htmlElementIdName).setAttribute("type", "active");
        document.getElementById("burgers").setAttribute("type", "normal");
        document.getElementById("happy-meal").setAttribute("type", "normal");
        document.getElementById("nuggets").setAttribute("type", "normal");
        document.getElementById("drinks").setAttribute("type", "normal");
        document.getElementById("cart").setAttribute("type", "normal");
    } else if (htmlElementIdName == "burgers") {
        document.getElementById(htmlElementIdName).setAttribute("type", "active");
        document.getElementById("fries").setAttribute("type", "normal");
        document.getElementById("happy-meal").setAttribute("type", "normal");
        document.getElementById("nuggets").setAttribute("type", "normal");
        document.getElementById("drinks").setAttribute("type", "normal");
        document.getElementById("cart").setAttribute("type", "normal");
    } else if (htmlElementIdName == "cart") {
        document.getElementById(htmlElementIdName).setAttribute("type", "active");
        document.getElementById("fries").setAttribute("type", "normal");
        document.getElementById("happy-meal").setAttribute("type", "normal");
        document.getElementById("nuggets").setAttribute("type", "normal");
        document.getElementById("drinks").setAttribute("type", "normal");
        document.getElementById("burgers").setAttribute("type", "normal");
    }
}


function loadOptions(name) {
    clearOptions();
    updateSection(name);
    if (document.getElementById("options").innerHTML == "") {
        document.getElementById("options").innerHTML += `<br><br><br><br>`;
    }
    if (name == "happy-meal") {
        for (var i = 0; i < happyMeal.length; i++) {
            console.log(i);
            document.getElementById("options").innerHTML += `
                <div class="option" onclick="addToCart('happy-meal', 1, `+i+`)">
                    <div class="image">
                        <img src="`+happyMeal[i].image+`" alt="">
                    </div>
                    <div class="name">`+happyMeal[i].name+`</div>
                    <div class="price">£ `+happyMeal[i].price+`</div>
                </div>
            `;
        }
    } else if (name == "drinks") {
        for (var i = 0; i < drinks.length; i++) {
            document.getElementById("options").innerHTML += `
                <div class="option" onclick="addToCart('drinks', 1, `+i+`)">
                    <div class="image">
                        <img src="`+drinks[i].image+`" alt="">
                    </div>
                    <div class="name">`+drinks[i].name+`</div>
                    <div class="price">£ `+drinks[i].price+`</div>
                </div>
            `;
        }
    } else if (name == "nuggets") {
        for (var i = 0; i < nuggets.length; i++) {
            document.getElementById("options").innerHTML += `
                <div class="option" onclick="addToCart('nuggets', 1, `+i+`)">
                    <div class="image">
                        <img src="`+nuggets[i].image+`" alt="">
                    </div>
                    <div class="name">`+nuggets[i].name+`</div>
                    <div class="price">£ `+nuggets[i].price+`</div>
                </div>
            `;
        }
    } else if (name == "fries") {
        for (var i = 0; i < fries.length; i++) {
            document.getElementById("options").innerHTML += `
                <div class="option" onclick="addToCart('fries', 1, `+i+`)">
                    <div class="image">
                        <img src="`+fries[i].image+`" alt="">
                    </div>
                    <div class="name">`+fries[i].name+`</div>
                    <div class="price">£ `+fries[i].price+`</div>
                </div>
            `;
        }
    } else if (name == "burgers") {
        for (var i = 0; i < burgers.length; i++) {
            document.getElementById("options").innerHTML += `
                <div class="option" onclick="addToCart('burgers', 1, `+i+`)">
                    <div class="image">
                        <img src="`+burgers[i].image+`" alt="">
                    </div>
                    <div class="name">`+burgers[i].name+`</div>
                    <div class="price">£ `+burgers[i].price+`</div>
                </div>
            `;
        }
    } else if (name == "cart") {
        openCart();
    }
}

function addedQuantityPriceCalculate(cartIndex) {
    cart[cartIndex].cost = cart[cartIndex].quantity * cart[cartIndex].price;
    openCart();
    calculatePrice();
}

function calculatePrice() {
    userInfo.totalCost = 0;
    for (var i = 0; i < cart.length; i++) {
        userInfo.totalCost = userInfo.totalCost + cart[i].cost;
    }
    console.log(userInfo);
    var items = 0;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].type !== "none") {
            items++;
        }
    }
    if ((cart.length - 1) == 1) {
        document.getElementById("no-items").innerHTML = items + " item";
    } else if (items < 0) {
        items = 0;
        document.getElementById("no-items").innerHTML = items + " items";
    } else {
        document.getElementById("no-items").innerHTML = items + " items";
    }
    document.getElementById("cost").innerHTML = "£ " + userInfo.totalCost;
}

function clearAlerts() {
    document.getElementById("alerts").innerHTML = "";
}

function showAlerts(type, index, msgType) {
    clearAlerts();
    if (msgType == 0) {
        if (type == "burgers") {
            document.getElementById("alerts").innerHTML += `<div class="alert" id="alert">Added `+burgers[index].name+` to cart.</div>`;
        } else if (type == "drinks") {
            document.getElementById("alerts").innerHTML += `<div class="alert" id="alert">Added `+drinks[index].name+` to cart.</div>`;
        } else if (type == "nuggets") {
            document.getElementById("alerts").innerHTML += `<div class="alert" id="alert">Added `+nuggets[index].name+` to cart.</div>`;
        } else if (type == "fries") {
            document.getElementById("alerts").innerHTML += `<div class="alert" id="alert">Added `+fries[index].name+` to cart.</div>`;
        } else if (type == "happy-meal") {
            document.getElementById("alerts").innerHTML += `<div class="alert" id="alert">Added `+happyMeal[index].name+` to cart.</div>`;
        }
    } else {
        document.getElementById("alerts").innerHTML += `<div class="alert" id="alert">Sorry you can't add that into the cart because that item already exists in your cart. Goto the cart menu to add more quantities to the item</div>`;
    }
}

function addToCart(type, quantity, index) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].type == type && cart[i].index == index) {
            showAlerts(type, index, 1);
            break;
        } else if (i == cart.length - 1) {
            if (type == "burgers") {
                cart.push(
                    {
                        "type": type,
                        "index": index,
                        "price": burgers[index].price,
                        "quantity": quantity,
                        "cost": (burgers[index].price * quantity),
                    }
                );
            } else if (type == "nuggets") {
                cart.push(
                    {
                        "type": type,
                        "index": index,
                        "price": nuggets[index].price,
                        "quantity": quantity,
                        "cost": (nuggets[index].price * quantity),
                    }
                );
            } else if (type == "drinks") {
                cart.push(
                    {
                        "type": type,
                        "index": index,
                        "price": drinks[index].price,
                        "quantity": quantity,
                        "cost": (drinks[index].price * quantity),
                    }
                );
            } else if (type == "fries") {
                cart.push(
                    {
                        "type": type,
                        "index": index,
                        "price": fries[index].price,
                        "quantity": quantity,
                        "cost": (fries[index].price * quantity),
                    }
                );
            } else if (type == "happy-meal") {
                cart.push(
                    {
                        "type": type,
                        "index": index,
                        "price": happyMeal[index].price,
                        "quantity": quantity,
                        "cost": (happyMeal[index].price * quantity),
                    }
                );
            }
            showAlerts(type, index, 0);
            calculatePrice();
            break;
        }
    }
    console.log(cart);
}