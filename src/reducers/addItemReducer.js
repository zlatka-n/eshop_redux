import code from "../images/code.jpeg";
import catch22 from "../images/catch22.jpeg";
import reiKawakubo from "../images/reiKawakubo.jpeg";
import deathAndLife from "../images/deathAndLife.jpeg";
import HomoDeus from "../images/HomoDeus.jpeg";
import whiteNoise from "../images/whiteNoise.jpeg";

const initState = {
  products: [
    {
      id: 1,
      title: "Catch 22",
      author: "Joseph Heller",
      price: 8.0,
      quantity: 1,
      image: catch22,
      description:
        "Discover Joseph Heller's hilarious and tragic satire on military madness, and the tale of one man's efforts to survive it. It's the closing months of World War II and Yossarian has never been closer to death. Stationed in an American bomber squadron off the coast of Italy, each flight mission introduces him to thousands of people determined to kill him.",
    },
    {
      id: 2,
      title: "Code",
      author: "Charles Petzold",
      price: 19.88,
      quantity: 1,
      image: code,
      description:
        "What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries.",
    },
    {
      id: 3,
      title: "Rei Kawakubo",
      author: "Terry Jones",
      price: 43.77,
      quantity: 1,
      image: reiKawakubo,
      description:
        "Rei Kawakubo, the enigmatic head of innovative Japanese fashion house Comme des Garcons, has a special vision which extends beyond clothing to furniture, architecture, and graphic design, always defying conventional thinking. i-D examines Kawakubo's complex and conceptual world, digging through the magazines archive and revisiting interviews which explore how the fashion house continues to challenge the Western ideals of body shape and garment construction. Breaking the conventional rules, Kawakubo continues to push boundaries, perfectly marrying fashion with art in the most unexpected of ways.",
    },
    {
      id: 4,
      title: "White Noise",
      author: "Don DeLillo",
      price: 16.57,
      quantity: 1,
      image: whiteNoise,
      description:
        "Jack Gladney is the creator and chairman of Hitler studies at the College-on-the-Hill. This is the story of his absurd life; a life that is going well enough, until a chemical spill from a rail car releases an 'Airborne Toxic Event' and Jack is forced to confront his biggest fear - his own mortality.",
    },
    {
      id: 5,
      title: "Homo Deus",
      author: "Yuval Noah Harari",
      price: 13.69,
      quantity: 1,
      image: HomoDeus,
      description:
        "Yuval Noah Harari, author of the critically-acclaimed New York Times bestseller and international phenomenon Sapiens, returns with an equally original, compelling, and provocative book, turning his focus toward humanity's future, and our quest to upgrade humans into gods.",
    },
    {
      id: 6,
      title: "The Death and Life of American Cities",
      author: "Jane Jacobs",
      price: 15.22,
      quantity: 1,
      image: deathAndLife,
      description:
        "A direct and fundamentally optimistic indictment of the short-sightedness and intellectual arrogance that has characterized much of urban planning in this century, The Death and Life of Great American Cities has, since its first publication in 1961, become the standard against which all endeavors in that field are measured. In prose of outstanding immediacy, Jane Jacobs writes about what makes streets safe or unsafe; about what constitutes a neighborhood, and what function it serves within the larger organism of the city; about why some neighborhoods remain impoverished while others regenerate themselves. She writes about the salutary role of funeral parlors and tenement windows, the dangers of too much development money and too little diversity. Compassionate, bracingly indignant, and always keenly detailed, Jane Jacobs's monumental work provides an essential framework for assessing the vitality of all cities.",
    },
  ],
  buy: [],
  delivery: [],
};

export const toBuy = (state = initState, action) => {
  switch (action.type) {
    case "BUY_ITEM":
      //get items data from the products array
      const book = state.products.find((prod) => prod.id === action.payload.id);
      const isInCart = state.buy.find((book) => {
        return book.id === action.payload.id ? true : false;
      });
      return {
        ...state,
        //check if item is in the cart already
        buy: isInCart
          ? state.buy.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : //adding new book to the cart
            [...state.buy, { ...book }],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        buy: state.buy.filter((item) => item.id !== action.payload.id),
      };
    case "INCREMENT_QTY":
      return {
        ...state,
        buy: state.buy.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_QTY":
      return {
        ...state,
        buy: state.buy.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    // case "DELIVERY_INFO":
    //   return {
    //     ...state,
    //     delivery: { ...action.payload },
    //   };
    default:
      return state;
  }
};
