export const sliderItems = [
  {
    id: 1,
    image: "https://wallpapercave.com/wp/wp6403714.jpg",
    title: "TRADITIONAL SAREES",
    desc: "Wrap Yourself in Timeless Elegance: Embrace the Beauty of Indian Tradition with Our Sarees.",
    bg: "f5fafd",
  },
  {
    id: 2,
    image: "https://wallpapercave.com/wp/wp6389928.jpg",
    title: "TRADITIONAL LEHENGAS",
    desc: "Elegance woven in every thread: Embrace timeless grace with our Indian Traditional Lehengas.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    image: "https://wallpapercave.com/wp/wp8796371.jpg",
    title: "PARTY WEAR",
    desc: "Dazzle and Dance: Unleash Your Style with Party Wear Perfection!",
    bg: "fbf0f4",
  },
  {
    id: 4,
    image: "https://wallpapercave.com/wp/wp10066858.jpg",
    title: "CULTURAL DRESS",
    desc: "WEAR: Where Culture Meets Style",
    bg: "fbf0f4",
  }, 
  {
    id: 5,
    image: "https://wallpapercave.com/wp/wp8796389.jpg",
    title: "WEEDING DRESSES",
    desc: "Where dreams meet lace and love finds its perfect fit.",
    bg: "fbf0f4",
  },
  {
    id: 6,
    image: "https://r4.wallpaperflare.com/wallpaper/463/259/635/ethnic-wear-shriya-saran-traditional-actress-wallpaper-28bc190f33e52e76e122965bd91aba53.jpg",
    title: "BEAUTIFUL & COLOURFULL",
    desc: "Dressed in Dreams: Where Beauty Meets Color!",
  },  

]

export const categories = [
  {
    id: 1,
    image: "//www.allborrow.com/cdn/shop/files/superman.png?v=1712360591",
    title: "KURTA PYJAMA",
  },
  {
    id: 2,
    image: "//www.allborrow.com/cdn/shop/files/BABYBLUE2.jpg?v=1683140383",
    title: "ANARKALI SUIT",
  },
  {
    id: 3,
    image: "//www.allborrow.com/cdn/shop/files/Nolitasaree2.png?v=1712086102",
    title: "SAREE",
  },
  {
    id: 4,
    image: "//www.allborrow.com/cdn/shop/files/nightingalelehenga3.png?v=1710381590",
    title: "LEHENGA",
  },
];

export const popularProducts = [
  {
    id:1,
    image:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    name: "Jake Guitar Vintage Crusher Tee",
    price: 20,
  },
  {
    id:2,
    image:"https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
    name: "Angela Natural Tee",
    price: 25,
  },
  {
    id:3,
    image:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    name: "Double Match Heavy Cotton Shirt",
    price: 30,
  },
  {
    id:4,
    image:"https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    name: "Cotton Dress",
    price: 30,
  },
  {
    id:5,
    image:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    name: "Noissue X Creatsy Tote Bag",
    price: 10,
  },
  {
    id:6,
    image:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    name: "Rocket Vintage Chill Cap",
    price: 8,
  },
  {
    id:7,
    image:"https://www.prada.com/content/dam/pradanux_products/2/2TE/2TE183/3LJ6F0964/2TE183_3LJ6_F0964_SLR.png/_jcr_content/renditions/cq5dam.web.hf7f7f7.400.500.webp",
    name: "White Leather high-top Sneakers",
    price: 50,
  },
  {
    id:8,
    image:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    name: "Women Jacket",
    price: 65,
  },
]

export const dummyOrderStatus = ['pending', 'shipped', 'in transit', 'delivered']

export const dummyOrders = [0,3,6].map(num => ({
  products: [...popularProducts].splice(num, 3).map(p => ({
    product: p,
    quantity: Math.floor(Math.random() * 3 + 1),
  }))
})).map((order, i) => ({
  ...order,
  id: i,
  amount: order.products.reduce((sum, p) => sum + (p.product.price * p.quantity), 0),
  address: "Bongaon, West Bengal",
  status: dummyOrderStatus[Math.floor(Math.random() * dummyOrderStatus.length)],
}))