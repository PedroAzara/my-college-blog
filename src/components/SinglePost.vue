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
        
     
      
      
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['post', 'tag'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + '....'
        })

        return{snippet}
    }
}
</script>

<style >
    .post{
        padding: 0.5% 1%;
        margin: 0 40px 30px;
        padding-bottom: 30px;
        border-bottom: 1px dashed #e7e7e7;
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
  }
    
</style>