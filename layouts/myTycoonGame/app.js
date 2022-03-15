

console.log('hello,vue')



const app = Vue.createApp({

    //data,functions

   // template: '<label class="text-yellow-500"> I am the template</label>'

   data(){
       return{
        showBooks: false,
        title: 'The Final Empire',
        author: 'Brandon Sanderson',
        age: 45
       
       }
   },
   methods:{

    toggleShowBooks(){

        this.showBooks = !this.showBooks

        if(this.showBooks){

            getComputedStyle
        }

       
    }
   }
})

app.mount('#app1')

