<template>
    <div class="links">
        <router-link class="link"
            v-for="(link,index) of links"
            :key="index"
            :to="link.link">
            {{link.title}}
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links:[
                {
                    title:'Bosh sahifa',
                    link:'/'
                },
                {
                    title:'Bo\'limlar',
                    link:'/depart'
                },
                {
                    title:'Yangiliklar',
                    link:'/news'
                },
                {
                    title:'Loyihalar',
                    link:'/projects'
                },
            ]
        }
    },
}
</script>

<style>
.links{
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
.links a.router-link-active {
    text-decoration: underline;
}
.link{
    text-decoration: none;
    color: rgb(70, 68, 68);
    font-size: 18px;
}
</style>