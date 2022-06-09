let pageData = {
    productName: "訂票到月球",
    productDescription: "月球之旅是搭乘我們最高級的飛行船，可以觀看外太空的風景。哈哈哈",
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
    imageAlt:"Photo from space",
    productClasses:[
        {
            name:'Coach',
            price:125000,
            seatsAvailable:20,
            earlyBird:true
        },
        {
            name:'Business',
            price:275000,
            seatsAvailable:6,
            earlyBird:true
        },
        {
            name:'First',
            price:430000,
            seatsAvailable:2,
            earlyBird:false
        }
    ]
};

const App = Vue.createApp({
    data(){
        return pageData;
    }
});

App.mount("#app");