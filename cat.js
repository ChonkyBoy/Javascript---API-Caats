var url = `https://api.thecatapi.com/v1/images/search?api_key=live_koRSWRuSSo9M2ayTfiRKakWWaAJrSaJ7wN5PUzHZ0bMAfq7fCqjvleSanZtmG7Dc&limit=20 `

fetch(url)
    //Je recup ds la rep le txt
    .then(response => response.text())
    //je l'affiche ds la console
    .then(data => {
        //je recup les data parsées
        let parseData = JSON.parse(data);
        console.log(parseData);

        let imgCat = document.getElementById('imgCat');
        let breedCat = document.getElementById('breedCat');
        let originCat = document.getElementById('originCat');
        let descCat = document.getElementById('descCat');

        for (i = 0; i < parseData.length; i++) {
            if (parseData[i].breeds.length == 1) {
                console.log('ok')

                let image = document.createElement('img');
                let breed = document.createElement('span');
                let origine = document.createElement('span');
                let desc = document.createElement('p');

                //jévite d'avoir des images de fou furieux
                image.className = "img-fluid vico classe";
                desc.className = "text-center";

                image.src = parseData[i].url; //je vais chercher l'url du json
                breed.innerText = parseData[i].breeds[0].name;
                origine.innerText = parseData[i].breeds[0].origin;
                desc.innerText = parseData[i].breeds[0].description;

                imgCat.appendChild(image);
                breedCat.appendChild(breed);
                originCat.appendChild(origine);
                descCat.appendChild(desc);

                break;
            }
        }

    });


