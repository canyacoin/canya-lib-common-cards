// the array containing ALL CanApps. will be updated periodically.  
var canAppArray = [
    {
        name            :   'CanInvoice',  
        desc            :   'Easily create your own clean, professional and accurate invoices',
        url             :   'https://caninvoice.io',
        type            :   'helper'
    },
    {
        name            :   'CanStation', 
        desc            :   'Find out the ideal amount of gas to allocate to your ETH transaction',
        url             :   'https://CanStation.io',
        type            :   'helper'
    },
    {
        name            :   'CanFund', 
        desc            :   'Shoot your pitch, vote, contribute and raise funds',
        url             :   'https://CanFund.io',
        type            :   'main'
    },
    {
        name            :   'CanSend', 
        desc            :   'Send ERC20 tokens to multiple addresses at once',
        url             :   'https://CanSend.io',
        type            :   'helper'
    },
    {
        name            :   'CanShare', 
        desc            :   'Send and receive files using distributed technology',
        url             :   'https://canshare.io/',
        type            :   'helper'
    },
    {
        name            :   'CanTrack', 
        desc            :   'A crisp and easy to use task tracker to help you with your project',
        url             :   'https://CanTrack.io',
        type            :   'helper'
    },
    {
        name            :   'CanSign', 
        desc            :   'Upload documents to IPFS and sign them with your Ethereum address.',
        url             :   'https://CanSign.io',
        type            :   'helper'
    },
    {
        name            :   'CanSeek', 
        desc            :   'Hire and be hired with decentralised technology',
        url             :   'https://CanSeek.io',
        type            :   'main'
    }
];  
//Creates the cards in a random order, excluding the current app's card.
function createCardsRandomly(maxCards, thisApp){   
	   var prevIndexes = Array(); 
		var min = 0;
		var max = canAppArray.length-1;
		//create random number 
        var createdCards = 0; 
        while(createdCards < maxCards){ //loop through the logic until we created the target number of cards.
            var randNumber  = Math.floor(Math.random() * (max - min + 1)) + min; // Random number generator
            if(thisApp != canAppArray[randNumber].name){  // if the c
                 if((prevIndexes.includes(randNumber))==true){ 
                     var randNumber  = Math.floor(Math.random() * (max - min + 1)) + min; 
                }
                else{
                            createCard(canAppArray[randNumber]);   
                            createdCards++;
                            prevIndexes.push(randNumber);
                }
            } 
        } 
        prevIndexes.push(randNumber);
    }  
//Creates 6  cards, excluding the current app's card. thisApp blank if you want to show EVERYTHING. 
function createCards(thisApp){ 
    var shuffled = shuffle(canAppArray);
    console.log(typeof canAppArray); 
    for (var i = 0 ; i<6 ; i++){  
        if(thisApp != canAppArray[i].name){
            createCard(shuffled[i]); 
        }  
    } 
 } 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  } 
  return array;
} 
//this is a function that will only create helper-app cards.
function createHelperCards(thisApp){ 
    for (var i = 0 ; i<=6 ; i++){  
        if(canAppArray[i].type == 'helper'){
            createCard(canAppArray[i]); 
        }  
    } 
 } 
//the actual card factory.
function createCard(canApp){ 
	/* create the card container
			since we want the whole card to be clickable, the structure of the card is as follows:
				<a href="card-url" class="noDecor">
					<div class="canAppCard">
						<img class="cardIllustration" href="card-illustration-url">
						<br>
						<img class="cardLogo" href="card-logo-url">
						<p>"card-desc"</p>
						<br>
						<a class="cardBtn">Check it out!</a>
					</div>
				</a> 
	*/
    console.log(canApp);
     var card = document.createElement('a');
     card.href = canApp.url;
     card.target = "_blank";
     card.id= canApp.name;  
    
     var cardDiv = document.createElement('div');
     card.className = "canAppCard noDecor"; 
     
     var cardIllustration = document.createElement('img'); 
     cardIllustration.src = "https://canya.io/images/CanApps/illustrations/"+canApp.name+".svg";
     cardIllustration.className = "cardIllustration";  
     
     var cardLogo = document.createElement('img'); 
     cardLogo.src = "https://canya.io/images/CanApps/logos/"+canApp.name+".svg";
     cardLogo.className = "cardLogo"; 
     
     var cardText = document.createElement('p');
     cardText.innerHTML = canApp.desc;  
     cardText.className = "noDecor";
     
     var cardButton = document.createElement('a');
     cardButton.className = "cardBtn noDecor";
     cardButton.innerHTML = "Check It Out";  
    
    
     cardDiv.appendChild(cardIllustration);
     cardDiv.appendChild(document.createElement('br'));
     cardDiv.appendChild(cardLogo);
     cardDiv.appendChild(cardText);   
     cardDiv.appendChild(cardButton);
     card.appendChild(cardDiv);
     document.getElementById('canyaCard').appendChild(card);
} 
