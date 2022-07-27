

const API = "https://api.giphy.com/v1/gifs/search?"
const key = 'api_key=rjTJtATv8k4JTXYlBNoKLEJonIdY8CVj'
const limit = "&limit="
const params = "&q="

const form = document.querySelector(".gif_search")
const btn = document.querySelector('#search')
const input = document.querySelector("#inp")
const output = document.querySelector(".output")
const opt = document.querySelector("select")

const searchGiphy = async () => {
    let url = API + key + limit + opt.value + params + input.value
    const request = await fetch(url)
    const response = await request.json()
    renderGiphy(response.data);
    input.value = " "
}

const renderGiphy = (data) => {
    output.innerHTML = " "
    data.forEach(giff => {


        console.log(giff);
        const img = document.createElement("img")
        img.classList.add("img")
        img.src = giff.images.downsized.url
        output.append(img)

        const title = document.createElement("h2")
        title.classList.add("title")
        title.textContent = giff.title
        img.append(title)



    })

}



form.addEventListener("submit", (event) => {
    event.preventDefault()

    searchGiphy()


})

