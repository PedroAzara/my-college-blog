<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h1>{{ post.title }}</h1>
    <h5>{{getDate(post.createdAt.toDate())}}</h5>
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
  props: ['id', 'post'],
  components: { Spinner },
  setup(props) {
    const route = useRoute
    const router = useRouter()
    
    const { error, post, load } = getPost(props.id)

    load()

    


    const getDate = (date)=> {
      return (date.getMonth()+1)+ '/' + (date.getDate()) + '/' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes()
    }

    const handleClick = async ()=> {
      await projectFirestore.collection('posts')
      .doc(props.id )
      

      router.push({name: 'Home'})
    }

    return { error, post, handleClick, getDate }
  }
}
</script>

<style scoped>

  h1{
    text-align: center;
    font-size: 3rem;
    color: #5d6265;
    margin-bottom: 0;
  }

  h4{
    color: #5d6265;
    text-align: center;
  }
  h5{
    text-align: center;
    margin-top: 0;
    color: #5d6265;
  }
  .tags a {
    margin-right: 10px;
  }
  .post {
    max-width: 1000px;
    margin: 0 auto;
    
    
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
    color: #5d6265;
  }
  .pre {
    white-space: pre-wrap;
  }
  
</style>