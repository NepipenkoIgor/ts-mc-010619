// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1, 2);
// average(1, '2', 3);
// const num: number = average(1, 2, 3);

// function average(a: number, b?: number, c?: number): string {
//     if (!b) {
//         b = 0;
//     }
//     if (!c) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, , 5);
// average(1, '2', 3);
// const num: number = average(1, 2, 3);
// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 0);
// average(1, '2', 3);
// const num: number = average(1, 2, 3);

// interface String  {
//     someProp(): string;
// }
//
// const srt: String;
type sn = number | string;

function isString(param: sn): param is string {
    return typeof param === 'string';
}

// function average(...args: sn[]): string {
//     let total: number = 0;
//     for (const item of args) {
//         if (isString(item)) {
//             total += parseInt(item);
//             continue;
//         }
//         total += item;
//
//     }
//     const avg: number = total / args.length;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 0);
// average(1, '2', 3);
// const num: number = average(1, 2, 3);

// function average(a: number, b: string): string;
// function average(a: string, b: number): string;
// function average(...args: sn[]): string {
//     let total: number = 0;
//     for (const item of args) {
//         if (isString(item)) {
//             total += parseInt(item);
//             continue;
//         }
//         total += item;
//
//     }
//     const avg: number = total / args.length;
//     return `Average is ${avg}`;
// }
//
// average(1, '2');
// average('2', 1);
//
// [].reduce()
//
// average(1);
// average(1, 2);
// average(1, 0);
// average(1, '2', 3);
// const num: number = average(1, 2, 3);

// function f1(this: void, a: number) {
// }
//
// f1(1);
//
// type Cb = (this: void, e: Event) => void;
//
//
// interface IUIElement {
//     addClickListener(onClick: Cb): void;
// }
//
// class UIElement implements IUIElement {
//     public addClickListener(_onClick: Cb): void {
//     }
// }
//
// class Handler {
//     public info!: string;
//
//     public onClickBad(this: Handler, _e: Event) {
//         this.info = 'ts';
//     }
// }
//
// const h: Handler = new Handler();
// const uiElement: UIElement = new UIElement();
// uiElement.addClickListener(h.onClickBad)

// interface IA {
//     a: number;
// }
//
// interface IB {
//     b: string;
// }
//
//
// function f1(x: IA | IB) {
//     if ('a' in x) {
//         x.
//     }else {
//         x.
//     }
// }

// class BasePoint {
//     public constructor(
//         public readonly x: number,
//         private y: number,
//         protected z: number
//     ) {
//     }
//
//     public sum(): number {
//         return this.x + this.y;
//     }
// }
//
// let p1: BasePoint = new BasePoint(1, 2, 3);


// class Singleton {
//
//     private static _instance: Singleton;
//
//     private constructor() {
//
//     }
//
//     public static getInstance(): Singleton {
//         if (!Singleton._instance) {
//             Singleton._instance = new Singleton();
//         }
//         return Singleton._instance;
//     }
// }
//
// let inst1: Singleton = Singleton.getInstance();
// let inst2: Singleton = Singleton.getInstance();
// let inst3: Singleton = Singleton.getInstance();

// type Constructable = new (...args: any[]) => {};
//
// function Timestamped<BC extends Constructable>(Base: BC) {
//     return class extends Base {
//         public timestamped: Date = new Date();
//     };
// }
//
// function Tagged<BC extends Constructable>(Base: BC) {
//     return class extends Base {
//         public tagged: string = 'typescript';
//     };
// }
//
// class Point extends Tagged(Timestamped(BasePoint)) {
//     public constructor(
//         x: number,
//         y: number,
//         z: number
//     ) {
//         super(x, y, z);
//     }
//
//     public sum(): number {
//         /// my code
//         return super.sum();
//     }
// }
//
// let p2: Point = new Point(1, 2, 3);

