import { AnyAction } from 'redux';
import { UsersActions } from '../actions/users.actions';

export interface IUser {
    profileName: string;
    firstName: string;
    surname: string;
    photo: string;
    country: string;
}

const initialState: IUser[] = [];

export function usersReducer(state: IUser[] = initialState, action: AnyAction) {
    switch (action.type) {
        case  UsersActions.GET_USER_SUCCESS : {
            return [...state, ...action.payload];
        }
        default: {
            return state;
        }
    }
}
