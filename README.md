Backend is in ```./app```
Frontend is in ```./client```

```
npm install
npm start
```

Running ```npm start``` will start the app.

```npm start``` compiles the ES6 from ```./app``` into ```./dist``` and loads the app from there.

##### Bugs

If I use the endpoint -- which answers with a JSON -- there's a chance that not all slots will stop spinning.
On the other hand, if I use a ```.json``` file, there is no bug, no matter how many spins.

To see what I mean:
1. run the app in its default state
2. after you come across the bug, do this:
- open ```./client/js/game.js``` 
- uncomment line 92
- comment line 93

I spent two days trying to solve this bug, to no avail.
If you could please shed some light on this, I'd be most appreciative.

Thank you for the challenge, I had a good time working on it.
