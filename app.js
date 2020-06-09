function displayResults(responseJson) {
	
	let html = '';

	if (typeof responseJson.message == 'object') {
	
	
		responseJson.message.forEach( ( item, index ) => {

			console.log ( item );

			html += `<h2>Look at this dog!</h2><img class="results-img" alt="img" src="${ item }">`;

		});

	}
	else {
		html = `<h2>Look at this dog!</h2><img class="results-img" alt="img" src="${ responseJson.message }"></img>`;
	}

	$ ( '.results' ).html( html );

  }

function getDogImage( addr ) {
	fetch(addr)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));

}

// Form submit handler.
const funWithDogs = () => {
	
	let addr;

	$ ( '#random-dog-image-quantity-form' ).submit ( e => {
		
		e.preventDefault ();

		let imageGetCount = $ ( '#random-dog-image-quantity' ).val ();

		// REQUEST
		addr = `https://dog.ceo/api/breeds/image/random/${ imageGetCount }`
		
		getDogImage (addr)
		
	});
	
	$ ( '#search-by-breed-form' ).submit ( e => {
		
		e.preventDefault ();

		let breed = $ ( '#search-by-breed' ).val ();

		//console.log ( breed );
		let addr = `https://dog.ceo/api/breed/${ breed }/images/random`;
		//let addr = `https://dog.ceo/api/breed/poodle/images/random`;

		getDogImage ( addr );

	});

};

$ ( funWithDogs );