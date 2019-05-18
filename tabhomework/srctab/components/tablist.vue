<template>
    <div>
       
        <ul>
            <li v-for='(item,index) in title' :key="index" @click="clickFn(index)">{{item.title}}</li>
        </ul>
        <div>
            <p v-for='(item,index) in title[i].data' :key="index">{{item.txt}}</p>
        </div>
    </div>
</template>

<script>
export default {
name:'tablist',
data(){
    return {
       i:0
    }
},
props:['title'],
methods:{
    clickFn(ind){
     this.i=ind
    }
}
}
</script>

<style>
*{
    margin:0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}
ul{
    width: 100%;
    height: 44px;
    display: flex;
}
ul li{
    width: 25%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    border: 1px solid #ccc;
}
p{
    line-height: 30px;
}
</style>
