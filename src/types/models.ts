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

export interface CreateElement {
  gender: string;
  name: string;
  surname: string;
  birthDate: string;
  country: string;
  photo: string;
  consent: boolean;
}

export interface CreateFormErrors {
  name: string | null;
  surname: string | null;
  birthDate: string | null;
  country: string | null;
  photo: string | null;
  consent: string | null;
}
