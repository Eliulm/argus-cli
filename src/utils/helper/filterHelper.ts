export const filterData = (html: any, amount: number, market: string): string[] => {
    const tickers : string[] = [];
    const tickerTable = html('#scr-res-table > div > table > tbody > tr > td > a');
    tickerTable.each(function() {
        let ticker = html(this).text().toString();

        if (ticker.split('.')[1] == 'DE' && market == "de") {
            tickers.push(ticker.split('.')[0]);
        } else if (market == "us") {
            tickers.push(ticker);
        }
    }); 

    let symbols: string[] = []; 
    let count : number = tickers.length;
        for (let i=0; i< amount; i++) {
            var randInt : number = Math.floor(Math.random() * count);
            var symbol = tickers[randInt];
            symbols.push(symbol);
    }
    
    return symbols;
} 