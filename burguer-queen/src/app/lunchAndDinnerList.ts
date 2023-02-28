export interface LunchAndDinner {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const lunchAndDinner: LunchAndDinner[] = [
  {
    id: 1,
    name: "Simple burger",
    price: 10,
    description: "Angus beef"
  },
  {
    id: 2,
    name: "Double burger",
    price: 15,
    description: "Angus beef"
  },
  {
    id: 3,
    name: "French Fries",
    price: 5,
    description: "Crunchy french fries"
  },
  {
    id: 4,
    name: "Onion Rings",
    price: 7,
    description: "Onions Rings with cheese "
  },
  {
    id: 5,
    name: "Water 500ml",
    price: 5,
    description: "Natural, Carbonated"
  },
  {
    id: 6,
    name: "Water 750ml",
    price: 7,
    description: "Natural, Carbonated"
  },
  {
    id: 7,
    name: "Soda 500ml",
    price: 7,
    description: "Apple, Lemon, Cola"
  },
  {
    id: 8,
    name: "Soda 750ml",
    price: 10,
    description: "Apple, Lemon, Cola"
  }
]