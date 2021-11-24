export interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface FoodDTO {
  name: string;
  description: string;
  price: string;
  image: string;
}