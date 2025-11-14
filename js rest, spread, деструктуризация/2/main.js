const profile = document.getElementById("profile")
const showBtn = document.getElementById("showBtn")


const user = { 
    name: "Dana", 
    age: 25, 
    city: "Almaty", 
    role: "student", 
    isActive: true 
};
const {name, age, city, ...other} = user
const hidden = {...other}


function renderProfile(showHidden = false) {
    profile.innerHTML = `
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>City: ${city}</p>
        ${showHidden ? `<p>${JSON.stringify(hidden)}</p>` : ""}
    `;
}

showBtn.addEventListener("click", () => renderProfile(true));
renderProfile();