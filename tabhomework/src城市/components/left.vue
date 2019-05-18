<template>
    <div class='left'>
        <ul>
            <li v-for='(item,index) in list'
            :key="index"
            @click='clickFn(index)'
            >{{item.name}}</li>
            
        </ul>
    </div>
</template>

<script>
export default {
props:{
    list:Array
},
methods:{
clickFn(ind){

this.$emit('change',ind)
console.log(ind)
}
}
}
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">
html,body{
    width: 100%;
    height: 100%;
}
.left{
    width: 120px;
    height: 100%;
  
}
ul {
    width: 100%;
    height: 100%;
 overflow-y:auto;
}
li{
    width: 100px;
    height: 50px;
    border:1px solid #ccc;
    text-align: center;
    line-height: 50px;
    margin-left: 10px;
    margin-top: 10px;
   
}
</style>
