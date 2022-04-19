<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <h4>{{post.description  }}</h4>
    <p class="pre">{{ post.body }}</p>

  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '@/composables/getPost'

// component imports
import Spinner from '../components/Spinner.vue'

import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '@/firebase/config'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute
    const router = useRouter()
    
    const { error, post, load } = getPost(props.id)

    load()

    const handleClick = async ()=> {
      await projectFirestore.collection('posts')
      .doc(props.id )
      

      router.push({name: 'Home'})
    }

    return { error, post, handleClick }
  }
}
</script>

<style scoped>
  .tags a {
    margin-right: 10px;
  }
  .post {
    max-width: 1200px;
    margin: 0 auto;
    border-bottom: 1px dashed #e7e7e7;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  
</style>