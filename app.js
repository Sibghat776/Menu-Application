let khana = [

    {
        name: "Biryani",
        price: "200-/Rs Only",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?",
        type: "lunch",
        image: `./Images/Biryani.jpeg`
    },
    {
        name: "Halwa Puri",
        price: "500-/Rs Only",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?",
        type: "breakfast",
        image: `./Images/Halwa Puri.jpeg`
    },
    {
        name: "Anda Paratha",
        price: "100-/Rs Only",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?",
        type: "breakfast",
        image: `./Images/Anda Paratha.jpeg`
    },
    {
        name: "Daal Chawal",
        price: "100-/Rs Only",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?",
        type: "lunch",
        image: `./Images/Daal Chawal.jpeg`
    },
    {
        name: "Anday wala Burger",
        price: "80-/Rs Only",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?",
        type: "lunch",
        image: `./Images/Anday Wala Burger.jpeg`
    },
    {
        name: "Sugar Cane",
        price: "50-/Rs Only",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?",
        type: "juice",
        image: `./Images/Sugar Cane Juice.jpeg`
    },
    {
        name: "Orange Juice",
        price: "180-/Rs Only",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?",
        type: "juice",
        image: `./Images/Orange Juice.jpeg`
    },
    {
        name: "Apple Juice",
        price: "200-/Rs Only",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?",
        type: "juice",
        image: `./Images/Apple Juice.jpeg`
    },
    {
        name: "Chai Paratha",
        price: "90-/Rs Only",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?",
        type: "breakfast",
        image: `./Images/Chai Paratha.jpeg`
    },
]



let HTMLCard = document.querySelector(".cards")
khana.forEach(function (item) {
    let card = document.createElement("div")
    HTMLCard.appendChild(card)
    card.innerHTML = `<div class="card">
                    <img src="${item.image}" id="image" height="80%" width="280px" alt="">
                    <div class="details">
                        <h2 style="border-bottom: 5px solid black; border-radius: 10px; color: black; padding-bottom: 10px;">${item.name} <span>${item.price}</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?</p>
                    </div>
                </div>`
})

function breakFast() {
    console.log("Chal Raha HUn")
    HTMLCard.innerHTML = ''
    khana.filter(item => {
        return item.type == 'breakfast'
    }).forEach(item => {
        let card = document.createElement("div")
        HTMLCard.appendChild(card)
        card.innerHTML = `<div class="card">
                        <img src="${item.image}" id="image" height="80%" width="280px" alt="">
                        <div class="details">
                            <h2 style="border-bottom: 5px solid black; border-radius: 10px; color: black; padding-bottom: 10px;">${item.name} <span>${item.price}</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?</p>
                        </div>
                    </div>`

    })
}

function lunch() {
    console.log("Chal Raha HUn")
    HTMLCard.innerHTML = ''
    khana.filter(item => {
        return item.type == 'lunch'
    }).forEach(item => {
        let card = document.createElement("div")
        HTMLCard.appendChild(card)
        card.innerHTML = `<div class="card">
                        <img src="${item.image}" id="image" height="80%" width="280px" alt="">
                        <div class="details">
                            <h2 style="border-bottom: 5px solid black; border-radius: 10px; color: black; padding-bottom: 10px;">${item.name} <span>${item.price}</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?</p>
                        </div>
                    </div>`

    })
}

function juice() {
    console.log("Chal Raha HUn")
    HTMLCard.innerHTML = ''
    khana.filter(item => {
        return item.type == 'juice'
    }).forEach(item => {
        let card = document.createElement("div")
        HTMLCard.appendChild(card)
        card.innerHTML = `<div class="card">
                        <img src="${item.image}" id="image" height="80%" width="280px" alt="">
                        <div class="details">
                            <h2 style="border-bottom: 5px solid black; border-radius: 10px; color: black; padding-bottom: 10px;">${item.name} <span>${item.price}</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?</p>
                        </div>
                    </div>`

    })
}

function sabAajao() {
    console.log("Chal Raha HUn")
    HTMLCard.innerHTML = ''
    khana.forEach(item => {
        let card = document.createElement("div")
        HTMLCard.appendChild(card)
        card.innerHTML = `<div class="card">
                        <img src="${item.image}" id="image" height="80%" width="280px" alt="">
                        <div class="details">
                            <h2 style="border-bottom: 5px solid black; border-radius: 10px; color: black; padding-bottom: 10px;">${item.name} <span>${item.price}</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sunt ipsum porro non sapiente quod, rerum saepe aliquid odit aperiam?</p>
                        </div>
                    </div>`

    })
}




function add() {
    console.log('Function Chala');
    let loginPage = document.createElement("div")
    document.body.appendChild(loginPage)
    loginPage.classList.add("adding")
    loginPage.innerHTML = `<div class="addingPage">
        <div class="head">
            <h1>Add Your Dish</h1>
        </div>
        <div class="inputs">
            <input placeholder="Dish Name here" id="dishName" type="text">
            <input placeholder="Dish Price here" id="dishPrice" type="text">
            <input placeholder="Dish description" id="dishDesc" type="text">
            <input placeholder="Dish Type here" id="dishType" type="text">
            Choose A Picture : 
                <input type="file" name="Choose A Picture" id="file">
        </div>
        <div class="mybtn">
            <button class="addDish" onclick="addingDish()">Add My Dish</button>
        </div>
            <button class="close" onclick="addGayabHoja()">X</button>
    </div>`
}

function addGayabHoja() {
    console.log("Chala")
    document.querySelector(".adding").innerHTML = ''
    document.querySelector(".adding").style.display = 'none'
}

// function addingDish() {
//     console.log("Chala")
//     let dishName = document.querySelector("#dishName").value
//     let dishPrice = document.querySelector("#dishPrice").value
//     let dishDesc = document.querySelector("#dishDesc").value
//     let dishType = document.querySelector("#dishType").value
//     let dishImage = document.querySelector("#file")
//     khana.push({
//         name: dishName,
//         price: dishPrice,
//         description: dishDesc,
//         type: dishType,
//         image: dishImage,
//     })
//     document.querySelector(".adding").classList.remove("adding")
//     document.querySelector(".addingPage").style.display = "none"
// }
function addingDish() {
    console.log("Adding Dish Function Called");

    let dishName = document.querySelector("#dishName").value;
    let dishPrice = document.querySelector("#dishPrice").value;
    let dishDesc = document.querySelector("#dishDesc").value;
    let dishType = document.querySelector("#dishType").value;
    let dishImage = document.querySelector("#file").files[0];

    // Check if all fields are filled
    if (dishName && dishPrice && dishDesc && dishType && dishImage) {
        // Convert the image file to a URL
        let imageURL = URL.createObjectURL(dishImage);

        // Add the new dish to the menu
        khana.push({
            name: dishName,
            price: dishPrice,
            description: dishDesc,
            type: dishType,
            image: imageURL,
        });

        // Reset the form
        document.querySelector(".adding").remove();

        // Refresh the menu to include the new dish
        sabAajao();
    } else {
        alert("Please fill all fields and upload an image.");
    }
}
