type FeatureType = {
  _id: string;
  title: string;
  products: ProductType[];
  createdAt: Date;
  updatedAt: Date;
}


type ProductType = {
  _id: string;
  make: string;
  model: string;
  price: number;
  features: FeatureType[];
  numberofowner: number;
  year: number;
  mileage: number;
  lowmileage: string;
  driveType: string;
  fuelType: string;
  transmission: string;
  engineSize: number;
  cylinder: number;
  color: string;
  interiorColor: string;
  door: number;
  status: string;
  description: string;
  media: [string];
  vin: string;
  categories: string;
  history: string;
  createdAt: Date;
  updatedAt: Date;
}

