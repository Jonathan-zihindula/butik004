


// airforce 1 events
const airfore = document.querySelector("#airForce");
airfore.addEventListener("click", () => {
    window.open("http://localhost:3000/butik/airforce", "_self");
});

// jordan 1 events

const jordan1 = document.querySelector("#airJordan1");
jordan1.addEventListener("click", () => {
    window.open("http://localhost:3000/butik/jordan1", "_self");
});

// jordan 4 events

const jordan4 = document.querySelector("#jordan4");
jordan4.addEventListener("click", () => {
    window.open("http://localhost:3000/butik/jordan4", "_self");
});

// jordan 6 events

const jordan6 = document.querySelector("#jordan6");
jordan6.addEventListener("click", () => {
    window.open("http://localhost:3000/butik/jordan6", "_self");
});

// jordan 6 events

const timberland = document.querySelector("#timberland");
timberland.addEventListener("click", () => {
    window.open("http://localhost:3000/butik/timberland", "_self");
});

// about us 
const aboutUs = document.querySelector("#aboutUs");
aboutUs.addEventListener("click", () => {
    window.open("http://localhost:3000/butik/about","_self");
});

// command page 
const command = document.querySelectorAll("#commandShoes");
const form = document.querySelector(".form");


command.forEach(i => {
    i.addEventListener("click", () => {
    
        window.open("http://localhost:3000/butik/command", "_blank");

        fetch("http://localhost:3000/butik/command/render", {
            
        })
            .then(res => { return res.json() })
            .then(data => {
                console.log(data);
            });
    });
});