<template>
    <div class='shop'>
          <dl>
              <dt><img :src='Image' alt=""></dt>
              <dd>
                  <h3>{{Name}}</h3>
                  <span>￥{{Price}}</span>
                  <span>数量:{{num}}</span>
                  <p class='add'>
                      <input type="button" value='+' class='btn'>
                  </p>

              </dd>
          </dl>
    </div>
</template>

<script>
export default {
props:['Name','Image','Price','num']

}
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">
.shop{
    width: 100%;
    height: 200px;
}
dl{
    display: flex; 
    border:1px solid #ccc;
}
dt{
    width: 40%;
    height: 200px;
}
dt img{
    width: 100%;
    height: 100%;
}
dd{
flex:1;
text-align: center;
line-height: 50px;

}
.btn{
    width: 44px;
    height: 44px;
    font-size: 20px;
}

</style>
