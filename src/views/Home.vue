<template>
  <div class="home">
    
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" >
      <TagCloud :posts="posts" />
      <div class="">
        <PostList class="child" :posts="posts" />
      </div>
      
      
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
    margin: 0 auto;
   
  }
  
  .child{
    
    
  }
  
</style>
