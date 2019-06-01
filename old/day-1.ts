// /// <reference lib="es2015.promise" />
//
// let p: Promise<string> = new Promise(() => {
//
// });

// $('.control').on('click', () => {
//     console.log('TypeScript');
// });
//
// interface IUser {
//     name: string;
//     age: number;
// }
//
// let person: IUser = IUser;

// let account: {
//     name: string;
//     age: number;
// } = {
//     name: 'Igor',
//     age: 33
// };
//
// let user: typeof account = 1;
// let user1:  user = 1;

// class User {
//     public name!: string;
// }
//
// let u1: User = new User();
/** let/ const **/
let period: number = 2;
const baseUrl: string = 'localhost:4200';

/**object*/
let firstName: string = 'Igor';

let account = {
    firstName,
    getName(): string {
        return this.firstName;
    }
};

/****spred operator***/
let person = {...account, male: true};
let dates = [...[1, 2, 3]];

/*destructoring**/
let {firstName: myName}: { firstName: string } = person;
let [firstDate]: number[] = dates;

function f({firstName: myName}: typeof person) {
    console.log(myName);
}


let dates = [...[1, 2, 3]];
for (const date of dates) {
    console.log(date);
}
let sum = (a: number, b: number) => a + b;
class Point {
    public x = 1;
}

let firstName: string = 'Igor';

let account = {
    firstName,
    getName(): string {
        return this.firstName;
    }
};

function userMessage([start, end]: TemplateStringsArray, {firstName: myName}: typeof account): string {
    return `${start}${myName}${end}`;
}

console.log(userMessage`Good day, ${account} !!`);

/// <reference lib="esnext" />

function sleep(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function* getItemsReallySlowly(items: Iterable<string>): AsyncIterableIterator<string> {
    for (const item of items) {
        await sleep(1000);
        yield item;
    }
}

async function speakLikeSloth(items: string[]) {
    for await (const item of getItemsReallySlowly(items)) {
        console.log(item);
    }
}

speakLikeSloth(['hi', 'all', 'TS', 'is', 'awesome']);

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

// let bool: boolean = true;
// let str: string = 'str';
//
// let decimal: number = 6;
// let hex: number = 0xf00d;
// let binar: number = 0b10101;
// let octal: number = 0o744;
// let nan: number = NaN;
//
// let nill: null = null;
// let ubdef: undefined = undefined;
//
// let bigInt: bigint = 100n;
//
//
// const key1: unique symbol = Symbol('Symbol 1');
// const key2: unique symbol = Symbol('Symbol 2');
// const key3: string = 'Symbol 3';


// let strictObject = {
//     [key1]: 100,
//     [key2]: 'hello',
//     [key3]: 'hello',
// };
//
// let a1 = strictObject[key1];
// let a2 = strictObject[key2];
// let a3 = strictObject[key3];


// function f1(value: typeof key1) {
//     console.log(value);
// }
//
// f1(key1);

// let anyType: any = 4;
// anyType.a = 1;
// anyType['n'] = 'str';
// anyType();
//
//
// let objType: Object = {};
// objType.a = 1;
// objType['n'] = 'str';
// objType = 1;
// objType();
//
// let obj1Type: object = {a: 1};
// obj1Type.a = 1;
// obj1Type['n'] = 'str';
// obj1Type = 1;
// obj1Type();
//
// Object.create(obj1Type);
//
// let fn2: () => void = () => {
// };
//
// function fn1(cb: Function) {
//     cb();
// }
//
// fn1(fn2);
//
// let obj1Type: unknown = {a: 1};
// obj1Type.a = 1;
// obj1Type['n'] = 'str';
// obj1Type = 1;
// obj1Type();

// let v: void = undefined;
//
// function fn(): void {
//
// }
// type User = {
//     readonly firstName: string;
//     readonly age?: number
//     getName?(): string;
// }
//
// const user: User = {
//     firstName: 'Igor'
// };
// user.firstName = 'Vlad';
//
// let keys: keyof User;
// keys = 'firstName';
//
// let myName: User['firstName'] = 1;
//
// let userHashMap: {
//     [id: string]: User
// }
//
//
// let arr: readonly [User, string] = [user, 'str'];
//
// arr[100] = user;
// arr.push(user);


// type User = {
//     firstName: string;
//     age?: number
//     getName?(): string;
// }
// //
// const user: User = {
//     firstName: 'Igor'
// }
// interface IOnInit {
//     ngOnInit(): void;
// }
//
// class HeaderComponent implements IOnInit {
//     public ngOnInit(): void {
//
//     }
// }


// type AccountName = {
//     firstName: string;
//     lastName: string;
// };
//
// interface IUserInfo {
//     age: number;
//     male: boolean;
// }
//
// interface IAccount extends IUserInfo, AccountName {
//
// }
//
// let user: IAccount = {
//     firstName: 'Igor',
//     lastName: 'Igor',
//     age: 33,
//     male: true
// }
// interface IB {
//     id: number;
// }
//
// let item: IB = {
//     id: 1
// };
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// interface IB {
//     firstName: string;
// }

//
// interface IMover {
//
//     id: { key2: string };
//
//     move(): void;
//
//     getStatus(): { speed: number };
// }
//
// interface IShaker {
//     id: { key1: number };
//
//     shake(): void;
//
//     getStatus(): { frequency: number };
// }
//
//
// interface IMoverShaker extends IMover, IShaker {
//     id: { key1: number, key2: string };
//     getStatus(): { speed: number, frequency: number };
// }
// type, interface, function , class
// type UserInfo = {
//     firstName: string,
//     lastName: string,
// }
//
//
// type AdminInfo = {
//     nikname: string
// }
//
// type CommonUser<Id = string, Info = UserInfo> = {
//     id: Id,
//     info: Info
// }
//
//
// let user: CommonUser = {
//     id: 'asdasd',
//     info: {
//         firstName: 'Igor',
//         lastName: 'Igor',
//     }
// }
//
// let admin: CommonUser<number, AdminInfo> = {
//     id: 12312,
//     info: {
//         nikname: 'superadmin'
//     }
// };

// interface IUser<Info extends { id: number, firstName: string }> {
//     info: Info;
// }
//
// type RegularUser = {
//     id: number;
//     firstName: string,
//     male: boolean;
// };
//
// let user: IUser<RegularUser>;

// type RegularUser = {
//     id: number;
//     firstName: string,
//     male: boolean;
// };
//
// type ReadonlyOptionalPerson<T> = {
//     readonly [P in keyof T]?: T[P]
// };
//
// let strictUser: ReadonlyOptionalPerson<RegularUser> = {
//     id: 1231,
// }

// strictUser.id = 123123;
//
//
// let b: Partial
