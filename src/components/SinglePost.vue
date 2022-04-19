<template>
  <div class="post">
      <router-link class="link" :to="{name: 'Details', params: {id: post.id}}">
        <div>
            <h3>{{post.title}}</h3>
            <p>{{post.description}}</p>
            
        </div>
        </router-link>
        
        
            <span class="pill" v-for="tag in post.tags" :key="tag">
                <router-link class="link"  :to="{name: 'Tags', params: {tag: tag}}">
                #{{tag}}
                 </router-link>
            </span>
            
            <span @click="handleClick" class="material-icons">
            delete
            </span>
            
        
     
      
      
  </div>
</template>

<script>
import getPosts from '@/composables/getPosts';
import { projectFirestore } from '@/firebase/config'
import { useRouter } from 'vue-router'
export default {
    props: ['post', 'id'],
    setup(props) {
        const router = useRouter()
            
        
        const handleClick = async ()=> {
        await projectFirestore.collection('posts')
        .doc(props.post.id )
        .delete()
            
      
    }


        return{ handleClick}
    }
}
</script>

<style scoped>
    .post{
        text-align: center;
        margin: 2px;
        width: 100%;
        height: 100%;
        
        
        position: relative;
        display: inline-block;
        
    }
    
    .link {
        text-decoration: none;
        color: #34495E;
    }
    p{
        align-content: center;
    }
    
   h3 {
        display: inline-block;
        position: relative;
        font-size: 26px;
        margin-bottom: 10px;
        max-width: 400px;
        color: #34495E;
   }
   
  .pill {
    display: inline-block;
    margin: auto 2px;
    
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 20px
  }
  .material-icons{
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      padding-top: 20px ;
      padding-right: 20px ;
      opacity: 0;
      transition:opacity 0.2s;
      cursor: pointer;
      color: tomato;
  }
  .material-icons:hover{
      opacity: 1;
      transition:opacity 0.2s
  }
    
</style>