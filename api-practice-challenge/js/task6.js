const fetchData = word => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json())
        .then(data => {
            for (const entry of data) {
                addData(entry);
            }
        })
        .catch(err => console.error(err))
}


const addData = param => {
    const searchButton = document.getElementById('search-btn');
    searchButton.addEventListener('click',  () => {
        // event handler
        const inputFields = document.getElementById('input-field').value;

        const inputFieldsToLowerCase = inputFields.toLowerCase();

        console.log(inputFieldsToLowerCase);

        fetchData(inputFieldsToLowerCase);

        const phonetic = document.getElementById('phonetic');

        phonetic.innerText = param.phonetic;

        param.meanings.filter(a => {
            console.log(a.synonyms);
            for(const synonym of a.synonyms){
                const synonyms = document.getElementById('synonyms');
                synonyms.innerText = synonym;
            }
        })

        param.meanings.map(x => {
            // element add part
            // noun
            if(x.partOfSpeech === 'noun'){
                for(const def of x.definitions){
                    console.log(def);
                    // noun
                    const nounList = document.getElementById('noun-meaning-list');
                    nounList.innerHTML = `
                    <li>${def.definition}</li>
                    `;
                }
            }
            
            
            // verb
            if(x.partOfSpeech === 'verb'){
                for(const def of x.definitions){
                    console.log(def);
                    // noun
                    const verbList = document.getElementById('verb-meaning-list')
                    verbList.innerHTML = `
                    <li>${def.definition}</li>
                    `;
                }
            }
        });        
    })
}

fetchData('sea');