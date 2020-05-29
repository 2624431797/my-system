<template>
    <section class="uploadbox">
        <div class="upload-container">
            <UpLoad />
        </div>
    </section>
</template>

<script>
import uploadData from "./uploadData"
import UpLoad from "@/components/UpLoad"

export default {
    name: "UploadExcel",
    components: {
        UpLoad
    },
    data(){
        return {
            fileData: {},
            tabMapOptions: {},
            activeName: "LegalFile",
            createdTimes: 0,
        }
    },
    methods: {
        handlerInitData(){
            ["fileData", "tabMapOptions"].forEach(key => {
                if(key in uploadData){
                    this[key] = uploadData[key]
                }
            })
        }
    },
    created(){
        this.handlerInitData()
    }
}
</script>

<style lang="scss" scoped>
    .uploadbox{
        background: #fff;
    }
</style>