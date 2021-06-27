import Stocks  from '../static/project/Stocks.PNG'
import Movie  from '../static/project/Movie.PNG'
import IP  from '../static/project/IPAddress.PNG'
import Country  from '../static/project/Country.PNG'
import Music  from '../static/project/Music.PNG'
import Login  from '../static/project/Login.PNG'

const Projects = [
    {
        id:"1",
        image:Stocks,
        name:"Stocks App",
        info:"Full Stack Stock Trade Web Application using Data Visualisation and REST API. This project includes Authentication, Authorization and Realtime Database. You can view Stocks in their realtime Price, Purchase and Sell, and also add Stocks to watchlist.",
        tools:"MERN Stack ⚛️",
        website:"https://stocks-app-react.herokuapp.com/",
        git:"https://github.com/magicalbn/stocks-app"
    },
    {
        id:"2",
        image:Movie,
        name:"Movie App",
        info:"NextJS and ExpressJS Web Application. This project allows you to view the latest Movies and TV Shows that are currently on, along with its Box Office details. You can aslo search for shows and movies by name or even with cast.",
        tools:"ReactJS, NextJS, ExpressJS, Bootstrap ⚛️",
        website:"https://movie-app-nextjs.herokuapp.com/",
        git:"https://github.com/magicalbn/movie-app"
    },
    {
        id:"3",
        image:IP,
        name:"IP Address Tracker",
        info:"A Simple Web Application that can Track an IP Adress to give its location, ISP and other details. The location is viewed on a world map and can also track domain details. This was a Frontend Mentor Project, a website that I use to practice and build Frontend designs.",
        tools:"HTML, JavaScript, Axios",
        website:"https://magicalbn.github.io/ip-address-tracker/",
        git:"https://github.com/magicalbn/ip-address-tracker"
    },
    {
        id:"4",
        image:Country,
        name:"Country App with Theme switch",
        info:"This is my first project with the ability to switch themes. You can view all Countries and its details and also Sort them by its Continent or do a simple search by name. This project also uses REST API's.",
        tools:"ReactJS, ExpressJS ⚛️",
        website:"https://country-app-with-theme-switch.herokuapp.com/",
        git:"https://github.com/magicalbn/country-app-with-theme-switcher"
    },
    {
        id:"5",
        image:Music,
        name:"Music Guru",
        info:"One of my first ReactJS project. This music app brings you the most popular songs by the Artisit you search for which you can listen to on the go. This Project uses Spotify's API.",
        tools:"ReactJS ⚛️",
        website:"https://music-master-ae275.web.app/",
        git:"https://github.com/magicalbn/music-master-app"
    },
    {
        id:"6",
        image:Login,
        name:"0Auth Login (PassportJS)",
        info:"0Auth Login Application using PassportJS, with the ability to create accounts by logging in through Facebook, Google, Twiiter, Github or just with simple email and password. The application includes Authentication and the ability to save user session even after a refresh. I have built this app to be reused as an authentication module for my next projects.",
        tools:"ReactJS, PassportJS, ExpressJS ⚛️",
        website:"https://passportjs-0auth.herokuapp.com/",
        git:"https://github.com/magicalbn/0auth-with-passport.js"
    }
]

export default Projects