<template>
  <div id="app">
    <p>每日优鲜便利购</p>
    <myList v-for='(item,index) in list'
    :key='index'
    :Name='item.Name'
    :Image='item.Image'
    :Price='item.Price'
    :num='item.num'
    ></myList>
    <footerlist></footerlist>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
//import data from './mock'
import axios from 'axios'
import myList from './components/mylist'
import footerlist from './components/footer'

export default {
components: {
     myList,
     footerlist
  },
data(){
   
      return {
           ind:0,
          //一定要定义一个空数组接收数据，只有data里面的数据可以双向绑定
          list:[]
      }
  },
  methods:{
   
  },
created(){
axios.get('/api/getList').then((res)=>{
    console.log(res.data.data.Datas.FlowerList)
    this.list=res.data.data.Datas.FlowerList
    
})
//把数据给list数组

},

 
}
</script>

<style>
*{
    margin:0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}
html,body{
    width: 100%;
    height: 100%;
}
p{
    text-align: center;
    line-height: 44px;
    font-size: 20px;
    
}



</style>
