<template>
  <div id="app">
     <myLeft
     :list='list'
     @change="change"
     >
     </myLeft>
     <myRight
     :list='list[ind].cities' v-if='list[ind]'
     ></myRight>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
//import data from './mock'
import axios from 'axios'
import myLeft from './components/left'
import myRight from './components/right'

export default {
components: {
     myLeft,
     myRight
  },
data(){
   
      return {
           ind:0,
          //一定要定义一个空数组接收数据，只有data里面的数据可以双向绑定
          list:[]
      }
  },
  methods:{
    change(ind){
        this.ind=ind
 console.log(ind)
    }
  },
created(){
axios.get('/api/getList').then((res)=>{
    console.log(res.data.data)
    this.list=res.data.data
    console.log(this.list[0].cities)
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
#app {
  width: 100%;
   height: 100%;
   display: flex;
  
}


</style>
