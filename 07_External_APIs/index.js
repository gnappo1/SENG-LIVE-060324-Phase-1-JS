//! Global Variables
const target = document.querySelector("#image-container")
const searchInput = document.querySelector("#search-input")
const searchResults = document.querySelector("#search-results")
const baseUrlShows = "https://api.tvmaze.com/search/shows?q="


//! Helper Functions

//! I need to display the NASA image of the day
// 0. create a new function fetchImage
const fetchImage = (url) => {
    // 1. fetch the data from https://api.nasa.gov/planetary/apod?api_key=???
    fetch(url)
    .then(response => response.json()) // returns a promise object
    .then(imageObj => {
        // 1. Target the container that will display the image
        // 2. then create a <img> tag
        const img = document.createElement("img")
        // 3. then set the 'src' and 'alt' of the <img> tag
        img.src = imageObj["hdurl"]
        img.alt = imageObj["title"]
        // 4. then append the img to the div#image-container
        target.append(img)
    })
    .catch(error => console.log(error))
}

const noResultsDiv = () => {
    searchResults.innerHTML = ""
    const span = document.createElement("span")
    span.innerText = "Uh Oh there were no results based on your query, please try something else!"
    searchResults.append(span)
}

const appendResultToDOM = (element) => {
    //! Build a nice div to contain the info
    const div = document.createElement("div")
    div.id = element.show.id
    div.addEventListener('click', () => alert(`you clicked onto ${element.show.name}`))
    //! add an image in there
    const img = document.createElement("img")
    img.src = element.show?.image?.medium
    img.alt = element.show.name
    //! add the show name in there
    const h3 = document.createElement("h3")
    h3.innerText = element.show.name
    //! put the div onto the page
    div.append(h3, img)
    searchResults.append(div)
}

const handleChange = (e) => {
    //! Steps
    // 1. Capture what was typed
    const query = e.target.value
    // 2. fire a fetch call using the baseUrl + the user query
    fetch(baseUrlShows + query)
        .then(response => response.json()) // returns a promise object
        .then(showsArray => {
            // 3. I receive an array back -> forEach
            if (showsArray.length) {
                searchResults.innerHTML = ""
                showsArray.forEach(appendResultToDOM);
            } else {
                noResultsDiv()
            }
        })
}

const start = () => {
    fetchImage(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    searchInput.addEventListener("change", handleChange)
}

//! Start the logic
start()