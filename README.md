# stock_strikepoint

I have got into buying and selling stocks, and I am also a JavaScript developer. Need I say more? Of course I started a project like this, but will it be worth the investment of time? That is indeed the question.

## Install

The process of installing is to clone down a copy of the source, and then do an npm install.


### Can not start because of chrome-sandbox?

I have run into a problem with getting electron to start because chrome-sandbox is not owned by root, and might also not have proper permissions. This can be resolved by going into the dist folder of electron in node modules, and then change the owner and permissions.

```
sudo chown root:root chrome-sandbox
sudo chmod 4755 chrome-sandbox
```

If I need to delete at some point I will also need to do so with root permissions as well.

## Selling all Positive Positions while holding all negative positions.

I am still pretty new to investing with stocks, but one thing that I picked up right away is the process of extracting how much money I would make if I sell all current positive stock positions while holding all negative ones. For those of you that are not in the know with this one a position is a certain count of stocks that where bought at a certain point in time. If you buy say 10 shares at one point, then another 10 later, and so forth in time you end up with an array of these positions. As the current market value of the stock goes up and down, often I will have a situation where a certain number of the positions will result in a realized cash return if sold, while others would result in a loss. Thus it is helpful to have some kind of process to extract how much money I would make if I where to sell all positive positions while holding all negative ones. There is doing this for each stock, and also for the whole portfolio.

On E-trade I can download a CSV that is a current snapshot of the state of my stock portfolio, I can then use this data to extract what that current figure is, and if I feel that it is high enough I can go ahead and start selling off positions.

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