//
// abstract class AbstractInput {
//     private _value: any;
//
//     public get value(): any {
//         return this._value;
//     }
//
//     public set value(newValue: any) {
//         this._value = newValue;
//     }
//
//     public abstract onBlur(): void;
//
//     public abstract onFocuse(): void;
//
//     public abstract onClick(): void;
//
// }
//
// class MKInput extends AbstractInput {
//     public onBlur(): void {
//     }
//
//     public onFocuse(): void {
//     }
//
//     public onClick(): void {
//     }
// }

// interface IA {
//     a: number;
// }
//
// interface IB {
//     b: string;
// }
//
// class IA {
//     public a!: string;
// }


// function debounce(ms: number) {
//     let timeoutID: number | null;
//     return function (_target: Object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//         console.log('_target==>', _target);
//         console.log('_key==>', _key);
//         const originalValue = descriptor.value;
//         return {
//             ...descriptor,
//             value: (...args: unknown[]) => {
//                 timeoutID ? clearTimeout(timeoutID) : null;
//                 timeoutID = setTimeout(() => {
//                     timeoutID = null;
//                     originalValue(...args);
//                 }, ms);
//             }
//         };
//     };
// }
//
// function log(_target: Object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//     const originalValue = descriptor.value;
//     return {
//         ...descriptor,
//         value: (...args: unknown[]) => {
//             const result: any = originalValue(...args);
//             console.log(`Call ${_key}(${args.join()})=>${result}`);
//             return result;
//         }
//     };
// };
//
// class Lib {
//     @debounce(5000)
//     public getMessage() {
//         return 'TypeScript is awesome ';
//     }
//
//     @debounce(5000)
//     @log
//     public sum(a: number, b: number): number {
//         return  a + b;
//     }
// }
//
// const lib: Lib = new Lib();

// lib.sum(100, 1);
// lib.sum(2, 1);
// lib.sum(5, 1);
// lib.sum(100, 4);
// lib.sum(100, 12);
// lib.sum(100, 4);
// lib.sum(100, 50);
//
// /****/
// function log(_target: Object, _key: string, _descriptor: PropertyDescriptor) {
//     console.log(Reflect.getMetadata('design:type', _target, _key));
//     console.log(Reflect.getMetadata('design:paramtypes', _target, _key));
//     console.log(Reflect.getMetadata('design:returntype', _target, _key));
// }
//
// class Lib {
//     @log
//     public sum(a: number, b: number): number {
//         return a + b;
//     }
//
//     public getMessage(): void {
//         console.log('TypesScript');
//     }
// }
//
// const lib: Lib = new Lib();
//
// lib.sum(100, 1);
//
// console.log('@@@====>', Reflect.getMetadataKeys(lib))

import 'core-js/features/reflect';
import 'reflect-metadata';
//
//
const RANGE_KEY: string = 'RANGE_KEY';

function RangeValidation(
    min: number = 1,
    max: number = 10,
) {
    return (
        target: Object,
        key: string,
        paramIndex: number
    ) => {
        const existingRange: { [key: number]: number[] } = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        existingRange[paramIndex] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    };
}

function ValidateRange(
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
) {
    const originalValue = descriptor.value;
    descriptor.value = (...args: unknown[]) => {
        const monitoringRange: { [key: number]: number[] } = Reflect.getMetadata(RANGE_KEY, target, key) || {};

        for (const k in Object.keys(monitoringRange)) {
            const range = monitoringRange[k];
            const realParamValue = args[k] as number;
            if (realParamValue < range[0] || realParamValue > range[1]) {
                throw new Error(`Param of ${key} on position ${k} outside interval [ ${range[0]}, ${range[1]} ] `);
            }
        }
        return originalValue(...args);
    }
}


class MathLib {
    @ValidateRange
    public updatePercentage(
        @RangeValidation(0, 100) newValue: number,
        @RangeValidation(25, 50) oldValue: number
    ) {
        console.log(newValue, oldValue);
    }
}

const lib = new MathLib();
console.log(Reflect.hasMetadata(RANGE_KEY, lib, 'updatePercentage'))
lib.updatePercentage(50, 25);
lib.updatePercentage(50, 100);

