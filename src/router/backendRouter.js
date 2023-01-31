
 export const backendRouter = [
    {
        path: "/InsertProduk",
        name: "Insert Produk",
        component: () => import("../CRUD/insertProduk/InsertProduk.vue")
    },
    {
        path: "/Register",
        name: "RegisterClient",
        component: () => import("../CRUD/registerClient/RegisterClient.vue")
    },
    {    
        path: "/Login",
        name: "LoginClient",
        component: () => import("../CRUD/login/LoginClient.vue")
    }
]