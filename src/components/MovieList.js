//create an array of movie objects, each property can be a detail about the move director genre etc
//array methods: map
//either map to another component, pass down properties of that object to style
//map doesn't mutate, splice mutates the array, filter doesn't mutate
import React from 'react';

function MovieList() {

    const movies = [
        {
            title: "Nope",
            releaseDate: "2022",
            description: "The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery." ,
            genre: ["Horror", "Mystery", "Sci-Fi"],
            director: "Jordan Peele",
            runTime: "2h 10m",
            ageRating: "R",
            image: "https://pbs.twimg.com/media/E66V_D2VoAExDxW?format=jpg&name=large",
        },
        {
            title: "Hereditary",
            releaseDate: "2018",
            description: "A grieving family is haunted by tragic and disturbing occurrences." ,
            genre: ["Drama", "Horror", "Mystery"],
            director: "Ari Aster",
            runTime: "2h 7m",
            ageRating: "R",
            image: "https://www.themoviedb.org/t/p/original/hjlZSXM86wJrfCv5VKfR5DI2VeU.jpg",
        },
        {
            title: "Everything Everywhere All at Once",
            releaseDate: "2022",
            description: "When an interdimensional rupture unravels reality, an unlikely hero must channel her newfound powers to fight bizarre and bewildering dangers from the multiverse as the fate of the world hangs in the balance." ,
            genre: ["Action", "Adventure", "Comedy"],
            director: "Daniel Kwan & Daniel Scheinert",
            runTime: "2h 19m",
            ageRating: "R",
            image: "https://www.themoviedb.org/t/p/original/rKvCys0fMIIi1X9rmJBxTPLAtoU.jpg",
        },
        {
            title: "Dune",
            releaseDate: "2021",
            description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future." ,
            genre: ["Action", "Adventure", "Drama"],
            director: "Denis Villeneuve",
            runTime: "2h 35m",
            ageRating: "PG-13",
            image: "https://www.themoviedb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        },
        {
            title: "Brick",
            releaseDate: "2005",
            description: "A teenage loner pushes his way into the underworld of a high school crime ring to investigate the disappearance of his ex-girlfriend." ,
            genre: ["Crime", "Drama", "Mystery"],
            director: "Rian Johnson",
            runTime: "1h 50m",
            ageRating: "R",
            image: "https://www.themoviedb.org/t/p/original/5WVk8JpNIxepn4fpZzQeCumkOL5.jpg",
        },
        {
            title: "Parasite",
            releaseDate: "2019",
            description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan." ,
            genre: ["Drama", "Thriller"],
            director: "Bong Joon Ho",
            runTime: "2h 12m",
            ageRating: "R",
            image: "https://www.themoviedb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        },
        {
            title: "Spirited Away",
            releaseDate: "2001",
            description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts." ,
            genre: ["Animation", "Adventure", "Family"],
            director: "Hayao Miyazaki",
            runTime: "2h 5m",
            ageRating: "PG",
            image: "https://www.themoviedb.org/t/p/original/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        },
        {
            title: "1917",
            releaseDate: "2019",
            description: "April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap." ,
            genre: ["Action", "Drama", "War"],
            director: "Sam Mendes",
            runTime: "1h 59m",
            ageRating: "R",
            image: "https://www.themoviedb.org/t/p/original/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg",
        },
        {
            title: "Alien",
            releaseDate: "1979",
            description: "" ,
            genre: ["Horror", "Sci-Fi"],
            director: "Ridley Scott",
            runTime: "1h 57m",
            ageRating: "R",
            image: "https://www.themoviedb.org/t/p/original/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
        },
        {
            title: "The Farewell",
            releaseDate: "2019",
            description: "A Chinese family discovers their grandmother has only a short while left to live and decide to keep her in the dark, scheduling a wedding to gather before she dies." ,
            genre: ["Comedy", "Drama"],
            director: "Lulu Wang",
            runTime: "1h 40m",
            ageRating: "PG",
            image: "https://www.themoviedb.org/t/p/original/7UrIarxfjxZC9YGj8H1ATKZMXVy.jpg",
        },
        {
            title: "Moonlight",
            releaseDate: "2016",
            description: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood." ,
            genre: ["Drama"],
            director: "Barry Jenkins",
            runTime: "1h 51m",
            ageRating: "R",
            image: "https://www.themoviedb.org/t/p/original/4911T5FbJ9eD2Faz5Z8cT3SUhU3.jpg",
        },
        {
            title: "Persepolis",
            releaseDate: "2007",
            description: "A precocious and outspoken Iranian girl grows up during the Islamic Revolution." ,
            genre: ["Animation", "Biography", "Drama"],
            director: "Marjane Satrapi'",
            runTime: "1h 36m",
            ageRating: "PG-13",
            image: "https://www.themoviedb.org/t/p/original/aU8i2QAdTyRR1nYb36Gq51xXP8p.jpg",
        },
        {
            title: "The Power of the Dog",
            releaseDate: "2021",
            description: "Charismatic rancher Phil Burbank inspires fear and awe in those around him. When his brother brings home a new wife and her son, Phil torments them until he finds himself exposed to the possibility of love." ,
            genre: ["Drama", "Romance", "Western"],
            director: "Jane Campion",
            runTime: "2h 6m",
            ageRating: "R",
            image: "https://www.themoviedb.org/t/p/original/kEy48iCzGnp0ao1cZbNeWR6yIhC.jpg",
        },
        {
            title: "Decision to Leave",
            releaseDate: "2022",
            description: "A detective investigating a man's death in the mountains meets the dead man's mysterious wife in the course of his dogged sleuthing." ,
            genre: ["Crime", "Drama", "Mystery"],
            director: "Park Chan-wook",
            runTime: "2h 19m",
            ageRating: "R",
            image: "https://www.themoviedb.org/t/p/original/N0rskx91Eh6aWjvBybeY6epNic.jpg",
        },
        {
            title: "Booksmart",
            releaseDate: "2019",
            description: "" ,
            genre: ["Comedy"],
            director: "Olivia Wilde",
            runTime: "1h 42m",
            ageRating: "R",
            image: "https://www.themoviedb.org/t/p/original/micaVOa1UZsdzs4fKGA67ZMGOzc.jpg",
        },
        {
            title: "Black Bear",
            releaseDate: "2020",
            description: "A filmmaker at a creative impasse seeks solace from her tumultuous past at a rural retreat, only to find that the woods summon her inner demons in intense and surprising ways." ,
            genre: ["Comedy", "Drama"],
            director: "Lawrence Michael Levine",
            runTime: "1h 44m",
            ageRating: "R",
            image: "https://www.themoviedb.org/t/p/original/nqZFjQRWfW6PjFTc17pzJ5LRAAv.jpg",
        },
        {
            title: "The Skeleton Twins",
            releaseDate: "2014",
            description: "Having both coincidentally cheated death on the same day, estranged twins reunite with the possibility of mending their relationship." ,
            genre: ["Comedy", "Drama", "Romance"],
            director: "Craig Johnson",
            runTime: "1h 33m",
            ageRating: "R",
            image: "https://www.themoviedb.org/t/p/original/zio2v3HUQOwbooiP5OgYPMc7BFG.jpg",
        },
      
        
    ];

    const displayMovies = movies.map(
        (element) => {
            return (
                <></>
            )
        }
    )

    return (
        <div>
            {displayMovies}
        </div>
    )
    
}

export default MovieList;
    
