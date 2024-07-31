let textCreate = document.getElementById("text-write")




function createWrite(element){
    textCreate.innerHTML = "Aproveite as melhores ofertas, com produtos incriveis..."
    let arr = element.innerHTML.split("")
    element.innerHTML = ""
    arr.forEach((el,id)=>{
        var st = setTimeout(() => {
            element.innerHTML += el
        }, 127 * id);
    })
}


setInterval(() => {
    createWrite(textCreate)
}, 7200);


async function getBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        const data = await response.json();
        const price = data;
        console.log(price)
        price.forEach((el, id) => {
            let li = document.createElement('li')
            let img = document.createElement("img")
            let spn = document.createElement("span")
        
            li.setAttribute("id",`li-${id}`)

            img.setAttribute("src",`${el.image}`)
            img.setAttribute("id",`img-${id}`)
            spn.innerHTML =el.symbol + `&nbsp;&nbsp;` +  Number(el.current_price).toFixed(2)
            // li.innerHTML=el.id

            document.querySelector(".list-ul").append(li)
            document.querySelector(`#li-${id}`).append(img)
            document.querySelector(`#li-${id}`).append(spn)


        })
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        document.getElementById('price').innerText = 'Error loading price';
    }
}

getBitcoinPrice();


document.getElementById("inp-pesquisar").addEventListener("mouseover",()=>{
    textCreate.hidden = true

})
document.getElementById("inp-pesquisar").addEventListener("mouseout",()=>{
    textCreate.hidden = false    

})