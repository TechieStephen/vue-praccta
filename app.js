import { createApp } from 'vue'

createApp(
     {
        data() {
          return {
            users:[],
            search:''
          }
        },
        watch: {
          // whenever question changes, this function will run
          search(newSearch, oldSearch) {
            if (newSearch == ""){
              this.getUsers()
            }else{
              this.doSearch()
            }
          }
        },
      
        methods:{
          getUsers(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.users = json)
          },
          doSearch(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                    this.users = json.filter(user => 
                    user.name.toLowerCase().includes(this.search.toLowerCase()))
            })
          }
        },
        mounted(){
          this.getUsers()
        }
      }
).mount('#app')