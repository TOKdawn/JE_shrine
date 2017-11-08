<template>
    <div>
   <Button type="warning" @click="logout">注销</Button>
    </div>
</template>
<script type="text/ecmascript-6">
import store from '@/vuex/index.js'
    export default {
        data() {
            return {

            }
        },
        methods: {
            logout() {
                  store.commit('logout')
                  console.log('注销')
            }
        }
    }
</script>
<style>

</style>
