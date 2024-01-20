const { getUser } = require("./users.controller");

const shows=[
  {
    "id": '1',
    "companyId": 1,
    "title": "The Shawshank Redemption",
    "description": "Two imprisoned men bond over a number of years",
    "release_date": "1994-09-23",
    "genres": [
      "Drama"
    ],
    "cast": [
      "Tim Robbins",
      "Morgan Freeman"
    ],
    "crew": {
      "director": "Frank Darabont",
      "producer": "Niki Marvin",
      "writer": "Stephen King"
    },
    "access_control": {
      "Admin": [
        "description",
        "genres",
        "cast",
        "crew"
      ],
      "Editor": [
        "description",
        "genres",
        "cast"
      ]
    }
  },
  {
    "id": '2',
    "companyId": 1,
    "title": "Inception",
    "description": "A mind-bending heist movie",
    "release_date": "2010-07-16",
    "genres": [
      "Action",
      "Sci-Fi",
      "Thriller"
    ],
    "cast": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page"
    ],
    "crew": {
      "director": "Christopher Nolan",
      "producer": "Emma Thomas",
      "writer": "Christopher Nolan"
    },
    "access_control": {
      "Admin": [
        "genres",
        "cast",
        "crew"
      ],
      "Editor": [
        "genres",
        "cast"
      ]
    }
  },
  {
    "id": '3',
    "companyId": 1,
    "title": "The Dark Knight",
    "description": "A vigilante known as Batman faces the Joker",
    "release_date": "2008-07-18",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "cast": [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart"
    ],
    "crew": {
      "director": "Christopher Nolan",
      "producer": "Emma Thomas",
      "writer": "Jonathan Nolan"
    },
    "access_control": {
      "Admin": [
        "description",
        "genres",
        "cast",
        "crew"
      ],
      "Editor": [
        "description",
        "genres",
        "cast"
      ]
    }
  },
  {
    "id": '4',
    "companyId": 1,
    "title": "Westworld",
    "description": "An amusement park for rich guests with android hosts",
    "release_date": "2016-10-02",
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "cast": [
      "Evan Rachel Wood",
      "Jeffrey Wright",
      "Ed Harris"
    ],
    "crew": {
      "creators": [
        "Jonathan Nolan",
        "Lisa Joy"
      ],
      "producer": "J.J. Abrams"
    },
    "access_control": {
      "Admin": [
        "description",
        "genres",
        "cast",
        "crew"
      ],
      "Editor": [
        "description",
        "genres",
        "cast"
      ],
      "Viewer": [
        "description",
        "genres",
        "cast"
      ]
    }
  },
  {
    "id": '5',
    "companyId": 1,
    "title": "Pulp Fiction",
    "description": "Various interconnected stories in the criminal underworld",
    "release_date": "1994-10-14",
    "genres": [
      "Crime",
      "Drama"
    ],
    "cast": [
      "John Travolta",
      "Uma Thurman",
      "Samuel L. Jackson"
    ],
    "crew": {
      "director": "Quentin Tarantino",
      "producer": "Lawrence Bender",
      "writer": "Quentin Tarantino"
    },
    "access_control": {
      "Admin": [
        "description",
        "genres",
        "cast",
        "crew"
      ],
      "Editor": [
        "description",
        "genres",
        "cast"
      ]
    }
  },
  {
    "id": '5',
    "companyId": 1,
    "title": "The Mandalorian",
    "description": "A lone bounty hunter navigates the outer reaches of the galaxy",
    "release_date": "2019-11-12",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "cast": [
      "Pedro Pascal",
      "Gina Carano",
      "Carl Weathers"
    ],
    "crew": {
      "creator": "Jon Favreau",
      "producer": "Kathleen Kennedy"
    },
    "access_control": {
      "Admin": [
        "description",
        "genres",
        "cast",
        "crew"
      ],
      "Editor": [
        "description",
        "genres",
        "cast"
      ]
    }
  }
];

exports.addShowsMeta = (req, res, nex) => {
  console.log(req)

}

exports.update = (req, res, next) => {

}

exports.deleteShowMeta = (req, res, next) => {
  const showId = req.params.showId;
  shows = shows.filter(show => show.id !== showId);
  res.send("deleted successfully")
}

exports.getShowsMeta = (req, res, next) => {
  const user = getUser(req.headers.userid)
  const filteredShows = shows.filter(i => i.companyId === user.companyId).map(show => {
    const accessFields = show.access_control[user.role];
    let newObj = {title: show.title, description: show.description, release_date: show.release_date}
    accessFields.forEach(field => newObj = {...newObj, [field]: show[field]})
    return newObj
  });
  res.send(filteredShows);
}