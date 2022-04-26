<template>
  <div class="post">
      <router-link class="link" :to="{name: 'Details', params: {id: post.id}}">
          
        
            <div v-if="post.tags.length" class="pills">
                <span class="pill"  v-for="tag in post.tags" :key="tag">
                    <router-link class="link"  :to="{name: 'Tags', params: {tag: tag}}">
                    #{{tag}}
                    </router-link>
                </span>
            </div>
            <div class="title">
                <h3>{{post.title}}</h3>
            </div>
            <div class="description">
                <p class="description-p">{{post.description}}</p>
            </div>
            <div class="dateDiv" v-if="post.createdAt.toDate()">
                <p class="date" >{{formatedTime()}}</p>
            </div>
            
            
        
        </router-link>
        
        
         <router-link class="link" :post="post" :to="{name: 'Edit', params: {id: post.id}}">
            <span class="material-icons edit">
            edit
            </span> 
         </router-link>
            
            <span @click="handleClick" class="material-icons delete">
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
    
        const formatedTime = ()=>{
            const timeRightNow = Date.now()
            const createdTime = props.post.createdAt.toDate();
            let deltaTime = ((timeRightNow - createdTime.getTime())/1000/60)
            let minutes = Math.floor(deltaTime)
            let hours = Math.floor(deltaTime/60)
            let days = Math.floor(hours/24)
            let weeks = Math.floor(days/7)
            let months = Math.floor(weeks/4)
            let years = Math.floor(months/12)
            let formatedTime 
            if (minutes < 1) {
                formatedTime = "A little while ago"
            }
            if (minutes == 1) {
                formatedTime = minutes + ' minute ago'
            }
            if (hours < 1 && minutes > 1) {
                formatedTime = minutes + ' minutes ago'
            }
            if (hours == 1){
                formatedTime = hours + ' hour ago'
            }
            if (hours > 1 && days < 1){
                formatedTime = (deltaTime/60).toFixed(0)   + ' hours ago'
            }
            if (days == 1){
                formatedTime = days + ' day ago'
            }
            if (days >= 2 && weeks < 1){
                formatedTime = days + ' days ago'
            }
            if (weeks == 1){
                formatedTime = weeks + ' week ago'
            }
            if (weeks > 1 && months < 1 ){
                formatedTime = weeks + ' weeks ago'
            }
            if(months == 1){
                formatedTime = months + ' month ago'
            } 
            if(months > 1 && years < 1){
                formatedTime = months + ' months ago'
            }
            if(years == 1){
                formatedTime = years + ' year ago'
            }
            if (years > 1){
                formatedTime = years + ' years ago'
            }

            return 'Created ' + formatedTime
        
           
            
        }


        return{ handleClick, formatedTime}
    }
}
</script>

<style scoped>
    .post{
        
        margin: 2px 4px;
        width: 100%;
        height: 100%;
        
        
        
        display: inline-block;
        position: relative;
        
    }
    .informations{
        margin: 5px auto;
        
    }
    
    .link {
        text-decoration: none;
        color: #5d6265;
    }
    p{
        color: #5d6265;
    }
    .description{
        
        height: 45%;
    }
    .dateDiv{
        
        bottom: 0;
        position: absolute;
        height:15%;
        
        
    }
    .date{
        
    }
    
   h3 {
        display: inline-block;
        position: relative;
        font-size: 26px;
        margin-top: 5px;
        margin-bottom: 2px;
        max-width: 400px;
        color: #6c7479;
        
       
   }
   
  .pill {
    display: inline-block;
    margin: 4px auto;
    margin-right: 4px;
    
    
    color: #444;
    background: #eee;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    
  }
  .pills{
      max-width: 90%;
        
  }
  .edit{
      display: inline-block;
      position: absolute;
      top:0;
      right:0;
       padding-top: 20px ;
      padding-right: 40px ;
      opacity: 0;
      transition:opacity 0.2s;
      cursor: pointer;
      color: rgb(71, 117, 255);
  }
  .delete{
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
  .delete:hover{
      opacity: 1;
      transition:opacity 0.2s
  }
  .edit:hover{
      opacity: 1;
      transition:opacity 0.2s
  }
    
</style>