// enum Size {
//     S = 44,
//     L = 48,
//     XL = 52,
// }
//
// let mySize = Size.S;
// let mySize1 = Size[44];

enum UserActions {
    AddUser = 'AddUser',
    DeleteUser = 'DeleteUser',
    EditUser = 'EditUser',

    RemoveUser = DeleteUser,
}

function reducer(_state: any, action: { type: UserActions }) {
   switch (action.type) {
       case UserActions.AddUser: {
           return 1;
       }
       case UserActions.RemoveUser: {
           return 2;
       }
   }
}
