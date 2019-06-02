import { AxiosPromise } from 'axios';
import { axiosInstance } from '../config';
import { IUser } from '../store/reducers/users.reducer';

type GetUser = () => AxiosPromise<IUser[]>;
export const getUser: GetUser = () => axiosInstance.get<IUser[]>('/participants?key=16vks52');
