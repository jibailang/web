let pageData = {
    productName: "訂票到月球",
    productDescription: "重新整理網頁的話，圖片會ramdon跑出一張，太酷了吧，嘿嘿嘿！！！",
    imageSrc:["images/asteroid.jpg",
              "images/fantasy.jpg",
              "images/space.jpg",
              "images/spaceship.jpg",
    ],
    h2ClassController:{
        centered: true, /*改false試試*/
        colorFont: true
    },
    pStyleController:{
        color:'blue',
        'margin-left':'50px', /*中間有減號就要加上''*/
        'font-size':'20px',
        'font-size':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'block',
        width:'50%'
    },
    imageAlt:"Photo from space"
};

const App = Vue.createApp({
    data(){
        return pageData;
    }
});

App.mount("#app");