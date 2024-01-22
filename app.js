let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

            
let container = document.querySelector(".container");
let selectOption = document.querySelector(".select-option");
let dropDownList = document.querySelector(".list-search-container");
let search = document.querySelector("#search");
let lists = document.querySelector('.list');


selectOption.addEventListener('click',()=>{
    container.classList.toggle("active")
});

function addCountry(){
    lists.innerHTML = '';
    countries.forEach((e)=>{
        let listItem = '<li>' + e + "</li>";
        lists.insertAdjacentHTML('beforeend',listItem)
    })
    addClickEventToLi();
}
addCountry();

function addClickEventToLi() {
lists.querySelectorAll('li').forEach(listItem=>{
    listItem.addEventListener('click',()=>{
        updateSelectCountry(listItem);
    })
})
}

function updateSelectCountry(listItem) {
    search.value = "";
    selectOption.firstElementChild.innerHTML = listItem.innerHTML;
    container.classList.remove("active");
    addCountry();
}

search.addEventListener('keyup',()=>{
    let searchInVal = search.value.toLowerCase();
    let filterCountries = countries.filter(country=>{
        return country.toLowerCase().startsWith(searchInVal);
    }).map(country=>{
        return '<li>' + country + '</li>' ;
    }).join("");
    lists.innerHTML = filterCountries;
    addClickEventToLi();
})