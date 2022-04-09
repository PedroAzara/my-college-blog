<template>
  <div class="home">
    <h1>Posts with the tag {{tag}}</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" >
      <PostList :posts="postsWithTag" />
     
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
export default {
  components: { PostList, Spinner },
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

</style>