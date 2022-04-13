<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
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
  .home{
    background: rgb(247, 247, 247);
    padding: 1% 2%;
    margin: 0% 5%;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 10px rgb(236, 236, 236);
    
    
  }
</style>
