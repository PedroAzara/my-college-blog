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
        window.location.reload()
      
    }


        return{ handleClick}
    }
}
</script>

<style >
    .post{
        padding: 0.5% 0 1%;
        margin: 1px 5px 30px 40px;
        
        border-bottom: 1px dashed #e7e7e7;
        position: relative;
    }
    
    .link {
        text-decoration: none;
        color: #34495E;
    }
    
   h3 {
        display: inline-block;
        position: relative;
        font-size: 26px;
        margin-bottom: 10px;
        max-width: 400px;
        color: #34495E;
   }
   .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #41B883;
    position: absolute;
    z-index: -1;
    transform: scale(1.08);
    left: 0px;
    
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
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