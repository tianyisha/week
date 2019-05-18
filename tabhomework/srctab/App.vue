<template>
  <div id="app">
    <tablist :title='list'/>
   
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import tablist from './components/tablist'


export default {
  name: 'App',
  data(){
     return {
       list:[
            {
                title: "未开始",
                    data: [{
                            txt: "新闻联播里康辉的播报火了，亚洲各国新闻主播哪家强？"
                        }, {
                            txt: "女子睡梦中猝死，丈夫质疑是这种咖啡害的！记者上网一查，惊了……"
                        }, {
                            txt: "特朗普称中国收回部分承诺，外交部：协议未达成，何来违背承诺之说？"
                        }

                    ]
                },
                 {
                    title: "已打卡",
                    data: [{
                            txt: "新娘1.7米新郎不足1米，爱情奇缘特别好笑，现在夫妻恩爱一起创业"
                        }, {
                            txt: "巩俐刘涛景甜抵达戛纳 奚梦瑶小腹微隆引怀孕猜疑|说好的六点见"
                        }, {
                            txt: "奚梦瑶征服赌王公子不只靠美貌，求婚现场一细节证明她的高情商"
                        }

                    ]
                },
                {
                    title: "已放弃",
                    data: [{
                            txt: "新娘1.7米新郎不足1米，爱情奇缘特别好笑，现在夫妻恩爱一起创业"
                        }, {
                            txt: "巩俐刘涛景甜抵达戛纳 奚梦瑶小腹微隆引怀孕猜疑|说好的六点见"
                        }, {
                            txt: "奚梦瑶征服赌王公子不只靠美貌，求婚现场一细节证明她的高情商"
                        }

                    ]
                },  {
                    title: "全部",
                    data: [{
                            txt: "新闻联播里康辉的播报火了，亚洲各国新闻主播哪家强？"
                        }, {
                            txt: "女子睡梦中猝死，丈夫质疑是这种咖啡害的！记者上网一查，惊了……"
                        }, {
                            txt: "特朗普称中国收回部分承诺，外交部：协议未达成，何来违背承诺之说？"
                        }

                    ]
                }
     ]
     }
  },
  components: {
    tablist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

</style>
