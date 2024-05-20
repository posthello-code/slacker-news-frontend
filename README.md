# SlackerNews

Slacker news is a news aggregator for nerdy stories around the web.

Currently it summarizes [hacker news](https://news.ycombinator.com) articles using chat-gpt completions API to give you a quick summary of the most popular stories.

Check it out [here!](https://slacker-news-frontend.onrender.com/)

This may or may not be running on a free tier server on render.com so you may need to wait up to 50 seconds for the backend to start up.

Slacker news stories are collected using a python [server](https://github.com/posthello-code/slacker-news-server) into a postgres database.

Top stories are periodically saved multiple times a day.

---

# Running the Front-End

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
