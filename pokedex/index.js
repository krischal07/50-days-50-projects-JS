// Using promise

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu ")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch the api data");
//         }   
//         return response.json()
//     })
//     .then(data => console.log(data.weight))
//     .catch(error => console.log(error))


// Using Async await
fetchData();

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Could not fetch resource")

        }

        const data = await response.json();
        // console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imageElement = document.getElementById('pokemonSprite');
        imageElement.src = pokemonSprite;
        imageElement.style.display = 'block';
    }
    catch(error){
        console.log(error);
        
    }
}