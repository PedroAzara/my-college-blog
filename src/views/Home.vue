<template>
  <div class="home">
    
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" >
      <div class="container">
        <PostList class="child" :posts="posts" />
      </div>
      
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>

import getPosts from '@/composables/getPosts';
import PostList from '../components/PostList.vue'
import Spinner from '@/components/Spinner.vue';
import TagCloud from '@/components/TagCloud.vue';
export default {
    name: "Home",
    components: { PostList, Spinner, TagCloud },
    setup() {
        
        const {posts, error, load} = getPosts()
        load()
        return { posts,  error };
    },
    
}
</script>

<style >
body{
  background-color:#F7F8F9 ;
}
  .home {
    
   
  }
  .container{
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap:wrap;
    
  }
  .child{
    
    
  }
  
</style>
