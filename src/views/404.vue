<template>
    <section class="notbox">
        <div class="notfound">
            <img src="../assets/404.jpg" alt="">
            <a href="/#/main"></a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .notbox{
        .notfound{
            display: flex;
            position: relative;
            width: 100%;
            height: 937px;
            justify-content: center;
            align-items: center;
            background: #2d3039;
            img{
                width: 1000px;
                height: 600px;
            }
            a{
                position: absolute;
                display: block;
                width: 160px;
                height: 60px;
                top: 500px;
                left: 0;
                right: 0;
                margin: auto;
            }
        }
    }
</style>