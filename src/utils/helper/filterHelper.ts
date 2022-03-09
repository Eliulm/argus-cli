export const filterData = (html: any, amount: number): string[] => {
    const tickers : string[] = [];
        const tickerTable = html('#scr-res-table > div > table > tbody > tr > td > a');
        tickerTable.each(function() {
            let ticker = html(this).text().toString();
            if (ticker.split('.')[1] == 'DE') {
                tickers.push(ticker);
            }
        });

    return tickers;
} 