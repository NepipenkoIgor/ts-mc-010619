import { ActionsObservable, ofType } from 'redux-observable';
import { AnyAction } from 'redux';
import { getUserSuccess, UsersActions } from '../actions/users.actions';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { getUser } from '../../services/users.service';
import { AxiosResponse } from 'axios';
import { IUser } from '../reducers/users.reducer';


export const usersEpic = (actions$: ActionsObservable<AnyAction>) =>
    actions$.pipe(
        ofType(UsersActions.GET_USER_PENDING),
        switchMap(() => {
            return from(getUser().then((res: AxiosResponse<IUser[]>) => res.data))
                .pipe(
                    map((users: IUser[]) => getUserSuccess(users))
                );
        })
    );
