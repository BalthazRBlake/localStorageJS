/*const textA = document.querySelector('#tweet');

const list = document.querySelector('#lista-tweets');

textA.addEventListener('keyup', function(e){

    //document.querySelector('h1').innerText = textA.value;
    const li = document.createElement('li');
    li.innerText = textA.value;
    list.appendChild(li);
});*/
const listaTweets = document.getElementById('lista-tweets');

eventListeners();

function eventListeners(){
   
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    listaTweets.addEventListener('click', borrarTweet);

    document.addEventListener('DOMContentLoaded', mostrarLocalStorage);
}

function agregarTweet(e){
    e.preventDefault();
    const tweet = document.getElementById('tweet').value;

    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar);

    listaTweets.appendChild(li);

    agegarLocalStorage(tweet);
}

function borrarTweet(e){
    e.preventDefault();

    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

function mostrarLocalStorage(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    //console.log(tweets);

    tweets.forEach(tweet => {
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(botonBorrar);

        listaTweets.appendChild(li);
    });
}

//Agregar tweet a Local Storage
function agegarLocalStorage(tweet){
    
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.push(tweet);
    //localStorage.setItem('tweets', tweet);
    //Pasar como arreglo o sobre escribe cada nuevo String
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Comprobar que haya tweets
function obtenerTweetsLocalStorage(){
    
    let tweets;

    if(localStorage.getItem('tweets') === null){
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}

function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    
    tweetBorrar = tweet.substring(0, tweet.length - 1);
    
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach((tweet, index) => {
        if(tweetBorrar === tweet){
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));  
}