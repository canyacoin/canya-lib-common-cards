//the array containing ALL CanApps. will be updated periodically. 
var canApps = [
    {
        name            :   'CanInvoice',
        illustration    :   'https://canya.io/images/CanApps/illustrations/CanInvoice.svg',
        logo            :   'https://canya.io/images/CanApps/logos/CanInvoice.svg',
        desc            :   'Easily create your own clean, professional and accurate invoices.',
        url             :   'https://caninvoice.io'
    },
    {
        name            :   'CanStation',
        illustration    :   'https://canya.io/images/CanApps/illustrations/CanStation.svg',
        logo            :   'https://canya.io/images/CanApps/logos/CanStation.svg',
        desc            :   'Find out the ideal amount of gas to allocate to your ETH transaction!',
        url             :   'https://CanStation.io'
    },
    {
        name            :   'CanYa25',
        illustration    :   'https://canya.io/images/CanApps/illustrations/CanYa25.svg',
        logo            :   'https://canya.io/images/CanApps/logos/CanYa25.svg',
        desc            :   'Shoot your pitch, vote, contribute and raise funds!',
        url             :   'https://CanYa25.io'
    },
    {
        name            :   'CanSend',
        illustration    :   'https://canya.io/images/CanApps/illustrations/CanSend.svg',
        logo            :   'https://canya.io/images/CanApps/logos/CanSend.svg',
        desc            :   'Send ERC20 tokens to multiple addresses at once!',
        url             :   'https://CanSend.io'
    },
    {
        name            :   'CanShare',
        illustration    :   'https://canya.io/images/CanApps/illustrations/CanShare.svg',
        logo            :   'https://canya.io/images/CanApps/logos/CanShare.svg',
        desc            :   'Easily create your own clean, professional and accurate invoices.',
        url             :   'https://canshare.io/'
    },
    {
        name            :   'CanTrack',
        illustration    :   'https://canya.io/images/CanApps/illustrations/CanTrack.svg',
        logo            :   'https://canya.io/images/CanApps/logos/CanTrack.svg',
        desc            :   'A crisp and easy to use task tracker to help you with your project.',
        url             :   'https://CanTrack.io'
    } 
]; 

//Creates the cards in a random order, excluding the current app's card.
function createCardsRandomly(maxCards, thisApp){   
	   var prevIndexes = Array(); 
		var min = 0;
		var max = canApps.length-1;
		//create random number 
        var createdCards = 0;
        
        while(createdCards < maxCards){
            
            var randNumber  = Math.floor(Math.random() * (max - min + 1)) + min; 
            if(thisApp != canApps[randNumber].name){  
                console.log("randomNumber= "+randNumber);
                console.log((prevIndexes.includes(randNumber)));
                if((prevIndexes.includes(randNumber))==true){ 
                    console.log("randomNumber is in the prevIndexes, getting new number...");    
                    var randNumber  = Math.floor(Math.random() * (max - min + 1)) + min; 
                }
                else{
                            createCard(canApps[randNumber]);   
                            createdCards++;
                            prevIndexes.push(randNumber);
                }
            } 
        }
        
        
        prevIndexes.push(randNumber);
    } 
//Creates ALL the cards, excluding the current app's card. thisApp blank if you want to show EVERYTHING.
function createCards(thisApp){    
    //console.log(getJSON('http://canya.io/assets/cancards.json')); 
    //createCard("canInvoice"); 
    console.log(typeof canApps);
    for (var i = 0 ; i<canApps.length ; i++){  
        if(thisApp != canApps[i].name){
            createCard(canApps[i]); 
        }  
    }
    
 } 
 
//the actual card factory.
function createCard(canApp){ 
	/* create the card container
			since we want the whole card to be clickable, the structure of the card is as follows:
				<a href="card-url">
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
     var card = document.createElement('a');
     card.href = canApp.url;
     card.target = "_blank";
     card.id= canApp.name;  
     var cardDiv = document.createElement('div');
     card.className = "canAppCard"; 
     var cardIllustration = document.createElement('img'); 
     cardIllustration.src = canApp.illustration;
     cardIllustration.className = "cardIllustration";  
     var cardLogo = document.createElement('img'); 
     cardLogo.src = canApp.logo;
     cardLogo.className = "cardLogo"; 
     var cardText = document.createElement('p');
     cardText.innerHTML = canApp.desc; 
     var cardButton = document.createElement('a');
     cardButton.className = "cardBtn";
     cardButton.innerHTML = "Check It Out!";  
     cardDiv.appendChild(cardIllustration);
     cardDiv.appendChild(document.createElement('br'));
     cardDiv.appendChild(cardLogo);
     cardDiv.appendChild(cardText);   
     cardDiv.appendChild(cardButton);
     card.appendChild(cardDiv);
     document.getElementById('canyaCard').appendChild(card);
} 

 