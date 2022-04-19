<template>
  <div class="post-list" v-for="post in posts" :key="post.id" >
      <SinglePost :post="post" />
  </div>
</template>

<script>

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
    box-shadow: 0px 25px 24px -11px #d6d6d6;
    background-color:white ;
    border-radius: 10px ;
    max-width: 70%;
    text-decoration: none;
    color: #34495E;
    flex: 1 1 300px;
    margin: 10px;
    transition-duration: 0.3s;
    
    
}
.post-list:hover{
    transform: scale(1.05);
}
</style>