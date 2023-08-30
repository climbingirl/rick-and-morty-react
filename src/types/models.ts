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
