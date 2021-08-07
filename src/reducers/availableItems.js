import code from "../images/code.jpeg";
import catch22 from "../images/catch22.jpeg";
import reiKawakubo from "../images/reiKawakubo.jpeg";

const initState = {
  booksForSelling: [
    {
      id: 1,
      title: "Catch 22",
      author: "Joseph Heller",
      price: 10,
      quantity: 0,
      image: catch22,
    },
    {
      id: 2,
      title: "Code",
      author: "Charles Petzold",
      price: 20,
      quantity: 0,
      image: code,
    },
    {
      id: 3,
      title: "Rei Kawakubo",
      author: "Terry Jones",
      price: 20,
      quantity: 0,
      image: reiKawakubo,
    },
  ],
};

export const availableItems = (state = initState) => {
  return state;
};
