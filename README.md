# RednGreenFE
Angular fronend for Indieverse, a indie game publishing site.
The website provides users with the ability to register, login,
after that authenticated users can buy and publish games.
The website also implements advanced fussy searching.
## Tech stack
* Angular
* MDBootstrap
## Running
The Project needs [IndieverseBE](https://github.com/Goshenkata/IndieverseBE)
running on port localhost:8080 to work, as well as mariadb (check IndieverseBE README).
For ease of use a docker-compose is provided to run the backend with:
```
        docker-compose -f docker-compose.yaml up
```
After that clone this repository and ng serve the Angular application
