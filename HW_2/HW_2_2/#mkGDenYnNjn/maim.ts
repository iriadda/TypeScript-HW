class CurrencyVal {
    constructor(currency: string, value: number) {
        this.currency = currency;
        this.value = value;
    }
    currency:string
    value:number
}


let exchange=(sumUA:number,currencyValues:CurrencyVal[],exchangeCurrency:string):number=>{
    let chosenCurrency:CurrencyVal;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    return  sumUA / chosenCurrency.value;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));