export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CardElement {
  gender: string;
  name: string;
  surname: string;
  birthDate: string;
  country: string;
  photo: string;
  consent: boolean;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharactersAPIResponse {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null | string;
  };
  results: Character[];
}
