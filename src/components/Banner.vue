<template>
    <section class="bannerbox">
        <div class="ex-swiper">
            <slider v-bind="setting"/>
        </div>
    </section>
</template>

<script>
import slider from 'vue-image-scroll'
//https://picsum.photos/1600/526/?image=@integer(0,1084)
export default {
    data(){
        return {
            newArr : [],
            userBans : [],
            setting: {
                styleObject: {
                    width: '1600',
                    height: '526'
                },
                image: [
                    `https://picsum.photos/1600/526/?image=${Math.round(Math.random() * 1000)}`,
                    `https://picsum.photos/1600/526/?image=${Math.round(Math.random() * 1000)}`,
                    `https://picsum.photos/1600/526/?image=${Math.round(Math.random() * 1000)}`,
                    `https://picsum.photos/1600/526/?image=${Math.round(Math.random() * 1000)}`,
                    `https://picsum.photos/1600/526/?image=${Math.round(Math.random() * 1000)}`,
                    `https://picsum.photos/1600/526/?image=${Math.round(Math.random() * 1000)}`,
                    `https://picsum.photos/1600/526/?image=${Math.round(Math.random() * 1000)}`,
                    `https://picsum.photos/1600/526/?image=${Math.round(Math.random() * 1000)}`,
                    `https://picsum.photos/1600/526/?image=${Math.round(Math.random() * 1000)}`,
                ],
                interval: 5000,
                imgStyle: {
                    width: '1600',
                    height: '526'
                },
            },
        }
    },
    components : {
        slider
    },
}
</script>

<style lang="scss">
    .ex-swiper{
        display: flex;
        width: 100%;
        height: 800px;
        justify-content: center;
        align-items: center;
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
</style>