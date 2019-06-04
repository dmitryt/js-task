interface IMileage {
  number: number;
  unit: string;
}

export interface ICar {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  color: string;
  mileage: IMileage;
  fuelType: string;
  pictureUrl: string;
}

export interface ICarResponse {
  car: ICar;
}

export interface ICarsResponse {
  cars: ICar[];
  totalPageCount: number;
  totalCarsCount: number;
}
