<template>
  <div class="create">
      <h1>Create your post here!</h1>
      <form @submit.prevent="handleSubmit" >
          
          <input placeholder="Title"  v-model="title"  type="text" required>
          
           <textarea class="description" placeholder="Description" v-model="description"  required></textarea>
          
          <textarea placeholder="Body" v-model="body" required></textarea>
          
          <input placeholder="Tags (hit enter to add a tag)" v-model="tag" type="text" @keydown.enter.prevent="handleKeydown"> 
          <div @click="deleteTag(tag)" v-for="tag in tags" :key="tag" class="pill">
          <span>{{ tag }}</span>
      </div>
          <button>Add Post</button>
      </form>
  </div>
</template>

<script>
import getPost from '@/composables/getPost'



import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '@/firebase/config'
import {onMounted, ref} from 'vue'
export default {
    props: ['id', 'post'],
    setup(props){
      const { error, post, load } = getPost(props.id)

      const route = useRoute()
      const router = useRouter() 
      
      
      const title = ref('')
      const description = ref('')
      const body = ref('')
      const tag = ref('')
      const tags = ref([])
      
      

      
    
      onMounted(()=> {
        load().then(()=> {
         title.value = post.value.title
         description.value = post.value.description
         body.value = post.value.body
         tags.value = post.value.tags
        
         
        
         
       
        
    })
      })

       console.log(tags.value)
 
    
      
       
       
        

    
    
    const handleKeydown = () => {
              if(!tags.value.includes(tag.value.toLowerCase()) && tag.value){
                tags.value = [...tags.value, tag.value.replace(/\s/g,'')];
                tag.value = '';
            }

        }

        const deleteTag = (tag) => {
            tags.value = tags.value.filter(item => {
            return tag !== item
      })
        }


    return {title, body, description, tag, tags, error, post, deleteTag, handleKeydown}
    }
}
</script>

<style scoped>
    body {
      text-align: center;
    }
    h1{
      margin: auto 6rem;
      padding-top: 5px;
    }

    .create {
    background: white;
    width: auto;
    max-width: 800px;
    margin: 0% auto;
    border-radius: 10px ;
    
    text-decoration: none;
    color: #34495E;
    padding: 10px;
    
    
    
    }
    form {
    max-width: 70%;
    margin: 5px auto;
    text-align: left;
    margin-bottom: 30px;

  }
  input, textarea {
    font-family:inherit;
  font-size: inherit;
    display: block;
    margin: 20px 0 ;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    border-radius: 5px;
    -webkit-transition: 0.1s;
    transition: 0.1s;
    outline: none;
    padding:10px;
    border:0;
    box-shadow: 0px 0px 20px -7px #aeaeae;
    background: rgb(251, 251, 251);
    color: rgb(91, 91, 91);
    
    
    
  }
  input:focus, textarea:focus {
  outline: 3px solid #41B883;
  transform: scaleX(1) translateY(-2px);   
  opacity: 1;
}
  
  textarea {
    height: 200px;
  }
  
   textarea.description{
    height: 100px;
  }
        
  
  button {
    display: block;
    margin-top: 30px;
    background: #41B883;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    box-shadow: 0px 0px 10px 1px #7adaaf;
    border-radius: 3px ;
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