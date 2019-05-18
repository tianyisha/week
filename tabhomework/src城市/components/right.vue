<template>
    <div class='right'>
        <ol>
            <li v-for='(item,index) in list'
            :key="index"
            :class='{active:true}'
            >{{item.name}}</li>
            
        </ol>
        
    </div>
</template>

<script>

export default {
data(){
flag=false
},
props:{
    list:Array
}
}
</script>

<style>
.right{
    flex:1;
    height: 100%;
   
}
ol li{
     width: 100px;
    height: 50px;
    border:1px solid #ccc;
    text-align: center;
    line-height: 50px;
    margin-left: 10px;
    margin-top: 10px;
    display: inline-block;
    border-radius: 20px;
}
.active{
    background: orange;
    color:#fff;
}
</style>
