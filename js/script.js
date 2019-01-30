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