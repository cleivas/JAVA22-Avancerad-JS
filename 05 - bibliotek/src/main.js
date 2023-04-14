import $ from 'jquery';
import _ from 'underscore';
import anime from 'animejs';

const h1 = $('h1');
h1.text('NU HÄNDER DET');
h1.css('color', 'blue');

$.get('https://restcountries.com/v3.1/lang/spanish')
    .then( countries =>{
        console.log(countries);

       const populationArray =  _.pluck(countries, 'population');

       console.log(populationArray);

       console.log( _.max(countries, 'population'));

       const sortedCountries = _.sortBy(countries, 'population');
       console.log(sortedCountries);

    })

// Starta animationen först när man har klickat på diven
const animation = anime({
    targets: 'div',
    backgroundColor: 'hsl(200, 80%, 50%)',
    translateX: '300px',
    duration: 2000,
    easing: 'easeInOutSine',
    width: {
            value: '-=20px', 
            duration: 900,
            easing: 'easeInOutSine'
        },
    rotate: {
        value: '+=2turn',
        duration: 900,
        easing: 'easeInOutSine'
    },
    direction: 'alternate',
    loop: true,
    autoplay: false,
});


const div = $('div');
div.on('click', animation.play);


   

