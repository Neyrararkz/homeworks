//1
let visitCount = document.getElementById("visitCount")
let count = localStorage.getItem("visitCount")
if (!count){
    count = 1
} else{
    count = parseInt(count) + 1
}
localStorage.setItem("visitCount", count)
visitCount.textContent = count

//2
let quoteInput = document.getElementById("quoteInput")
let saveQuote = document.getElementById("saveQuote")
let quote = document.getElementById("quote")

let savedQuote = localStorage.getItem("quote")
if (savedQuote){
    quote.textContent = savedQuote
}
saveQuote.addEventListener("click", () => {
    let quote = quoteInput.value.trim()
    if (quote) {
        localStorage.setItem("quote", quote)
        quote.textContent = quote
        quoteInput.value = ""
    }
    
})

//3
const noteInput = document.getElementById("noteInput")
const addNoteBtn = document.getElementById("addNote")
const notesList = document.getElementById("notesList")

function renderNotes() {
    notesList.innerHTML = ""
    const notes = JSON.parse(localStorage.getItem("notes") || "[]")
    notes.forEach((note, index) => {
        const li = document.createElement("li")
        li.textContent = note
        const delBtn = document.createElement("button")
        delBtn.textContent = "Удалить"
        delBtn.style.marginLeft = "10px"
        delBtn.classList = 'delBtn'
        delBtn.onclick = () => {
            notes.splice(index, 1)
            localStorage.setItem("notes", JSON.stringify(notes))
            renderNotes()
        };
        li.appendChild(delBtn)
        notesList.appendChild(li)
    })
}
addNoteBtn.addEventListener("click", () => {
    const note = noteInput.value.trim()
    if (note) {
        const notes = JSON.parse(localStorage.getItem("notes") || "[]")
        notes.push(note)
        localStorage.setItem("notes", JSON.stringify(notes))
        noteInput.value = ""
        renderNotes()
    }
})
renderNotes()

//4
let changeTheme = document.getElementById("changeTheme")

let savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
}
changeTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    theme = document.body.classList.contains('dark') ? 'dark' : 'light'
    localStorage.setItem("theme", theme)
})