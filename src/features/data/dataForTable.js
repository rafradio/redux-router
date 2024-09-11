import { rawData } from './rowData'

export const tableDatas = () => {
    const obj = JSON.parse(rawData);
    let finalData = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let price = parseFloat(obj[key].rate) * parseFloat(obj[key].weight);
            finalData.push({weight: obj[key].weight, rate: obj[key].rate, price: price.toFixed(2)});
        }
    }
    
    return finalData;

}