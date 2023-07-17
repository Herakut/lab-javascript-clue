const suspectsArray = [
    {
       aka: "mrGreen",
       firstName: "Jacob",
       lastName: "Green",
       occupation: "Entrepreneur",
       age: 45,
       description: "He has a lot of connections",
       image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
       color: "green",
   },
   {
       aka: "drOrchid",
       firstName: "Doctor",
       lastName: "Orchid",
       occupation: "Scientist",
       age: 26,
       description:"PhD in plant toxicology. Adopted daughter of Mr. Boddy" ,
       image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
       color: "white",
   },
   {
       aka:"profPlum",
       firstName: "Victor",
       lastName: "Plum",
       occupation: "Designer",
       age: 22,
       description:"Billionaire video game designer",
       image:" https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
       color: "purple",
   },
   {
       aka: "missScarlet",
       firstName: "Kasandra",
       lastName: "Scarlet",
       occupation: "Actor",
       age: 31,
       description:"She is an A-list movie star with a dark past" ,
       image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
       color: "red",
   },
   {
       aka: "mrsPeacock",
       firstName: "Eleanor",
       lastName: "Peacock",
       occupation: "Socialité",
       age: 36,
       description: "She is from a wealthy family and uses her status and money to earn popularity",
       image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
       color: "blue",
   },
   {
       aka:"mrMustard",
       firstName: "Jack",
       lastName: "Mustard",
       occupation: "Retired Football player",
       age: 62,
       description: "He is a former football player who tries to get by on his former glory",
       image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
       color: "yellow",
   }


];
// Rooms Array
//mas de lo mismo



const roomsArray = [
  
{name: "Dining Room"},
{name: "Conservatory"},
{name: "Kitchen"},
{name: "Study"},
{name: "Library"},

{name: "Billiard Room"},
{name: "Lounge"},
{name: "Ballroom"},
{name: "Hall"},
{name: "Spa"},

{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"},
];

// Weapons Array
//facil,mas d elo mismo

const weaponsArray = [

{   name: "rope",
   weight: 10
},

{   name: "knife",
   weight: 8,    
},

{   name: "candlestick",
   weight: 2
},

{   name: "dumbbell",
   weight: 30
},

{   name: "poison",
    weight: 2
   },

{   name: "axe",
   weight: 15
},

{   name: "bat",
    weight: 13
   },

{   name: "trophy",
   weight: 25
},

{   name: "pistol",
   weight: 20
},

];


/***********************************************************************codigoooooooooooooooooooooooooooooooooooo***************************** */
console.log("codigo de aqui para abajo")









//Crar una funcion que escoja una de las cartas de las pilas
//Condicionales para la fucking jasmine, 1 para vacio, 1 para si hay un elemento, otro para encontrar el elemento al azar


function selectRandom( array){
   if(array.length===0){
     return undefined; 

   }else if(array.length===1){
     return array[0]; 



     //tengo math.flor para redondear y luego mathrando,no alreves
     //dividir para encontar el elementos
   }else{
     const randomIndice= Math.floor(Math.random()* array.length); 
     return array[randomIndice]; 
   }
 };

 //sin invocar!!!

 console.log("select random")













//crea una carta misteriosa con un objeto por cada elemento de los arrays de las pilas
//creo variable por cada cosa que me pide y luego la dejo en el objeto
 function pickMystery(){
    const suspect= selectRandom(suspectsArray); 
    const weapon= selectRandom(weaponsArray); 
    const room= selectRandom(roomsArray); 

   let misteryCarta= {
       suspect,
       weapon,
       room};


    console.log(misteryCarta)
   return misteryCarta;
 };
 pickMystery(); 








 
 function revealMystery(envelope){
    const {suspect, weapon, room}= envelope;
    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
  }


