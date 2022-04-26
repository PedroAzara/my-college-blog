<template>
<div class="container">


  <div class="post-list" v-for="post in posts" :key="post.id" >
      <SinglePost class="single-post" :post="post" />
  </div>
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
.container{
    max-width: 1200px;
    height: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap:wrap;
    
    justify-content: center;
    
    
    
  }
.post-list{
    box-shadow: 0px 25px 24px -11px #d6d6d6;
    background-color:white ;
    border-radius: 10px ;
    height: 300px;
    text-decoration: none;
    
    flex: 1 1 300px;
    margin: 10px;
    transition-duration: 0.3s;
    max-width: 300px;
    
    
}
.post-list:hover{
    transform: scale(1.03);
}


</style>