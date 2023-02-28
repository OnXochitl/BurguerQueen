export interface Breakfast {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
}

export const breakfast: Breakfast[] = [
  {
    id: 1,
    name: "American Coffee",
    price:  5,
    img: "../Images/coffee.jpeg",
    description: "Coffee from Chiapas"
  },
  {
    id: 2,
    name: "Coffee with milk",
    price: 7,
    img: "",
    description: "Coffee from Chiapas with cow milk"
  },
  {
    id: 3,
    name: "Ham and cheese sandwich",
    price: 10,
    img: "",
    description: ""
  },
  {
    id: 4,
    name: "Natural Juice",
    price: 7,
    img: "",
    description: ""
  }
]