$(function(){
    $(".slider").slider();
    $(".button-collapse").sideNav();
})

const app=new Vue({
    el:"#app",
    data:{
        current:"home",
        cgpa:4.66
    },
    methods: {
        setCurrent(str){
            this.current=str
        }
    },
})