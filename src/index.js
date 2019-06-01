"use strict";
// enum Size {
//     S = 44,
//     L = 48,
//     XL = 52,
// }
//
// let mySize = Size.S;
// let mySize1 = Size[44];
var UserActions;
(function (UserActions) {
    UserActions["AddUser"] = "AddUser";
    UserActions["DeleteUser"] = "DeleteUser";
    UserActions["EditUser"] = "EditUser";
    UserActions["RemoveUser"] = "DeleteUser";
})(UserActions || (UserActions = {}));
function reducer(_state, action) {
    switch (action.type) {
        case UserActions.AddUser: {
            return 1;
        }
        case UserActions.RemoveUser: {
            return 2;
        }
    }
}
//# sourceMappingURL=index.js.map