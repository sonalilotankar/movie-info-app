# movie-info-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
This project is a single web page application. Web technologies= HTML5/CSS3, js, Axios, vue.J's, vuetify

We need to make an Ajax call to the following URL to get the data to be displayed:
http://www.omdbapi.com/
You have to send the following data along with it:
S= harry potter
Apikey= e0620bd4

I used here Axios library to make an Ajax call.
This project displays a movie information such as movie name, imdb-id, year, etc. When you click on the movie, it shows the summary of the movie.Also at the end of the site I added simple movie information form.
