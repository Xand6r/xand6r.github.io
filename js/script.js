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
                picturePath:"./images/Project2.PNG",
                summary:"A Thrilling game of tic-tac-toe against an AI. Implemented using Vue.js. If you win 10 times in a row do not hire me!",
                link:"https://hexano.epizy.com"
            }
        ]
    },
    methods: {
        setCurrent(str){
            this.current=str
        }
    },
})