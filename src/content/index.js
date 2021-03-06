const data = {
  icecream: [
    {
      flavor: "chocolate",
      id: "1",
    },
    {
      flavor: "vanilla",
      id: "2",
    },
    {
      flavor: "strawberry",
      id: "3",
    },
    {
      flavor: "banana",
      id: "4",
    },
    {
      flavor: "oreo",
      id: "5",
    },
    {
      flavor: "mint",
      id: "6",
    },
    {
      flavor: "butter pecan",
      id: "7",
    },
    {
      flavor: "rainbow",
      id: "8",
    },
  ],

  toppings: [
    {
      type: "caramel",
      id: "1",
    },
    {
      type: "hot fudge",
      id: "2",
    },
    {
      type: "strawberry",
      id: "3",
    },
    {
      type: "marshmallow",
      id: "4",
    },
    {
      type: "cookie crumble",
      id: "5",
    },
    {
      type: "peanuts",
      id: "6",
    },
    {
      type: "chocolate sprinkles",
      id: "7",
    },
    {
      type: "rainbow sprinkles",
      id: "8",
    },
  ],

  sundaes: [
    {
      option: "Hot Fudge Sundae",
      type: "classic",
      id: "1",
      image: "/assets/hotfudgesundae.jpg",
    },
    {
      option: "Caramel Sundae",
      type: "classic",
      id: "2",
    },
    {
      option: "Turtle Sundae",
      type: "classic",
      id: "3",
    },
    {
      option: "Strawberry Sundae",
      type: "classic",
      id: "4",
    },
    {
      option: "Funfetti Sundae",
      type: "classic",
      id: "5",
    },
    {
      option: "Razzle Dazzle Sundae",
      type: "classic",
      id: "6",
    },
  ],

  size: [
    {
      option: "small",
      id: "1",
    },
    {
      option: "medium",
      id: "2",
    },
    {
      option: "large",
      id: "3",
    },
    {
      option: "shareable",
      id: "4",
    },
  ],

  container: [
    {
      option: "cup",
      id: "1",
    },
    {
      option: "waffle bowl",
      id: "2",
    },
    {
      option: "dipped waffle bowl",
      id: "3",
    },
  ],

  images: {
    sundaes: [
      {
        img: process.env.PUBLIC_URL + "/assets/caramelsundae.jpg",
        alt: "caramelsundae",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/funfetti.jpg",
        alt: "funfetti",
      },
      {
        img: process.env.PUBLIC_URL + "/hotfudgesundae.jpg",
        alt: "hotfudgesundae",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/razzledazzlesundae.jpg",
        alt: "razzledazzlesundae",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/strawberrysundae.jpg",
        alt: "strawberrysundae",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/turtlesundae.jfif",
        alt: "turtlesundae",
      },
    ],
  },
};

export default data;
