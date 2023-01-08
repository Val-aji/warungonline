import {createRouter, createWebHistory} from "vue-router"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("../components/home/HomeWarung.vue") 
    },
    {
      path: "/Shooping",
      name: "Shooping",
      component: () => import("../components/shooping/ShoopingWarung.vue")
    },
    {
      path: "/DetailProduk",
      name: "DetailProduk",
      component: () => import("../components/detailProduk/DetailProduk.vue")
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: () => import("../components/cart/CartWarung.vue") 
    },
    {
      path: '/Transaction',
      name: 'Transaction',
      component: () => import("../components/transaction/TransactionWarung.vue") 
    },
    {
        path: '/Account',
        name: 'Account',
        component: () => import("../components/account/AccountWarung.vue")
    },
    {
        path: "/InsertProduk",
        name: "Insert Produk",
        component: () => import("../CRUD/insertProduk/InsertProduk.vue")
    },
    {
      path: "/RegisterClient",
      name: "RegisterClient",
      component: () => import("../CRUD/registerClient/RegisterClient.vue")
  }
  ]
})

export default router
