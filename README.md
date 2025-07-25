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

For many it might be best to set what might prove to be realistic initial goals with investing that would involve continuing to work, but seeing investing as a way to reduce the number of hours one will have to work. In place of expecting to make enough money to live without working, start out by expecting to make a little extra money that is enough to cover the expense of something like your phone bill for example.



