$(function(){
    $(".slider").slider();
})

const app=new Vue({
    el:"#app",
    data:{
        current:"home"
    },
    methods: {
        setCurrent(str){
            this.current=str
        }
    },
})