const users = [
  {
      name: "Anna",
      age: 27,
      hobbies: ["drawing", "gardening", "biking"],
      favorite_movie: {
          title: "Parasite",
          year: 2019
      }
},
  {
      name: "Lise",
      age: 22,
      hobbies: ["singing", "gaming"],
      favorite_movie: {
          title: "Howl's moving castle",
          year: 2005
      }
},
  {
      name: "Po",
      age: 31,
      hobbies: [],
      favorite_movie: {
          title: "Arizona Dream",
          year: 1993
      }
},
    {
        name: "Marie",
        age: 28,
        hobbies: ["cooking", "fashion", "ski", "interior decorating", "clubbing"],
        favorite_movie: {
            title: "Orelsan something",
            year: 2021
        }
    },
  {
      name: "David",
      age: 27,
      hobbies: ["cooking", "climbing", "hiking", "tattoos lol"],
      favorite_movie: {
          title: undefined,
          year: undefined
      }
}
];

const olderUsers = [
    {
        name: "Anna",
        age: 27,
        hobbies: ["drawing", "gardening", "biking"],
        favorite_movie: {
            title: "Parasite",
            year: 2019
        }
  },
    {
        name: "Po",
        age: 31,
        hobbies: [],
        favorite_movie: {
            title: "Arizona Dream",
            year: 1993
        }
  },
      {
          name: "Marie",
          age: 28,
          hobbies: ["cooking", "fashion", "ski", "interior decorating", "clubbing"],
          favorite_movie: {
              title: "Orelsan something",
              year: 2021
          }
      },
    {
        name: "David",
        age: 27,
        hobbies: ["cooking", "climbing", "hiking", "tattoos lol"],
        favorite_movie: {
            title: undefined,
            year: undefined
        }
  }
  ];

const usersByHobbies = [
    {
        name: "Marie",
        age: 28,
        hobbies: ["cooking", "fashion", "ski", "interior decorating", "clubbing"],
        favorite_movie: {
            title: "Orelsan something",
            year: 2021
        }
    },
  {
      name: "David",
      age: 27,
      hobbies: ["cooking", "climbing", "hiking", "tattoos lol"],
      favorite_movie: {
          title: undefined,
          year: undefined
      }
    },
    {
        name: "Anna",
        age: 27,
        hobbies: ["drawing", "gardening", "biking"],
        favorite_movie: {
            title: "Parasite",
            year: 2019
        }
  },
    {
        name: "Lise",
        age: 22,
        hobbies: ["singing", "gaming"],
        favorite_movie: {
            title: "Howl's moving castle",
            year: 2005
        }
  },
    {
        name: "Po",
        age: 31,
        hobbies: [],
        favorite_movie: {
            title: "Arizona Dream",
            year: 1993
        }
  }
  ];

const titles = ["Parasite",
    "Howl's moving castle",
    "Arizona Dream",
    "Orelsan something",
  ];

// Question 1
// Complete the function to remove users with age strictly less than 25. The function should return a new array and not mutate the original one

function eliminateYoung(array) {
    return array.filter(user => user.age > 25)
}

console.log("QUESTION 1")
console.log(JSON.stringify(eliminateYoung(users)) === JSON.stringify(olderUsers) ? "correct" : "incorrect")

// Question 2
// Return an array of users from the ones that have the most hobbies to the least

function orderByNumberOfHobbies(array) {
    return [...array].sort((a, b) => b.hobbies.length - a.hobbies.length)
}

console.log("QUESTION 2")
console.log(JSON.stringify(orderByNumberOfHobbies(users)) === JSON.stringify(usersByHobbies) ? "correct" : "incorrect")

// Question 3
// Return an array of titles of favorite movies if they are present

function onlyMovieTitles(array) {
    return array.map(user => user.favorite_movie.title).filter(title => Boolean(title))
}

console.log("QUESTION 3")
console.log(JSON.stringify(onlyMovieTitles(users)) === JSON.stringify(titles) ? "correct" : "incorrect")

// Question 4
// Compute the average age of users

function averageAge(array) {
    return [...array].reduce((acc, user) => acc + user.age, 0)/array.length
}

console.log("QUESTION 4")
console.log(averageAge(users) === 27 ? "correct" : "incorrect")



