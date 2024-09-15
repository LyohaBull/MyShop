import productCatSrc1 from "./img/cat-image1.jpg"
import productCatSrc2 from "./img/cat-image4.jpg"
import productCatSrc3 from "./img/cat-image5.jpg"
import productSrc1 from "./img/products/1.jpg"
import productSrc2 from "./img/products/2.jpg"
import productSrc3 from "./img/products/3.jpg"
import productSrc4 from "./img/products/4.jpg"
import productSrc5 from "./img/products/5.jpg"
import productSrc6 from "./img/products/6.jpg"
import productSrc7 from "./img/products/7.jpg"
import productSrc8 from "./img/products/8.jpg"

export const ProductBannerArray = [
    {
        id:0,
        title:"Men",
        imageSrc:{...productCatSrc1},
        imageAlt:"Product Banner 1",
        linkHref:"#"
    },
    {
        id:1,
        title:"Women",
        imageSrc:{...productCatSrc2},
        imageAlt:"Product Banner 2",
        linkHref:"#"
    },
    {
        id:2,
        title:"Accessories",
        imageSrc:{...productCatSrc3},
        imageAlt:"Product Banner 3",
        linkHref:"#"
    }
]
export const PopularProductArray = [
    {
        id:0,
        linkName:"Summer black dress",
        linkHref:"#",
        title:"Women",
        imageSrc:{...productSrc1},
        imageAlt:"Product 1",
        price:undefined,
        lowerPrice:19.99,
        highPrice:24.99
    },
    {
        id:1,
        linkName:"Black suit",
        linkHref:"#",
        title:"Women",
        imageSrc:{...productSrc2},
        imageAlt:"Product 2",
        price:29.99,
        lowerPrice:undefined,
        highPrice:undefined
    },
    {
        id:2,
        linkName:"Black long dress",
        linkHref:"#",
        title:"Women,Accessories",
        imageSrc:{...productSrc3},
        imageAlt:"Product 3",
        price:undefined,
        lowerPrice:15.99,
        highPrice:19.99
    },
    {
        id:4,
        linkName:"Black leather jacket",
        linkHref:"#",
        title:"Women",
        imageSrc:{...productSrc4},
        imageAlt:"Product 4",
        price:undefined,
        lowerPrice:39.99,
        highPrice:49.99
    }
]
export const LatestProductArray = [
    {
        id:0,
        linkName:"Blue women's suit",
        linkHref:"#",
        title:"Women",
        imageSrc:{...productSrc5},
        imageAlt:"Product 5",
        price:undefined,
        lowerPrice:19.99,
        highPrice:24.99
    },
    {
        id:1,
        linkName:"White shirt with long sleeves",
        linkHref:"#",
        title:"Women",
        imageSrc:{...productSrc6},
        imageAlt:"Product 6",
        price:29.99,
        lowerPrice:undefined,
        highPrice:undefined
    },
    {
        id:2,
        linkName:"Yellow men's suit",
        linkHref:"#",
        title:"Men",
        imageSrc:{...productSrc7},
        imageAlt:"Product 7",
        price:undefined,
        lowerPrice:15.99,
        highPrice:19.99
    },
    {
        id:4,
        linkName:"Red dress",
        linkHref:"#",
        title:"Women",
        imageSrc:{...productSrc8},
        imageAlt:"Product 8",
        price:undefined,
        lowerPrice:39.99,
        highPrice:49.99
    }
]