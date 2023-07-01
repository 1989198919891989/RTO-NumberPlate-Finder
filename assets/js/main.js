const inputEl = document.querySelector('input');



async function getJSONData() {                                     // DATA get from json file
    const response = await fetch("../assets/json/data.json");
    return await response.json();

}



searchRecord = async (value) => {
    console.log('I have got this value!', value);

    const jsonData = await getJSONData();

    const recordFound = jsonData.find((record) => 
    record.rto_code === value || value.startsWith(record.rto_code)
    );

    const resultSectionEl = document.querySelector("#resultSection");

    if(recordFound) {
        resultSectionEl.classList.remove('hidden');

        resultSectionEl.querySelector('#queryel').innerText = value;
        resultSectionEl.querySelector('#rto_id').innerText = recordFound.id;
        resultSectionEl.querySelector('#rto_code').innerText = recordFound.rto_code;
        resultSectionEl.querySelector('#rto_location').innerText = recordFound.location;
        resultSectionEl.querySelector('#rto_type').innerText = recordFound.type;
        resultSectionEl.querySelector('#rto_district').innerText = recordFound.district;
       
    }
    else{
       resultSectionEl.classList.add('hidden');
    }

};



inputEl.addEventListener('keyup', (e) => {


    if (e.key === 'Enter') {                                                  // check 'Enter'= 'Enter'

        if (inputEl.value.length > 3) {

            const inputVal = inputEl.value.toUpperCase();                                     // validation for minum 4 letter. 
            searchRecord(inputVal);

        }

    }

});