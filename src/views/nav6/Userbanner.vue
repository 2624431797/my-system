<template>
    <section class="userbanbox">
        <div class="userban">
            <img class="user_img" src="../../assets/bg.jpg" alt="">
            <Banner></Banner>
        </div>
    </section>
</template>

<script>
import Banner from "@/components/Banner"

export default {
    components : {
        Banner
    },
}
</script>

<style lang="scss">
    .userban{
        position: relative;
        width: 100%;
        height: 100%;
        .user_img{
            position: absolute;
        }
    }
</style>