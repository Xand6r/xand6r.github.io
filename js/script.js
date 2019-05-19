$(function(){
    $(".slider").slider();
    $(".button-collapse").sideNav();
    $(".collapsible").collapsible();
})

const app=new Vue({
    el:"#app",
    data:{
        current:"home",
        cgpa:4.66,
        projectsInfo:[
            {
                picturePath:"./images/project7.PNG",
                
                summary:"A Fully-functional platform that displays books available in a library and their information, it also allows requesting of books online,implemented using M.E.V.N stack",
                link:"https://book-retrieval.herokuapp.com/"
            },
            {
                picturePath:"./images/Project1.PNG",
                summary:"A redesign of netflix's page of the american sniper's movie.",
                link:"https://xand6r.neocities.org"
            },
            {
                picturePath:"./images/project2.PNG",
                summary:"An offline Thrilling game of tic-tac-toe against an AI or against your friends online. Implemented using Vue.js and service workers.I dare you to win 10times!",
                link:"https://hexano.herokuapp.com/"
            },

            {
                picturePath:"./images/project6.PNG",
                summary:"Front-End for an online ordering system for savor restaurant in FUTA",
                link:"https://virtual-waiter.herokuapp.com/#/"
            },
            {
                picturePath:"./images/project5.PNG",
                summary:"A sliding window of two pages, implemented using CSS3",
                link:"https://ani-slider.000webhostapp.com"
            },
            {
                picturePath:"./images/project3.PNG",
                summary:"A design of a website for a make-up artist",
                link:"https://hexano.000webhostapp.com"
            },
            {
                picturePath:"./images/project4.PNG",
                summary:"An anti-social network, post whatever you like. no one cares to look. using PHP & MYSQL",
                link:"https://professoralex88.000webhostapp.com"
            }              
        ]
    },
    methods: {
        setCurrent(str){
            this.current=str
        }
    },
})