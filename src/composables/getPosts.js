
import {ref} from 'vue'
import { projectFirestore } from '@/firebase/config';

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null)
    

    const load = async () => {
      const res = await projectFirestore.collection('posts').get()
      posts.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id}
      })

      try {
        
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }
    

    return {posts, error, load}
}

export default getPosts