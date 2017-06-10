# AngDocker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Follow these steps to run Docker container on local

* Clone repo and run `npm install`
* Run `ng build --prod`, this will create the `dist/` folder.
* Build the docker container `docker build -t my-angular-app .`
* Run the created container on your local machine `docker run -p 80:80 -it my-angular-app`
* Your app should be running at `http://localhost:80/`
