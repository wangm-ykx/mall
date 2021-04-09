<template>
  <div class="detail-comment-info">
    <div class="title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="item-box">
      <div v-for="item in commentInfo" class="item">
        <div class="user-info">
          <img src="~assets/img/common/user-logo.svg">
          <span>{{ item.userName}}</span>
        </div>
        <p>{{item.comment}}</p>
        <span style="padding-left: 2vw">{{item.publishDate}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail-comment-info{
  border-top: 5px solid #cccccc;
  padding-bottom: 4vw;
}
.title{
  padding: 4vw 2.5vw;
  display: flex;
  justify-content: space-between;
}
.item-box{
  width: 95vw;
  margin: auto;
  padding: 3vw 0 2vw 0;
  border-top: 3px solid #cccccc;
  border-bottom: 3px solid #cccccc;
}
.item{
  margin-bottom: 3vw;
}
.item p{
  padding: 2vw;
}
.user-info {
  display: flex;
  align-items: center;
}
.user-info img{
  width: 10vw;
  border: 1px solid #cccccc;
  border-radius: 50%;
}
.user-info span{
  margin-left: 2vw;
}
</style>
