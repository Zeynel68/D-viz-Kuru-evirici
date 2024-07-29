class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_0OEQWUWDZux5JiYQ9e4h6IUkBLjSSgdX00fDnBYJ&base_currency=";
    }

  async  exchange(amount , firstCurrency , secondCurrency){
    const response =    await fetch(`${this.url}${firstCurrency}`);
    const result = await response.json(); 
    const exchangedResult = amount * result.data[secondCurrency];

    return exchangedResult;
    }
}
    
  