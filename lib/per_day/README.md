# per_day lib

A lib with functions that help with the process of figuring some per day values of interest with gains, and dividends.

## How much average money per day is being made?

Many people get into investing with the expectation of getting rich, or at least not having to work any more. As a result many get frustrated and give up with investing thinking that the process of getting there is to far out of reach. My recommendation is to set what might prove to be a more realistic initial goal with investing that would involve continuing to work, but seeing investing as a way to reduce the number of hours one will have to work. In place of expecting to make enough money to become rich, or live without working, start out by expecting to make a little extra money that is enough to cover the expense of something like your phone bill for example.

If I take a moment to write a function that computes all basic costs with a cellphone \( service, and phone replacement  \) I am figuring that I only need to make 1.29 a day to make enough money to cover all expenses related to my cell phone.

```
const phone_per_day = ( phone_service=35, phone_cost=200, phone_term=48, precision=2 ) => {
    const result = {}; 
    result.total_service = phone_service * 12;
    result.total_phone = phone_cost / phone_term * 12;
    result.total = result.total_service + result.total_phone;
    result.per_day = parseFloat( ( result.total / 365.25 ).toFixed(precision) );
    return result;
};

console.log(  phone_per_day().per_day ); // 1.29
```

I can expand on this to make some simple function where I just convert a per year amount of money to a per day amount of money.

```
const to_per_day = ( per_year=18262.50, precision=2 ) => {
   return parseFloat( ( per_year / 365.25 ).toFixed(precision) );
};
const to_live_per_day = ( per_year=36525.00 ) => { return to_per_day( per_year ); };
const to_be_rich_per_day = ( per_year=250000.00 ) => { return to_per_day( per_year ); };

console.log( to_per_day(470) );            //   1.29 ( per day to cover cell phone )
console.log( to_live_per_day(35000) );     //  95.82 ( per day to live )
console.log( to_be_rich_per_day(250000) ); // 684.46 ( per day to be rich )
```

So when it comes to just making enough money each day to cover the cost of my cell phone, doing so is very much in reach, not just for me but also most people in privileged societies such as the United States. However making enough to quit my day job, or make around a quarter mill a year will take some doing. 

In any case it would be nice to have some JavaScript code that will show me where I am currently in terms of a per day figure with respect to trading stocks. This would involve computing a per day average amount for gains, and also another per day figure based on actual dividend income.



