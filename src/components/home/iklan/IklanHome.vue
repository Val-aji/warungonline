<template>
    <div class="iklanShooping">
        <img :src="posisiIklan" alt="IklanShooping" class="gambarIklanShooping" @touchstart.passive="posisiAwal" @touchend="swipeIklan" />
    </div>
</template>

<script>
    import {ref} from "vue"
    import "./index.css"
    export default {
        name: "IklanShooping",
        data() {
            return {
                count: 0,
                posisiAwalX: null,
                persentaseCenter: 0.633,
                posisiIklan: null
            }   
        },
        setup() {
            const gambarIklan = ref(["https://backend-warungonline.vercel.app/image/png_20230313_170259_0000.png", "https://backend-warungonline.vercel.app/image/20230313_170111_0000.png",  "https://backend-warungonline.vercel.app/image/20230313_170624_1.png"])
            // const gambarIklan = ref(["https://backend-warungonline-production.up.railway.app/image/20230313_163407_0000.png", "https://backend-warungonline-production.up.railway.app/image/20230313_163522_0000.png", "https://backend-warungonline-production.up.railway.app/image/png_20230313_163242_0000.png"])
            return {gambarIklan}
        },
        methods: {
            posisiAwal(e) {
                this.posisiAwalX = e.changedTouches.item(0).clientX
            },
            swipeIklan(e) {
                const posisiAkhirX = e.changedTouches.item(0).clientX
                const {posisiAwalX} = this
                if(posisiAwalX < posisiAkhirX) {
                    //ketika digeser kekanan
                    this.count--
                } else if(posisiAwalX > posisiAkhirX) {

                    this.count++
                } else {
                    const panjangIklan = e.target.width
                    const posisi = panjangIklan * this.persentaseCenter
                    if(posisi < posisiAkhirX)  {
                        this.count++
                    } else {
                        this.count--
                    }
                }
                this.ubahGambar()
            },
            ubahGambar() {
                if(this.count < 0) {
                    this.count = this.gambarIklan.length - 1
                } else if (this.count > this.gambarIklan.length - 1) {
                    this.count = 0
                }
                this.posisiIklan = this.gambarIklan[this.count]
            }
        },
        beforeMount() {
            this.posisiIklan = this.gambarIklan[this.count]
        },
        mounted() {
            setInterval( () => {
                this.count--;
                this.ubahGambar()
            }, 4000)
        },
        updated() {
            
        }
    }
</script>



