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
            }
        ]
    },
    methods: {
        setCurrent(str){
            this.current=str
        }
    },
})