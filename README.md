# Event Feedback #

Node.js web application for collecting user's feedback in an event.

Was used for [BilboStack 2018](http://bilbostack.com/) and [WeCode 2018](https://wecodefest.com/) (This explains all the information and style that is included right now).

**Needs some work for more reusability... I'm on it :)**

## Run it ##

For the development environment you'll need **Docker** (Or install Redis and PostgreSQL) and **Node.js** (tested on 8.9.1 at the moment).

1. Clone the repository
2. Run `npm install`
3. Inside `dev-env` folder, run `docker-compose up -d`
4. Back to root folder, run `npm run migrate`
5. Finally, run `npm start` and visit http://127.0.0.1:8080

## License ##

MIT
