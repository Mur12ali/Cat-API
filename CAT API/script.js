const charactersList = document.getElementById('cataas');
const searchBar = document.getElementById('searchBar');
let cataas = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredcatsList = catsList.filter((cat) => {
        return (
            cat.id.toLowerCase().includes(searchString) ||
            cat.tags.toLowerCase().includes(searchString)
        );
    });
    displayCatsList(filteredcatsList);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://cataas.com/api/cats?tags=cute');
        catsList = await res.json();
        displayCatsList(catsList);
    } catch (err) {
        console.error(err);
    }
};

const displayCatsList = (catsList) => {
    const htmlString = catsList
        .map((catsList) => {
            return `
            <li class="character">
                <h2>${catsList.id}</h2>
                <p>House: ${catsList.tags}</p>
                <img src="${catsList.image}"></img>
            </li>
        `;
        })
        .join('');
        catsList.innerHTML = htmlString;
};

loadCatsList();