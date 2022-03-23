const paintElem = document.getElementsByClassName("paint")
const cardElem = document.getElementsByClassName("card")
const imgBoxElem = document.getElementsByClassName("imgBox")
const contentBoxElem = document.getElementsByClassName("contentBox")

for(let index in data){
    let itemData = data[index]
    let itemElement = document.createElement("div")
    itemElement.innerHTML = `<figure><img src="./js/${itemData.images[0]}"></figure>
    <div><h2>${itemData.name}</h2>
    <p class="desc">${itemData.desc}</p>
    <p class="author">${itemData.author}</p></div>`
    paintElem.appendChild(itemElement)
}