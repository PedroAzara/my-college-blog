<template>
  <div class="create">
      <h1>Create your post here!</h1>
      <form @submit.prevent="handleSubmit" >
          
          <input placeholder="Title" v-model="title" type="text" required>
          
          <input placeholder="Description" v-model="description" type="text" required>
          
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
import { ref } from "vue"
import { useRouter } from "vue-router"
import { projectFirestore, timestamp } from '@/firebase/config'


export default {
    setup(){
        const title = ref('')
        const description = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])
        

        const router = useRouter()

        const handleSubmit = async () => {
          const post = {
            id: Math.floor(Math.random() * 10000),
            title: title.value,
            description: description.value,
            body: body.value,
            tags: tags.value,
            createdAt: timestamp()
          } 
          const res = await projectFirestore.collection('posts').add(post)

          router.push({name: 'Home'})
        }

        const handleKeydown = () => {
            tag.value = tag.value.toLowerCase()
            if (!tags.value.includes(tag.value) && tag.value.length) {
                tag.value = tag.value.replace(/\s/g,'')
                
                tags.value.push(tag.value)
            }
            
            tag.value = ''
        }

        const deleteTag = (tag) => {
            tags.value = tags.value.filter(item => {
            return tag !== item
      })
        }

        return {title, body, description, tag, tags, handleKeydown, deleteTag, handleSubmit}
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
    max-width: 600px;
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