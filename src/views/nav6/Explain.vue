<template>
    <section class="explainbox">
        <div class="ex-swiper">
            <slider v-bind="setting" />
        </div>
        <div class="ex-footer">
            Copyright &copy; 2019-2020 &ensp;<a href="https://github.com/2624431797/my-system.git">Lanux</a>&ensp;. All rights reserved.
        </div>
    </section>
</template>

<script>
import slider from 'vue-image-scroll'

export default {
    data(){
        return {
            setting: {
                styleObject: {
                    width: '1600',
                    height: '526'
                },
                image: [
                    'static/img/0.jpg',
                    'static/img/1.jpg', 
                    'static/img/2.jpg', 
                    'static/img/3.jpg',
                    'static/img/4.jpg',
                    'static/img/5.jpg',
                    'static/img/6.jpg',
                    'static/img/7.jpg',
                    'static/img/8.jpg',
                ],
                interval: 5000,
            }
        }
    },
    components: {
        slider
    },
}
</script>

<style lang="scss">
    .explainbox{
        .ex-swiper{
            width: 100%;
            padding: 30px 0 10px 20px;
            background: rgb(27, 25, 25);
            .slider{
                .button{
                    top: calc(100% - 50px); 
                    em{
                        width: 30px!important;
                        height: 3px!important;
                        margin: 0 4px;
                    }
                }
                .control{
                    em{
                        display: block;
                        width: 44px!important;
                        height: 44px!important;
                        background-color: rgba(0, 0, 0, .5);
                        border-radius: 50%;
                    }
                    em:first-child{
                        left: 50px!important;
                    }
                    em:last-child{
                        right: 50px!important;
                    }
                }
            }
        }
        .ex-footer{
            width: 100%;
            text-align: center;
            padding: 35px 10px;
            color: #444;
            font-size: 16px;
            transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;
            a{
                color: aqua;
                font-size: 16px;
            }
        }
    }
</style>