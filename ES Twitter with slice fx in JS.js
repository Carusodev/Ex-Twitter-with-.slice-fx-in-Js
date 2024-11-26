// fare lo stesso ES implementando la fx Slice anzichè fare la sottrazione



// var tweet = prompt("Inserisci il testo");
// var tweetCount = tweet.lenght;

// alert("You have written " + tweetCount + "characters, you have " + (140 - tweetCount) + "characters remaining" )  

var tweet = prompt("Inserisci il testo qui: ");
var tweetUnder140  = tweet.slice(0,140);


alert( tweetUnder140 );  


// in realtà si può ridurre anche in 
// var tweet = prompt("Inserisci il testo qui: ");
// alert(tweet.slice(0,140));


//oppure in 
// alert(prompt("Inserisci il testo:").slice(0,140));
