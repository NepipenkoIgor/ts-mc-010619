interface IFact {
    factId: number;
    userId: number;
    userRoleId: number;
    roleKpiId: number;
    useFrom: string;
    useTo: string;
    factValue: number;
}

type S = {[someKey: string]: any};

const dataList: { action: string, data: IFact }[] = [];

const uniqueValue = () => {
    return 'factId';
}


// При проходе по массиву
dataList.map((item: { action: string, data: IFact }) => {

    if (item.data[uniqueValue()] === 2) {
        //...
    }
    return item;
});




