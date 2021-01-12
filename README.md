# SWR x Firebase exemple

## Lauch the project

* Clone it the following url `git@github.com:ThomasLeveque/swr-firebase.git`
* Rename `.env.exemple` to `.env.local` and fill it with your firebase admin keys
* Replace the `firebaseConfig` const with yout own client config object inside `./lib/firebase.js`
* Into yout firebase console add a collection named `totos` and inside, a document with two field `name: string` and `value: number`
* Execute `yarn && yarn dev`

## Enjoy !


### Todo

* Upgrade to TS