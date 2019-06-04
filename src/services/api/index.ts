import axios, { AxiosPromise, AxiosResponse } from 'axios';

import config from '../../config';
import { ICarResponse, ICar, ICarsResponse } from './model/car';
import { IDictionary } from '../../store/dictionaries/types';

const api = axios.create({
  baseURL: config.baseURLPrefix
});

api.interceptors.response.use(response => response.data);

export interface IGetCarsParams {
  color: string | null;
  manufacturer: string | null;
}
export const fetchCars = (
  params: IGetCarsParams
): AxiosPromise<ICarsResponse> => api.get(`/cars`, { params });

export const fetchCar = async (stockNumber: string): Promise<ICar> => {
  const response: AxiosResponse<ICarResponse> = await api.get(
    `/cars/${stockNumber}`
  );
  return response.car;
};

export const fetchDictionary = async (name: string): Promise<IDictionary> => {
  const endpoints: { [name: string]: string } = {
    colors: '/colors',
    manufacturers: '/manufacturers'
  };
  const endpoint = endpoints[name];
  if (!endpoint) {
    throw Error(`Dictionary "${name}" is not supported`);
  }
  const response: AxiosResponse<IDictionary> = await api.get(endpoint);
  return response[name];
};
