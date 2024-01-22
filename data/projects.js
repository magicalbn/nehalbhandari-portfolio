import Stocks from "../static/project/Stocks.PNG";
import Movie from "../static/project/Movie.PNG";
import IP from "../static/project/IPAddress.PNG";
import Country from "../static/project/Country.PNG";
import Music from "../static/project/Music.PNG";
import Login from "../static/project/Login.PNG";

const Projects = [
    {
        id: "1",
        image: "/project/Stocks.PNG",
        name: "Stocks App",
        info: "MERN Stack Stock Trade Web Application using Data Visualisation and REST API. This project includes Authentication, Authorization and Realtime Database. You can view Stocks in their realtime Price, Purchase and Sell, and add Stocks to watchlist.",
        tools: "MERN Stack ⚛️",
        website: "https://stocks-app-blush.vercel.app/",
        git: "https://github.com/magicalbn/stocks-app",
    },
    {
        id: "2",
        image: "/project/Movie.PNG",
        name: "Movie App",
        info: "NextJS and ExpressJS Web Application. This project allows you to view the latest Movies and TV Shows that are currently airing, along with its Box Office details. You can search for shows and movies by name or even with cast.",
        tools: "ReactJS, NextJS, ExpressJS, Bootstrap ⚛️",
        website: "https://movie-app-unm5.onrender.com",
        git: "https://github.com/magicalbn/movie-app",
    },
    {
        id: "3",
        image: "/project/IPAddress.PNG",
        name: "IP Address Tracker",
        info: "A Simple Web Application that can Track an IP Adress to give its location, ISP and other details. The location is viewed on a world map and can track domain details. This was a Frontend Mentor Project, a website that I use to practice and build Frontend designs.",
        tools: "HTML, JavaScript, Axios",
        website: "https://magicalbn.github.io/ip-address-tracker/",
        git: "https://github.com/magicalbn/ip-address-tracker",
    },
    {
        id: "4",
        image: "/project/Country.PNG",
        name: "Country App with Theme switch",
        info: "This is my first project with the ability to switch themes, Dark and Light. You can view all Countries and its details and Sort them by its Continent or do a simple search by name. This project uses REST API's.",
        tools: "ReactJS, ExpressJS ⚛️",
        website: "https://country-app-sdar.onrender.com/",
        git: "https://github.com/magicalbn/country-app-with-theme-switcher",
    },
    {
        id: "5",
        image: "/project/Login.PNG",
        name: "0Auth Login (PassportJS)",
        info: "0Auth Login Application using PassportJS, with the ability to create accounts by logging in through Facebook, Google, Twitter, Github or just with simple email and password. The application includes Authentication and the ability to save user session even after a refresh. I have built this app to be reused as an authentication module for my next projects.",
        tools: "ReactJS, PassportJS, ExpressJS ⚛️",
        website: "https://passportjs-0auth.onrender.com",
        git: "https://github.com/magicalbn/0auth-with-passport.js",
    },
    {
        id: "6",
        image: "/project/Music.PNG",
        name: "Music Guru",
        info: "One of my first ReactJS project. This music app brings you the most popular songs by the Artist you search for which you can listen to on the go. This Project uses Spotify's API.",
        tools: "ReactJS ⚛️",
        website: "https://music-master-ae275.web.app/",
        git: "https://github.com/magicalbn/music-master-app",
    },
    {
        id: "7",
        image: "/project/TODO.PNG",
        name: "Todo App",
        info: "A fullstack ToDo app, cause why not?! Built on MERN stack with pagination support on backend. Supports Creating, Update and Deleting of tasks. Uses shadcn/ui as the css framework for components.",
        tools: "MERN, Tailwind, shadcn/ui ⚛️",
        website: "https://todo-fullstack-delta.vercel.app/",
        git: "https://github.com/magicalbn/todo-fullstack",
    },
    // {
    //     id:"7",
    //     image:'/project/Music.PNG',
    //     name:"Crypto Market Exchange",
    //     info:"One of my first ReactJS project. This music app brings you the most popular songs by the Artist you search for which you can listen to on the go. This Project uses Spotify's API.",
    //     tools:"NextJS ⚛️",
    //     website:"https://crypto-market-sky.vercel.app/",
    //     git:"https://github.com/magicalbn/crypto-market-sky"
    // },
    {
        id: "8",
        image: "/project/Payouts.PNG",
        name: "Payouts - Responsive Fluid UI with Tailwind",
        info: "This is a small project crafted to sharpen my skills in the Tailwind framework",
        tools: "NextJS ⚛️, Tailwind UI",
        website: "https://figma-payouts.vercel.app/",
        git: "https://github.com/magicalbn/figma-payouts",
    },
    {
        id: "9",
        image: "/project/Netflix.PNG",
        name: "Netflix clone",
        info: "An attempt to recreate Netflix Website with its layouts and animation.",
        tools: "NextJS ⚛️",
        website: "https://netflix-clone-psi-rouge.vercel.app/",
        git: "https://github.com/magicalbn/netflix-clone",
    },
];

export default Projects;
