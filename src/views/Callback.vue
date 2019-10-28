<template>
    <div>
        Loading...
    </div>
</template>
<script>
export default {

    data(){
        return {
            auth:{}
        }
    },
    
    async mounted(){
        const email = localStorage.getItem("email");
        localStorage.removeItem('email')

        const auth = await this.$firebase.auth().signInWithEmailLink(email,window.location.href); 
        this.auth = auth;

        this.$router.replace("/home");
    }

}
</script>