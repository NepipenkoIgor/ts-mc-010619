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
