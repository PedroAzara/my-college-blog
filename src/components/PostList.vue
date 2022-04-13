<template>
  <div class="post-list" v-for="post in posts" :key="post.id" >
      <SinglePost :post="post" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";
export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
       
    }
}
</script>

<style >
.post-list{
    background: rgb(240, 240, 240);
    width: 40%;
    margin: 2% 0%;
    border-radius: 10px ;
    box-shadow: 0px 0px 20px 5px rgb(224, 224, 224);
    text-decoration: none;
    color: #34495E;
}
</style>