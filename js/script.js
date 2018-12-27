$(function(){
    $(".slider").slider();
    $(".button-collapse").sideNav();
    $(".collapsible").collapsible();
})

const app=new Vue({
    el:"#app",
    data:{
        current:"projects",
        cgpa:4.66
    },
    methods: {
        setCurrent(str){
            this.current=str
        }
    },
})