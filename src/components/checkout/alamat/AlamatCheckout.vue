<template>
    <div class="alamatCheckout">
        <h3 class="judul POPPINS">1. Alamat tempat tinggalmu</h3>

        <form method="post" enctype="application/json" @submit.prevent="saveAlamat" >
            <div class="namaPenerima container">
                <label for="namaPenerima" class="judul ROBOTO">Nama Penerima</label>
                <input type="text" id="namaPenerima" class="HEEBO" placeholder="Testing" />
            </div>
            
            <div class="nomorPenerima container">
                <label for="nomorPenerima" class="judul ROBOTO">Nomor Whatsapp</label>
                <input type="text" id="nomorPenerima" class="POOPINS" placeholder="Testing" @input="handelNomor" v-model="nomor" />
            </div>
            
            <div class="provinsi container">
                <label for="provinsi" class="ROBOTO judul">Provinsi</label>
                <select name="" id="provinsi">
                    <option  :value="alamat.provinsi"> {{ alamat.provinsi }} </option>
                </select>
            </div>

            <div class="kota container">
                <label for="kota" class="ROBOTO judul">Kota/Kabupaten</label>
                <select name="" id="kota">
                    <option :value="alamat.kota"> {{ alamat.kota }} </option>
                </select>
            </div>

            <div class="kecamatan container">
                <label for="kecamatan" class="ROBOTO judul">Kecamatan</label>
                <select name="" id="kecamatan">
                    <option  :value="alamat.kecamatan"> {{ alamat.kecamatan }} </option>
                </select>
            </div>

            <div class="kelurahan container">
                <label for="kelurahan" class="ROBOTO judul">Kelurahan</label>
                <select name="" id="kelurahan">
                    <option  :value="alamat.kelurahan"> {{ alamat.kelurahan }} </option>
                </select>
            </div>

            <div class="namaJalan container">
                <label for="namaJalan" class="judul ROBOTO">Nama Jalan</label>
                <textarea readonly cols="20" id="namaJalan" rows="5" max="100" :value="alamat.namaJalan"></textarea>
            </div>

            <div class="container">
                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126918.40003018231!2d106.7828869582031!3d-6.237348899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1175b92614f%3A0x6173704d396d5a99!2sGandaria%20City%20Mall!5e0!3m2!1sid!2sid!4v1674006085631!5m2!1sid!2sid" width="100%" height="150vh" class="maps" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>     -->
            
                <iframe :src="src" width="100%" height="150vh" class="maps" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
            </div>

            <button type="submit" class="HEEBO tombolUbah">Ubah Alamat</button>
        </form>

    </div>

</template>

<script>
    import "./index.css";
    import { alamat } from "../../../data";
    export default {
        name: "AlamatCheckout",
        data() {
            return {
                nomor: "",
                alamat,
                src: "https://www.google.co.id/maps/place/Bandung,+Kota+Bandung,+Jawa+Barat"
                
            }
        },
        methods: {
            handelNomor(e) {
                const { value } = e.target
                const inputAngka = value.match(/\d+/g)
                
                if (!inputAngka) {
                    this.nomor = ""
                } else {
                    this.nomor = inputAngka.join("")
                }

                // console.log(inputAngka.join(""))

                
            },
            saveAlamat(e) {
                console.log(e.preventDefault)
            }
        }
    }
</script>



