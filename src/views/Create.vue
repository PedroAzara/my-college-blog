<template>
  <div class="create">
      <form @submit.prevent="handleSubmit" >
          <label>Title</label>
          <input v-model="title" type="text" required>
          <label>Description</label>
          <input v-model="description" type="text" required>
          <label>Content:</label>
          <textarea v-model="body" required></textarea>
          <label>Tags (hit enter to add a tag)</label>
          <input v-model="tag" type="text" @keydown.enter.prevent="handleKeydown"> 
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
            tags: tags.value
          } 
          await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
          })

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

    .create {
      background: rgb(233, 233, 233);
      width: 50%;
      height: auto;
      margin: auto auto;
      padding: 1% 1%;
    }
    form {
    max-width: 70%;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: none;
    border: 1.5px solid #444;
    resize: none;
    border-radius: 5px;
    -webkit-transition: 0.1s;
    transition: 0.1s;
    outline: none;
    
    
    

  }
  input:focus, textarea:focus{
  border: 3px solid rgb(63, 63, 63);
  
}
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
    background: #41B883;
    padding: 5px 5px;
  }
  
        
  
  button {
    display: block;
    margin-top: 30px;
    background: #41B883;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
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