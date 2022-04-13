import { projectFirestore } from '@/firebase/config'
import { ref } from 'vue'

const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
     let res = await projectFirestore.collection('posts').doc(id).get()

      if(!res.exists) {
        throw Error('That post doesnt exist!')
      }
        
     post.value = {...res.data(), id: res.id}
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { post, error, load } 
}

export default getPost