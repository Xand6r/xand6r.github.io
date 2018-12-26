$(function(){
    $(".slider").slider();
})

const app=new Vue({
    el:"#app",
    data:{
        current:"about",
        cgpa:4.66
    },
    methods: {
        setCurrent(str){
            this.current=str
        }
    },
})