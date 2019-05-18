<template>
    <div>
        <div class='title'>
           <h3>{{title}}</h3>
           <span>已放弃</span>
        </div>
        <p>
            {{info}}
        </p>
        <div class='time'>
            <h3>面试时间:{{time}}</h3>
            <span>已提醒</span>
        </div>
    </div>
</template>

<script>
export default {
props:['title','info','time','type','bool']
}
</script>

<style scope>
*{
    margin:0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}

.title,.time{
    display:flex;
    justify-content: space-between;
    padding: 10px
}
p{
    line-height: 30px;
    padding: 10px
}

</style>
