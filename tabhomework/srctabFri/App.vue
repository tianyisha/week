<template>
  <div id="app">
      <header>
          <span>未开始</span>
          <span>已打卡</span>
          <span>已放弃</span>
          <span>全部</span>
      </header>
      <section>
          <tabdata v-for='(item,index) in list' 
          :key="index"
          :title='item.title'
          :info='item.info'
          :time='item.time'
          :type='item.type'
          :bool='item.bool'
          >
          
          </tabdata>
      </section>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import data from './mock'
import tabdata from './components/tabdata'

export default {
components: {
    tabdata
  },
  data(){
      return {
          //一定要定义一个空数组接收数据，只有data里面的数据可以双向绑定
          list:[]
      }
  },
created(){
console.log(data.list);
//把数据给list数组
this.list=data.list;
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
#app {
  width: 100%;
height: 100%;
  display: flex;
  flex-direction: column;
}
header{
    width: 100%;
    height: 44px;
    display: block;
    display: flex;
}
header span{
   flex:1;
    text-align: center;
    line-height: 44px;
    border:1px solid #ccc;
}
section{
   margin-top: 44px;
}

</style>
