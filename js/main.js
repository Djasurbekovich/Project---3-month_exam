// let basket = [
//     {
//         name: 'Шок. конфеты "Лучшей маме"',
//         price: 1200,
//         count: 1,
//     },
//     {
//         name: 'Шок. конфеты "Лучшей маме"',
//         price: 1200,
//         count: 1,
//     },
//     {
//         name: 'Шок. конфеты "Лучшей маме"',
//         price: 1200,
//         count: 1,
//     },
//     {
//         name: 'Шок. конфеты "Лучшей маме"',
//         price: 1200,
//         count: 1,
//     },
//     {
//         name: 'Шок. конфеты "Лучшей маме"',
//         price: 1200,
//         count: 1,
//     },
//     {
//         name: 'Шок. конфеты "Лучшей маме"',
//         price: 1200,
//         count: 1,
//     }
// ]

let basketBtn = document.querySelector(".nav__btn")
let addBtn = document.getElementById("sect2__btn")
let modal = document.querySelector(".modal")
let list = document.querySelector(".sect2__list")
let plus = document.querySelector(".sect2__plus")
let minus = document.querySelector(".sect2__minus")
let count = document.querySelector(".sect2__span")

// basketBtn.addEventListener("click", function(){
//     modal.classList.add("modal__btn")
// })

addBtn.addEventListener("click", function () {
    addBtn.textContent = "Добавлено"
    addBtn.style.backgroundColor = '#BDBDBD'
})
