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
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
   
  button.delete {
    margin: 10px auto;
    background: rgb(255, 97, 97);
    border: none;
    color: white;
    cursor: pointer;
    transform: scale(1.3);
  }
</style>