<template>
    <div class="iklanShooping">
        <img :src="posisiIklan" alt="IklanShooping" class="gambarIklanShooping" @touchstart.passive="posisiAwal" @touchend="swipeIklan" />
    </div>
</template>

<script>
    import "./index.css"
    export default {
        name: "IklanShooping",
        data() {
            return {
                count: 0,
                posisiAwalX: null,
                persentaseCenter: 0.633,
                gambarIklan: ["https://static.tvmaze.com/uploads/images/medium_portrait/410/1026956.jpg", "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg", "https://static.tvmaze.com/uploads/images/medium_portrait/230/575652.jpg" ],
                posisiIklan: null
            }   
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



