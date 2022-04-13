<template>
  <div class="home">
    <h1>Showing Posts With The Tag <span class="tag">{{tag}}</span></h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" >
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
     
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>

 
</template>

<script>
import getPosts from '@/composables/getPosts';
import PostList from '@/components/PostList.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router';
import { computed } from 'vue'
import TagCloud from '@/components/TagCloud.vue';
export default {
  components: { PostList, Spinner, TagCloud },
  props: ['post', 'tag'],
    setup() {
        //use route.params.tag
        const {posts, error, load} = getPosts()
        load()
        const route = useRoute()
        const filteredTags = []
        const postsWithTag = computed(() => {
            return posts.value.filter((p) => p.tags.includes(route.params.tag))
        })
        
        
        return { posts,  error, postsWithTag };
    }
}
</script>

<style>
.tag{
  color: #34495E;
  background: #41B883;
  padding: 3px 5px;
}

</style>