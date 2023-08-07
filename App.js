import React from "react";
import  ReactDOM  from "react-dom/client";

// const values =[
//     {
//         "id": "286988",
//         "name": "City Bowls",
//         "description": "Healthy, Acai Bowls",
//         "averageRating": 4.910737991333008,
//         "numRatings": 5299,
//         "numRatingsDisplayString": "(5,200+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/d9879e4a-a70d-4a30-9140-8f40c4bec328.jpg",
//         "url": "/store/286988",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1562120559",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/d9879e4a-a70d-4a30-9140-8f40c4bec328.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62623269",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/5352db66-4a14-4ef2-bf74-c0a6681d276d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62623277",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5c2a2e15-ab2e-4613-ace4-9dc548f2b3df-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62623271",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/46155a41-df96-4a06-bb80-bfecf2ae8bd1-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62623276",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a7a2bbf1-853a-46db-8f1e-ee4a9c7c512d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62623273",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/397e8747-4240-4657-ae3c-911c3cbea023-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62623275",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d80409d0-3d6d-467c-9699-e8c5fe3c0f91-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62623272",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7db390c6-7829-41fe-9bff-77a1cce6e8ca-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62623270",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/612fbd61-08ba-4061-a4d8-0499c58c7828-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62623280",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2fc9443e-bd81-4a7e-9472-fe605223531c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62623278",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d6d64fb7-21b8-48a4-9600-331323a74fa8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62623274",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a3c702ec-9055-443e-872a-187aa6d7fbee-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62623279",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0a1a7dc6-ce87-475c-abe0-eb790f14cfa8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 17,
//                 17
//             ],
//             "asapPickupMinutesRange": [
//                 9
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "2834451",
//         "name": "Chick-fil-A",
//         "description": "Chicken, American",
//         "averageRating": 4.827213764190674,
//         "numRatings": 1389,
//         "numRatingsDisplayString": "(1,300+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/69c56cd8-d694-4fbf-a757-95980f33470f-retina-large.JPG",
//         "url": "/store/2834451",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "2106537367",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/69c56cd8-d694-4fbf-a757-95980f33470f-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899541",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0b5c97c1-9fdf-4271-ade0-ac049c8be0a6-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899540",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5237e32c-3e59-400b-9c33-3768a0fcec54-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899529",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/511a05ca-71ac-42a0-aa46-3479fb728247-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899544",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5f134e52-4b06-4de9-90f2-7eccab8c94e5-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242902688",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b90bf4c3-bc23-4b1a-81d0-211ac7aea2fc-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899546",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/96bb00f3-824a-41b7-b0cd-b299aba0a00a-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899547",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7859ac6a-7c74-4eb6-b3f1-0520dd3fcd9a-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899542",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/67dddeca-02fa-44fe-b2b4-1acce5b6fa67-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899533",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c87f8d1f-a050-4f90-8beb-855e79137a7a-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899534",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2108cafc-324c-42f5-b3a8-e28f0c06279f-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899545",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9d8bf2ba-45c8-49de-8e75-4c26f419a08f-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899535",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2d2db9c1-305c-45de-9ce3-0a26e338e768-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899536",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/96a3c3c8-5890-4cd9-b114-7e6f46872eca-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8713342772",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/989d6e51-8aa4-4e82-9b4e-8a956375543c-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8289105676",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4f9d4e81-af2d-4e19-b3e5-7ec650941811-7ceb25d2-99ab-4b78-91fe-38f4eda52062-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6242899537",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/37ac1846-372d-4f69-b49e-b40e8484dac5-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": false,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 17,
//                 17
//             ],
//             "asapPickupMinutesRange": [
//                 11
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "1065935",
//         "name": "University Mexican Grill",
//         "description": "Restaurants, Mexican",
//         "averageRating": 4.682137966156006,
//         "numRatings": 1422,
//         "numRatingsDisplayString": "(1,400+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/39acdb5c-4a21-4623-a51d-bfcf7eec8f93.jpg",
//         "url": "/store/1065935",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "677605437",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/39acdb5c-4a21-4623-a51d-bfcf7eec8f93.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416568682",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/143d4d86-7217-4cee-be11-63f0286a8f87-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416568624",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/efad7d84-9240-43b1-a9e7-bd9fa3db6ced-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416568604",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/3665d2bb-d324-41bb-8d5d-bfb6b541e699-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416568612",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d977be58-6dad-4387-a893-4264057a9d1f-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416568603",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d01d48d7-64b4-4bb7-aa2f-d2699c01dc6f-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416568605",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/bc2986ed-1b89-493c-87e5-4bf8643322e0-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416568597",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/bc36babc-7f3e-42dc-94c4-75620ffb8860-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416568651",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/5aa235f5-9327-4c27-abdb-df5727e4533a-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416568630",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/18bd4304-45b7-4977-81e7-1a27365ea162-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416568617",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/3b32fb14-e5c7-4117-9019-05b1a69b229d-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 40,
//                 40
//             ],
//             "asapPickupMinutesRange": [
//                 10
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "2506587",
//         "name": "Dunkin'",
//         "description": "Coffee, Breakfast",
//         "averageRating": 4.5,
//         "numRatings": 316,
//         "numRatingsDisplayString": "(316)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/538c67b1-263a-4069-a170-450fe2a78d50-retina-large-jpeg",
//         "url": "/store/2506587",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-22557640",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/538c67b1-263a-4069-a170-450fe2a78d50-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "-851717308",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d5d51c50-5728-4c63-ac10-40e4cdfb9232-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1239015855",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ee76352c-6890-4fe9-b16d-76c5596ee1d7-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1239016352",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/876ab13f-fd39-4002-84b1-629f4b520d59-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1239015857",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fd1886f7-6a29-4f03-b61a-bd00ca8a9a39-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1239015856",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6bcdd09f-62ed-44b2-abed-f23b56cbf45b-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1239016351",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1d55eed6-077a-43a1-b2c0-f920ad1810d2-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2933904345",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9f3cd836-c0e1-4ad8-8bfc-066598f34933-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1239012861",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/33f2018b-3861-4a88-96b8-7997fe886b62-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5617642070",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4f2cb275-7570-4a8b-95ea-cc581607840c-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1239016358",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9342d9b4-7475-48dd-9764-61228440bfda-retina-large.JPEG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1239012677",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f892de56-7e5c-4b44-af65-a4355c9c9f6c-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "3002239509",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/38dc246a-1891-48ad-9769-1ba948ebbc73-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1239015863",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b85e85bb-3f34-43c3-a235-317bde539ed6-retina-large.JPEG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2933905348",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/904dffaa-b3d3-48b5-bc73-df4238535117-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2933905347",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e0d2d70c-bbe3-4e86-a4ea-affb9953c6f3-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6782063011",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/30d54f4b-fa62-41cd-ae99-29227544f8c9-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2933905343",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a7237606-294c-4c66-a272-c0572e53b5bd-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1239016354",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c6126a0d-7ab8-4ffb-83df-9f58b53b76e8-retina-large.JPEG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "3002239508",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2cab5ee8-5970-45a6-a679-3a770403e803-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5617650398",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c69f5a14-f218-4c9f-887b-da6ada42dddd-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": false,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 23,
//                 23
//             ],
//             "asapPickupMinutesRange": [
//                 11
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "23468610",
//         "name": "The Ono Poke",
//         "description": "Poke, Healthy",
//         "averageRating": 4.902301788330078,
//         "numRatings": 1607,
//         "numRatingsDisplayString": "(1,600+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/9d5cdbc0-b94a-4c3d-bb43-f4a8b4a4d158.jpg",
//         "url": "/store/23468610",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "356202689",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/9d5cdbc0-b94a-4c3d-bb43-f4a8b4a4d158.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953477099",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e89ce1c4-ed96-4b38-b113-648dc662c538-8a16b691-ebc0-4a1c-9074-de17bd46358b-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953477281",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/44057edf-0657-4748-ac2b-3462f20958fe-6e93b61a-682f-4707-a41c-5bd3446a1970-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953473917",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/088b9924-03c7-4880-854f-cf3133e4e584-ffaa6b7b-a40b-422e-8397-0c68f82ad179-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953477100",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7938202f-dfa4-4f41-8f6a-e3d18785e234-20418788-bc75-4545-9d9e-b40c21729eaf-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953473918",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/da0d19bc-e81a-42a2-bbdb-f611133058fc-309446d2-f3d2-44c6-9b92-3be4cb66c8f1-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953477282",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8c8b7a24-7074-437d-8a90-6e422311c5b0-9e0e3a47-5705-4a77-bc14-9020d89ce1a4-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953473916",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d305a852-6b7b-4ff2-b371-cc7586f03e3b-4f3ed4eb-63a5-478a-ad6b-390535ef9b05-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953477102",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/21bde56f-312f-4430-99a4-d32b8511dc5b-68518cef-c778-4bf4-bfab-5d709fb0f23e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953477284",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fd7d9876-7202-46f8-b6a1-498de9e7d352-7bb8c00b-da4a-4a32-9f1a-0d07820e159f-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953477103",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/36d375aa-49b3-4083-b7d8-8c1c7363600b-8a3ff891-c97f-4260-9aa1-4a40736fd5d7-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953477283",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/268c1060-07be-4d1c-9a12-bc2037616233-4eb72868-c805-4062-a26d-696cf143baab-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953477101",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7ec42aff-6878-41bf-ba64-bf018d58fc73-f67697c9-1a42-41ee-a6f2-cf19464a580f-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4953477285",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4ee0f8b2-43b0-4573-9907-64d73e171830-68e08aaf-2b11-45da-b61a-fb865c6aaedd-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 31,
//                 31
//             ],
//             "asapPickupMinutesRange": [
//                 10
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "350507",
//         "name": "Chipotle",
//         "description": "Mexican, Burritos",
//         "averageRating": 4.560260772705078,
//         "numRatings": 7509,
//         "numRatingsDisplayString": "(7,500+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/81006ae4-874c-445a-a4a4-35e5b645179a-retina-large.png",
//         "url": "/store/350507",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-630663714",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/81006ae4-874c-445a-a4a4-35e5b645179a-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "3052040709",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/42dcfbba-72ca-4d5a-b3c1-cc05600bceaa-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "3126148217",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b17154e5-c7e0-4397-bef2-d56b41b2d88b-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "186910239",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1abf9564-0e93-4f46-adac-6b64df03b8cf-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5168564889",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e591669d-4af1-41c9-bd0a-b06ecebe0fa7-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6420642810",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d7d82bc2-870a-4e2d-a2eb-589d2ba51cf0-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6420642803",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fee83696-99ed-4f5a-b476-a5d5b3dffb8f-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2389319794",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1b3200aa-2ed6-4f8d-8da4-204d68b66244-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "3126155526",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d0a2e070-306d-4cad-9d4d-0a4933c8512f-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "3052042894",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/90c64fa7-6536-4fd2-8b06-4cccb1f0975d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2939006004",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/36dfaec8-768f-47bc-8888-7aa83950a1cd-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6420642804",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3104dccb-6b4d-40b3-8ff1-47c5b016d882-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5521035935",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7fb0b81e-f6e2-4d44-8644-e6aa66cd71e4-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2389319795",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bf5f73c4-3d2a-4326-8726-556de6f950fe-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6420642811",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d719749e-8ed6-4510-83d0-7f422eb99010-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6420642807",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bc643204-b34f-4dff-8a22-14151f24cf8a-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 21,
//                 21
//             ],
//             "asapPickupMinutesRange": [
//                 7
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "859795",
//         "name": "Arby's",
//         "description": "Milk Shakes, Chicken Tenders",
//         "averageRating": 4.27699613571167,
//         "numRatings": 4408,
//         "numRatingsDisplayString": "(4,400+)",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c91902cf-e837-4af9-96c1-e21161fbf7cd-retina-large.jpeg",
//         "url": "/store/859795",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1118455738",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c91902cf-e837-4af9-96c1-e21161fbf7cd-retina-large.jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335259",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3e8c6cf4-ca00-4ba5-9636-0497271108de-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335210",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/635bc777-76dd-4e3f-9a3f-4a99670d9fbe-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335267",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/845d57a7-fbeb-42ce-b48a-4bd19f0cdf5f-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335241",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dafe0e31-98ab-44d9-870f-42332bdd8083-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335273",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d08938d7-7ce7-48b7-9a52-37f201d924f3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335220",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/30cd2eaa-0b18-460d-8374-46a24c2a9532-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335257",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/11a0ceb6-1f7e-4c39-8685-51fb1e769d63-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335232",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3f4b7c83-3377-4ab7-a07f-950370a15cfa-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335222",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fd7b7cc0-6856-4bf7-80e3-531b6189e3ae-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335252",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/31e5ba9f-038a-4d3f-ac00-f09d65f7557b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335237",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8a784e17-9d20-4ed0-bd5b-3f48a4ec1985-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335254",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f3c69d5-385b-46df-a093-fbd6bb57c652-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335236",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/635bc777-76dd-4e3f-9a3f-4a99670d9fbe-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "168335228",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3036e2dd-ae42-4501-94c1-9dccb4d5547d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "695500293",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/391b7457-aed5-4ee0-b3f8-7a01bc6148b1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": false,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 28,
//                 28
//             ],
//             "asapPickupMinutesRange": [
//                 18
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "1273418",
//         "name": "Wendy's",
//         "description": "Burgers, Salads",
//         "averageRating": 4.389545917510986,
//         "numRatings": 1607,
//         "numRatingsDisplayString": "(1,600+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8ad4f543-7e95-4a69-873e-0a21f6c27809-retina-large.JPG",
//         "url": "/store/1273418",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-1628456837",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8ad4f543-7e95-4a69-873e-0a21f6c27809-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "666693353",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/82c3261e-3c92-4bed-bcc4-c6a7697c3182-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "-2134264813",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/7fa533df-4b0e-4b00-aefc-f4f552d8a046-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "711089836",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/dd4848ef-5368-4477-b3e6-2cc1f07ac044-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041575508",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5c608d74-609f-4fbf-a111-7c09037461c2-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041559006",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4d47ffb1-406f-47ce-a8e1-c1e7ba71993b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041565621",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/11ee2882-4c68-4045-83fc-a53edc7bfda3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041571258",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/084d15ca-c228-4bc2-a973-de2683777007-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041571259",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bfc6d706-1197-4c64-bf32-bfb9e48e15eb-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041571269",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/06a703c6-600c-4a33-8427-1792ec347cfc-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041575512",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3b10d625-eb99-4161-8fb1-cd1478f5baeb-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041574733",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/40965aa4-b8c7-40b4-97ef-c11354a30d71-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041565622",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a9bd6d8a-831f-41ca-9db3-88c0c7c6f62e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041574748",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b7048437-d38e-489f-9b14-66ab49871a43-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041574737",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/598036ae-e3cf-4b56-b7e0-838d56221d9b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041565619",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5d6b6dec-06fd-4b82-9986-561178021748-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041571262",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/04a2a0ce-e36b-4115-8923-dae7e742f7d1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041574734",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ddfab7d6-8fb2-404e-839e-ecde95d5298c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041575509",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6be2c73f-c6f3-42c9-8154-e505fd72a670-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041574736",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/419a896c-dc17-4a85-bbc6-92c85b3ae759-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041574735",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5da7b035-575e-494d-9aa3-2221c0acdff7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041565607",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e94d6a03-8524-4459-8b62-b9c950fadc55-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7721632977",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1aab3293-6b70-4b68-a0ec-ec97b20d03e0-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": false,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 33,
//                 33
//             ],
//             "asapPickupMinutesRange": [
//                 15
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "531777",
//         "name": "Newk's Eatery",
//         "description": "Sandwiches, Dessert",
//         "averageRating": 4.723624229431152,
//         "numRatings": 6502,
//         "numRatingsDisplayString": "(6,500+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/7de9dd71-2f41-412a-9338-fc82b82b55f7.jpeg",
//         "url": "/store/531777",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-1153360672",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/7de9dd71-2f41-412a-9338-fc82b82b55f7.jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117733",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/60efe032-a76a-447f-ba75-a02c514cd0aa-d0cf82d6-b2cc-4ed0-9b20-6e73f6a7e908-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117611",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c2814019-7bf2-45ea-80f8-2d98b6fc1ff1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117723",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1fe9050c-ad52-4ec5-bbec-353fff2750c0-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117709",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/01da6bef-cf0f-4026-a5e7-a378aa44ef27-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117618",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/563b72c4-1c34-4a8e-8e6e-76ab0fff9b6c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117727",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3a29d9a4-a28b-48f2-a531-251021ac6626-1e2d6042-b824-4c97-8a25-c99f0f839ade-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117681",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/52f77a62-8967-4b31-acad-6a52dfc37efa-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "3891845936",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/52a5f109-f516-4034-9975-3048fee081b6-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117612",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c1f53ca8-a60d-441e-86d7-822f695899be-91fb6a55-873f-4963-ae1d-1eba7edf670e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117683",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bb086956-1901-43c8-8439-affce2e7d218-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117787",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bba773fb-f93c-4e2c-9f19-98e33af2b58c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117783",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5f99cf5d-dbfa-4efe-8589-6951fcb1ddb1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117682",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7274b698-8e11-4389-b234-2615d1fbde05-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117613",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d0179cf0-384a-4a4e-8e26-af73287a5dbc-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117721",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/82960d33-c79a-42f1-ae75-207cb321b69f-abd942a6-917a-4d35-be46-57b510bf35ff-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117789",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e0349d77-297d-4d31-8b63-ad4b5f243c80-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117768",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c21d1fe5-ae35-4d29-8a1e-f2e62f504b9e-0e7f1ccf-20ad-4bf1-b070-501a3ba62de8-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117784",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9668860f-68fe-4864-9766-ce6da0ba08e3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117785",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/129fcfc9-3c85-406c-98c5-09ab3ba81342-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2172117615",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/892185ff-4412-4fbc-a739-6535149f1d5a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": false,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 24,
//                 24
//             ],
//             "asapPickupMinutesRange": [
//                 9
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "876330",
//         "name": "Boston Fish Supreme",
//         "description": "Pickup, Chicken Wings",
//         "averageRating": 4.247943878173828,
//         "numRatings": 4013,
//         "numRatingsDisplayString": "(4,000+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/53275187-4141-4866-a86a-00f416b39ba0.jpg",
//         "url": "/store/876330",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "830091066",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/53275187-4141-4866-a86a-00f416b39ba0.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "136439599",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7da5b648-0cda-4494-88de-c6f348ba5069-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "136442250",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b5c8b29b-95b7-4702-8d5d-f8a87199461e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "136442122",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b5c8b29b-95b7-4702-8d5d-f8a87199461e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "136441209",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b5c8b29b-95b7-4702-8d5d-f8a87199461e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "136439578",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b5c8b29b-95b7-4702-8d5d-f8a87199461e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "136439687",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8218c565-0d5d-4a99-b1bb-19459562edef-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "136439674",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b5c8b29b-95b7-4702-8d5d-f8a87199461e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "136439693",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8218c565-0d5d-4a99-b1bb-19459562edef-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "136442497",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b5c8b29b-95b7-4702-8d5d-f8a87199461e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 43,
//                 43
//             ],
//             "asapPickupMinutesRange": [
//                 12
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "299476",
//         "name": "Jack's",
//         "description": "Fried Chicken, Pickup",
//         "averageRating": 4.245999813079834,
//         "numRatings": 8500,
//         "numRatingsDisplayString": "(8,500+)",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/212932.jpg",
//         "url": "/store/299476",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-89695497",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/212932.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596743610",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/23155c2b-4a56-4946-ac6e-0b6a25f04fb3-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596743612",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/bb242a7f-5f71-4b6d-b6a2-687680a733be-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596752899",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/78d09685-1027-4cd4-abbf-b42e70be31b2-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596752096",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a5efdc85-f5c8-4049-8dd1-8ec80ab88131-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596752092",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/aa1cee34-efcc-485a-93d5-d12a4d158373-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596752099",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8d04a519-70ba-42c4-b8bf-313b0276d5d6-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596752097",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/74902a30-7c8a-4e61-a489-409889fc32d9-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596743615",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2f7f2a6e-6c3f-4f15-ae5e-16955903468e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596752090",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e0c9052a-afc5-4c54-a8dc-539419fdac12-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596743611",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7eeac046-0472-403e-9083-2341514aa38e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596743614",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/227a248f-32c3-45f1-8698-e33f641614fc-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596737650",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/80accf6e-5011-482a-bb4b-7e29227c6344-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596752101",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/db88f330-d357-487a-8098-41a1bba728bf-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596752098",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d41d7833-d0c7-4bb3-a736-79fed0fbecae-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596752089",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c357dd8f-201e-45e5-ab4e-793606558643-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596752091",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d4ac99fa-ae31-4aa1-a391-7546df8263a5-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596752100",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2f0ebaea-3256-4eb3-b630-c13813190a78-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6596752094",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/3906161f-c580-4a45-a527-e0906fddfa0b-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 27,
//                 27
//             ],
//             "asapPickupMinutesRange": [
//                 8
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "1150302",
//         "name": "Little Caesars Pizza",
//         "description": "Pizza, Deep Dish Pizza",
//         "averageRating": 4.4544830322265625,
//         "numRatings": 1461,
//         "numRatingsDisplayString": "(1,400+)",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/159c805e-839a-4b11-a97f-2feb9d14c555-retina-large.JPG",
//         "url": "/store/1150302",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1721773713",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/159c805e-839a-4b11-a97f-2feb9d14c555-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628379002",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ba2e7f25-3889-41e5-9903-b52e9ed49071-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628372192",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c8326201-d338-40df-a09b-0147b0407ecc-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628379018",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e30858aa-870c-4e45-8307-742e0f2e40b8-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628379001",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/19e1b8bc-ab74-44d3-9e68-26863cfd1d52-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628378999",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d67595e5-e721-48b3-a097-c25eb758b639-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628398879",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/659f2764-613c-496b-b256-efcb9af60bf9-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628372190",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/74b21691-ed7e-443f-a17b-354752f8e79c-retina-large.jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628391207",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d159f4e7-6608-43d0-a685-ef30b9b59f8b-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628372193",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/64390648-ab95-467e-88ba-7e856c7cb24a-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628379003",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4425662c-9479-4136-8ea3-6c03c12ed51f-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628372187",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/887d3c26-ed51-4824-8d37-a3d31aa56f2a-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628397920",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b3f222b4-f1c2-4daa-8e0e-a4c8d6f8db7e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628372189",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9c21cbcb-e697-4711-8532-0d88f8c707e4-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628379009",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b92e0976-1008-40e6-aefc-af81dbfd10e8-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7791300232",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/bcc7a2ff-139f-4c43-b4ff-60da446d6559-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628379007",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2cd9a347-c115-4821-97b9-aa5b4ed3c273-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628379005",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/62227420-2356-49cb-9943-083a7eff51b8-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628379004",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b58e9c05-be49-4cc4-8351-65af9688fb8d-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628379017",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9f2d6c4a-a2fc-46cb-99df-7ab621b933e9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628379000",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/112ee258-a01f-42a4-a79c-2d2017270577-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7628379013",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0f3e1091-831f-44eb-80fa-919c4b4c09da-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": false,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 36,
//                 36
//             ],
//             "asapPickupMinutesRange": [
//                 16
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "418656",
//         "name": "Shake Shack",
//         "description": "Burgers, Chicken",
//         "averageRating": 4.690323829650879,
//         "numRatings": 5157,
//         "numRatingsDisplayString": "(5,100+)",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/785e0028-58fd-4e67-8a44-6a1eb74eacf7-retina-large.png",
//         "url": "/store/418656",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-812686258",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/785e0028-58fd-4e67-8a44-6a1eb74eacf7-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416137927",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8c016408-5492-42c1-86e2-4e49bae7d97b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416137928",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6627d9d9-2ba7-441a-a920-da869d1567b1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416140577",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/87b33ac7-493a-4b04-8eb8-41207b7f8d28-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8495804209",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fa031277-2a4b-4db7-b011-a396f3990a38-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8506196614",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b513530b-5932-4661-bb43-9755742f1862-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8506196610",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/275aa6f2-0c68-4e64-884e-d663079789d1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416140571",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/63061800-d4b1-4f89-9a6f-1fe4b673fe61-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8495827056",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f930b934-78bb-43c6-a8ce-77ef0662726b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8506197858",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d3c7527a-0947-400c-ba35-28b20dcc786e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "491742825",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f6884616-e91a-4a45-bdac-f077be9c18b4-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8332510596",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/79181e4f-6e23-4442-b9a5-b2cb9f738afd-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "416142910",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/95cf29ba-a58e-42dc-a8bf-d1de96977a33-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8332489964",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b03a3803-5986-45fd-add5-831724756087-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8495803118",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/feae97f6-6891-4451-8827-895c2d473ac2-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8506196605",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3c1619fc-6872-492a-86e3-15c8e9ce4a9e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8506206691",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8d20f025-40af-4814-8f5d-389ee66eb5d3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8332489792",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5a2609ad-7f71-4ef6-8499-d82d3026f201-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8506206686",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/375a42e2-1aa6-4b01-b554-5e88357b4fe5-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8332400192",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ca351cc7-2404-48b7-9327-0addcf07b8f2-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8507858736",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f345d31d-b83a-4f10-bbad-6cef6b80373c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8506198629",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/236ff94a-cc3a-4ac6-a6e1-010100a6708c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8507827228",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1a256b0f-8608-4b79-893d-6fca7d24a4db-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8507824645",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/113190df-430d-4471-8fb1-c783e662ee1c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8332400193",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ad6ff6be-c1bf-4a2e-b3f1-6de15e9538c4-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8506198638",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/af6dc95e-7eab-48b5-9b07-498d9fec3d0a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 20,
//                 20
//             ],
//             "asapPickupMinutesRange": [
//                 11
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "287048",
//         "name": "Moon Star Chinese Restaurant",
//         "description": "Chinese, Noodles",
//         "averageRating": 4.50336217880249,
//         "numRatings": 4164,
//         "numRatingsDisplayString": "(4,100+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/b9e50fa0-9074-4120-9e70-7c35a3acb1a3.976",
//         "url": "/store/287048",
//         "isConsumerSubscriptionEligible": false,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "668033524",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/b9e50fa0-9074-4120-9e70-7c35a3acb1a3.976",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "52821875",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/64d27120-e10c-47d5-9355-d96b5cf1166b-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "52821879",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b506b603-2145-4bdd-b09b-f0831d48e89c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "52821799",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0fcf4a05-9765-47cb-837f-e4755821c93c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "53440697",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0fcf4a05-9765-47cb-837f-e4755821c93c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 34,
//                 34
//             ],
//             "asapPickupMinutesRange": [
//                 13
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "287082",
//         "name": "Masaman Thai Kitchen",
//         "description": "Thai, Takeout",
//         "averageRating": 4.882660865783691,
//         "numRatings": 3051,
//         "numRatingsDisplayString": "(3,000+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/151486.jpg",
//         "url": "/store/287082",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "92195863",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/151486.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "66099612",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/aad59c0e-0ec0-44cd-b7b0-8a848008e9bd-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "66099609",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/93e64431-cad9-4be7-ace5-bcad644c2089-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "66099611",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/79294140-48d4-488e-9800-a460bf8ce239-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "66099608",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/481085cb-d6de-43b9-bbb3-1d6476f9a45d-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "66099610",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/734574a9-6f66-4e0d-9c56-51f9629b59cc-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "66099605",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a39dcc08-3309-4e08-b4ba-d5b17acd49e4-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "66099606",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/77c5d025-25ad-4be5-afa3-15f08b3f2c22-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "66099603",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d627f45f-4933-4f7b-81fe-af8b2d169d6c-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 47,
//                 47
//             ],
//             "asapPickupMinutesRange": [
//                 18
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "543183",
//         "name": "Cracker Barrel",
//         "description": "Breakfast, Family Meals",
//         "averageRating": 4.4583821296691895,
//         "numRatings": 6824,
//         "numRatingsDisplayString": "(6,800+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/77444aa8-d51b-4946-aa4c-4d94564723e8-retina-large.JPG",
//         "url": "/store/543183",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1771309987",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/77444aa8-d51b-4946-aa4c-4d94564723e8-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987133",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d797c084-4c0b-443c-bd93-579c6d8a0533-c6d46373-1b01-4726-bf29-f2101bb4e449-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987138",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/357af2b6-6cf3-413e-8007-47877138c45b-retina-large.jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "139776827",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/215cf71a-8371-407f-8bc8-8f81e83c96ee-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987154",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c831e2e9-b9f2-49cb-8fca-7192fe9eae4e-5c34d0bf-e172-46a5-9a60-b23c4d36b09d-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987134",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ce8038e6-0353-4278-bfd1-ceac5f48e4a4-aee32cc0-4271-4ba5-aac2-d6e14743431b-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "139776787",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b0cbaa53-7320-4907-b0d1-393af33647bf-82ec8bf8-f683-4c28-a5eb-740447339586-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987125",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/539c0cc9-4559-4905-bf59-099461dff79d-cb3888ac-0009-4da9-b20a-3d864ee8672a-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987158",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/25713cc8-b004-4e9b-8546-00fa98bb2790-97a9a002-e20d-491f-bac3-86227c296985-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987114",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e28762a3-2f4e-435e-b4e7-3fe60f81e392-634afe91-021b-49b0-bfcd-c5b300e7a6ca-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "151566357",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c22f76a4-fde8-4411-8c89-d7fc4a910a51-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987157",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9a51b6a4-ab5d-407f-8507-a32678eff036-fdf6b2bb-068b-4b5f-85a7-811987d8602d-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "139776784",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/70cab830-b5bc-4668-9bdb-142fbfb3d2a2-14f95ceb-bf07-4cc3-8e4b-392af6a86616-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "3511326921",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/363d82e9-c27d-4763-a0f8-25fa45031c14-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987118",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7bcfa36f-5ede-4b3f-a041-54d5b609706b-fe43fc3b-206e-493d-be08-63e40a9cc846-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987139",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1e1142d0-c68b-4f7a-864a-11c76e1f27d2-e4782d99-c0d1-4da1-8410-5f998078c0ec-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987116",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/71a50bb6-3f00-4b6a-a0bb-587d70183370-f413fee6-61ea-418c-9d21-778ad1283c8f-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987155",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c955021a-9cab-4707-a259-f6ba8036f05b-3f649e35-f03c-4931-b65b-ebc6472799e7-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "530987097",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8cdf7c8d-7c69-47a0-89cf-70681ef5ce22-bddd1670-a9ef-4e28-8f88-f79c88de4c36-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "3511361170",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1ce5186e-e5ee-4beb-9f1e-d481fc24558d-400d0e3b-cb37-441a-94e3-3cfe9d18f2aa-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "3511372073",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/545ae407-d1ca-4644-b9ae-bd9c242098f8-938b2c5f-7af7-423b-a1b7-9a27a745cea7-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "139776799",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9a316ce9-25db-4dcd-aca3-f7f632adc22c-dd1cdcd9-e22c-478d-aec6-f885a55b9cfa-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 35,
//                 35
//             ],
//             "asapPickupMinutesRange": [
//                 20
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "842943",
//         "name": "Smoothie King",
//         "description": "Vegan, Vegetarian Friendly",
//         "averageRating": 4.845160961151123,
//         "numRatings": 930,
//         "numRatingsDisplayString": "(930+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/store%2Fheader%2F19709.jpg",
//         "url": "/store/842943",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-617645975",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/store%2Fheader%2F19709.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "156129551",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98cf4286-4a90-4386-89d9-989e3df2f3cc-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "156129543",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/af2e9f01-b790-4718-856e-82e1c23aaf41-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "176311655",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/567b0b56-a199-4e2f-89ec-748b9fe08d0b-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "192403238",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/798f7299-be8e-422e-8162-750704336422-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "156129505",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/059fcacf-62b1-43a1-bc2e-81c0cd721d84-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "156129532",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a2f97807-6e9d-4247-8654-d8ad1a86b038-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "176299872",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cfa8ead2-ea0d-4023-b5d7-770ce0fa579d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "156129520",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/913743ef-ffb2-421d-998a-c53de4afb61b-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 19,
//                 19
//             ],
//             "asapPickupMinutesRange": [
//                 9
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "756153",
//         "name": "Frutta Bowls",
//         "description": "Smoothies, Acai Bowls",
//         "averageRating": 4.780980110168457,
//         "numRatings": 2429,
//         "numRatingsDisplayString": "(2,400+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/addd6447-3c8d-4ac1-b433-00a806c2726a.jpg",
//         "url": "/store/756153",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-1993471015",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/addd6447-3c8d-4ac1-b433-00a806c2726a.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320553637",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/1695d4d5-fc94-4fa2-89c6-00999cde4e4f-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320553639",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/589478f5-4272-4ecb-8d2b-c720e2b82a02-edee9fb4-6c2d-422f-afeb-cc13c6e8d492-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320567358",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a369d3c0-c6b8-4c1d-92bb-aa3d41b2ca6e-8138f43c-a27d-4fd3-addc-6261eab41876-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320553638",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7b722c2c-dee8-4cd8-9d70-a2fdabc9a32e-3ff552ba-08a6-4fb1-b3ec-26b74de5cb0a-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320567360",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/80b6fa24-9012-4688-8307-a27239e9e47e-feed02e9-a028-4a2c-9b78-04183cf3f7ac-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320559789",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f5a99cf-e4a0-4682-aeea-769b25ce88a3-87a4fa89-245c-4832-9978-a62e433c33be-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320555870",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4ad909cc-6bae-40ee-a8fd-ee4fab0bf586-2ff38311-7d22-474a-9525-02d827fc33bd-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320568886",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b5c1304d-9043-4c2b-bf67-b755ac1081cc-92dc3dfe-f337-4a4e-9c22-93222e7e70e2-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320559787",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/201a97e1-7486-4472-8b5b-f348c8a16b75-637e15bb-3ac2-43fe-9082-321cc2570459-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320567359",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8beb264c-cba8-4585-9ca7-e9dcc8dc4563-6206305c-bb17-4bdf-a334-99701db024eb-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320553641",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/609a4334-3985-4456-b4ae-0bb9e81acb97-15583af5-522d-40b7-82fb-1993c5eacd9f-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320553645",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f414ae93-b0c7-4c6b-b45a-84d0b5624e2e-73012a2d-a1f4-4d3a-bbdc-3dc65a2b62af-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320553646",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e5cd98eb-f333-4654-b0db-32cc141b89dc-6c5029d9-eeec-4c04-814a-baa33402e605-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320568889",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/37b9fb6f-24a2-47e2-8105-862d48c58dd0-ec833d53-c2e2-4a9d-9577-c0b131e1aed9-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320553642",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9db545ef-bc5b-4216-865b-da0b49de219a-19ffeb11-bd1f-47a1-9e80-94006b69804b-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320568888",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1b63643c-9d91-4576-99a2-02b5302d1f59-7330cf48-8f82-449e-bd43-40d26ed50f97-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320568882",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9a26bf5d-5874-417c-bd88-283eb94ce91f-12dde73f-6706-49ba-8a89-df03c30af218-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320568881",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/275b6a0a-1ff5-49ea-9a0d-e101f02a2857-2197fb8f-9ecc-4536-ad1d-c858b3e7f44a-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320559791",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/31988a9b-56a9-4c50-8e5b-b3d1deb4a2a3-0e8296be-f607-4db2-ab0e-22186440edc2-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320559790",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/312a73f0-4ffb-405d-9724-d81cce2fa0d8-55f7424e-8ac8-43af-a468-561264919cfe-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5320559788",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/12d35599-2295-407b-960d-2b806c40ca6a-b41f064a-a1c2-42ae-9043-6d6aae8c31f8-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 20,
//                 20
//             ],
//             "asapPickupMinutesRange": [
//                 6
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "605916",
//         "name": "Urban Cookhouse",
//         "description": "American (New), Catering",
//         "averageRating": 4.678249835968018,
//         "numRatings": 2331,
//         "numRatingsDisplayString": "(2,300+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/0721f7a6-4fd2-48c5-adcf-eb5f195d2655.jpg",
//         "url": "/store/605916",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "248120599",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/0721f7a6-4fd2-48c5-adcf-eb5f195d2655.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151161247",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7b2543c3-d45d-4775-a72e-afa341230d67-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151190725",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3af4a267-a24d-4162-8fd2-85b452cee5d7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151136014",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ee32129b-ca27-4bd8-8afc-547571edbae4-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151161248",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0fa18949-eaba-4f04-8475-44d5117025c3-3e8b8061-443c-4d93-ad23-59d14f854f9e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151193330",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f70dd0d7-ba37-4c14-a76c-bba908a924ce-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151136013",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a5ce14f7-753d-48ad-b734-c4e07a4cb6d3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151193328",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/32082173-97a7-475f-87fb-66504ed10587-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151193319",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/79a6d639-af03-49fd-b757-837c36ce539d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151193320",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/52a56006-5fd4-4eec-8e4f-46d0e027d337-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151161250",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0d93cdaf-c1a0-4270-baba-be2e20aedbd7-5d9441ee-203f-4713-b682-6270e5f30788-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151193324",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d32ebb9d-26f0-4eb5-87a3-5e9f59f3d938-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151161249",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b2fcd7a5-5de1-4257-8a97-af5207d16b37-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151161251",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3df9dd48-9c6e-4fb3-baeb-8e981e28fdf9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151161245",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f9f0c410-e532-4f16-a5db-b21177d5e831-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151136011",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3c09dbf1-c20d-4abb-abf6-889c398c5606-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151193323",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1bec2451-3590-408f-9529-04645c2cc2db-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151136012",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a2dfd4cb-0579-46c5-bf5e-d2c154f01e17-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151193326",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ea62e25e-7884-4955-b677-697a707ebeb0-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151193322",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/39a249f8-be91-4a30-9a15-4120d1d64313-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151194124",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/14276abf-32c6-4938-a042-2c47b06f2ff4-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151190724",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2d75e147-0fd3-4b81-ad7f-d51030c4c8a1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151174128",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/52797a99-fdf1-4cf7-b10f-bc90db8b4fe0-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5151193321",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9707ea38-a6d1-486b-ad6c-c2cadbbd3bb6-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": false,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 17,
//                 17
//             ],
//             "asapPickupMinutesRange": [
//                 2
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "25016851",
//         "name": "Sonic Drive-in",
//         "description": "Desserts, Chicken",
//         "averageRating": 4.4193549156188965,
//         "numRatings": 93,
//         "numRatingsDisplayString": "(93)",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2a715974-744c-4a02-923c-f6e1dc952b1d-retina-large.JPG",
//         "url": "/store/25016851",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1683874660",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2a715974-744c-4a02-923c-f6e1dc952b1d-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476845309",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cd928d7e-f2c7-42e7-b92f-b13287c594a8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476836666",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/45a400aa-80b9-4095-8f95-3a1514a6911f-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476847061",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4b0dec2a-6134-48f7-af79-41dc0c7d5b54-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476852274",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/112407b9-d1d9-4ddc-b120-cb906a3aa25a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476847058",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2a7483cf-7b39-4273-81fd-93022e1f0388-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476852279",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/228fa6f8-2968-4528-a6ad-91f3895a98a9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476852275",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6ec3e1ca-d862-4d4d-88a3-19121d5abbd1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476852278",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98af5b49-c4fb-4143-aaf4-a168885d14d8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476837017",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/491efe4d-c3ae-47df-9e5a-97b148719ca3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476836668",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/12553c05-aa99-4ba3-8d23-dd3430c65927-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476852273",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ad6caa11-d43e-45bf-84b2-e24b01768a64-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476847060",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f19bb107-1972-468e-8caa-8fc99d4c42a2-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476842600",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/321bd618-a718-4cef-8b88-e7821ff03d11-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476845303",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/64d34158-4d20-4cfa-8f4a-b15c115b5450-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476845297",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6238caba-b81c-4756-8c47-64a3445f56a7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476846749",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6801acd5-0427-43f6-a92c-84b156295df4-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476837015",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cfd1c416-c9fa-4dad-85ea-484331e015f9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476846750",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9e2761b6-cfa1-43f4-b140-859afe8ba621-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476836667",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/48a2e57c-513c-42b0-b7c0-4912845524ac-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476845300",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f638e73b-7ca3-45e0-aadb-1c407e8da564-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8476847059",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/af62ec2f-70ee-4a5d-a437-61fe1d6b143e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 32,
//                 32
//             ],
//             "asapPickupMinutesRange": [
//                 13
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "330043",
//         "name": "Moe's Southwest Grill",
//         "description": "Burritos, Quesadillas",
//         "averageRating": 4.429027080535889,
//         "numRatings": 5643,
//         "numRatingsDisplayString": "(5,600+)",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3acadf13-b035-4005-90b5-fc7760ca1eab-retina-large.JPG",
//         "url": "/store/330043",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1553098087",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3acadf13-b035-4005-90b5-fc7760ca1eab-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "122233794",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6781e64f-2b06-487c-98d3-0387fd8c048c-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "122233733",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9e878157-133d-4aa2-bbf9-89c880c8685c-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "122233735",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/10f63ce9-ab39-41d1-af5c-58bfb7d2006f-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "122233742",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/81c4cc99-6273-4530-b4bd-6b347019923f-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "122233791",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d5c13451-3131-4f1f-9dee-2d560186197e-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "122233793",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8e8f0876-4cd4-41ed-bc03-54c3e366afbf-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "122233748",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1ed71e58-4008-466b-b323-461555ffbb4c-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "122233789",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9f317593-de03-4038-9066-84e540141826-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "122233726",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4753e003-79fa-42f2-98b0-1724cbefed0e-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "388434682",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/36caf00c-c2cf-4336-a389-21eb7a228978-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "417665418",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/df2e1ea1-dc4e-41ff-9a4b-2e96395b6fc3-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "417665417",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f3b9da96-8cc1-4eb0-b60e-936df4ed6343-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "122233769",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/882f3d2c-b229-4645-b69e-4878782c574d-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "139893572",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/87717f58-8dbb-4c9a-a2d2-042f707b59aa-retina-large.jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "417665416",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f64cf0a-75be-4798-81b4-ff038dd17d0f-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "122233785",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/69f592f1-6192-4d9d-8657-bbb0d82a06b0-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7930876028",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d5c13451-3131-4f1f-9dee-2d560186197e-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7930876026",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9e878157-133d-4aa2-bbf9-89c880c8685c-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "180894465",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/16fe6198-0769-430d-9822-6f32b3cf7469-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "180894464",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8021a190-12d3-4ff9-bd23-d9740cebb6b8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 25,
//                 25
//             ],
//             "asapPickupMinutesRange": [
//                 13
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "841134",
//         "name": "Papa Johns Pizza",
//         "description": "Pizza, Italian",
//         "averageRating": 4.641201019287109,
//         "numRatings": 733,
//         "numRatingsDisplayString": "(730+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a0a38656-c46c-4f1f-a445-82cd79086d81-retina-large.png",
//         "url": "/store/841134",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1589964095",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a0a38656-c46c-4f1f-a445-82cd79086d81-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "380765166",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/017a1c82-8f0c-417f-b7d1-e4ed926a7e94-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076875420",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0a9b9da1-1402-44bc-842e-d98c44d8667d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6472664135",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/255bc42e-da86-41e6-8487-519358cef48a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076783115",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7b058377-3bb4-4211-a71e-e2507f3148aa-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041083650",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9a38ac67-c730-40d4-8203-327d3993814a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4041083652",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a66c73ca-bf28-4ab5-b84c-dac8b0d33e67-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7791862768",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/255bc42e-da86-41e6-8487-519358cef48a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076834409",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3f967756-41ac-4c3f-9cd5-592f877a0dd7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076788652",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c597f043-5cec-4691-a1b2-f5a3484050a0-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076776318",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2c6fdaf9-f883-4e1a-9487-ba970b04a069-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076770984",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/305c1f92-968e-406c-b441-44636c23ef51-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076556763",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f1d57f41-c00d-4274-b543-074bca857857-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076752766",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f6456c5a-f533-497d-adfc-cbfbd5837f4b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076835688",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e24ef4d8-7623-46aa-8283-8a8231f5b8fb-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4806639706",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/20ecb2ab-0354-4361-be94-78ebf1b3b104-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076803684",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/08b49e3b-6054-4d40-b2e6-acc70c989fc8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076783111",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b1c3aea9-bad9-433a-aae9-ae59135dda41-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8862874135",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2213404e-9593-4669-8fd1-4f5d9bf9b9dc-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076865633",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9b65cc90-b82f-4263-b72c-fc3c52f44f60-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8516796399",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/96989c97-b913-4e6e-9853-700e123735d8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076815054",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/63dd0eb1-1050-4059-bb01-264d93387ada-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076873445",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e6c3fbec-a459-4183-995d-e644142dff29-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6076871784",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d82233e7-bb82-4ea8-bb2f-a719efe4e7e8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 25,
//                 25
//             ],
//             "asapPickupMinutesRange": [
//                 3
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "2417801",
//         "name": "Pizza Hut",
//         "description": "Pizza, Chicken Wings",
//         "averageRating": 4.60994291305542,
//         "numRatings": 1046,
//         "numRatingsDisplayString": "(1,000+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f89e4829-15d8-4f77-953d-32d65e12eda0-retina-large.JPG",
//         "url": "/store/2417801",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1685799692",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f89e4829-15d8-4f77-953d-32d65e12eda0-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026472436",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0fee359d-e5ca-49d9-9fe5-b89caf8bc70c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026472435",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fd0d1a01-c979-4502-9632-dbeddd35cc47-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026473707",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/92731da5-1f1a-486c-ac38-7d2610f9d8b8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026466647",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ac0cbdb6-1536-412d-a1fd-cb7beb8bb0dc-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026472193",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5a41ae56-71dc-48e3-b384-45e4196d2678-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026479699",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5a41ae56-71dc-48e3-b384-45e4196d2678-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7629619550",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3349c2b5-59db-4171-8a0c-64e5a61e40b3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026473706",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d3ee7b01-92d1-4161-8f6c-80afafcc9d4e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026479700",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/64f2ca63-ae01-46d2-83db-d3b0293f7c4d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026466650",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f64cb483-28ae-4dd6-ad3b-3340530860a7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026472192",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8d2e5064-76f4-4040-8489-0408d08f0f50-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026465466",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f1a82ae0-1001-402e-8dee-e9e4c4dec3c7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8769637503",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e7386f5d-2898-4792-ba96-e41c6f64ef4b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026466649",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b407dbbf-4ef9-4965-a39f-2c74e9098685-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026479698",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8d2e5064-76f4-4040-8489-0408d08f0f50-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026466648",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/832465bc-140f-4056-b0a5-db15b9f07f25-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026472194",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/64f2ca63-ae01-46d2-83db-d3b0293f7c4d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7629619552",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/19b51ac5-28b5-4bbc-aacb-f50ecab9f201-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 37,
//                 37
//             ],
//             "asapPickupMinutesRange": [
//                 19
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "635018",
//         "name": "Gus's World Famous Fried Chicken",
//         "description": "Chicken, Fried Chicken",
//         "averageRating": 4.489133834838867,
//         "numRatings": 3451,
//         "numRatingsDisplayString": "(3,400+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/7a90791d-f9c4-4c04-99fc-dff5dd93f8d0.jpg",
//         "url": "/store/635018",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-142303285",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/7a90791d-f9c4-4c04-99fc-dff5dd93f8d0.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754471241",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4ccc3424-e4c5-4f8d-8d94-7924df1bb079-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754471242",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f40cdf24-5b17-46a7-b54e-947939fe1576-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754471240",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3f4cc1e4-44a0-4292-afbc-7476d443c818-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754471243",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e2e189aa-7625-4ffd-bfe6-2ba2891d031d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754471239",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fefaa963-d9bd-4d91-a45d-4164a214dab0-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754471244",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/95941ec1-8c16-4808-a7ca-5d577d1c5f76-391079ac-228b-4072-b035-cdca81e3fc33-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754471238",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98b5ae0d-0de4-46b0-894a-5e4bb15bbc32-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754290494",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1131a137-1d27-4c7d-9b2d-a8b7a83dddb0-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754467180",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7bb589f4-8393-40de-9e41-1d2067813142-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754290496",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/922a6512-08a2-4802-8c32-4b7c5bda3e56-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754091252",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/860e0e97-1ea0-4cd1-9497-54de68fc3116-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754467178",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3f006670-1c9d-457f-a4b5-4563d9dd1b14-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754471245",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/05eaba68-d853-480b-bc5c-238d2e4b7697-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754290495",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a2ce407c-e6bb-4d29-8f9f-96ceb7469890-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754091253",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0c986077-00ea-48e2-9581-47f0c77e0262-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754467177",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6f59f973-8215-4860-873f-87db91e8b14a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754467171",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9f80e6da-9d04-48fa-b9b4-4190e3db7a1e-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754467168",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b5f4afa5-a1d8-49d3-a2da-8f3bece0394f-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8754467169",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cc94b1fd-774a-4f35-aad9-4b6876c2d98a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 39,
//                 39
//             ],
//             "asapPickupMinutesRange": [
//                 11
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "648417",
//         "name": "Dairy Queen",
//         "description": "American, Cakes",
//         "averageRating": 4.400093078613281,
//         "numRatings": 4324,
//         "numRatingsDisplayString": "(4,300+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/store%2Fheader%2F12915.jpg",
//         "url": "/store/648417",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1192149349",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/store%2Fheader%2F12915.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "193889683",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/988ca6ac-8df4-4a88-a440-c6ddfb6b93c5-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688469",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b200bb19-6446-42cd-a93e-6121a7608ae1-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688465",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/01f9a920-5f77-4cdf-8c50-c1a3ae95dfd1-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688467",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/73d8ad34-67e5-4303-a4d5-9a20f0e4bfa4-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "193889684",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/988ca6ac-8df4-4a88-a440-c6ddfb6b93c5-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688470",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/591a12f2-6dde-4334-a0be-7acebcc5d9f3-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688488",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/75363191-dbce-4c11-9b75-ff9fc06d9a83-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688487",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c9c86faf-80c6-41c6-9016-0e93594587dd-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688486",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2dddd51a-0586-47d4-bc13-bd310afaebeb-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822031903",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/3c6b08cd-acd8-4d68-9ead-008701403a2e-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "381338869",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/236d1c5a-3b3b-4441-bb74-fb46d1f1a097-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688475",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/63d49ad7-7025-44c2-a8dc-524c92512d48-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688484",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c5cde048-3dbd-4bc5-a23c-fcae76c7826d-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688474",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0e5bb94b-426e-4fe0-9811-16d9332b06a2-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "211032671",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/60a75797-7a77-45ab-af60-3a2b90f92a3b-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "193889720",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/350a7bc3-acbd-48d6-9649-4da6a5e5e6cf-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "211032664",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/73791c4a-9c0a-4499-998b-7fbb5bc774b8-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688482",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/738462b2-3b2f-46f6-93c3-f602ef15b14d-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "193889711",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c13ef0fd-0ae8-4344-b0ae-ca1b27844647-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688485",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/19b84000-9e83-4bf2-afd6-310bb23679f4-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "356688480",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/55a0eb49-d189-47dd-93ac-05239c774080-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 39,
//                 39
//             ],
//             "asapPickupMinutesRange": [
//                 13
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "600656",
//         "name": "Buffalo Wild Wings",
//         "description": "Sandwiches, Comfort",
//         "averageRating": 4.567654132843018,
//         "numRatings": 9046,
//         "numRatingsDisplayString": "(9,000+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a37f1b53-5923-4367-9e94-f80b1d6ec7d0-retina-large-jpeg",
//         "url": "/store/600656",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1416856652",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a37f1b53-5923-4367-9e94-f80b1d6ec7d0-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820522",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dc6dcc94-1194-4a1d-a9e6-e814077dc91f-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820629",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/062a9007-6a49-4b34-8449-cdaa788b2f13-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820586",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/696bf4d5-170c-47ba-af94-76819aa6b981-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820561",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/89010cb1-342b-4500-b5bd-e7f873c27f9c-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820589",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a440f4b2-5de1-4ffb-bd6a-524bad862d64-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820626",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3c4207d7-f8f3-4c1c-a8a0-98499d26bd34-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820548",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d7fbf7a1-1bda-49ff-957a-3c27694685fc-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820569",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/89010cb1-342b-4500-b5bd-e7f873c27f9c-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820575",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2369eede-f21f-44e8-9bbe-60b2d5ea6aa7-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820585",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/606e7ec7-47f8-4442-a4d9-f7e068aa6f4e-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820529",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/42cba764-8526-4ccf-8284-8d97da6582b6-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820539",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/078ef1f5-6dd1-478f-910d-15b36df0de2e-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820554",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/10d7517d-c688-4422-9aa5-acd7cf70146b-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820573",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5ae0d3b6-75e7-4da5-9abd-2f176ef2567e-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820580",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f413eced-5af6-4c19-ad8b-562f28050bdf-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820632",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f261f6ee-c5bc-442d-8780-4471e9090b98-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820587",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/da446a4c-ba0f-4bd5-b432-4556687b0ed9-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2723208539",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/41fe5fce-86c6-4ba0-bf60-b6d94a003695-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820535",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a4092d6f-afd0-40a4-87ed-18002f274e73-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820572",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8ffc3ab2-1b32-4503-92fc-60a6604ba995-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "822820521",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3bbb0d40-27f8-4627-af92-24f9c72e49aa-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 25,
//                 25
//             ],
//             "asapPickupMinutesRange": [
//                 13
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "286995",
//         "name": "Nothing But Noodles",
//         "description": "Asian, Noodles",
//         "averageRating": 4.730902194976807,
//         "numRatings": 6362,
//         "numRatingsDisplayString": "(6,300+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/26e01e99-1805-4b26-b98a-760a4538419f.png",
//         "url": "/store/286995",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-822821205",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/26e01e99-1805-4b26-b98a-760a4538419f.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55699100",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9bcb2d7c-97b0-4dd6-a314-733aa4f44b6f-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55699483",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/98f09501-37fd-4928-8b3c-b01e3b39078e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55699832",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8f6c0430-4c85-4a27-87af-8509718420c6-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "93292546",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e4640a90-4c5f-477e-952e-981f97328d06-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55699434",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/36b5af7c-83cc-46da-8aa7-cdac2b87d987-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55689430",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9d012ff5-3e76-4ee9-a675-acabe7cf7ffb-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55699521",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/64a21fcf-c955-45bb-a2ed-bd3f193a63eb-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55701340",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/77a74528-b60b-4b2d-88d4-5e3403531f4d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55699371",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7183509d-d2dc-4472-abe3-761fb09eccab-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55698960",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/38e56e5b-b491-4326-bdef-7a878959089f-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55699852",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a9533b0f-ff80-4a38-a40b-51b740ba9766-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55696590",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/28a230b8-1c50-4724-9f1c-916664f850c0-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55700393",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/99b66cc1-d109-4bf6-b09e-27c9fcf60475-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55701917",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7413f9fc-3d4b-480c-845d-a5b692e67994-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55697615",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4362b3d8-88bc-445f-93ad-75fe7ffcb391-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55694955",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b022b2b1-2417-4579-a48b-de0e04cc46c4-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55701414",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ec86118e-d92f-44b9-bdca-5d60fa57d768-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "60589390",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/898ab192-98c6-405f-8e01-6a2efd02ceb7-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55702117",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5b0fcecd-ea92-4587-8265-4347c968b4bf-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55701964",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/78954a54-c387-44a9-92ef-5646181690d3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55698210",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b51b2d64-9e1f-4de5-801b-2548baffbc57-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55700074",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0f002db0-45d7-4037-b4fa-b89994b0b37b-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55702429",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d592de0f-1b1f-4141-86b1-47d278a204bf-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55701263",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d46d6cd9-d502-4728-a121-41ca028f050b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "55699135",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e47ed77b-6655-449f-bf60-0a3944a61879-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 18,
//                 18
//             ],
//             "asapPickupMinutesRange": [
//                 12
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "701206",
//         "name": "Los Arcos Mexican Restaurant",
//         "description": "Mexican, Pickup",
//         "averageRating": 4.455321788787842,
//         "numRatings": 6088,
//         "numRatingsDisplayString": "(6,000+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/9076ba5e-41a7-4e2f-903b-056d00a50b80.jpg",
//         "url": "/store/701206",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-1727864998",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/9076ba5e-41a7-4e2f-903b-056d00a50b80.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99325962",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/af222ddd-dbdd-415c-af95-32e4e637ddf4-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99325919",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5994f61d-c367-4bf1-9013-070e2bdcff13-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99325916",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/171f541d-49fc-46da-8fa6-75e4b7005bff-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99325942",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4bac42e6-7317-429c-802b-e6da39a2123b-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99325951",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/170a2946-9e84-42b8-b96f-79ab58413a11-retina-large.JPEG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99325928",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7ba4ac02-0332-46fd-9d25-bbd9ce987e15-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99325915",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fe981b54-0388-45f8-bbba-c24ed7fecc77-retina-large.JPEG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99325987",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4bac42e6-7317-429c-802b-e6da39a2123b-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99326016",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5994f61d-c367-4bf1-9013-070e2bdcff13-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99326081",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/13196c9c-78aa-40e1-85b0-31d0440a3e77-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99326024",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/eca83e13-599f-418c-8356-931de8862e6a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99326010",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cf78b97c-c184-4cf8-879d-69f8a537ba51-retina-large.JPEG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99326002",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ad6e07f2-30d9-4308-ae72-0e58c0e06bd4-retina-large.JPEG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99325980",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/363ba3ed-58c9-4816-a95f-868285625842-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99325929",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8e8e05e7-0ddc-45bb-9287-38675ac6e344-retina-large.JPEG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99326005",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fe981b54-0388-45f8-bbba-c24ed7fecc77-retina-large.JPEG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99326007",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/01c7957a-17bf-4aa7-be84-d64cf895410d-retina-large.JPEG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99325991",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8e8e05e7-0ddc-45bb-9287-38675ac6e344-retina-large.JPEG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99326021",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d3e7beb2-ab44-435d-baea-cd232e096acc-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99326022",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a84ca3f1-7fc1-49d8-8278-cfab3e6e3ccb-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99325992",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/1a67b47d-a4ff-4d9b-a676-4a266e987455-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "99326023",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/24f1e7e6-d86e-4e7f-8629-29d546467272-retina-large.JPEG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 35,
//                 35
//             ],
//             "asapPickupMinutesRange": [
//                 15
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "442995",
//         "name": "Golden Corral",
//         "description": "American, Chicken",
//         "averageRating": 4.302889823913574,
//         "numRatings": 865,
//         "numRatingsDisplayString": "(860+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/27844289-dd9b-4449-8223-938e35c62aec-retina-large.PNG",
//         "url": "/store/442995",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1504050184",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/27844289-dd9b-4449-8223-938e35c62aec-retina-large.PNG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173116",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dfee9b61-94bb-45e3-949d-15ee9c2a83ae-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173137",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2c9d6f80-d0d4-46aa-9636-7bbb9e8d27a9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173149",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/46945b3a-89bd-4200-ab9b-6fd0d1781b90-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173133",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/382a91c2-eb92-420e-baed-660e63c3124d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173155",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a6b6f8cc-d2c0-4f29-8124-6f5edbe417dc-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173076",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ddde3c1c-01e9-4043-89af-5394b4d84ac4-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173146",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1df4b832-f699-4e51-8565-f82522d914d0-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173081",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/875e458b-06e0-46c9-8b22-092cdbf5a376-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173079",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7e560987-c6b7-449b-b0b9-3e508a8f8c62-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "388369594",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ebc2e3fd-b3eb-4a11-9390-dcce6d8ef5ec-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173135",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f1cbc9e5-c3c7-4ae1-baed-2c5b11b4c2e3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173123",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9695c1ab-b536-4eb1-aa19-709323da1a66-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173063",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/86c5b404-8419-4e51-adff-0cb7be3ee7a2-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173085",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2b4fbb3f-4723-4283-87b9-55786dbda560-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173084",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a737615e-8af2-4ea4-8f28-151357505fa9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "302173102",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1e18e264-c353-4523-aa29-1420439daa7d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 49,
//                 49
//             ],
//             "asapPickupMinutesRange": [
//                 21
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "751214",
//         "name": "Jersey Mike's Subs",
//         "description": "Sandwiches, Cheesesteaks",
//         "averageRating": 4.756779193878174,
//         "numRatings": 3577,
//         "numRatingsDisplayString": "(3,500+)",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/33c0e2ce-c3c4-4640-8f35-159a44472df6-retina-large-jpeg",
//         "url": "/store/751214",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-2074696737",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/33c0e2ce-c3c4-4640-8f35-159a44472df6-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "110788255",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a287a979-bf37-4835-8983-f5fabf930cf1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "110788249",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/928efde0-39b8-4bbd-8d2f-c6ba199f2faa-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "110788266",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/00c349a2-f6ad-45c4-b071-8b7b1a7f0a1f-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "110788262",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/be89d3ad-a851-4331-aa77-0a14e227d461-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6599174816",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/21db0cc2-b56e-44e2-a051-ec0107814c09-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "110788259",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/32644117-66df-4e4b-ab54-630394691808-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "110788245",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/faf1311b-f40a-4247-ad24-a056d92bdf96-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "110788257",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2d430876-aba5-418b-9cdc-d565617960d8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "110788252",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d91ff99a-aae6-48ec-8d02-4ced9226999d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8289104528",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ccfaa4ed-caa3-4d1d-b7bd-4330f3148d01-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "110788247",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4fcff1a5-3f3e-4b63-be90-ce435c4581c4-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2432143125",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a09568e5-3b59-46fc-a163-c1f7d4326c17-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "110788261",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/32644117-66df-4e4b-ab54-630394691808-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8289107876",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98efe062-cc47-4f49-baab-5777ca6b48b8-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6599216500",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c8b76c4a-7f7c-4bd3-a3b5-f396eb77b536-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6599181741",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e4eb276a-3f30-4de9-ba28-fcbd2c7c4085-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "418820360",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/21db0cc2-b56e-44e2-a051-ec0107814c09-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8037840176",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d64345ae-8f72-4368-bacb-8984a59cfe0f-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "110788250",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/22e6f5c0-6694-40dd-a8cb-8aac39cfaa7a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8289101922",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/11949807-33d2-47a4-9c37-7c497eaebd47-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8146637368",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/546b777d-dd26-48aa-916d-bf2bf1fa7a38-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8289100747",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2cb9663f-5a08-4128-9826-991af3f48940-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 22,
//                 22
//             ],
//             "asapPickupMinutesRange": [
//                 14
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "537044",
//         "name": "Rock N Roll Sushi & Hibachi",
//         "description": "Sushi, Tempura",
//         "averageRating": 4.691256999969482,
//         "numRatings": 3660,
//         "numRatingsDisplayString": "(3,600+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/80bdb584-2784-4977-91c8-3624f8f2be53-retina-large.JPG",
//         "url": "/store/537044",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1616972330",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/80bdb584-2784-4977-91c8-3624f8f2be53-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463531",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ee26a9cd-96de-4ceb-af31-436d3db17a20-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463571",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6ce966ec-c259-4790-a595-693934232e7c-2cc958a9-2c1e-4bdc-9b32-6b5a609b2952-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463562",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/dfb1638c-aa56-4724-9bd9-27886b3b4d45-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463533",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f27592c8-eff5-4e45-a17e-bcdb683db50b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463568",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2952fe94-a36f-44d6-aa64-4f876adfb06f-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463543",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6e149b8a-d0af-4b28-8253-1a1448c0a435-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463501",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cf283464-da79-4576-aa74-2b80a3135ece-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463567",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ec014705-4242-4670-8ca3-d894973367f1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463517",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/aed30fa8-ef4f-4ac8-83ab-961c72b73fba-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463537",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/5cd23adc-d21b-45bc-8252-051525d8ff5b-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463540",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/20514b2f-b66e-4196-8cb8-c03abd2c2b94-acdfa6c0-a90b-4078-bf48-f219d1055111-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463549",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e79dfd3d-0cb2-46ae-95f4-2391b3c3787c-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463520",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2e1befb3-97ad-4355-a969-de1b9db2a6df-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463548",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/fdadac0f-fd6b-4c9e-8e0f-33d2f76ce397-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463561",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/80f96e07-c38f-4b95-a5af-298f8d36f4b8-ea132b81-9f23-4add-8115-6fe983a5413f-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463527",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/86c686a6-3bfc-470a-b6e3-cb665c97becc-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463573",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8eebfa8c-be1f-46fd-a40d-41007ebc6adc-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463511",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6537a754-058f-462b-8343-46f993c38aa2-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463544",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a92460ad-485c-4c9d-b060-ece9781799d9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463525",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/551f94ce-efab-4e5a-adb7-b8f37959cb8b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463498",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/02bbfde3-1d84-4866-8dbe-0f75de1c894a-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463502",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/913b45c6-d418-4b03-a875-56df2605052c-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463546",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/1402e751-0e3f-4463-8d26-2b44e3b7bc34-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2799463496",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/bb110167-1bed-4a42-9178-f8e630817495-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 26,
//                 26
//             ],
//             "asapPickupMinutesRange": [
//                 20
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "286899",
//         "name": "Mugshots Grill & Bar",
//         "description": "Bar and Grill, Sandwiches",
//         "averageRating": 4.410128116607666,
//         "numRatings": 2587,
//         "numRatingsDisplayString": "(2,500+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/a1e91f11-0dc9-45a8-8c38-314a8cf0a83a.jpg",
//         "url": "/store/286899",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-1745820416",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/a1e91f11-0dc9-45a8-8c38-314a8cf0a83a.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252816",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/11b060e1-251f-458a-9a6d-f51ba9c16621-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252819",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4a1e99a7-47d5-4bb0-89c4-7f6fed315769-0d2b95b8-d0a9-4026-b2be-4d51ef8bc8be-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210253753",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/afdcb615-638d-4b07-910a-3a75ea4fca0b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252817",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0db866fe-9248-4073-9d8a-20a6aacb6e39-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252571",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7f103065-8330-43a3-b465-ece3839e1a38-0361c042-1497-45cb-a454-d51e8bdfe6e9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210253750",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9dff4b28-8aeb-4035-833e-1ac8c4cedd24-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252818",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f195de7b-af66-4481-ab30-2fb2c4045cbc-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252814",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/71b760b5-dfed-43cf-958c-1a5610f184eb-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252572",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9b3d7f89-f597-4f04-a227-4d1bb6aeb4a4-85a1a43a-618c-4017-83fc-7713633f0b36-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2975339131",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a18a0cc5-723b-41f6-b96d-c1645792f466-ae5d1303-0dca-46af-bfa2-5b42455606c7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252820",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9d60f34a-3dbc-4c93-95f7-58c9c13c01e1-d8442cba-296b-47b4-a431-730825cb52e1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210253755",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bb36bc7d-916a-4c4d-94e0-302c1a7e971e-48725b5b-7af8-4c85-b0bd-f1f818437eb3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252574",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ca29c716-efa5-49a3-871f-dd5ac5552ffa-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210254034",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a37ad346-3a8c-4324-865a-7cfe9c263aee-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210253751",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8c80e788-da2e-429d-8f2d-432766e585ff-54d053fd-334a-4584-b793-ceb175380019-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210253757",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cc6c2abc-631b-4a43-aadc-dbf3c256ec97-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210253754",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c1389411-1840-4479-af1f-e5dc96247fb5-d4ef6be5-118a-4954-9022-6b2db717c44c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210254035",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8782a216-7da7-4b9a-8bf5-0f3ff6a10c4b-d2ad7747-d38c-4a3b-b854-40be8dda857a-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252500",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/922bd92e-e6f7-4369-9369-6e78b072f5ce-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210253758",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1a58279a-ee38-4a61-bf0e-63922b95d528-d0742357-088a-4c0c-bcd1-3085814d30d8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252570",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cb9e3b12-6ff7-4cb8-a201-d351e40bbdac-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210253760",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/268a92c9-eb5f-4f96-baef-dc3225428591-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252664",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8038f14a-33a8-4067-abce-a5218d18daea-4b67a033-088e-4e49-8cd3-c65aa51e7fd3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2210252661",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c8ef3183-414a-4440-966f-27a7918461d3-e13489cd-6b7f-4c5b-8efe-9f11bd29a11a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 33,
//                 33
//             ],
//             "asapPickupMinutesRange": [
//                 7
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "286945",
//         "name": "Oak Hill Bar & Grill",
//         "description": "Bar and Grill, Salads",
//         "averageRating": 4.579439163208008,
//         "numRatings": 321,
//         "numRatingsDisplayString": "(321)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/c2a08d41-c15b-4378-87f3-f23a6d00c3c3.jpg",
//         "url": "/store/286945",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-1542807116",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/c2a08d41-c15b-4378-87f3-f23a6d00c3c3.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "94378547",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/5eb32b93-8473-4fae-9129-fcccce4eb43e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "94378657",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/bf3d4ef6-df93-47af-b6b7-ca78581d101c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "94378396",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/235a046c-5682-4899-99dc-1368db2c5958-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 35,
//                 35
//             ],
//             "asapPickupMinutesRange": [
//                 15
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "592187",
//         "name": "Chuy's",
//         "description": "Mexican, Burritos",
//         "averageRating": 4.750970840454102,
//         "numRatings": 8758,
//         "numRatingsDisplayString": "(8,700+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/5005.jpg",
//         "url": "/store/592187",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-1030816772",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/5005.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066464",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/05f97378-46d6-4e95-a0db-a5d7526bac27-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066454",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2b91205a-7fac-465d-8b8c-128bafd5b1cd-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066463",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/56d7f453-212f-491d-b649-85661865c28d-06afac10-1870-48ed-81e8-f42e656d3649-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066473",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/24763922-29ae-4532-a9df-1991430a6e1b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "358074256",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/75293e18-8bd3-4f69-bb92-6fb67817ca34-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066465",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0828f3b0-b13b-4ab3-b349-cdae22bdcb9b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066469",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d5092d12-ee1d-413e-9215-ae6e6224baf1-f3b00bf7-33a1-4373-841c-5f63ae487fec-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066436",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/497920ba-780d-49f5-91d3-7232f5854a41-feff14f2-48b8-47ac-9016-9e94a7e66d9e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066443",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/22c2bd54-c437-4eea-b0db-36ab17954e93-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066460",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5e21f114-e553-499d-ab77-ee568a4f9ef3-4ebea86e-bf4b-4384-a743-deea96a6216a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066477",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/56bde362-1a38-4bfd-a7a6-305f79a164b7-5a58fe45-9b33-4b4c-bf7c-6defe4cb8e9c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066451",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d533a7cd-09c6-4a30-af14-21e3cb1f91bb-1d7ccdb2-2e71-4b56-adcb-7bf3e1d55203-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "358074258",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2577b2dc-2b17-4d37-b25e-fe0d0e943b28-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "358074606",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d6b7fd84-12f5-4b03-9d6d-a053ebced424-fc9eb5e6-64c3-46f9-ac04-9f49b60f005d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "358074993",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6ff0d865-2aa0-4006-a54c-67976ad4678d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "358074607",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/71d91558-9636-4cee-95bc-3c31f0069e00-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066442",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e534f983-6a76-4604-8269-5a4ea5beaf4a-45bf6303-cc9f-4a95-86b6-765c5538f605-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066458",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5c9cbf30-8627-44e5-8655-8f3f2f413a8a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066462",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0925cce7-c035-4a25-a6a8-6d7c8bba902e-0e3d9fc3-d3cd-4993-b40a-67f3b33cbcf7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066452",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d6388c3a-0868-4921-8623-f50123debc70-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066470",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5fb5926a-cf09-470a-9e87-ebc52eff349d-aaaceefa-6bb3-4a03-b531-696586ce9e91-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "358075472",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d515d341-76ea-450f-a700-df06b8e99af2-0f7f31d5-045f-4cc1-a52a-28713fb38e2a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "358074992",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/51a1523b-918b-4381-85c8-798975c99d84-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "254066434",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4cfe7d3b-e2f2-43c8-83de-48da320a567d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 18,
//                 18
//             ],
//             "asapPickupMinutesRange": [
//                 13
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "686777",
//         "name": "McDonald's",
//         "description": "American, Burgers",
//         "averageRating": 4.605527877807617,
//         "numRatings": 1990,
//         "numRatingsDisplayString": "(1,900+)",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/98a6f342-aa36-453e-ab97-33e377f52cfb-retina-large-png",
//         "url": "/store/686777",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "762018963",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/98a6f342-aa36-453e-ab97-33e377f52cfb-retina-large-png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624947015",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dfd0ab4e-3e54-4829-a505-37a91417c98f-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624953144",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/47a75f43-40d7-4012-a3fa-e8ff66407ff4-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624963874",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8abb40c2-fc64-46bb-a526-f2b2d7579f6d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624953143",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/44ada25a-987c-4295-8818-da57cfd60f0a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624961502",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/362f36c1-9335-48e2-b424-c90ede4d11e0-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624963873",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b8ad5bec-1775-4c6b-8d27-3ef071c24e21-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624961499",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7d0137f1-f1d8-4c25-a268-5e933eaca5bd-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624958951",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dfd0ab4e-3e54-4829-a505-37a91417c98f-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624953145",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/af2958fc-5413-4611-9971-898f767d6fd2-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624940468",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/81b199d3-594c-4761-8cee-0b502b61dbfe-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624961497",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/07da0bc8-4d9d-4c07-8e63-796b64cbf8c2-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624940470",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d553151a-ed28-4a8d-b5ff-8b99f24b7c66-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624962155",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8a626b73-4a1d-42d5-98c3-fbf503c35fa8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624953141",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/70a282a1-a8f0-4a33-9326-5f7a1c6d233a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624959779",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/67b74548-de98-4767-86c7-23c5dda38b24-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624962150",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0b9ee816-a1d9-48a2-8dcf-5357c2625d6e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624963685",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/422b22f9-5042-424c-b4ab-617250d2898c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624961501",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/81a426ee-9c34-4dc6-84f2-4895d355509d-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624963878",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5d36a3f5-d384-41df-bc6e-02ded022ab1b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6624963683",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b6532707-f53b-448b-81d7-0f4381c161ae-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": false,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 20,
//                 20
//             ],
//             "asapPickupMinutesRange": [
//                 10
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "286898",
//         "name": "Dreamland Bar-B Que",
//         "description": "Barbecue, Takeout",
//         "averageRating": 4.50759220123291,
//         "numRatings": 922,
//         "numRatingsDisplayString": "(920+)",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/27268.jpg",
//         "url": "/store/286898",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "151173007",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/27268.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562337862",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/826a8293-310e-46a3-b1c9-2e17541612a5-e3d461c5-0db4-4a6d-8282-a078336ced2e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562081809",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/744639d5-e653-4bde-956b-5b68a29034f3-77b303db-68da-4a8e-8958-9f3768261020-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562081808",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5cd35707-c64b-41b2-99ae-a74fee182770-62d8ccdb-92cc-410a-877c-5d302f9d3a8c-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562322837",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ed9268fa-6e12-4b24-a413-f14f1db2f1ae-77f2e7ac-7402-4acd-9269-aec6b01273a9-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562322839",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1133a9ff-3780-46a7-9128-21d178248cc0-3c3f4c98-5abd-4495-a4d3-2aad0d58f28f-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562337863",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/65cf7695-09eb-4a5b-9dfb-e4795498f672-3a17ea13-7104-488d-8f73-3668d57aa72d-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562322838",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/acd23f6e-e35f-42ff-b312-21dcccd2816a-c1930808-0b3d-4a58-a14f-995fdeccea93-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562322841",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0dc5dc1c-06ab-45b0-9878-c46369e080be-424c5ccb-ec50-4b66-ac56-b36ef464bf2e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562339293",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c7c05fea-d27a-491b-adb0-f1921097fd2b-75bf76b1-1a53-48c3-b717-707b24ee406a-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562322836",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e5f6f4c4-ccda-4143-aa8f-4cda9912619b-f5c03a65-8c90-44c4-a0fb-0940eb0522a7-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562339295",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8a32466b-be0f-459b-9fd0-48107affc020-e9e003ac-bfac-4985-8845-f8e0cc1182d3-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562322840",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d22be00d-e166-48d6-b67e-3c890a063ac9-9645ac1b-7578-4461-bb76-f8c49004fd6c-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562291805",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/43dca39f-0cd9-42a3-a643-2a66b301e7e0-dc58f4b5-331f-48d9-a0e1-0ec1413f8804-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562339299",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3e09243a-2768-424b-ad2f-032c991d15a8-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562271984",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/649a09e9-c6b0-4b10-8266-015564496326-715bd328-7797-40c9-a074-aea9c75714fa-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562081810",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/476bca69-059d-4a88-98d2-ac8bcf9fd8c1-79ffe741-aa92-44d6-92e0-d768d2118959-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562081811",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5065518e-3631-40c1-b58e-4bfda2b4e47f-ae531b5f-abeb-4300-93a1-70ccecc7c367-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6562339298",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1fb905b1-593a-4b2b-81b9-faea17ce96c4-da37d247-fa73-40c9-aba1-ea7a325bba2e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7922131599",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1fb905b1-593a-4b2b-81b9-faea17ce96c4-da37d247-fa73-40c9-aba1-ea7a325bba2e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9008013163",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2faf229e-b8b9-45e1-bcc5-5e0bac36c33f-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9008019280",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2bd3187a-58c3-4cb5-8274-6634b62ba41c-929ed071-75a7-4da0-a50c-ea04ba029da7-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9007996850",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/95605948-4441-45cb-b6e2-83b4676b4253-ade8113c-8c70-441a-9cf5-1541d4ca94cc-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 34,
//                 34
//             ],
//             "asapPickupMinutesRange": [
//                 3
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "23140990",
//         "name": "Insomnia Cookies",
//         "description": "Cookies, Dessert",
//         "averageRating": 4.538815021514893,
//         "numRatings": 1958,
//         "numRatingsDisplayString": "(1,900+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b322d3c5-130b-46d4-aafb-7aceb67eae3b-retina-large.PNG",
//         "url": "/store/23140990",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-1220962893",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b322d3c5-130b-46d4-aafb-7aceb67eae3b-retina-large.PNG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7949206526",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/be0f72e9-4cba-4fe9-9998-f788c18c3429-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7949206527",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ff835547-9816-4290-9c85-1b5b186bb6fe-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7949212107",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a5278637-8a8d-4f74-a1d7-08754e8266f7-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7949206528",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/59ea09d2-2a20-43f7-835b-c7f0160183a9-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7949212108",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a542cbbd-4404-4e9b-bbad-dd36ffdac037-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8884719951",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4f44e049-2a9b-499a-931d-9c30364f0e68-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8855613936",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8b92226e-8d62-4c40-accb-3b6a9ce3daf4-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8855613935",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4dce8389-e285-48f0-99bc-431b03f7512a-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8884701850",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/30080846-cf02-4420-b421-438d5638670a-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9145468337",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fd27f5ed-9bc6-4db9-b7c5-b37981089d99-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8663782907",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ae79b711-43de-4efc-ab98-6ca691994087-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8855613934",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6a7a0e8a-c145-4185-92b0-e5e822af50e5-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9145468335",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e6f7eff0-fa8b-455e-9a52-066a9e493de9-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9145468339",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2113f631-be5c-4b87-aa27-2cf148cfa963-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9145460755",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/943e9083-ce78-43b4-992a-81231083eeab-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9145468338",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/719dbb7f-fe85-461b-bd1f-dc54336d9106-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9145468336",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dc0036b7-6333-43f1-bcc9-fedb0f684443-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 57,
//                 57
//             ],
//             "asapPickupMinutesRange": [
//                 29
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "299446",
//         "name": "Perry's Steakhouse & Grille",
//         "description": "Steakhouses, Steak",
//         "averageRating": 4.64293909072876,
//         "numRatings": 871,
//         "numRatingsDisplayString": "(870+)",
//         "priceRange": 4,
//         "priceRangeDisplayString": "$$$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/b23623a6-f498-45ae-8a3a-c9a8fe205474.jpg",
//         "url": "/store/299446",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-1392214068",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/b23623a6-f498-45ae-8a3a-c9a8fe205474.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139417",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/050db6e8-c73a-44cd-8c2d-ba169b706da4-5f740f60-b5d6-4c03-b8c5-c2debb2cc9e6-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139377",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cb15b4cb-517a-462a-b8b6-ebcaa61a3533-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139446",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/897e2e79-c8de-4117-ae90-f5b761a25c10-138c6ca2-066d-48a5-8f10-7813f6f5f7ba-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139393",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/83285100-dfc3-47ec-81e6-1aa2dd74158a-92766dc4-89b2-4f06-9771-8e147c6f5af0-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139463",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/53b6d9ce-6411-4efa-801d-05789d6f6382-c61458da-6680-4abd-b558-c0ffca45dcfa-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139448",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5dca9a92-e260-40e9-9b6a-0d8e53b813bc-fd5fa27b-4151-4bf3-a0e1-ef8294394a53-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139402",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ea068309-6840-43a5-b315-39a4865839ee-6d3ccea1-253d-4b03-b02f-8a158c50e16c-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139451",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/15af9109-82bb-4d50-912e-37c13b58d807-8f9fb220-2053-4d30-ae72-89949a0b95d9-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139418",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4f10de4c-002e-4667-ae94-1be24cb756de-a7fc671e-59cb-48d0-8f1a-3087d4d0e5f7-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139394",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fd797417-2ccf-4825-93fe-a360a019d379-7c6ee5bd-c81b-4592-98fa-607e65051e92-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6485885093",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/abdefa18-0ff6-46c7-a934-d47a42a4bc6d-b648cfdd-4a73-44a5-907d-ef219af5c264-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139385",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/89d46a3f-c0e9-4678-9729-aa876c75548a-5547df9d-bf61-4f3e-9f22-d0a4479d39ee-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139386",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8c0e63d6-e40f-4728-b012-650d1bf8e287-ee345ca2-0688-4343-a1a4-11a8a3f34f82-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139383",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ce2b9a72-a9e0-4f45-8c51-e289e76fff2f-8213d0ad-38ae-4d27-9034-7ddfb95aadc6-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139419",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4f10de4c-002e-4667-ae94-1be24cb756de-a7fc671e-59cb-48d0-8f1a-3087d4d0e5f7-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139392",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8bb7cc53-9a75-46cb-a1d9-813d0744c6c4-25fb880f-e1a8-454e-9778-7e79ad26e5ba-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139447",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2df748d0-ba55-4739-99de-ef1fb12e5fdb-6241141a-31e8-44a6-8c4f-3ffc2726e17b-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7747293719",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e25323a6-eab1-4945-8ad7-1c324814bc8e-36115599-3087-46f3-8e5d-54352043dbed-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7747293717",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c5d74f8c-4f4a-47dc-b908-5283e70fa8b2-ab36dc64-f5dd-4435-8789-caa48d48dce1-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5096894676",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ee762fd0-26eb-4120-aa43-cc71efd11d65-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139420",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f01101ad-0bd5-4cc7-9cfe-622b2454465d-07d9a50f-1836-4c58-b830-08ca1ae031ee-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139422",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f8609818-769d-48e8-bdbf-5be5d31ad427-e392d0cb-06d9-452a-9c8b-6a0b3f4d5ec6-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139387",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e77c636f-bb1d-44c1-bab8-c06b560708c4-ff0db4a3-0a33-4605-a9f4-0bba342df21c-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2716139389",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/38982e8b-113f-4f83-8188-41f326094970-6d775090-41c0-4bbc-9a9f-d06888245cda-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 34,
//                 34
//             ],
//             "asapPickupMinutesRange": [
//                 20
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "25089433",
//         "name": "Subway",
//         "description": "Breakfast and Lunch, Sandwiches",
//         "averageRating": 5,
//         "numRatings": 4,
//         "numRatingsDisplayString": "",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2ed431c3-43cf-4fe2-af1e-57ae7b50b870-retina-large.png",
//         "url": "/store/25089433",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-1973116530",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2ed431c3-43cf-4fe2-af1e-57ae7b50b870-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2350537339",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1d19321a-84b5-4f43-bf2e-51a1166af3cd-3dd60f91-d9ea-43cd-a718-2886535561de-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2350537346",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0893bb03-fe38-4517-af76-6d4ce2acd156-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2350537342",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/174dc489-2e96-45a1-a428-337d418e6e71-a0df564e-d0f4-4516-9eb1-470211ea5d69-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2350537353",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ac702d53-f935-4f25-9f5f-617376762270-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2350537349",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6d7579a5-c5af-49e7-83fb-efcb67115c02-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2350537341",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/102b95db-2738-44be-a895-b828f8643ec2-be34e9dc-d1ce-443b-b47a-338dcd2cf747-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2350537351",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/247a3d32-6af7-4ef5-b495-e7d43da83ae8-3d2148c8-037b-40be-9d7f-f01e92c64e3c-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8072384455",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cc9b0404-9c98-413b-85db-5dfad3bd1563-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "3836929137",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/770748e4-8f4d-4b89-9d2c-212679563c83-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8885626276",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/702abb7d-eb0d-4026-ba9e-2795dcb9c48b-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2350591970",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6e62872e-af5b-4f10-93ac-dd3568ac95de-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2350568944",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1043d80b-bae6-40af-98ad-7a62a7444266-09850cb9-47a6-455b-ab57-7fa9669a740d-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2350537340",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3858ef22-1617-4725-8a5f-eeaadf98a0de-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5951553126",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5c126bf9-7000-4a14-81e8-c6249417cc30-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 18,
//                 18
//             ],
//             "asapPickupMinutesRange": [
//                 9
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "24653520",
//         "name": "Davenports Pizza Palace",
//         "description": "Salads, Pizza",
//         "averageRating": 4.730769157409668,
//         "numRatings": 260,
//         "numRatingsDisplayString": "(260)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/cd1ff51f-4d82-4c32-b13d-8ecc4dd8a30f.jpeg",
//         "url": "/store/24653520",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-593852686",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/cd1ff51f-4d82-4c32-b13d-8ecc4dd8a30f.jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004291369",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9e6fbf64-b397-4b0b-bb14-4ec9ad718a12-9b074226-1b9b-4822-9ddc-c39b58db2010-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004291368",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a707a67d-722f-4dd9-b8be-492e44b6a74f-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004304936",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/41853a57-91d4-4150-882f-4344830ddda3-969efb26-793c-4029-bcdb-cfc48dd3ef47-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004291367",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9e6fbf64-b397-4b0b-bb14-4ec9ad718a12-9b074226-1b9b-4822-9ddc-c39b58db2010-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004287143",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/471a2453-df1e-4103-b9a7-2fa1a7e247c8-7dfc5b14-07d7-4688-a7eb-17911c5ded5a-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004287142",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5f2f966b-d7e0-40dd-a96d-7cf063f887eb-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004287137",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dc74fe11-3285-4647-837a-24fb97227d8e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004287136",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dc74fe11-3285-4647-837a-24fb97227d8e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004287139",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4ccf2cb9-0431-4c0b-a2c5-e6cffc35e005-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004287140",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/24e86a8a-3763-4562-b127-3133e24a483a-790bcde4-5fe6-4d98-9910-d33d7d5b8b0b-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004287141",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5f2f966b-d7e0-40dd-a96d-7cf063f887eb-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004287134",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4b2d244c-c907-4e2c-9fb6-c9b9263c8985-6e9e9c67-c2dc-43de-bde7-d40dc94fbab7-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004287135",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dc74fe11-3285-4647-837a-24fb97227d8e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004287133",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/795613bd-da4e-4be0-bfb5-c377437b838e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004287138",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4ccf2cb9-0431-4c0b-a2c5-e6cffc35e005-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004287132",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/795613bd-da4e-4be0-bfb5-c377437b838e-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004285595",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/070db488-60f9-4727-9034-c855972919a3-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7004285596",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/070db488-60f9-4727-9034-c855972919a3-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 43,
//                 43
//             ],
//             "asapPickupMinutesRange": [
//                 35
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "970693",
//         "name": "Farmers Basket",
//         "description": "Comfort Food, American",
//         "averageRating": 4.6856489181518555,
//         "numRatings": 439,
//         "numRatingsDisplayString": "(439)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/b21cffb5-a157-435a-b3c0-4b2b2f6ec413.jpg",
//         "url": "/store/970693",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1970408344",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/b21cffb5-a157-435a-b3c0-4b2b2f6ec413.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "151996775",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/1e740daf-d269-469a-bca0-bb970b2cc939-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "151999238",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/33bf5f4b-9977-405e-974e-bbdcd5299477-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152002400",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/215fd56c-1d7c-43e4-acd2-7ff288efa87f-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152002437",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ddb12aa3-f187-459b-b9a4-6e5eeb1340b4-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152001131",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/76dc90c6-ed8c-436d-af4e-020d2c8ecebb-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007627",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5bdae646-2edc-4e1e-8d08-baea277e8982-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007625",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a52a368a-04de-431f-9f39-3e53e00bbec6-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007623",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/94054b24-8d14-4cf3-b1b7-8defb0a3151c-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "151995826",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4a22ad2b-84d9-46c8-a2b0-eeeaace4b4d4-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007735",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cfd73160-62f8-4d17-951f-302026cb8532-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007736",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d869fc3b-1aee-439b-8d7f-ef2d3b594d2f-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007631",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/956a1c4b-63ef-4358-afb9-f320e4ba8db1-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152005997",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/433971ce-c29d-4968-ad2a-3987af122348-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007186",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c9740dde-2852-41e6-8b6e-8f1ba542cc8f-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007624",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a1747433-e50d-41b1-963d-c9571d73b1b5-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007630",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/12d7c86e-9d3d-49a6-8bad-5af427d4c677-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007199",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2f130d31-8b85-487a-94b5-1d1542982bd3-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152006000",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d7acb568-5e31-45cf-894a-75b8c0b0b18d-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152006006",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4a75fe3e-d147-4a28-b8b5-99f4f15f39e3-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007191",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0bc70899-6bff-4feb-ad6b-8edd3a1e03eb-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152006002",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e72ecc5a-3db6-47bb-a4e9-511c9e1142e3-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007192",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/64451134-dc53-4535-a79f-42cd21d44f76-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152006003",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/534efb72-7252-4ae4-8648-af4c90c200b6-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152006015",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/1f6677aa-9e1f-4696-b828-9ea156033d1f-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "152007187",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/15c05cf1-0f7d-4bee-912b-eff186cc5b83-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 36,
//                 36
//             ],
//             "asapPickupMinutesRange": [
//                 10
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "386510",
//         "name": "Church's Texas Chicken",
//         "description": "Fast Food, Chicken Tenders",
//         "averageRating": 4.074224948883057,
//         "numRatings": 1967,
//         "numRatingsDisplayString": "(1,900+)",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/be20a649-d73e-458c-a322-ebf405878162-retina-large-jpeg",
//         "url": "/store/386510",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "1562842399",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/be20a649-d73e-458c-a322-ebf405878162-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1928053663",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/09394a16-0149-40ce-a891-176069bee7b4-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "-1346538038",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/7a331313-f195-48db-ad97-3aaa2bced23b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7692023848",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e00f4118-6979-4d98-a4f6-c9a0afe14c88-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7692023851",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/974558b9-b403-4bda-96a2-b281d4fc726c-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7692023850",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b5aa747d-4fc2-4aad-84e4-d96984d503ae-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7692023849",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/44d06703-5950-4846-987f-e1bad7a13158-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7692023845",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d946a8f9-9179-4da0-a950-8339a841f0a5-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7685746849",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/86117a57-d7d4-4c49-9fe1-45e19f7ab92e-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8401785948",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/70f5bb83-7da1-4505-a547-709fbc9a1426-759e8600-d502-4a6a-b531-6f2fd8348290-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7692024416",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/445288e7-f152-46e9-bd12-1491e1ff7d97-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9155265825",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/918f68d1-0706-424e-b701-ed09e1f517a8-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9155265826",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/27b1a212-b443-486f-8e5a-93e7907908d0-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7692023847",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7422e093-6e39-4108-b021-b395a2868baa-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7692023846",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/24cb4f53-e01b-438b-8357-3168789e71e9-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9155265828",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/61d7ab96-bfed-4262-9d02-8de0df3cd2a2-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9155283981",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e8a568a4-9b07-44f7-a794-455b43c7f66b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9155283982",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/15f60f40-5f76-4081-a3a8-5e3c56bcd793-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9155265827",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5fcab73a-3ac1-48bd-8500-ce58dbc23a36-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9155283985",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a4adea4d-3eff-4cb3-ac88-ec0d3e003933-f22e5c5c-4b31-4316-9449-06b4c66f8fe9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "9155283980",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/13fca044-b81a-4c2b-bc52-039fdf143fc2-c6b695db-96a9-46db-b024-79ac9a8dbaca-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 40,
//                 40
//             ],
//             "asapPickupMinutesRange": [
//                 6
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "24588973",
//         "name": "J Wings",
//         "description": "Chicken Wings, Sandwiches",
//         "averageRating": 4.432692050933838,
//         "numRatings": 104,
//         "numRatingsDisplayString": "(104)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/c99c9e30-cf49-4f35-a547-f964ffec7114.JPG",
//         "url": "/store/24588973",
//         "isConsumerSubscriptionEligible": false,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-143936814",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/c99c9e30-cf49-4f35-a547-f964ffec7114.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157114",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c7fa265d-47f3-47e7-9978-ac6c4f971849-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157116",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c7fa265d-47f3-47e7-9978-ac6c4f971849-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157112",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c7fa265d-47f3-47e7-9978-ac6c4f971849-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157120",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/88913958-5d8a-47f2-8b7a-509d7e3525a5-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157113",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ad147ab7-cae7-4c85-ad59-213510340f2b-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157139",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/76df4020-7f8f-4a3d-bdfe-ccddac5bd9ca-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157110",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c7fa265d-47f3-47e7-9978-ac6c4f971849-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157115",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ad147ab7-cae7-4c85-ad59-213510340f2b-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157104",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6e6d0d47-f878-4e74-b2b2-75017ae9f648-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157109",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ad147ab7-cae7-4c85-ad59-213510340f2b-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157108",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c7fa265d-47f3-47e7-9978-ac6c4f971849-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157106",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c7fa265d-47f3-47e7-9978-ac6c4f971849-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157126",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/99ee09c0-6a1f-4ab0-9506-20b4ac005ea7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5483157140",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/80b8177b-be49-426d-bdae-55f31adafb1f-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 37,
//                 37
//             ],
//             "asapPickupMinutesRange": [
//                 14
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "299497",
//         "name": "Jim 'N Nicks",
//         "description": "Barbecue, Ribs",
//         "averageRating": 4.5326008796691895,
//         "numRatings": 5736,
//         "numRatingsDisplayString": "(5,700+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/48f3d211-280d-4436-b0f2-048143fdb035.jpg",
//         "url": "/store/299497",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "35184548",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/48f3d211-280d-4436-b0f2-048143fdb035.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571134",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2cc28ec1-6db3-4d16-9914-27141de7757e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571131",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8b07b1a0-728e-4d73-b718-0f80996fbe78-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571158",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/30562ed0-d085-4386-b4e6-faa479b38502-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571143",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4e05e0e0-84a8-4aa2-bdf8-4ab7251fb7f9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571141",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/33975f8f-9bf4-47e0-b96f-9b77baa99dc2-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571097",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0b50abc8-efab-439f-824a-1819bcb0d08b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571120",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/37d338e5-7911-4e41-ab5b-0cdae480e722-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571093",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2d64698b-7a87-4009-b64b-cf3009c2367c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571114",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a3568519-3233-40c1-9c41-2141537fd2b5-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571152",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/861fb979-aff9-481f-b217-c165164bd805-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571109",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/69b5671f-c2f4-4083-a83c-0e1be7880dc0-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571144",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c92720c9-32fe-45af-8c04-f85093658c2b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571153",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/699b3a53-804b-4136-b83e-d79a18d99262-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571089",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c64c44d4-1c59-4d7d-8117-0976b2b76aa9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571149",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9ad088c2-721f-436d-8a50-81a604ab8cdb-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571116",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fdeabab5-4c1f-49ee-959d-6a87409baa24-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "332454194",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6291800c-d705-464d-88b1-61d90b903179-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571154",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/19d19b4e-8caf-45bd-99db-a91bff924830-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571113",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c6a9f4b3-42cb-4852-91c8-d55e9ce9b4c7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571119",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/777eea66-f8da-4511-8b2e-83cdf078d9d7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571161",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/85331371-1602-451c-beba-eb3795ed8485-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571159",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e134e7ac-4cab-437b-b987-068fe49ed328-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "842535642",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9a6370a9-ecd1-4d93-b943-963c7be68834-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "6554872120",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/48b2b935-f196-41ff-85b2-c14fac7ef83e-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "315571127",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e3631348-950a-456d-8144-4709e71192e0-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 41,
//                 41
//             ],
//             "asapPickupMinutesRange": [
//                 19
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "287079",
//         "name": "Surin of Thailand",
//         "description": "Sushi, Pickup",
//         "averageRating": 4.827786922454834,
//         "numRatings": 5830,
//         "numRatingsDisplayString": "(5,800+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/14582.jpg",
//         "url": "/store/287079",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "857921330",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/14582.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496587",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/db14c178-f971-45d3-a117-9e59411719a3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496588",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f582b706-ea4c-47bc-a812-d01ebff45684-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496604",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2055f752-8ffc-4771-a50d-4e78fd23141b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496585",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2f84523d-303a-4a45-9903-8ac0d201a8dc-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496534",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/eadf5102-f46f-4cc0-992b-27f655d236e6-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496564",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4da30c2f-9915-4f10-8a5a-0645139e2515-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496561",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4b13f9e2-de4d-4851-b242-a6a3a5b1aad7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496554",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/00ddc574-0c81-4d2c-80ea-1781886542db-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496566",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d51ef534-ee75-4481-a678-ef47f385762c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496570",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/16b03030-4fac-4fbc-a257-d89c0a4493ee-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496586",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f761675c-9515-4439-8b4c-47539838fc36-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496541",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/334f3fbf-19f1-495f-b718-ccb5a37c5ba3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496603",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/deab4251-c0b4-4308-93b6-ece74ba33fe5-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496567",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/457c5ccd-f82f-4028-a701-4723149031ea-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496529",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/549af258-59ad-418b-b2a9-2de67ed203dd-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496532",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/afa7d1b4-bb54-4ced-8a09-09b874488c0c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496607",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/71ae6c3c-fceb-43e8-9bce-4c0df68252d9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496531",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b3c3d7ff-fe01-481d-aaca-fd8eb4a06568-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496524",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/47e019f0-cec5-4286-b59b-94cc93bf2180-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496555",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bf4d6237-5129-4d1f-af03-8fe706854f6c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496553",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3dec60e1-bcfa-4e5a-a606-442b075e4b3b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496559",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/27ec1593-fefd-46d8-a5ac-87378611e5b4-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496544",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/15ef6e5e-674f-4e22-b408-59aee4f0585f-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496523",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f761675c-9515-4439-8b4c-47539838fc36-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "397496568",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8783dbff-0e86-46ec-b65f-68c5f97e7206-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 59,
//                 59
//             ],
//             "asapPickupMinutesRange": [
//                 30
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "299438",
//         "name": "Firehouse Subs",
//         "description": "Deli, Sandwiches",
//         "averageRating": 4.655440807342529,
//         "numRatings": 8611,
//         "numRatingsDisplayString": "(8,600+)",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/124f6b1a-3a13-4831-9735-d7f9535400e8-retina-large.PNG",
//         "url": "/store/299438",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-72338155",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/124f6b1a-3a13-4831-9735-d7f9535400e8-retina-large.PNG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1229774109",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/3802d7fb-b62e-419a-bda9-40561b71d439-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968405226",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fb847fab-c32c-4a79-a46f-17b30a7ab1d6-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968400177",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4ea32fea-9451-48fa-bcb3-0b3aa9feccf9-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968376663",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/90bc3180-6c9e-4a5c-9a7e-11224d440f46-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968374450",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/99d49c5a-3e91-428e-8404-7d68404b5ac3-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968387976",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/725e5185-d18f-49d6-81aa-314cfcd1013b-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968391636",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f448ab2b-92bd-4bdf-a5d8-73b286b0132d-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968391254",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b59dc068-ef16-4409-8aa2-80946c783798-87b8eebf-e790-4590-b107-146794fd8402-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968403166",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4b06a950-a6a0-42be-a819-59e004fa130c-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968373461",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9a5a576f-76b5-418e-9651-21a8b2ee9898-37321174-e8a3-4d63-b3ca-8d263e764cb1-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968406411",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/03ce82de-6d03-4422-80e2-c016d6e764c9-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968399412",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/48857d0b-7ba5-4692-90c7-e7e4a423cb40-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968405551",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fb847fab-c32c-4a79-a46f-17b30a7ab1d6-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968409902",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4ea32fea-9451-48fa-bcb3-0b3aa9feccf9-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "158398249",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/af2c608f-4c18-4933-a12c-753ccc3c8ca5-91100a0d-09df-4970-aec7-780f553a1a5d-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968396620",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/48beb44c-ced5-45bf-b982-137fa786e22a-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968407495",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e0a44e37-fe16-49ef-91c0-176d7b2952c4-efb086c3-4735-454b-9cc3-6f6cfa8af84c-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "4968396621",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ad8ea3c6-56da-4a20-aba4-278f51d5dc78-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 32,
//                 32
//             ],
//             "asapPickupMinutesRange": [
//                 12
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "299458",
//         "name": "Jason's Deli",
//         "description": "Deli, Sandwiches",
//         "averageRating": 4.7387590408325195,
//         "numRatings": 5382,
//         "numRatingsDisplayString": "(5,300+)",
//         "priceRange": 1,
//         "priceRangeDisplayString": "$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/22c635a8-e1eb-42e7-99d0-60f28c0a7a72-retina-large.jpg",
//         "url": "/store/299458",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "495043251",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/22c635a8-e1eb-42e7-99d0-60f28c0a7a72-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "967753446",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/5e5851a9-4f10-4379-8905-e5c5d8c06d43-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "1826661743",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/c427d48c-bd37-400b-beb5-257abd1d8717-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "-648137146",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/dd329acc-a755-4b56-8a0e-55fcf9cf43c0-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957557",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/1afe89f7-5c98-4fbe-973c-90d50182c708-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957687",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a53ada92-43ef-4888-9327-deac895030ec-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957686",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c388305d-ac74-4744-bb48-e7a50fcfae92-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957527",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d55b0710-dcbc-4337-9d99-13700c824f53-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957691",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ee9f0ae7-cfcb-4916-8366-335539ec1cde-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957623",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9d6324fb-7ae4-4e75-9ec5-d339a78e7603-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957594",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8187eada-9773-4725-ae30-9de3f159296c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957514",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f79f8398-9bdd-4777-a62b-0aef00adae82-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957479",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f780eaec-7330-4d8a-919e-381357285751-retina-large.PNG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957688",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a53ada92-43ef-4888-9327-deac895030ec-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957574",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/823fd5f8-1a03-4581-aa4e-76cbfb473629-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957586",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8dad538a-984c-4c68-bc93-0dca00e146a1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957530",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e7b37a0b-2045-4c54-98a1-ada6e84219c3-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957535",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3400653b-e748-4ca5-950a-bfc85263239b-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "5107198418",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/11a39e1d-f0b3-491a-b2dc-3101aaca1413-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957528",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/5344fd80-2521-474f-916c-b02af440a9f9-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "2526764306",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/96f415b7-9e77-4bb3-a12c-aeced8842c48-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957494",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/765ef133-379c-4f6c-8a9d-8cc283246846-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957489",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0d74f4c4-4b21-4ee3-8264-bace215446c7-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "415957576",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/676efeab-0ad6-483c-8b0f-bea3af63967f-retina-large-jpeg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 36,
//                 36
//             ],
//             "asapPickupMinutesRange": [
//                 13
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "24844318",
//         "name": "Emmy Squared",
//         "description": "Pizza, Sandwiches",
//         "averageRating": 4.82608699798584,
//         "numRatings": 23,
//         "numRatingsDisplayString": "(23)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/store/header/98770.jpg",
//         "url": "/store/24844318",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-298517840",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/store/header/98770.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610165609",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4e9de3dd-baf4-42dd-b1da-e945ab2d0fdf-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610165607",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f1b4b825-e08b-4c04-9434-5f71178cabaa-8a0c2123-a20d-4379-bc2f-d394877b2804-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610165619",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/813288ad-f593-48b3-9548-afb4654bd9e8-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610157178",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2f870009-a8fb-4af2-a033-51f6da5effa3-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610145723",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/996b1e5c-5e7c-4e29-899b-a271c0232eac-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610145722",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/efb8d98a-ea0a-4c59-bc39-d53db26f2179-4ade0139-7125-4106-9857-8b942c5a2c0c-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610165614",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3a90f0b4-1899-44ab-bcd9-3d9a926d1dd4-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610165617",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5113df33-9f1f-4a12-af04-4cbfacfe528f-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610157182",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/59e2d324-033c-4b9a-9c23-ef6214cdb09f-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610157179",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1bbcbf5b-e54b-494c-b9a9-7d12edbce9c4-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610157181",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ec3e4d82-09f4-4c5d-b5bf-104e8bbb424b-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610157180",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c5a78c90-5003-4af1-b84f-7a18ba7a1544-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610145725",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f4edc24b-8735-407b-b530-95b326bc995b-ee3d49dd-acb8-4ad9-b89e-35be19870acb-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610165611",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b9526407-8da8-4f75-bd70-58283522447e-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610157184",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d8bad1e0-00dc-435a-ba1c-35d7411fbae2-8ded2abe-9313-4648-bdbd-95b8e0716ca1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610165615",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6eb4d6f4-5300-4dd4-951a-1d6f389c7a05-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610165618",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2d6ff266-bf03-4623-bac9-53de14ff52df-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610156193",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e5f2bf47-406c-467d-9fbb-67daf730456c-e71cec69-6b14-4a23-9394-128cd2c1be40-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610165608",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d4c932c2-f650-4dbf-9209-7e84e9018ae1-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610165610",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fef981f4-654e-4f2f-92bd-c75c61ab2e47-f69a1bcb-dce7-47f7-aa2e-a9c6ee50e80b-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610102337",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0eaba1b0-2aaa-4108-a7ab-08530b2217a2-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610162899",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fda07ea1-d3c4-4c08-ae1a-8a4d8d446754-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610157183",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c419fade-520e-4a87-8792-79ab7a207f85-acd511a9-0392-4ed0-9ab7-f9ea0d174c2a-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "8610165622",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/38614491-0d2d-48ef-8040-e3102ed9f33e-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 36,
//                 36
//             ],
//             "asapPickupMinutesRange": [
//                 24
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "299396",
//         "name": "Tropical Smoothie Cafe",
//         "description": "Smoothies, Sandwiches",
//         "averageRating": 4.8108110427856445,
//         "numRatings": 2812,
//         "numRatingsDisplayString": "(2,800+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/deb52ff6-8180-4f6c-8b98-282a32e5876c-retina-large.JPG",
//         "url": "/store/299396",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-1306002061",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/deb52ff6-8180-4f6c-8b98-282a32e5876c-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026520441",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ba907c33-0fa5-4598-b62d-ebd737d40d5f-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026532294",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ff2d83b0-b496-4246-9370-e076adcd09d8-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026527319",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4cf03ae4-3c07-436a-8efb-3fa3376d3f51-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026527320",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ead8807a-0c07-4625-8948-1a2136c2b0af-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026520440",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/46f56200-c87e-4281-ab45-c1e064e3b6f4-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026527321",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6c52ca8b-9af9-4f1f-b177-298ba086c56b-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026532293",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a48a96af-fd21-468e-a7cf-9bf52c1aad5b-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026525744",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/aba04550-3092-439a-a97f-1d834d3b9d80-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026531877",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/31e1b460-19f7-4535-8548-0330e9cbc1fc-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "7026532298",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d4ff7a05-5cc4-408b-ab00-005123c66952-retina-large.png",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 44,
//                 44
//             ],
//             "asapPickupMinutesRange": [
//                 30
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     },
//     {
//         "id": "476940",
//         "name": "Best Wings & Deli",
//         "description": "Deli, Chicken Wings",
//         "averageRating": 4.521791934967041,
//         "numRatings": 2455,
//         "numRatingsDisplayString": "(2,400+)",
//         "priceRange": 2,
//         "priceRangeDisplayString": "$$",
//         "displayDeliveryFee": "$0 delivery fee",
//         "headerImgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/fc4743e9-df24-4a64-b76e-be2accb86c99.jpg",
//         "url": "/store/476940",
//         "isConsumerSubscriptionEligible": true,
//         "isSurging": false,
//         "menus": [
//             {
//                 "popularItems": [
//                     {
//                         "id": "-1614609711",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/fc4743e9-df24-4a64-b76e-be2accb86c99.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "61272395",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a4739234-b2de-444e-9ea5-c25be3ad19c1-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "61276847",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c5e64c35-a2ca-41d6-b9d0-bad3b5a74c78-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "61264124",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c5e64c35-a2ca-41d6-b9d0-bad3b5a74c78-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "61275912",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/550c7841-37f7-4d7c-b72b-f51cc3bce033-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "61260660",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5c48235e-9d1d-4ce3-b35a-cdc66f5b7df1-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "61264343",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9945fe86-a88c-48d9-844f-03d2f0d6bbbf-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "61276875",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9945fe86-a88c-48d9-844f-03d2f0d6bbbf-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "62293984",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/111dc33d-f989-4aa8-8429-baad8587afab-retina-large.JPG",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "3724222814",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/550c7841-37f7-4d7c-b72b-f51cc3bce033-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     },
//                     {
//                         "id": "61265177",
//                         "imgUrl": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/550c7841-37f7-4d7c-b72b-f51cc3bce033-retina-large.jpg",
//                         "__typename": "StoreMenuPopularItem"
//                     }
//                 ],
//                 "__typename": "StoreMenu"
//             }
//         ],
//         "status": {
//             "asapAvailable": true,
//             "pickupAvailable": true,
//             "scheduledAvailable": false,
//             "asapMinutesRange": [
//                 41,
//                 41
//             ],
//             "asapPickupMinutesRange": [
//                 14
//             ],
//             "displayNextHours": "",
//             "deliveryUnavailableReason": "",
//             "__typename": "StoreStatus"
//         },
//         "badge": null,
//         "storeBadges": [],
//         "__typename": "Store"
//     }
// ]


//swiggy api
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING


// values={
//     "statusCode": 0,
//     "data": {
//       "statusMessage": "done successfully",
//       "pageOffset": {
//         "nextOffset": "COVCELQ4KIDw3t7z+LGsQDCnEzgE",
//         "widgetOffset": {
//           "NewListingView_Topical_Fullbleed": "",
//           "NewListingView_category_bar_chicletranking_TwoRows": "",
//           "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
//           "Restaurant_Group_WebView_SEO_PB_Theme": "",
//           "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "10",
//           "inlineFacetFilter": "",
//           "restaurantCountWidget": ""
//         }
//       },
//       "cards": [
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
//               "header": {
//                 "headerStyling": {
//                   "padding": {
//                     "left": 16,
//                     "top": 14,
//                     "bottom": 2
//                   }
//                 }
//               },
//               "layout": {
//                 "rows": 1,
//                 "columns": 6,
//                 "horizontalScrollEnabled": true,
//                 "shouldSnap": true,
//                 "itemSpacing": 10,
//                 "widgetPadding": {
                  
//                 },
//                 "containerStyle": {
//                   "containerPadding": {
//                     "left": 16,
//                     "top": 12,
//                     "right": 16,
//                     "bottom": 12
//                   }
//                 },
//                 "scrollBar": {
//                   "scrollThumbColor": "#E46D47",
//                   "scrollTrackColor": "#E4E4E4",
//                   "width": 54,
//                   "height": 4,
//                   "scrollStyling": {
//                     "padding": {
//                       "top": 6,
//                       "bottom": 12
//                     }
//                   }
//                 },
//                 "autoScrollConfig": {
//                   "isScrollEnabled": true,
//                   "autoScrollDuration": 4,
//                   "autoScrollResetDuration": 4
//                 },
//                 "dotScrollBar": {
//                   "activeColor": "#36393E",
//                   "inactiveColor": "#66686E",
//                   "activeSize": 16,
//                   "inactiveMediumSize": 7,
//                   "inactiveSmallSize": 4,
//                   "dotSpacing": 8,
//                   "windowSize": 5,
//                   "showCount": true,
//                   "textColor": "#FFFFFF",
//                   "scrollStyling": {
//                     "padding": {
//                       "top": 6,
//                       "bottom": 12
//                     }
//                   }
//                 }
//               },
//               "imageGridCards": {
//                 "info": [
//                   {
//                     "id": "1156787",
//                     "imageId": "rng/md/carousel/production/44770208829cccbe2039cc3f72914c86",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/89978?collection_id=89978&header_title=Shravan+Specials&tags=layout_fathersday&type=rcv2",
//                       "text": "Holi",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "UPTO 125% OFF",
//                       "altTextCta": "order now"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=89978&tags=layout_fathersday&header_title=Shravan%20Specials",
//                     "frequencyCapping": {
//                       "cappingEnabled": true,
//                       "cappingMode": "VIEW"
//                     }
//                   },
//                   {
//                     "id": "1116244",
//                     "imageId": "rng/md/carousel/production/5ebff1366e7089dd4a2ad7c9433b8067",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/90093?collection_id=90093&tags=layout_ux4%2CDISCOUNTING_COUPON_MEGASAVER&type=rcv2",
//                       "text": "flat 175",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "flat 175",
//                       "altTextCta": "order now"
//                     },
//                     "entityId": "90093",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "1169689",
//                     "imageId": "rng/md/carousel/production/2e54588fcfbfae32c57d1d4d3515f6e5",
//                     "action": {
//                       "link": "https://www.swiggy.com/menu/91788",
//                       "text": "Burger King",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "Burger King",
//                       "altTextCta": "Order Now"
//                     },
//                     "entityId": "91788",
//                     "frequencyCapping": {
                      
//                     },
//                     "isManualAds": true
//                   },
//                   {
//                     "id": "1170039",
//                     "imageId": "rng/md/carousel/production/31ca510db0583db14a71fac8be0dd620",
//                     "action": {
//                       "link": "http://swiggy.com/menu?restaurant_id=601767&uuid=447ed89d-7e41-4c12-a765-61702089f81e",
//                       "text": "WarmOven Cake & Desserts",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "Brands with Offers",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "601767",
//                     "frequencyCapping": {
                      
//                     },
//                     "isManualAds": true
//                   },
//                   {
//                     "id": "1063869",
//                     "imageId": "rng/md/carousel/production/7004bb67da2bc79145552e05a4605d6e",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/89142?collection_id=89142&tags=layout_ux4&type=rcv2",
//                       "text": "Restaurants in Focus",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "Restaurants in Focus",
//                       "altTextCta": "Order Now"
//                     },
//                     "entityId": "89142",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "731006",
//                     "imageId": "rng/md/carousel/production/7dec1c62b4e539323ea54bae5e152c62",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/78542?collection_id=78542&tags=layout_ux4&type=rcv2",
//                       "text": "Holi",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "TOP BRANDS TOP OFFERS",
//                       "altTextCta": "ORDER NOW"
//                     },
//                     "entityId": "78542",
//                     "frequencyCapping": {
                      
//                     }
//                   }
//                 ],
//                 "style": {
//                   "width": {
//                     "type": "TYPE_RELATIVE",
//                     "value": 0.95238,
//                     "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
//                   },
//                   "height": {
//                     "type": "TYPE_RELATIVE",
//                     "value": 0.59685,
//                     "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
//                   }
//                 }
//               },
//               "id": "topical_banner",
//               "gridElements": {
//                 "infoWithStyle": {
//                   "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
//                   "info": [
//                     {
//                       "id": "1156787",
//                       "imageId": "rng/md/carousel/production/44770208829cccbe2039cc3f72914c86",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/89978?collection_id=89978&header_title=Shravan+Specials&tags=layout_fathersday&type=rcv2",
//                         "text": "Holi",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "UPTO 125% OFF",
//                         "altTextCta": "order now"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=89978&tags=layout_fathersday&header_title=Shravan%20Specials",
//                       "frequencyCapping": {
//                         "cappingEnabled": true,
//                         "cappingMode": "VIEW"
//                       }
//                     },
//                     {
//                       "id": "1116244",
//                       "imageId": "rng/md/carousel/production/5ebff1366e7089dd4a2ad7c9433b8067",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/90093?collection_id=90093&tags=layout_ux4%2CDISCOUNTING_COUPON_MEGASAVER&type=rcv2",
//                         "text": "flat 175",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "flat 175",
//                         "altTextCta": "order now"
//                       },
//                       "entityId": "90093",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "1169689",
//                       "imageId": "rng/md/carousel/production/2e54588fcfbfae32c57d1d4d3515f6e5",
//                       "action": {
//                         "link": "https://www.swiggy.com/menu/91788",
//                         "text": "Burger King",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "Burger King",
//                         "altTextCta": "Order Now"
//                       },
//                       "entityId": "91788",
//                       "frequencyCapping": {
                        
//                       },
//                       "isManualAds": true
//                     },
//                     {
//                       "id": "1170039",
//                       "imageId": "rng/md/carousel/production/31ca510db0583db14a71fac8be0dd620",
//                       "action": {
//                         "link": "http://swiggy.com/menu?restaurant_id=601767&uuid=447ed89d-7e41-4c12-a765-61702089f81e",
//                         "text": "WarmOven Cake & Desserts",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "Brands with Offers",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "601767",
//                       "frequencyCapping": {
                        
//                       },
//                       "isManualAds": true
//                     },
//                     {
//                       "id": "1063869",
//                       "imageId": "rng/md/carousel/production/7004bb67da2bc79145552e05a4605d6e",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/89142?collection_id=89142&tags=layout_ux4&type=rcv2",
//                         "text": "Restaurants in Focus",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "Restaurants in Focus",
//                         "altTextCta": "Order Now"
//                       },
//                       "entityId": "89142",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "731006",
//                       "imageId": "rng/md/carousel/production/7dec1c62b4e539323ea54bae5e152c62",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/78542?collection_id=78542&tags=layout_ux4&type=rcv2",
//                         "text": "Holi",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "TOP BRANDS TOP OFFERS",
//                         "altTextCta": "ORDER NOW"
//                       },
//                       "entityId": "78542",
//                       "frequencyCapping": {
                        
//                       }
//                     }
//                   ],
//                   "style": {
//                     "width": {
//                       "type": "TYPE_RELATIVE",
//                       "value": 0.95238,
//                       "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
//                     },
//                     "height": {
//                       "type": "TYPE_RELATIVE",
//                       "value": 0.59685,
//                       "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         },
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
//               "header": {
//                 "title": "What's on your mind?",
//                 "headerStyling": {
//                   "padding": {
//                     "left": 16,
//                     "top": 16,
//                     "bottom": 8
//                   }
//                 }
//               },
//               "layout": {
//                 "rows": 1,
//                 "columns": 10,
//                 "horizontalScrollEnabled": true,
//                 "itemSpacing": 24,
//                 "lineSpacing": 4,
//                 "widgetPadding": {
                  
//                 },
//                 "containerStyle": {
//                   "containerPadding": {
//                     "left": 8,
//                     "top": 8,
//                     "right": 12,
//                     "bottom": 12
//                   }
//                 },
//                 "scrollBar": {
                  
//                 },
//                 "widgetTheme": {
//                   "defaultMode": {
//                     "backgroundColour": "#FFFFFF",
//                     "theme": "THEME_TYPE_LIGHT"
//                   },
//                   "darkMode": {
//                     "theme": "THEME_TYPE_DARK"
//                   }
//                 }
//               },
//               "imageGridCards": {
//                 "info": [
//                   {
//                     "id": "750580",
//                     "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
//                       "text": "pizzas",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for pizza",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750582",
//                     "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
//                       "text": "North Indian",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for north indian",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "762797",
//                     "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
//                       "text": "Burgers",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for burger",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750588",
//                     "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
//                       "text": "Chinese",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for chinese",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750223",
//                     "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
//                       "text": "Rolls",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for roll",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750572",
//                     "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
//                       "text": "Pure Veg",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for veg",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750592",
//                     "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83649?collection_id=83649&tags=layout_CCS_Biryani&type=rcv2",
//                       "text": "Biryani",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for biryani",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750597",
//                     "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
//                       "text": "Ice Cream",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for icecream",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750217",
//                     "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
//                       "text": "Pav Bhaji",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for pav bhaji",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750207",
//                     "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
//                       "text": "Pasta",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for pasta",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "80480",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750261",
//                     "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Rasmalai.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80391?collection_id=80391&tags=layout_BAU_Contextual%2Crasmalai&type=rcv2",
//                       "text": "Rasmalai",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for rasmalai",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "80391",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750132",
//                     "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
//                       "text": "Dosa",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for dosa",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "749874",
//                     "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
//                       "text": "Cakes",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for cakes",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "776332",
//                     "imageId": "rng/md/carousel/production/868b718fafbcb3ac31c058f4617fc9df",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/69579?collection_id=69579&tags=layout_ux4&type=rcv2",
//                       "text": "Premium",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for premium",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "69579",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750584",
//                     "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
//                       "text": "South Indian",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for south indian",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750203",
//                     "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
//                       "text": "Paratha",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurants curated for paratha",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "80476",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750636",
//                     "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
//                       "text": "Kebabs",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for kebabs",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "80452",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750593",
//                     "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Gulab_Jamun.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80432?collection_id=80432&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
//                       "text": "Gulab Jamun",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for gulab jamun",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "80432",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "749763",
//                     "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80459?collection_id=80459&tags=layout_BAU_Contextual%2Classi&type=rcv2",
//                       "text": "Lassi",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for lassi",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "80459",
//                     "frequencyCapping": {
                      
//                     }
//                   },
//                   {
//                     "id": "750259",
//                     "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rasgulla.png",
//                     "action": {
//                       "link": "https://www.swiggy.com/collections/80389?collection_id=80389&tags=layout_BAU_Contextual%2Crasgulla&type=rcv2",
//                       "text": "Rasgulla",
//                       "type": "WEBLINK"
//                     },
//                     "entityType": "BANNER",
//                     "accessibility": {
//                       "altText": "restaurant curated for rasgulla",
//                       "altTextCta": "open"
//                     },
//                     "entityId": "80389",
//                     "frequencyCapping": {
                      
//                     }
//                   }
//                 ],
//                 "style": {
//                   "width": {
//                     "type": "TYPE_RELATIVE",
//                     "value": 0.2941,
//                     "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
//                   },
//                   "height": {
//                     "type": "TYPE_RELATIVE",
//                     "value": 1.2444,
//                     "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
//                   }
//                 }
//               },
//               "id": "whats_on_your_mind",
//               "gridElements": {
//                 "infoWithStyle": {
//                   "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
//                   "info": [
//                     {
//                       "id": "750580",
//                       "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
//                         "text": "pizzas",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurants curated for pizza",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750582",
//                       "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
//                         "text": "North Indian",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurants curated for north indian",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "762797",
//                       "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
//                         "text": "Burgers",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurants curated for burger",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750588",
//                       "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
//                         "text": "Chinese",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurant curated for chinese",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750223",
//                       "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
//                         "text": "Rolls",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurants curated for roll",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750572",
//                       "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
//                         "text": "Pure Veg",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurants curated for veg",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750592",
//                       "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/83649?collection_id=83649&tags=layout_CCS_Biryani&type=rcv2",
//                         "text": "Biryani",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurants curated for biryani",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750597",
//                       "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
//                         "text": "Ice Cream",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurants curated for icecream",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750217",
//                       "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
//                         "text": "Pav Bhaji",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurant curated for pav bhaji",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750207",
//                       "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
//                         "text": "Pasta",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurant curated for pasta",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "80480",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750261",
//                       "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Rasmalai.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/80391?collection_id=80391&tags=layout_BAU_Contextual%2Crasmalai&type=rcv2",
//                         "text": "Rasmalai",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurant curated for rasmalai",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "80391",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750132",
//                       "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
//                         "text": "Dosa",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurants curated for dosa",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "749874",
//                       "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
//                         "text": "Cakes",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurant curated for cakes",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "776332",
//                       "imageId": "rng/md/carousel/production/868b718fafbcb3ac31c058f4617fc9df",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/69579?collection_id=69579&tags=layout_ux4&type=rcv2",
//                         "text": "Premium",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurants curated for premium",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "69579",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750584",
//                       "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
//                         "text": "South Indian",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurants curated for south indian",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750203",
//                       "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
//                         "text": "Paratha",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurants curated for paratha",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "80476",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750636",
//                       "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
//                         "text": "Kebabs",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurant curated for kebabs",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "80452",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750593",
//                       "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Gulab_Jamun.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/80432?collection_id=80432&tags=layout_BAU_Contextual%2Cgulab_jamun&type=rcv2",
//                         "text": "Gulab Jamun",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurant curated for gulab jamun",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "80432",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "749763",
//                       "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/80459?collection_id=80459&tags=layout_BAU_Contextual%2Classi&type=rcv2",
//                         "text": "Lassi",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurant curated for lassi",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "80459",
//                       "frequencyCapping": {
                        
//                       }
//                     },
//                     {
//                       "id": "750259",
//                       "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rasgulla.png",
//                       "action": {
//                         "link": "https://www.swiggy.com/collections/80389?collection_id=80389&tags=layout_BAU_Contextual%2Crasgulla&type=rcv2",
//                         "text": "Rasgulla",
//                         "type": "WEBLINK"
//                       },
//                       "entityType": "BANNER",
//                       "accessibility": {
//                         "altText": "restaurant curated for rasgulla",
//                         "altTextCta": "open"
//                       },
//                       "entityId": "80389",
//                       "frequencyCapping": {
                        
//                       }
//                     }
//                   ],
//                   "style": {
//                     "width": {
//                       "type": "TYPE_RELATIVE",
//                       "value": 0.2941,
//                       "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
//                     },
//                     "height": {
//                       "type": "TYPE_RELATIVE",
//                       "value": 1.2444,
//                       "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         },
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
//               "header": {
//                 "title": "Top restaurant chains in Jalandhar",
//                 "action": {
                  
//                 },
//                 "headerStyling": {
//                   "padding": {
//                     "left": 16,
//                     "top": 28,
//                     "bottom": 18
//                   }
//                 }
//               },
//               "layout": {
//                 "rows": 1,
//                 "columns": 20,
//                 "horizontalScrollEnabled": true,
//                 "itemSpacing": 32,
//                 "widgetPadding": {
                  
//                 },
//                 "containerStyle": {
//                   "containerPadding": {
//                     "left": 16,
//                     "right": 12,
//                     "bottom": 12
//                   }
//                 },
//                 "scrollBar": {
//                   "scrollThumbColor": "#E46D47",
//                   "scrollTrackColor": "#02060C",
//                   "width": 54,
//                   "height": 4,
//                   "scrollStyling": {
//                     "padding": {
//                       "top": 6,
//                       "bottom": 24
//                     }
//                   }
//                 },
//                 "widgetTheme": {
//                   "defaultMode": {
//                     "backgroundColour": "#1B3028",
//                     "theme": "THEME_TYPE_DARK"
//                   },
//                   "darkMode": {
//                     "backgroundColour": "#1B3028",
//                     "theme": "THEME_TYPE_DARK"
//                   }
//                 }
//               },
//               "id": "top_brands_for_you",
//               "gridElements": {
//                 "infoWithStyle": {
//                   "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
//                   "restaurants": [
//                     {
//                       "info": {
//                         "id": "248278",
//                         "name": "AAR KAY Vaishno Dhaba (Nakodar Road)",
//                         "cloudinaryImageId": "siiyygdsewrchwglfyre",
//                         "locality": "Abadpura",
//                         "areaName": "Avtar Nagar",
//                         "costForTwo": "₹250 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Thalis",
//                           "Punjabi",
//                           "Beverages"
//                         ],
//                         "avgRating": 4.3,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "248278",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "25988",
//                         "avgRatingString": "4.3",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 17,
//                           "lastMileTravel": 1.8,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "17 mins",
//                           "lastMileTravelString": "1.8 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹199",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/aar-kay-vaishno-dhaba-nakodar-road-abadpura-avtar-nagar-jalandhar-248278",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "283662",
//                         "name": "Aggarwal Vaishno Dhaba",
//                         "cloudinaryImageId": "l68iq6yh6tenyntrxwgb",
//                         "locality": "Vasant Vihar Road",
//                         "areaName": "Model Town",
//                         "costForTwo": "₹200 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Chinese",
//                           "Biryani",
//                           "Punjabi"
//                         ],
//                         "avgRating": 4.2,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "283662",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "27734",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "5K+",
//                         "sla": {
//                           "deliveryTime": 23,
//                           "lastMileTravel": 2.5,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "23 mins",
//                           "lastMileTravelString": "2.5 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹199",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/aggarwal-vaishno-dhaba-vasant-vihar-road-model-town-jalandhar-283662",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "283810",
//                         "name": "Yummy Delicious Till Last Bite",
//                         "cloudinaryImageId": "wwgslew60sfsdtfy2ijz",
//                         "locality": "Guru Teg Bahadur Nagar",
//                         "areaName": "Model Town",
//                         "costForTwo": "₹300 for two",
//                         "cuisines": [
//                           "Chinese",
//                           "Continental",
//                           "Italian"
//                         ],
//                         "avgRating": 4.2,
//                         "feeDetails": {
//                           "restaurantId": "283810",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "228634",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 21,
//                           "lastMileTravel": 2.5,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "21 mins",
//                           "lastMileTravelString": "2.5 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹249",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/yummy-delicious-till-last-bite-guru-teg-bahadur-nagar-model-town-jalandhar-283810",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "137429",
//                         "name": "GFC- The Chaap Hub",
//                         "cloudinaryImageId": "gozmdkxc3riqz0ot1lcu",
//                         "locality": "Durga Colony",
//                         "areaName": "Adarsh Nagar",
//                         "costForTwo": "₹200 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Snacks",
//                           "Beverages"
//                         ],
//                         "avgRating": 4,
//                         "feeDetails": {
//                           "restaurantId": "137429",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "87056",
//                         "avgRatingString": "4.0",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 17,
//                           "lastMileTravel": 2.1,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "17 mins",
//                           "lastMileTravelString": "2.1 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:40:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "10% OFF",
//                           "subHeader": "UPTO ₹40",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/gfc-the-chaap-hub-durga-colony-adarsh-nagar-jalandhar-137429",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "115812",
//                         "name": "Bliss Vaishno Dhaba",
//                         "cloudinaryImageId": "hw5cdbjkyhopb3phddde",
//                         "locality": "Civil Line",
//                         "areaName": "Master Tara Singh Nagar",
//                         "costForTwo": "₹250 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Punjabi",
//                           "Chinese"
//                         ],
//                         "avgRating": 4.3,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "115812",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "47904",
//                         "avgRatingString": "4.3",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 16,
//                           "lastMileTravel": 1.5,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "16 mins",
//                           "lastMileTravelString": "1.5 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹249",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/bliss-vaishno-dhaba-civil-line-master-tara-singh-nagar-jalandhar-115812",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "285860",
//                         "name": "Nanak Vegetarian Dhaba",
//                         "cloudinaryImageId": "usllk61gnicqmykbiyrb",
//                         "locality": "Transport Nagar",
//                         "areaName": "Harnam Daspura",
//                         "costForTwo": "₹300 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "South Indian"
//                         ],
//                         "avgRating": 4.1,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "285860",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "143799",
//                         "avgRatingString": "4.1",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 17,
//                           "lastMileTravel": 1.6,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "17 mins",
//                           "lastMileTravelString": "1.6 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹249",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/nanak-vegetarian-dhaba-transport-nagar-harnam-daspura-jalandhar-285860",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "125658",
//                         "name": "Kanta Chhuri",
//                         "cloudinaryImageId": "ixcejpncyybk4kbm1tjb",
//                         "locality": "Krishna Nagar",
//                         "areaName": "Chick Chick Chownk",
//                         "costForTwo": "₹250 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Punjabi",
//                           "Chinese"
//                         ],
//                         "avgRating": 4.2,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "125658",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "114789",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 18,
//                           "lastMileTravel": 1.7,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "18 mins",
//                           "lastMileTravelString": "1.7 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹249",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/kanta-chhuri-krishna-nagar-chick-chick-chownk-jalandhar-125658",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "263164",
//                         "name": "Hari Burger",
//                         "cloudinaryImageId": "ynarnd0haqjsbgrzeasx",
//                         "locality": "Dilbagh Nagar",
//                         "areaName": "North_Jalandhar",
//                         "costForTwo": "₹150 for two",
//                         "cuisines": [
//                           "Burgers",
//                           "Chinese",
//                           "Pizzas",
//                           "Pastas",
//                           "Italian-American"
//                         ],
//                         "avgRating": 4.2,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "263164",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "21810",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 21,
//                           "lastMileTravel": 3.5,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "21 mins",
//                           "lastMileTravelString": "3.5 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 22:15:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹249",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/hari-burger-dilbagh-nagar-north-jalandhar-jalandhar-263164",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "74858",
//                         "name": "Hot Drive",
//                         "cloudinaryImageId": "bojtrgxax2ubwyaipuka",
//                         "locality": "Rainbow Road",
//                         "areaName": "South_Jalandhar",
//                         "costForTwo": "₹250 for two",
//                         "cuisines": [
//                           "Snacks",
//                           "American",
//                           "Thalis",
//                           "Fast Food"
//                         ],
//                         "avgRating": 4,
//                         "feeDetails": {
//                           "restaurantId": "74858",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "97285",
//                         "avgRatingString": "4.0",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 24,
//                           "lastMileTravel": 3,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "24 mins",
//                           "lastMileTravelString": "3.0 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "60% OFF",
//                           "subHeader": "UPTO ₹120",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/hot-drive-rainbow-road-south-jalandhar-jalandhar-74858",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "98909",
//                         "name": "Chick Chick Restaurant (Adarsh Nagar)",
//                         "cloudinaryImageId": "yccnymxyzkppypoyqfet",
//                         "locality": "Krishna Nagar",
//                         "areaName": "Chick Chick Chowk",
//                         "costForTwo": "₹400 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Chinese"
//                         ],
//                         "avgRating": 4.3,
//                         "feeDetails": {
//                           "restaurantId": "98909",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "60329",
//                         "avgRatingString": "4.3",
//                         "totalRatingsString": "5K+",
//                         "sla": {
//                           "deliveryTime": 17,
//                           "lastMileTravel": 1.7,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "17 mins",
//                           "lastMileTravelString": "1.7 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 22:50:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/chick-chick-restaurant-adarsh-nagar-krishna-nagar-chick-chick-chowk-jalandhar-98909",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "480739",
//                         "name": "Aman Chicken (Ludhiana Wale) Since 1985",
//                         "cloudinaryImageId": "kuaurv0dd1zetgpsh11f",
//                         "locality": "New Jawahar Nagar",
//                         "areaName": "New Jawahar Nagar",
//                         "costForTwo": "₹310 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Chinese",
//                           "Snacks",
//                           "Beverages"
//                         ],
//                         "avgRating": 4.2,
//                         "feeDetails": {
//                           "restaurantId": "480739",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "288765",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "1K+",
//                         "sla": {
//                           "deliveryTime": 19,
//                           "lastMileTravel": 1.7,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "19 mins",
//                           "lastMileTravelString": "1.7 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "20% OFF",
//                           "subHeader": "UPTO ₹50",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/aman-chicken-ludhiana-wale-since-1985-new-jawahar-nagar-jalandhar-480739",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "302704",
//                         "name": "Barbeque Nation",
//                         "cloudinaryImageId": "kaaglnavvlkyvqv2bjlm",
//                         "locality": "Rainbow Road",
//                         "areaName": "Model Town",
//                         "costForTwo": "₹600 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Barbecue",
//                           "Biryani",
//                           "Kebabs",
//                           "Mughlai",
//                           "Desserts"
//                         ],
//                         "avgRating": 3.8,
//                         "feeDetails": {
//                           "restaurantId": "302704",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "2438",
//                         "avgRatingString": "3.8",
//                         "totalRatingsString": "500+",
//                         "sla": {
//                           "deliveryTime": 26,
//                           "lastMileTravel": 2.6,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "26 mins",
//                           "lastMileTravelString": "2.6 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:30:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "60% OFF",
//                           "subHeader": "UPTO ₹120",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/barbeque-nation-rainbow-road-model-town-jalandhar-302704",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "260766",
//                         "name": "Subway",
//                         "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
//                         "locality": "Shastri Nagar",
//                         "areaName": "Nakodar Road",
//                         "costForTwo": "₹300 for two",
//                         "cuisines": [
//                           "Healthy Food",
//                           "Salads",
//                           "Snacks",
//                           "Desserts",
//                           "Beverages"
//                         ],
//                         "avgRating": 3.8,
//                         "feeDetails": {
//                           "restaurantId": "260766",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "2",
//                         "avgRatingString": "3.8",
//                         "totalRatingsString": "1K+",
//                         "sla": {
//                           "deliveryTime": 23,
//                           "lastMileTravel": 0.6,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "23 mins",
//                           "lastMileTravelString": "0.6 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-08 03:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/subway-shastri-nagar-nakodar-road-jalandhar-260766",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "284035",
//                         "name": "Guru Kripa Pure Vegeterian Food",
//                         "cloudinaryImageId": "uugvcmzfc0tvavn3dda7",
//                         "locality": "Shiv Nagar",
//                         "areaName": "GT Road",
//                         "costForTwo": "₹250 for two",
//                         "cuisines": [
//                           "Indian",
//                           "Chinese"
//                         ],
//                         "avgRating": 3.9,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "284035",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "92060",
//                         "avgRatingString": "3.9",
//                         "totalRatingsString": "5K+",
//                         "sla": {
//                           "deliveryTime": 18,
//                           "lastMileTravel": 2.1,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "18 mins",
//                           "lastMileTravelString": "2.1 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 22:35:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "60% OFF",
//                           "subHeader": "UPTO ₹120",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/guru-kripa-pure-vegeterian-food-shiv-nagar-gt-road-jalandhar-284035",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "93642",
//                         "name": "B4 Veg & Non Veg Dhaba",
//                         "cloudinaryImageId": "bjao0qsbg2yklugwa2xx",
//                         "locality": "Durga Colony",
//                         "areaName": "Adarsh Nagar",
//                         "costForTwo": "₹350 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Chinese",
//                           "Thalis",
//                           "Tandoor"
//                         ],
//                         "avgRating": 4.1,
//                         "feeDetails": {
//                           "restaurantId": "93642",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "38654",
//                         "avgRatingString": "4.1",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 21,
//                           "lastMileTravel": 2.2,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "21 mins",
//                           "lastMileTravelString": "2.2 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-08 00:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹199",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/b4-veg-and-non-veg-dhaba-durga-colony-adarsh-nagar-jalandhar-93642",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "80969",
//                         "name": "S.K Dhaba",
//                         "cloudinaryImageId": "hfvyztca90mf6vz6lfhy",
//                         "locality": "Jawahar Nagar",
//                         "areaName": "Shastri Nagar",
//                         "costForTwo": "₹200 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Chinese"
//                         ],
//                         "avgRating": 4.2,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "80969",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "173675",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 17,
//                           "lastMileTravel": 1.8,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "17 mins",
//                           "lastMileTravelString": "1.8 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:41:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹199",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/s-k-dhaba-jawahar-nagar-shastri-nagar-jalandhar-80969",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "136845",
//                         "name": "Dhan Guru Ramdass Sweet Shop",
//                         "cloudinaryImageId": "fijqroiqqvukagkvnlp2",
//                         "locality": "Shaheed Bagat Singh Chowk",
//                         "areaName": "Fentonganj",
//                         "costForTwo": "₹300 for two",
//                         "cuisines": [
//                           "Sweets",
//                           "Snacks",
//                           "Beverages"
//                         ],
//                         "avgRating": 4.2,
//                         "feeDetails": {
//                           "restaurantId": "136845",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "72021",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 22,
//                           "lastMileTravel": 1.3,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "22 mins",
//                           "lastMileTravelString": "1.3 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "10% OFF",
//                           "subHeader": "UPTO ₹40",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/dhan-guru-ramdass-sweet-shop-shaheed-bagat-singh-chowk-fentonganj-jalandhar-136845",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "94252",
//                         "name": "Billa Kulfi Corner",
//                         "cloudinaryImageId": "vnh3zeptkmcgt92rgsud",
//                         "locality": "Attari Bazar",
//                         "areaName": "Jatpura",
//                         "costForTwo": "₹350 for two",
//                         "cuisines": [
//                           "Ice Cream",
//                           "Desserts",
//                           "Beverages"
//                         ],
//                         "avgRating": 4.3,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "94252",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "46003",
//                         "avgRatingString": "4.3",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 15,
//                           "lastMileTravel": 0.7,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "15 mins",
//                           "lastMileTravelString": "0.7 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:55:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "50% OFF",
//                           "subHeader": "UPTO ₹100",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/billa-kulfi-corner-attari-bazar-jatpura-jalandhar-94252",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "91788",
//                         "name": "Burger King",
//                         "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//                         "locality": "Guru Nanak Mission Chowk",
//                         "areaName": "Lajpat Nagar",
//                         "costForTwo": "₹350 for two",
//                         "cuisines": [
//                           "Burgers",
//                           "American"
//                         ],
//                         "avgRating": 4.2,
//                         "feeDetails": {
//                           "restaurantId": "91788",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "166",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 20,
//                           "lastMileTravel": 1.4,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "20 mins",
//                           "lastMileTravelString": "1.4 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-08 01:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "60% OFF",
//                           "subHeader": "UPTO ₹120",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/burger-king-guru-nanak-mission-chowk-lajpat-nagar-jalandhar-91788",
//                         "type": "WEBLINK"
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "444143",
//                         "name": "Wendy's Burgers",
//                         "cloudinaryImageId": "537944eb7977193d7166fbe5484b2cad",
//                         "locality": "Guru Nanak Mission Chowk",
//                         "areaName": "Shastri Nagar",
//                         "costForTwo": "₹200 for two",
//                         "cuisines": [
//                           "Fast Food",
//                           "Snacks",
//                           "American",
//                           "Burgers",
//                           "Desserts",
//                           "Beverages"
//                         ],
//                         "avgRating": 4.2,
//                         "feeDetails": {
//                           "restaurantId": "444143",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "972",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "1K+",
//                         "sla": {
//                           "deliveryTime": 20,
//                           "lastMileTravel": 1.2,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "20 mins",
//                           "lastMileTravelString": "1.2 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-08 03:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
                        
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/wendys-burgers-guru-nanak-mission-chowk-shastri-nagar-jalandhar-444143",
//                         "type": "WEBLINK"
//                       }
//                     }
//                   ],
//                   "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
//                   "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
//                   "style": {
//                     "width": {
//                       "type": "TYPE_RELATIVE",
//                       "value": 0.41111112,
//                       "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
//                     },
//                     "height": {
//                       "type": "TYPE_RELATIVE",
//                       "value": 0.7027027,
//                       "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
//                     },
//                     "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
//                   },
//                   "collectionId": "84124"
//                 }
//               }
//             }
//           }
//         },
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
//               "title": "Restaurants with online food delivery in Jalandhar",
//               "id": "popular_restaurants_title"
//             }
//           }
//         },
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
//               "sortConfigs": [
//                 {
//                   "key": "relevance",
//                   "title": "Relevance (Default)",
//                   "selected": true,
//                   "defaultSelection": true
//                 },
//                 {
//                   "key": "deliveryTimeAsc",
//                   "title": "Delivery Time"
//                 },
//                 {
//                   "key": "modelBasedRatingDesc",
//                   "title": "Rating"
//                 },
//                 {
//                   "key": "costForTwoAsc",
//                   "title": "Cost: Low to High"
//                 },
//                 {
//                   "key": "costForTwoDesc",
//                   "title": "Cost: High to Low"
//                 }
//               ],
//               "restaurantCount": 917,
//               "facetList": [
//                 {
//                   "label": "Delivery Time",
//                   "id": "deliveryTime",
//                   "selection": "SELECT_TYPE_MULTISELECT",
//                   "facetInfo": [
//                     {
//                       "label": "Fast Delivery",
//                       "id": "deliveryTimefacetquery1",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     }
//                   ],
//                   "viewType": "VIEW_TYPE_HALF_CARD",
//                   "subLabel": "Filter by"
//                 },
//                 {
//                   "label": "Cuisines",
//                   "id": "catalog_cuisines",
//                   "selection": "SELECT_TYPE_MULTISELECT",
//                   "facetInfo": [
//                     {
//                       "label": "Afghani",
//                       "id": "query_afghani",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "American",
//                       "id": "query_american",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Andhra",
//                       "id": "query_andhra",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Arabian",
//                       "id": "query_arabian",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Asian",
//                       "id": "query_asian",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Australian",
//                       "id": "query_australian",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Bakery",
//                       "id": "query_bakery",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Barbecue",
//                       "id": "query_barbecue",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Bengali",
//                       "id": "query_bengali",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Beverages",
//                       "id": "query_beverages",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Bihari",
//                       "id": "query_bihari",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Biryani",
//                       "id": "query_biryani",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Burgers",
//                       "id": "query_burgers",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Cafe",
//                       "id": "query_cafe",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Chaat",
//                       "id": "query_chaat",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Chettinad",
//                       "id": "query_chettinad",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Chinese",
//                       "id": "query_chinese",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Combo",
//                       "id": "query_combo",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Continental",
//                       "id": "query_continental",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Desserts",
//                       "id": "query_desserts",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Fast Food",
//                       "id": "query_fast_food",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Grill",
//                       "id": "query_grill",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Healthy Food",
//                       "id": "query_healthy_food",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Hyderabadi",
//                       "id": "query_hyderabadi",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Ice Cream",
//                       "id": "query_ice_cream",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Ice Cream Cakes",
//                       "id": "query_ice_cream_cakes",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Indian",
//                       "id": "query_indian",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Italian",
//                       "id": "query_italian",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Italian-American",
//                       "id": "query_italian-american",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Japanese",
//                       "id": "query_japanese",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Juices",
//                       "id": "query_juices",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Kashmiri",
//                       "id": "query_kashmiri",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Kebabs",
//                       "id": "query_kebabs",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Kerala",
//                       "id": "query_kerala",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Keto",
//                       "id": "query_keto",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Korean",
//                       "id": "query_korean",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Lucknowi",
//                       "id": "query_lucknowi",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Maharashtrian",
//                       "id": "query_maharashtrian",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Meat",
//                       "id": "query_meat",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Mexican",
//                       "id": "query_mexican",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Middle Eastern",
//                       "id": "query_middle_eastern",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Mughlai",
//                       "id": "query_mughlai",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "North Eastern",
//                       "id": "query_north_eastern",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "North Indian",
//                       "id": "query_north_indian",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Oriental",
//                       "id": "query_oriental",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Pastas",
//                       "id": "query_pastas",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Pizzas",
//                       "id": "query_pizzas",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Punjabi",
//                       "id": "query_punjabi",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Rajasthani",
//                       "id": "query_rajasthani",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Salads",
//                       "id": "query_salads",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Seafood",
//                       "id": "query_seafood",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Snacks",
//                       "id": "query_snacks",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "South Indian",
//                       "id": "query_south_indian",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Sri Lankan",
//                       "id": "query_sri_lankan",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Street Food",
//                       "id": "query_street_food",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Sweets",
//                       "id": "query_sweets",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Tandoor",
//                       "id": "query_tandoor",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Thai",
//                       "id": "query_thai",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Thalis",
//                       "id": "query_thalis",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Tibetan",
//                       "id": "query_tibetan",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Turkish",
//                       "id": "query_turkish",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Waffle",
//                       "id": "query_waffle",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     }
//                   ],
//                   "viewType": "VIEW_TYPE_HALF_CARD",
//                   "canSearch": true,
//                   "subLabel": "Filter by cuisine",
//                   "openFilter": true
//                 },
//                 {
//                   "label": "Explore",
//                   "id": "explore",
//                   "selection": "SELECT_TYPE_MULTISELECT",
//                   "facetInfo": [
//                     {
//                       "label": "New on Swiggy",
//                       "id": "newfacetquery1",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     }
//                   ],
//                   "viewType": "VIEW_TYPE_HALF_CARD"
//                 },
//                 {
//                   "label": "Ratings",
//                   "id": "rating",
//                   "selection": "SELECT_TYPE_MULTISELECT",
//                   "facetInfo": [
//                     {
//                       "label": "Ratings 4.5+",
//                       "id": "ratingfacetquery3",
//                       "analytics": {
                        
//                       }
//                     },
//                     {
//                       "label": "Ratings 4.0+",
//                       "id": "ratingfacetquery4",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Ratings 3.5+",
//                       "id": "ratingfacetquery5",
//                       "analytics": {
                        
//                       }
//                     }
//                   ],
//                   "viewType": "VIEW_TYPE_HALF_CARD",
//                   "subLabel": "Filter by"
//                 },
//                 {
//                   "label": "Veg/Non-Veg",
//                   "id": "isVeg",
//                   "selection": "SELECT_TYPE_SINGLESELECT",
//                   "facetInfo": [
//                     {
//                       "label": "Pure Veg",
//                       "id": "isVegfacetquery2",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Non Veg",
//                       "id": "isVegfacetquery3",
//                       "analytics": {
                        
//                       }
//                     }
//                   ],
//                   "viewType": "VIEW_TYPE_FLATTENED",
//                   "subLabel": "Filter by"
//                 },
//                 {
//                   "label": "Offers",
//                   "id": "restaurantOfferMultiTd",
//                   "selection": "SELECT_TYPE_SINGLESELECT",
//                   "facetInfo": [
//                     {
//                       "label": "Offers",
//                       "id": "restaurantOfferMultiTdfacetquery3",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     }
//                   ],
//                   "viewType": "VIEW_TYPE_FLATTENED",
//                   "subLabel": "Restaurants with"
//                 },
//                 {
//                   "label": "Cost for two",
//                   "id": "costForTwo",
//                   "selection": "SELECT_TYPE_MULTISELECT",
//                   "facetInfo": [
//                     {
//                       "label": "Rs. 300-Rs. 600",
//                       "id": "costForTwofacetquery3",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     },
//                     {
//                       "label": "Greater than Rs. 600",
//                       "id": "costForTwofacetquery4",
//                       "analytics": {
                        
//                       }
//                     },
//                     {
//                       "label": "Less than Rs. 300",
//                       "id": "costForTwofacetquery5",
//                       "analytics": {
                        
//                       },
//                       "openFilter": true
//                     }
//                   ],
//                   "viewType": "VIEW_TYPE_HALF_CARD",
//                   "subLabel": "Filter by"
//                 }
//               ]
//             }
//           }
//         },
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
//               "layout": {
//                 "columns": 4
//               },
//               "id": "restaurant_grid_listing",
//               "gridElements": {
//                 "infoWithStyle": {
//                   "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
//                   "restaurants": [
//                     {
//                       "info": {
//                         "id": "283810",
//                         "name": "Yummy Delicious Till Last Bite",
//                         "cloudinaryImageId": "wwgslew60sfsdtfy2ijz",
//                         "locality": "Guru Teg Bahadur Nagar",
//                         "areaName": "Model Town",
//                         "costForTwo": "₹300 for two",
//                         "cuisines": [
//                           "Chinese",
//                           "Continental",
//                           "Italian"
//                         ],
//                         "avgRating": 4.2,
//                         "feeDetails": {
//                           "restaurantId": "283810",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "228634",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 21,
//                           "lastMileTravel": 2.5,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "21 mins",
//                           "lastMileTravelString": "2.5 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹249",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
//                         "context": "seo-data-5ee82af7-6755-4583-8d3d-1c1e747f032f"
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/yummy-delicious-till-last-bite-guru-teg-bahadur-nagar-model-town-jalandhar-283810",
//                         "text": "RESTAURANT_MENU",
//                         "type": "WEBLINK"
//                       },
//                       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                     },
//                     {
//                       "info": {
//                         "id": "283662",
//                         "name": "Aggarwal Vaishno Dhaba",
//                         "cloudinaryImageId": "l68iq6yh6tenyntrxwgb",
//                         "locality": "Vasant Vihar Road",
//                         "areaName": "Model Town",
//                         "costForTwo": "₹200 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Chinese",
//                           "Biryani",
//                           "Punjabi"
//                         ],
//                         "avgRating": 4.2,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "283662",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "27734",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "5K+",
//                         "sla": {
//                           "deliveryTime": 23,
//                           "lastMileTravel": 2.5,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "23 mins",
//                           "lastMileTravelString": "2.5 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹199",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
//                         "context": "seo-data-5ee82af7-6755-4583-8d3d-1c1e747f032f"
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/aggarwal-vaishno-dhaba-vasant-vihar-road-model-town-jalandhar-283662",
//                         "text": "RESTAURANT_MENU",
//                         "type": "WEBLINK"
//                       },
//                       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                     },
//                     {
//                       "info": {
//                         "id": "248278",
//                         "name": "AAR KAY Vaishno Dhaba (Nakodar Road)",
//                         "cloudinaryImageId": "siiyygdsewrchwglfyre",
//                         "locality": "Abadpura",
//                         "areaName": "Avtar Nagar",
//                         "costForTwo": "₹250 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Thalis",
//                           "Punjabi",
//                           "Beverages"
//                         ],
//                         "avgRating": 4.3,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "248278",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "25988",
//                         "avgRatingString": "4.3",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 17,
//                           "lastMileTravel": 1.8,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "17 mins",
//                           "lastMileTravelString": "1.8 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹199",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
//                         "context": "seo-data-5ee82af7-6755-4583-8d3d-1c1e747f032f"
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/aar-kay-vaishno-dhaba-nakodar-road-abadpura-avtar-nagar-jalandhar-248278",
//                         "text": "RESTAURANT_MENU",
//                         "type": "WEBLINK"
//                       },
//                       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                     },
//                     {
//                       "info": {
//                         "id": "125662",
//                         "name": "Hot drive",
//                         "cloudinaryImageId": "ivu8gyfg1xnoclebxxc3",
//                         "locality": "Silver Plaza Mall",
//                         "areaName": "Aman Nagar",
//                         "costForTwo": "₹250 for two",
//                         "cuisines": [
//                           "Chinese",
//                           "Continental",
//                           "Biryani"
//                         ],
//                         "avgRating": 3.8,
//                         "feeDetails": {
//                           "restaurantId": "125662",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "97285",
//                         "avgRatingString": "3.8",
//                         "totalRatingsString": "1K+",
//                         "sla": {
//                           "deliveryTime": 20,
//                           "lastMileTravel": 2.5,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "20 mins",
//                           "lastMileTravelString": "2.5 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹199",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
//                         "context": "seo-data-5ee82af7-6755-4583-8d3d-1c1e747f032f"
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/hot-drive-silver-plaza-mall-aman-nagar-jalandhar-125662",
//                         "text": "RESTAURANT_MENU",
//                         "type": "WEBLINK"
//                       },
//                       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                     },
//                     {
//                       "info": {
//                         "id": "137429",
//                         "name": "GFC- The Chaap Hub",
//                         "cloudinaryImageId": "gozmdkxc3riqz0ot1lcu",
//                         "locality": "Durga Colony",
//                         "areaName": "Adarsh Nagar",
//                         "costForTwo": "₹200 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Snacks",
//                           "Beverages"
//                         ],
//                         "avgRating": 4,
//                         "feeDetails": {
//                           "restaurantId": "137429",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "87056",
//                         "avgRatingString": "4.0",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 17,
//                           "lastMileTravel": 2.1,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "17 mins",
//                           "lastMileTravelString": "2.1 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:40:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "10% OFF",
//                           "subHeader": "UPTO ₹40",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
//                         "context": "seo-data-5ee82af7-6755-4583-8d3d-1c1e747f032f"
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/gfc-the-chaap-hub-durga-colony-adarsh-nagar-jalandhar-137429",
//                         "text": "RESTAURANT_MENU",
//                         "type": "WEBLINK"
//                       },
//                       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                     },
//                     {
//                       "info": {
//                         "id": "115812",
//                         "name": "Bliss Vaishno Dhaba",
//                         "cloudinaryImageId": "hw5cdbjkyhopb3phddde",
//                         "locality": "Civil Line",
//                         "areaName": "Master Tara Singh Nagar",
//                         "costForTwo": "₹250 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Punjabi",
//                           "Chinese"
//                         ],
//                         "avgRating": 4.3,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "115812",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "47904",
//                         "avgRatingString": "4.3",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 16,
//                           "lastMileTravel": 1.5,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "16 mins",
//                           "lastMileTravelString": "1.5 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹249",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
//                         "context": "seo-data-5ee82af7-6755-4583-8d3d-1c1e747f032f"
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/bliss-vaishno-dhaba-civil-line-master-tara-singh-nagar-jalandhar-115812",
//                         "text": "RESTAURANT_MENU",
//                         "type": "WEBLINK"
//                       },
//                       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                     },
//                     {
//                       "info": {
//                         "id": "125658",
//                         "name": "Kanta Chhuri",
//                         "cloudinaryImageId": "ixcejpncyybk4kbm1tjb",
//                         "locality": "Krishna Nagar",
//                         "areaName": "Chick Chick Chownk",
//                         "costForTwo": "₹250 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "Punjabi",
//                           "Chinese"
//                         ],
//                         "avgRating": 4.2,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "125658",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "114789",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 18,
//                           "lastMileTravel": 1.7,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "18 mins",
//                           "lastMileTravelString": "1.7 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹249",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
//                         "context": "seo-data-5ee82af7-6755-4583-8d3d-1c1e747f032f"
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/kanta-chhuri-krishna-nagar-chick-chick-chownk-jalandhar-125658",
//                         "text": "RESTAURANT_MENU",
//                         "type": "WEBLINK"
//                       },
//                       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                     },
//                     {
//                       "info": {
//                         "id": "285860",
//                         "name": "Nanak Vegetarian Dhaba",
//                         "cloudinaryImageId": "usllk61gnicqmykbiyrb",
//                         "locality": "Transport Nagar",
//                         "areaName": "Harnam Daspura",
//                         "costForTwo": "₹300 for two",
//                         "cuisines": [
//                           "North Indian",
//                           "South Indian"
//                         ],
//                         "avgRating": 4.1,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "285860",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "143799",
//                         "avgRatingString": "4.1",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 17,
//                           "lastMileTravel": 1.6,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "17 mins",
//                           "lastMileTravelString": "1.6 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 23:00:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹249",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
//                         "context": "seo-data-5ee82af7-6755-4583-8d3d-1c1e747f032f"
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/nanak-vegetarian-dhaba-transport-nagar-harnam-daspura-jalandhar-285860",
//                         "text": "RESTAURANT_MENU",
//                         "type": "WEBLINK"
//                       },
//                       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                     },
//                     {
//                       "info": {
//                         "id": "263164",
//                         "name": "Hari Burger",
//                         "cloudinaryImageId": "ynarnd0haqjsbgrzeasx",
//                         "locality": "Dilbagh Nagar",
//                         "areaName": "North_Jalandhar",
//                         "costForTwo": "₹150 for two",
//                         "cuisines": [
//                           "Burgers",
//                           "Chinese",
//                           "Pizzas",
//                           "Pastas",
//                           "Italian-American"
//                         ],
//                         "avgRating": 4.2,
//                         "veg": true,
//                         "feeDetails": {
//                           "restaurantId": "263164",
//                           "fees": [
//                             {
//                               "name": "BASE_DISTANCE",
//                               "fee": 1900
//                             },
//                             {
//                               "name": "BASE_TIME"
//                             },
//                             {
//                               "name": "ANCILLARY_SURGE_FEE"
//                             }
//                           ],
//                           "totalFee": 1900
//                         },
//                         "parentId": "21810",
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "10K+",
//                         "sla": {
//                           "deliveryTime": 21,
//                           "lastMileTravel": 3.5,
//                           "serviceability": "SERVICEABLE",
//                           "slaString": "21 mins",
//                           "lastMileTravelString": "3.5 km",
//                           "iconType": "ICON_TYPE_EMPTY"
//                         },
//                         "availability": {
//                           "nextCloseTime": "2023-08-07 22:15:00",
//                           "opened": true
//                         },
//                         "badges": {
                          
//                         },
//                         "isOpen": true,
//                         "type": "F",
//                         "badgesV2": {
//                           "entityBadges": {
//                             "imageBased": {
                              
//                             },
//                             "textBased": {
                              
//                             },
//                             "textExtendedBadges": {
                              
//                             }
//                           }
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "₹125 OFF",
//                           "subHeader": "ABOVE ₹249",
//                           "discountTag": "FLAT DEAL",
//                           "discountCalloutInfo": {
//                             "message": "Free Delivery",
//                             "logoCtx": {
//                               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                             }
//                           }
//                         },
//                         "orderabilityCommunication": {
//                           "title": {
                            
//                           },
//                           "subTitle": {
                            
//                           },
//                           "message": {
                            
//                           },
//                           "customIcon": {
                            
//                           }
//                         },
//                         "differentiatedUi": {
//                           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                           "differentiatedUiMediaDetails": {
//                             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                             "lottie": {
                              
//                             },
//                             "video": {
                              
//                             }
//                           }
//                         },
//                         "reviewsSummary": {
                          
//                         },
//                         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                         "restaurantOfferPresentationInfo": {
                          
//                         }
//                       },
//                       "analytics": {
//                         "context": "seo-data-5ee82af7-6755-4583-8d3d-1c1e747f032f"
//                       },
//                       "cta": {
//                         "link": "https://www.swiggy.com/restaurants/hari-burger-dilbagh-nagar-north-jalandhar-jalandhar-263164",
//                         "text": "RESTAURANT_MENU",
//                         "type": "WEBLINK"
//                       },
//                       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                     }
//                   ],
//                   "theme": "SeoRestaurantListingGridWidget"
//                 }
//               }
//             }
//           }
//         },
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
//               "message": "Show More",
//               "id": "show_more_button"
//             }
//           }
//         },
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
//               "title": "Best Places to Eat Across Cities",
//               "brands": [
//                 {
//                   "text": "Best Restaurants in Bangalore",
//                   "link": "https://www.swiggy.com/city/bangalore/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gurgaon",
//                   "link": "https://www.swiggy.com/city/gurgaon/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hyderabad",
//                   "link": "https://www.swiggy.com/city/hyderabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Delhi",
//                   "link": "https://www.swiggy.com/city/delhi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mumbai",
//                   "link": "https://www.swiggy.com/city/mumbai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Pune",
//                   "link": "https://www.swiggy.com/city/pune/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kolkata",
//                   "link": "https://www.swiggy.com/city/kolkata/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chennai",
//                   "link": "https://www.swiggy.com/city/chennai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ahmedabad",
//                   "link": "https://www.swiggy.com/city/ahmedabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chandigarh",
//                   "link": "https://www.swiggy.com/city/chandigarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jaipur",
//                   "link": "https://www.swiggy.com/city/jaipur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kochi",
//                   "link": "https://www.swiggy.com/city/kochi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Coimbatore",
//                   "link": "https://www.swiggy.com/city/coimbatore/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Lucknow",
//                   "link": "https://www.swiggy.com/city/lucknow/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nagpur",
//                   "link": "https://www.swiggy.com/city/nagpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Vadodara",
//                   "link": "https://www.swiggy.com/city/vadodara/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Indore",
//                   "link": "https://www.swiggy.com/city/indore/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Guwahati",
//                   "link": "https://www.swiggy.com/city/guwahati/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Vizag",
//                   "link": "https://www.swiggy.com/city/vizag/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Surat",
//                   "link": "https://www.swiggy.com/city/surat/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dehradun",
//                   "link": "https://www.swiggy.com/city/dehradun/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Noida",
//                   "link": "https://www.swiggy.com/city/noida/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ludhiana",
//                   "link": "https://www.swiggy.com/city/ludhiana/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Trichy",
//                   "link": "https://www.swiggy.com/city/trichy/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Vijayawada",
//                   "link": "https://www.swiggy.com/city/vijayawada/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kanpur",
//                   "link": "https://www.swiggy.com/city/kanpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mysore",
//                   "link": "https://www.swiggy.com/city/mysore/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nashik",
//                   "link": "https://www.swiggy.com/city/nashik/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Pondicherry",
//                   "link": "https://www.swiggy.com/city/pondicherry/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Agra",
//                   "link": "https://www.swiggy.com/city/agra/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Aurangabad",
//                   "link": "https://www.swiggy.com/city/aurangabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jalandhar",
//                   "link": "https://www.swiggy.com/city/jalandhar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kota",
//                   "link": "https://www.swiggy.com/city/kota/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Madurai",
//                   "link": "https://www.swiggy.com/city/madurai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Allahabad",
//                   "link": "https://www.swiggy.com/city/allahabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Manipal",
//                   "link": "https://www.swiggy.com/city/manipal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Amritsar",
//                   "link": "https://www.swiggy.com/city/amritsar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bareilly",
//                   "link": "https://www.swiggy.com/city/bareilly/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Meerut",
//                   "link": "https://www.swiggy.com/city/meerut/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhopal",
//                   "link": "https://www.swiggy.com/city/bhopal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ooty",
//                   "link": "https://www.swiggy.com/city/ooty/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhubaneswar",
//                   "link": "https://www.swiggy.com/city/bhubaneswar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Raipur",
//                   "link": "https://www.swiggy.com/city/raipur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bikaner",
//                   "link": "https://www.swiggy.com/city/bikaner/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rajkot",
//                   "link": "https://www.swiggy.com/city/rajkot/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kozhikode",
//                   "link": "https://www.swiggy.com/city/kozhikode/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Central Goa",
//                   "link": "https://www.swiggy.com/city/central-goa/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sirsa",
//                   "link": "https://www.swiggy.com/city/sirsa/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gwalior",
//                   "link": "https://www.swiggy.com/city/gwalior/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Thrissur",
//                   "link": "https://www.swiggy.com/city/thrissur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kharagpur",
//                   "link": "https://www.swiggy.com/city/kharagpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tirupati",
//                   "link": "https://www.swiggy.com/city/tirupati/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tirupur",
//                   "link": "https://www.swiggy.com/city/tirupur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Vellore",
//                   "link": "https://www.swiggy.com/city/vellore/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Thiruvananthapuram",
//                   "link": "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Warangal",
//                   "link": "https://www.swiggy.com/city/warangal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Varanasi",
//                   "link": "https://www.swiggy.com/city/varanasi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mangaluru",
//                   "link": "https://www.swiggy.com/city/mangaluru/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Patna",
//                   "link": "https://www.swiggy.com/city/patna/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ranchi",
//                   "link": "https://www.swiggy.com/city/ranchi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Faridabad",
//                   "link": "https://www.swiggy.com/city/faridabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Guntur",
//                   "link": "https://www.swiggy.com/city/guntur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ujjain",
//                   "link": "https://www.swiggy.com/city/ujjain/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Patiala",
//                   "link": "https://www.swiggy.com/city/patiala/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Karnal",
//                   "link": "https://www.swiggy.com/city/karnal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kakinada",
//                   "link": "https://www.swiggy.com/city/kakinada/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rajahmundry",
//                   "link": "https://www.swiggy.com/city/rajahmundry/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bilaspur",
//                   "link": "https://www.swiggy.com/city/bilaspur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhilai",
//                   "link": "https://www.swiggy.com/city/bhilai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Anand",
//                   "link": "https://www.swiggy.com/city/anand/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhavnagar",
//                   "link": "https://www.swiggy.com/city/bhavnagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jammu",
//                   "link": "https://www.swiggy.com/city/jammu/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Muktsar",
//                   "link": "https://www.swiggy.com/city/muktsar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Panipat",
//                   "link": "https://www.swiggy.com/city/panipat/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dhanbad",
//                   "link": "https://www.swiggy.com/city/dhanbad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hubli",
//                   "link": "https://www.swiggy.com/city/hubli/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Belgaum",
//                   "link": "https://www.swiggy.com/city/belgaum/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jabalpur",
//                   "link": "https://www.swiggy.com/city/jabalpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kolhapur",
//                   "link": "https://www.swiggy.com/city/kolhapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Solapur",
//                   "link": "https://www.swiggy.com/city/solapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Shillong",
//                   "link": "https://www.swiggy.com/city/shillong/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Cuttack",
//                   "link": "https://www.swiggy.com/city/cuttack/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Aligarh",
//                   "link": "https://www.swiggy.com/city/aligarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Salem",
//                   "link": "https://www.swiggy.com/city/salem/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jodhpur",
//                   "link": "https://www.swiggy.com/city/jodhpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ajmer",
//                   "link": "https://www.swiggy.com/city/ajmer/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jhansi",
//                   "link": "https://www.swiggy.com/city/jhansi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gorakhpur",
//                   "link": "https://www.swiggy.com/city/gorakhpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Thanjavur",
//                   "link": "https://www.swiggy.com/city/thanjavur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Erode",
//                   "link": "https://www.swiggy.com/city/erode/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nellore",
//                   "link": "https://www.swiggy.com/city/nellore/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rourkela",
//                   "link": "https://www.swiggy.com/city/rourkela/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Anantapur",
//                   "link": "https://www.swiggy.com/city/anantapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kurnool",
//                   "link": "https://www.swiggy.com/city/kurnool/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ahmednagar",
//                   "link": "https://www.swiggy.com/city/ahmednagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Phagwara",
//                   "link": "https://www.swiggy.com/city/phagwara/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ambala",
//                   "link": "https://www.swiggy.com/city/ambala/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ballari",
//                   "link": "https://www.swiggy.com/city/ballari/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Saharanpur",
//                   "link": "https://www.swiggy.com/city/saharanpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tirunelveli",
//                   "link": "https://www.swiggy.com/city/tirunelveli/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bathinda",
//                   "link": "https://www.swiggy.com/city/bathinda/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mathura",
//                   "link": "https://www.swiggy.com/city/mathura/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Haridwar",
//                   "link": "https://www.swiggy.com/city/haridwar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ratnagiri",
//                   "link": "https://www.swiggy.com/city/ratnagiri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sangli",
//                   "link": "https://www.swiggy.com/city/sangli/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Amravati",
//                   "link": "https://www.swiggy.com/city/amravati/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rishikesh",
//                   "link": "https://www.swiggy.com/city/rishikesh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nagercoil",
//                   "link": "https://www.swiggy.com/city/nagercoil/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in KanyaKumari",
//                   "link": "https://www.swiggy.com/city/kanyakumari/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kadapa",
//                   "link": "https://www.swiggy.com/city/kadapa/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nizamabad",
//                   "link": "https://www.swiggy.com/city/nizamabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Shivamogga",
//                   "link": "https://www.swiggy.com/city/shivamogga/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Davanagere",
//                   "link": "https://www.swiggy.com/city/davanagere/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Roorkee",
//                   "link": "https://www.swiggy.com/city/roorkee/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nanded",
//                   "link": "https://www.swiggy.com/city/nanded/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rewa",
//                   "link": "https://www.swiggy.com/city/rewa/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Satna",
//                   "link": "https://www.swiggy.com/city/satna/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Shimla",
//                   "link": "https://www.swiggy.com/city/shimla/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Muzaffarpur",
//                   "link": "https://www.swiggy.com/city/muzaffarpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Valsad",
//                   "link": "https://www.swiggy.com/city/valsad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Vapi",
//                   "link": "https://www.swiggy.com/city/vapi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chhapra",
//                   "link": "https://www.swiggy.com/city/chhapra/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dharamshala",
//                   "link": "https://www.swiggy.com/city/dharamshala/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kollam",
//                   "link": "https://www.swiggy.com/city/kollam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Silchar",
//                   "link": "https://www.swiggy.com/city/silchar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Alappuzha",
//                   "link": "https://www.swiggy.com/city/alappuzha/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sonipat",
//                   "link": "https://www.swiggy.com/city/sonipat/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rohtak",
//                   "link": "https://www.swiggy.com/city/rohtak/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mehsana",
//                   "link": "https://www.swiggy.com/city/mehsana/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kullu",
//                   "link": "https://www.swiggy.com/city/kullu/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dhule",
//                   "link": "https://www.swiggy.com/city/dhule/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dharwad",
//                   "link": "https://www.swiggy.com/city/dharwad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Latur",
//                   "link": "https://www.swiggy.com/city/latur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Vizianagaram",
//                   "link": "https://www.swiggy.com/city/vizianagaram/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Khammam",
//                   "link": "https://www.swiggy.com/city/khammam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hampi",
//                   "link": "https://www.swiggy.com/city/hampi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nainital",
//                   "link": "https://www.swiggy.com/city/nainital/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Akola",
//                   "link": "https://www.swiggy.com/city/akola/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kalaburagi",
//                   "link": "https://www.swiggy.com/city/kalaburagi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gaya",
//                   "link": "https://www.swiggy.com/city/gaya/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Muzaffarnagar",
//                   "link": "https://www.swiggy.com/city/muzaffarnagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dewas",
//                   "link": "https://www.swiggy.com/city/dewas/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Korba",
//                   "link": "https://www.swiggy.com/city/korba/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mussoorie",
//                   "link": "https://www.swiggy.com/city/mussoorie/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jalgaon",
//                   "link": "https://www.swiggy.com/city/jalgaon/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Yamuna Nagar",
//                   "link": "https://www.swiggy.com/city/yamuna-nagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhagalpur",
//                   "link": "https://www.swiggy.com/city/bhagalpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hapur",
//                   "link": "https://www.swiggy.com/city/hapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Morena",
//                   "link": "https://www.swiggy.com/city/morena/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hassan",
//                   "link": "https://www.swiggy.com/city/hassan/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hisar",
//                   "link": "https://www.swiggy.com/city/hisar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Godhra",
//                   "link": "https://www.swiggy.com/city/godhra/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kolar ",
//                   "link": "https://www.swiggy.com/city/kolar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rampur",
//                   "link": "https://www.swiggy.com/city/rampur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sitapur",
//                   "link": "https://www.swiggy.com/city/sitapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Etawah",
//                   "link": "https://www.swiggy.com/city/etawah/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Porbandar",
//                   "link": "https://www.swiggy.com/city/porbandar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nadiad",
//                   "link": "https://www.swiggy.com/city/nadiad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sagar",
//                   "link": "https://www.swiggy.com/city/sagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Morbi",
//                   "link": "https://www.swiggy.com/city/morbi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chhindwara",
//                   "link": "https://www.swiggy.com/city/chhindwara/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tumakuru",
//                   "link": "https://www.swiggy.com/city/tumakuru/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Singrauli",
//                   "link": "https://www.swiggy.com/city/singrauli/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Thoothukudi",
//                   "link": "https://www.swiggy.com/city/thoothukudi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Katni",
//                   "link": "https://www.swiggy.com/city/katni/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Khandwa",
//                   "link": "https://www.swiggy.com/city/khandwa/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Eluru",
//                   "link": "https://www.swiggy.com/city/eluru/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Malappuram",
//                   "link": "https://www.swiggy.com/city/malappuram/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dibrugarh",
//                   "link": "https://www.swiggy.com/city/dibrugarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Deoghar",
//                   "link": "https://www.swiggy.com/city/deoghar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Khanna",
//                   "link": "https://www.swiggy.com/city/khanna/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bidar",
//                   "link": "https://www.swiggy.com/city/bidar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Madikeri",
//                   "link": "https://www.swiggy.com/city/madikeri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Haldwani",
//                   "link": "https://www.swiggy.com/city/haldwani/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Farrukhabad",
//                   "link": "https://www.swiggy.com/city/farrukhabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Malegaon",
//                   "link": "https://www.swiggy.com/city/malegaon/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dindigul",
//                   "link": "https://www.swiggy.com/city/dindigul/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Shahjahanpur",
//                   "link": "https://www.swiggy.com/city/shahjahanpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Beed",
//                   "link": "https://www.swiggy.com/city/beed/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Junagadh",
//                   "link": "https://www.swiggy.com/city/junagadh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Asansol",
//                   "link": "https://www.swiggy.com/city/asansol/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Beawar",
//                   "link": "https://www.swiggy.com/city/beawar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kishangarh",
//                   "link": "https://www.swiggy.com/city/kishangarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Budhwal",
//                   "link": "https://www.swiggy.com/city/budhwal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Parbhani",
//                   "link": "https://www.swiggy.com/city/parbhani/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gondia",
//                   "link": "https://www.swiggy.com/city/gondia/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ichalkaranji",
//                   "link": "https://www.swiggy.com/city/ichalkaranji/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jalna",
//                   "link": "https://www.swiggy.com/city/jalna/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Yavatmal",
//                   "link": "https://www.swiggy.com/city/yavatmal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Shivpuri",
//                   "link": "https://www.swiggy.com/city/shivpuri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Moga",
//                   "link": "https://www.swiggy.com/city/moga/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Abohar",
//                   "link": "https://www.swiggy.com/city/abohar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Adoni",
//                   "link": "https://www.swiggy.com/city/adoni/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Madanapalle",
//                   "link": "https://www.swiggy.com/city/madanapalle/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tiruvannamalai",
//                   "link": "https://www.swiggy.com/city/tiruvannamalai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Satara",
//                   "link": "https://www.swiggy.com/city/satara/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ambur",
//                   "link": "https://www.swiggy.com/city/ambur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Karimnagar",
//                   "link": "https://www.swiggy.com/city/karimnagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ratlam",
//                   "link": "https://www.swiggy.com/city/ratlam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Moradabad",
//                   "link": "https://www.swiggy.com/city/moradabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Machilipatnam",
//                   "link": "https://www.swiggy.com/city/machilipatnam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ongole",
//                   "link": "https://www.swiggy.com/city/ongole/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kottayam",
//                   "link": "https://www.swiggy.com/city/kottayam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Darbhanga",
//                   "link": "https://www.swiggy.com/city/darbhanga/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kurukshetra",
//                   "link": "https://www.swiggy.com/city/kurukshetra/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Unnao",
//                   "link": "https://www.swiggy.com/city/unnao/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bulandshahr",
//                   "link": "https://www.swiggy.com/city/bulandshahr/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Durgapur",
//                   "link": "https://www.swiggy.com/city/durgapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Siliguri",
//                   "link": "https://www.swiggy.com/city/siliguri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Pali",
//                   "link": "https://www.swiggy.com/city/pali/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tadepalligudem",
//                   "link": "https://www.swiggy.com/city/tadepalligudem/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ramagundam",
//                   "link": "https://www.swiggy.com/city/ramagundam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mahbubnagar",
//                   "link": "https://www.swiggy.com/city/mahbubnagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhiwani",
//                   "link": "https://www.swiggy.com/city/bhiwani/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Cuddalore",
//                   "link": "https://www.swiggy.com/city/cuddalore/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kaithal",
//                   "link": "https://www.swiggy.com/city/kaithal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jagtial",
//                   "link": "https://www.swiggy.com/city/jagtial/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Palakkad",
//                   "link": "https://www.swiggy.com/city/palakkad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Guna",
//                   "link": "https://www.swiggy.com/city/guna/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kumbakonam",
//                   "link": "https://www.swiggy.com/city/kumbakonam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Maunath Bhanjan",
//                   "link": "https://www.swiggy.com/city/maunath-bhanjan/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Baripada",
//                   "link": "https://www.swiggy.com/city/baripada/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Orai",
//                   "link": "https://www.swiggy.com/city/orai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhadrak",
//                   "link": "https://www.swiggy.com/city/bhadrak/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Batala",
//                   "link": "https://www.swiggy.com/city/batala/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Firozpur",
//                   "link": "https://www.swiggy.com/city/firozpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Barnala",
//                   "link": "https://www.swiggy.com/city/barnala/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Raigarh",
//                   "link": "https://www.swiggy.com/city/raigarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nagaon",
//                   "link": "https://www.swiggy.com/city/nagaon/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mainpuri",
//                   "link": "https://www.swiggy.com/city/mainpuri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Balurghat",
//                   "link": "https://www.swiggy.com/city/balurghat/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Giridih",
//                   "link": "https://www.swiggy.com/city/giridih/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ghazipur",
//                   "link": "https://www.swiggy.com/city/ghazipur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jagdalpur",
//                   "link": "https://www.swiggy.com/city/jagdalpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Vidisha",
//                   "link": "https://www.swiggy.com/city/vidisha/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dimapur",
//                   "link": "https://www.swiggy.com/city/dimapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Shikohabad",
//                   "link": "https://www.swiggy.com/city/shikohabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Imphal",
//                   "link": "https://www.swiggy.com/city/imphal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Lakhimpur",
//                   "link": "https://www.swiggy.com/city/lakhimpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rudrapur",
//                   "link": "https://www.swiggy.com/city/rudrapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ambikapur",
//                   "link": "https://www.swiggy.com/city/ambikapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rae Bareli",
//                   "link": "https://www.swiggy.com/city/rae-bareli/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tinsukia",
//                   "link": "https://www.swiggy.com/city/tinsukia/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rajapalayam",
//                   "link": "https://www.swiggy.com/city/rajapalayam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rajnandgaon",
//                   "link": "https://www.swiggy.com/city/rajnandgaon/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kashipur",
//                   "link": "https://www.swiggy.com/city/kashipur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ranibennur",
//                   "link": "https://www.swiggy.com/city/ranibennur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Burhanpur",
//                   "link": "https://www.swiggy.com/city/burhanpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhadravati",
//                   "link": "https://www.swiggy.com/city/bhadravati/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chittoor",
//                   "link": "https://www.swiggy.com/city/chittoor/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Pudukkottai",
//                   "link": "https://www.swiggy.com/city/pudukkottai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hardoi",
//                   "link": "https://www.swiggy.com/city/hardoi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Basti",
//                   "link": "https://www.swiggy.com/city/basti/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Karaikkudi",
//                   "link": "https://www.swiggy.com/city/karaikkudi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Lalitpur",
//                   "link": "https://www.swiggy.com/city/lalitpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hospet",
//                   "link": "https://www.swiggy.com/city/hospet/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Budaun",
//                   "link": "https://www.swiggy.com/city/budaun/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Neemuch",
//                   "link": "https://www.swiggy.com/city/neemuch/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Pilibhit",
//                   "link": "https://www.swiggy.com/city/pilibhit/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Barshi",
//                   "link": "https://www.swiggy.com/city/barshi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sri Ganganagar",
//                   "link": "https://www.swiggy.com/city/sri-ganganagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Wardha",
//                   "link": "https://www.swiggy.com/city/wardha/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sehore",
//                   "link": "https://www.swiggy.com/city/sehore/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhimavaram",
//                   "link": "https://www.swiggy.com/city/bhimavaram/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hanumangarh",
//                   "link": "https://www.swiggy.com/city/hanumangarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Pathankot",
//                   "link": "https://www.swiggy.com/city/pathankot/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Puri",
//                   "link": "https://www.swiggy.com/city/puri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Fatehpur",
//                   "link": "https://www.swiggy.com/city/fatehpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Surendranagar Dudhrej",
//                   "link": "https://www.swiggy.com/city/surendranagar-dudhrej/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jamnagar",
//                   "link": "https://www.swiggy.com/city/jamnagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhuj",
//                   "link": "https://www.swiggy.com/city/bhuj/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gandhidham",
//                   "link": "https://www.swiggy.com/city/gandhidham/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bharuch",
//                   "link": "https://www.swiggy.com/city/bharuch/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Navsari",
//                   "link": "https://www.swiggy.com/city/navsari/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Amreli",
//                   "link": "https://www.swiggy.com/city/amreli/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Palanpur",
//                   "link": "https://www.swiggy.com/city/palanpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhilwara",
//                   "link": "https://www.swiggy.com/city/bhilwara/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Suratgarh",
//                   "link": "https://www.swiggy.com/city/suratgarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sikar",
//                   "link": "https://www.swiggy.com/city/sikar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Churu",
//                   "link": "https://www.swiggy.com/city/churu/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Alwar",
//                   "link": "https://www.swiggy.com/city/alwar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhiwadi",
//                   "link": "https://www.swiggy.com/city/bhiwadi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bharatpur",
//                   "link": "https://www.swiggy.com/city/bharatpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mount Abu",
//                   "link": "https://www.swiggy.com/city/mount-abu/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bundi",
//                   "link": "https://www.swiggy.com/city/bundi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sawai Madhopur",
//                   "link": "https://www.swiggy.com/city/sawai-madhopur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Purulia",
//                   "link": "https://www.swiggy.com/city/purulia/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bardhaman",
//                   "link": "https://www.swiggy.com/city/bardhaman/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Raniganj",
//                   "link": "https://www.swiggy.com/city/raniganj/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Darjeeling",
//                   "link": "https://www.swiggy.com/city/darjeeling/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jalpaiguri",
//                   "link": "https://www.swiggy.com/city/jalpaiguri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chittorgarh",
//                   "link": "https://www.swiggy.com/city/chittorgarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dholpur",
//                   "link": "https://www.swiggy.com/city/dholpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Uluberia",
//                   "link": "https://www.swiggy.com/city/uluberia/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nabadwip",
//                   "link": "https://www.swiggy.com/city/nabadwip/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bongaon",
//                   "link": "https://www.swiggy.com/city/bongaon/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kanchrapara",
//                   "link": "https://www.swiggy.com/city/kanchrapara/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Habra",
//                   "link": "https://www.swiggy.com/city/habra/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Firozabad",
//                   "link": "https://www.swiggy.com/city/firozabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nalgonda",
//                   "link": "https://www.swiggy.com/city/nalgonda/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chandrapur",
//                   "link": "https://www.swiggy.com/city/chandrapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bijapur",
//                   "link": "https://www.swiggy.com/city/bijapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhusawal",
//                   "link": "https://www.swiggy.com/city/bhusawal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Raichur",
//                   "link": "https://www.swiggy.com/city/raichur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bahraich",
//                   "link": "https://www.swiggy.com/city/bahraich/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Azamgarh",
//                   "link": "https://www.swiggy.com/city/azamgarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bahadurgarh",
//                   "link": "https://www.swiggy.com/city/bahadurgarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jind",
//                   "link": "https://www.swiggy.com/city/jind/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rewari",
//                   "link": "https://www.swiggy.com/city/rewari/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Palwal",
//                   "link": "https://www.swiggy.com/city/palwal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hathras",
//                   "link": "https://www.swiggy.com/city/hathras/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sambalpur",
//                   "link": "https://www.swiggy.com/city/sambalpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Banda",
//                   "link": "https://www.swiggy.com/city/banda/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hoshiarpur",
//                   "link": "https://www.swiggy.com/city/hoshiarpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Faridkot",
//                   "link": "https://www.swiggy.com/city/faridkot/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mandsaur",
//                   "link": "https://www.swiggy.com/city/mandsaur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Suryapet",
//                   "link": "https://www.swiggy.com/city/suryapet/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Adilabad",
//                   "link": "https://www.swiggy.com/city/adilabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Narasaraopet",
//                   "link": "https://www.swiggy.com/city/narasaraopet/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Faizabad",
//                   "link": "https://www.swiggy.com/city/faizabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tadpatri",
//                   "link": "https://www.swiggy.com/city/tadpatri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gonda",
//                   "link": "https://www.swiggy.com/city/gonda/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mughalsarai",
//                   "link": "https://www.swiggy.com/city/mughalsarai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Medinipur",
//                   "link": "https://www.swiggy.com/city/medinipur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nagda",
//                   "link": "https://www.swiggy.com/city/nagda/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Raiganj",
//                   "link": "https://www.swiggy.com/city/raiganj/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Deoria City",
//                   "link": "https://www.swiggy.com/city/deoria-city/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sultanpur",
//                   "link": "https://www.swiggy.com/city/sultanpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Shamli",
//                   "link": "https://www.swiggy.com/city/shamli/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Krishnanagar",
//                   "link": "https://www.swiggy.com/city/krishnanagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ballia",
//                   "link": "https://www.swiggy.com/city/ballia/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Guntakal",
//                   "link": "https://www.swiggy.com/city/guntakal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Miryalaguda",
//                   "link": "https://www.swiggy.com/city/miryalaguda/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Etah",
//                   "link": "https://www.swiggy.com/city/etah/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Berhampore",
//                   "link": "https://www.swiggy.com/city/berhampore/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gudivada",
//                   "link": "https://www.swiggy.com/city/gudivada/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Haldia",
//                   "link": "https://www.swiggy.com/city/haldia/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Santipur",
//                   "link": "https://www.swiggy.com/city/santipur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Basirhat",
//                   "link": "https://www.swiggy.com/city/basirhat/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Udgir",
//                   "link": "https://www.swiggy.com/city/udgir/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Proddatur",
//                   "link": "https://www.swiggy.com/city/proddatur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nagapattinam",
//                   "link": "https://www.swiggy.com/city/nagapattinam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chikmagalur",
//                   "link": "https://www.swiggy.com/city/chikmagalur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chandausi",
//                   "link": "https://www.swiggy.com/city/chandausi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhind",
//                   "link": "https://www.swiggy.com/city/bhind/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mandya",
//                   "link": "https://www.swiggy.com/city/mandya/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bagalkot",
//                   "link": "https://www.swiggy.com/city/bagalkot/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nandurbar",
//                   "link": "https://www.swiggy.com/city/nandurbar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chitradurga",
//                   "link": "https://www.swiggy.com/city/chitradurga/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Osmanabad",
//                   "link": "https://www.swiggy.com/city/osmanabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Modinagar",
//                   "link": "https://www.swiggy.com/city/modinagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gadag-Betigeri",
//                   "link": "https://www.swiggy.com/city/gadag-betigeri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hoshangabad",
//                   "link": "https://www.swiggy.com/city/hoshangabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jaunpur",
//                   "link": "https://www.swiggy.com/city/jaunpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Port Blair",
//                   "link": "https://www.swiggy.com/city/port-blair/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jorhat",
//                   "link": "https://www.swiggy.com/city/jorhat/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nandyal",
//                   "link": "https://www.swiggy.com/city/nandyal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Biharsharif",
//                   "link": "https://www.swiggy.com/city/biharsharif/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Buxar",
//                   "link": "https://www.swiggy.com/city/buxar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Siwan",
//                   "link": "https://www.swiggy.com/city/siwan/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dehri",
//                   "link": "https://www.swiggy.com/city/dehri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bettiah",
//                   "link": "https://www.swiggy.com/city/bettiah/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kishanganj",
//                   "link": "https://www.swiggy.com/city/kishanganj/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Saharsa",
//                   "link": "https://www.swiggy.com/city/saharsa/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hajipur",
//                   "link": "https://www.swiggy.com/city/hajipur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Motihari",
//                   "link": "https://www.swiggy.com/city/motihari/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sasaram",
//                   "link": "https://www.swiggy.com/city/sasaram/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Munger",
//                   "link": "https://www.swiggy.com/city/munger/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Katihar",
//                   "link": "https://www.swiggy.com/city/katihar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Arrah",
//                   "link": "https://www.swiggy.com/city/arrah/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Srikakulam",
//                   "link": "https://www.swiggy.com/city/srikakulam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Begusarai",
//                   "link": "https://www.swiggy.com/city/begusarai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Neyveli",
//                   "link": "https://www.swiggy.com/city/neyveli/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Waidhan",
//                   "link": "https://www.swiggy.com/city/waidhan/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Markapur",
//                   "link": "https://www.swiggy.com/city/markapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chikkaballapur",
//                   "link": "https://www.swiggy.com/city/chikkaballapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhatkal",
//                   "link": "https://www.swiggy.com/city/bhatkal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gokak",
//                   "link": "https://www.swiggy.com/city/gokak/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Itarsi",
//                   "link": "https://www.swiggy.com/city/itarsi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dhar",
//                   "link": "https://www.swiggy.com/city/dhar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chalisgaon",
//                   "link": "https://www.swiggy.com/city/chalisgaon/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Thiruvallur",
//                   "link": "https://www.swiggy.com/city/thiruvallur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Namakkal",
//                   "link": "https://www.swiggy.com/city/namakkal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dharmapuri",
//                   "link": "https://www.swiggy.com/city/dharmapuri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhandara",
//                   "link": "https://www.swiggy.com/city/bhandara/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Virudhunagar",
//                   "link": "https://www.swiggy.com/city/virudhunagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Siddipet",
//                   "link": "https://www.swiggy.com/city/siddipet/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gadwal",
//                   "link": "https://www.swiggy.com/city/gadwal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bodhan-Rural",
//                   "link": "https://www.swiggy.com/city/bodhan-rural/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kamareddy",
//                   "link": "https://www.swiggy.com/city/kamareddy/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jhunjhunu",
//                   "link": "https://www.swiggy.com/city/jhunjhunu/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kapurthala",
//                   "link": "https://www.swiggy.com/city/kapurthala/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sangrur",
//                   "link": "https://www.swiggy.com/city/sangrur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gurdaspur",
//                   "link": "https://www.swiggy.com/city/gurdaspur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ramgarh",
//                   "link": "https://www.swiggy.com/city/ramgarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bantwal",
//                   "link": "https://www.swiggy.com/city/bantwal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Doddaballapura",
//                   "link": "https://www.swiggy.com/city/doddaballapura/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Buldana",
//                   "link": "https://www.swiggy.com/city/buldana/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Karad",
//                   "link": "https://www.swiggy.com/city/karad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Krishnagiri",
//                   "link": "https://www.swiggy.com/city/krishnagiri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tiptur",
//                   "link": "https://www.swiggy.com/city/tiptur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhadrachalam",
//                   "link": "https://www.swiggy.com/city/bhadrachalam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mancherial",
//                   "link": "https://www.swiggy.com/city/mancherial/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Balrampur",
//                   "link": "https://www.swiggy.com/city/balrampur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bharabanki",
//                   "link": "https://www.swiggy.com/city/bharabanki/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Malout",
//                   "link": "https://www.swiggy.com/city/malout/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Fatehgarh Sahib",
//                   "link": "https://www.swiggy.com/city/fatehgarh-sahib/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ropar",
//                   "link": "https://www.swiggy.com/city/ropar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nangal",
//                   "link": "https://www.swiggy.com/city/nangal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Narnaul",
//                   "link": "https://www.swiggy.com/city/narnaul/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Naraingarh",
//                   "link": "https://www.swiggy.com/city/naraingarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Himmatnagar",
//                   "link": "https://www.swiggy.com/city/himmatnagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dausa",
//                   "link": "https://www.swiggy.com/city/dausa/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jahanabad",
//                   "link": "https://www.swiggy.com/city/jahanabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Samastipur",
//                   "link": "https://www.swiggy.com/city/samastipur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Purnea",
//                   "link": "https://www.swiggy.com/city/purnea/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Berhampur",
//                   "link": "https://www.swiggy.com/city/berhampur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Malda",
//                   "link": "https://www.swiggy.com/city/malda/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tuni",
//                   "link": "https://www.swiggy.com/city/tuni/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Puttur",
//                   "link": "https://www.swiggy.com/city/puttur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rayachoty",
//                   "link": "https://www.swiggy.com/city/rayachoty/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nirmal",
//                   "link": "https://www.swiggy.com/city/nirmal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mirzapur",
//                   "link": "https://www.swiggy.com/city/mirzapur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tanuku",
//                   "link": "https://www.swiggy.com/city/tanuku/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dahod",
//                   "link": "https://www.swiggy.com/city/dahod/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Barmer",
//                   "link": "https://www.swiggy.com/city/barmer/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gangapur City",
//                   "link": "https://www.swiggy.com/city/gangapur-city/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mandi Gobindgarh",
//                   "link": "https://www.swiggy.com/city/mandi-gobindgarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tarn Taran Sahib",
//                   "link": "https://www.swiggy.com/city/tarn-taran-sahib/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nakodar",
//                   "link": "https://www.swiggy.com/city/nakodar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ankleshwar",
//                   "link": "https://www.swiggy.com/city/ankleshwar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Vyara",
//                   "link": "https://www.swiggy.com/city/vyara/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bardoli",
//                   "link": "https://www.swiggy.com/city/bardoli/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Halol",
//                   "link": "https://www.swiggy.com/city/halol/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bijnor",
//                   "link": "https://www.swiggy.com/city/bijnor/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sangamner",
//                   "link": "https://www.swiggy.com/city/sangamner/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Baramati",
//                   "link": "https://www.swiggy.com/city/baramati/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Betul",
//                   "link": "https://www.swiggy.com/city/betul/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chhatarpur",
//                   "link": "https://www.swiggy.com/city/chhatarpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Balaghat",
//                   "link": "https://www.swiggy.com/city/balaghat/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sivakasi",
//                   "link": "https://www.swiggy.com/city/sivakasi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Viluppuram",
//                   "link": "https://www.swiggy.com/city/viluppuram/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ramanathapuram",
//                   "link": "https://www.swiggy.com/city/ramanathapuram/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sirsi",
//                   "link": "https://www.swiggy.com/city/sirsi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Theni",
//                   "link": "https://www.swiggy.com/city/theni/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Karur",
//                   "link": "https://www.swiggy.com/city/karur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Karwar",
//                   "link": "https://www.swiggy.com/city/karwar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sindhanur",
//                   "link": "https://www.swiggy.com/city/sindhanur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kannur",
//                   "link": "https://www.swiggy.com/city/kannur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Noida 1",
//                   "link": "https://www.swiggy.com/city/noida-1/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Thiruvalla",
//                   "link": "https://www.swiggy.com/city/thiruvalla/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Thodupuzha",
//                   "link": "https://www.swiggy.com/city/thodupuzha/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kadiri",
//                   "link": "https://www.swiggy.com/city/kadiri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kavali",
//                   "link": "https://www.swiggy.com/city/kavali/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tezpur",
//                   "link": "https://www.swiggy.com/city/tezpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kayamkulam",
//                   "link": "https://www.swiggy.com/city/kayamkulam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kottarakkara",
//                   "link": "https://www.swiggy.com/city/kottarakkara/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mandi Dabwali",
//                   "link": "https://www.swiggy.com/city/mandi-dabwali/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Fatehabad",
//                   "link": "https://www.swiggy.com/city/fatehabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jagraon",
//                   "link": "https://www.swiggy.com/city/jagraon/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mansa",
//                   "link": "https://www.swiggy.com/city/mansa/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Pinjore City",
//                   "link": "https://www.swiggy.com/city/pinjore-city/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Fazilka",
//                   "link": "https://www.swiggy.com/city/fazilka/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Baddi",
//                   "link": "https://www.swiggy.com/city/baddi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Solan",
//                   "link": "https://www.swiggy.com/city/solan/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Daltonganj",
//                   "link": "https://www.swiggy.com/city/daltonganj/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Balangir",
//                   "link": "https://www.swiggy.com/city/balangir/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kothagudem",
//                   "link": "https://www.swiggy.com/city/kothagudem/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hansi",
//                   "link": "https://www.swiggy.com/city/hansi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Aurangabad_Bihar",
//                   "link": "https://www.swiggy.com/city/aurangabadbihar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gopalganj",
//                   "link": "https://www.swiggy.com/city/gopalganj/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jharsuguda",
//                   "link": "https://www.swiggy.com/city/jharsuguda/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tohana",
//                   "link": "https://www.swiggy.com/city/tohana/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jhalawar",
//                   "link": "https://www.swiggy.com/city/jhalawar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sivasagar",
//                   "link": "https://www.swiggy.com/city/sivasagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bagdogra",
//                   "link": "https://www.swiggy.com/city/bagdogra/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kendrapada",
//                   "link": "https://www.swiggy.com/city/kendrapada/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mallapuram (Do not Use)",
//                   "link": "https://www.swiggy.com/city/mallapuram-do-not-use/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Veraval",
//                   "link": "https://www.swiggy.com/city/veraval/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Daman",
//                   "link": "https://www.swiggy.com/city/daman/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chiplun",
//                   "link": "https://www.swiggy.com/city/chiplun/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Silvassa",
//                   "link": "https://www.swiggy.com/city/silvassa/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Lonavla",
//                   "link": "https://www.swiggy.com/city/lonavla/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bongaigaon",
//                   "link": "https://www.swiggy.com/city/bongaigaon/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Golaghat",
//                   "link": "https://www.swiggy.com/city/golaghat/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Duliajan",
//                   "link": "https://www.swiggy.com/city/duliajan/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bolpur",
//                   "link": "https://www.swiggy.com/city/bolpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Madhubani",
//                   "link": "https://www.swiggy.com/city/madhubani/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Balasore",
//                   "link": "https://www.swiggy.com/city/balasore/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Palampur",
//                   "link": "https://www.swiggy.com/city/palampur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kotdwar",
//                   "link": "https://www.swiggy.com/city/kotdwar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Koppal",
//                   "link": "https://www.swiggy.com/city/koppal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chikhli",
//                   "link": "https://www.swiggy.com/city/chikhli/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dahanu",
//                   "link": "https://www.swiggy.com/city/dahanu/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Itanagar",
//                   "link": "https://www.swiggy.com/city/itanagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rangpo",
//                   "link": "https://www.swiggy.com/city/rangpo/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Aizawl",
//                   "link": "https://www.swiggy.com/city/aizawl/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gangtok",
//                   "link": "https://www.swiggy.com/city/gangtok/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mayiladuthurai",
//                   "link": "https://www.swiggy.com/city/mayiladuthurai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kannauj",
//                   "link": "https://www.swiggy.com/city/kannauj/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Cooch Behar",
//                   "link": "https://www.swiggy.com/city/cooch-behar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Palani",
//                   "link": "https://www.swiggy.com/city/palani/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bilimora",
//                   "link": "https://www.swiggy.com/city/bilimora/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Boisar",
//                   "link": "https://www.swiggy.com/city/boisar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kohima",
//                   "link": "https://www.swiggy.com/city/kohima/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Naharlagun",
//                   "link": "https://www.swiggy.com/city/naharlagun/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dumka",
//                   "link": "https://www.swiggy.com/city/dumka/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rajsamand",
//                   "link": "https://www.swiggy.com/city/rajsamand/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gauriganj",
//                   "link": "https://www.swiggy.com/city/gauriganj/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bodinayakanur",
//                   "link": "https://www.swiggy.com/city/bodinayakanur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhawanipatna",
//                   "link": "https://www.swiggy.com/city/bhawanipatna/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Baran",
//                   "link": "https://www.swiggy.com/city/baran/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Narsinghpur",
//                   "link": "https://www.swiggy.com/city/narsinghpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kovilpatti",
//                   "link": "https://www.swiggy.com/city/kovilpatti/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Pusad",
//                   "link": "https://www.swiggy.com/city/pusad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kendujhar",
//                   "link": "https://www.swiggy.com/city/kendujhar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Manali",
//                   "link": "https://www.swiggy.com/city/manali/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Diu",
//                   "link": "https://www.swiggy.com/city/diu/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Khamgaon",
//                   "link": "https://www.swiggy.com/city/khamgaon/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ramanagara",
//                   "link": "https://www.swiggy.com/city/ramanagara/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Alipurduar",
//                   "link": "https://www.swiggy.com/city/alipurduar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Almora",
//                   "link": "https://www.swiggy.com/city/almora/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jhargram",
//                   "link": "https://www.swiggy.com/city/jhargram/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Arambagh",
//                   "link": "https://www.swiggy.com/city/arambagh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bhadohi",
//                   "link": "https://www.swiggy.com/city/bhadohi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tenkasi",
//                   "link": "https://www.swiggy.com/city/tenkasi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Srivilliputhur",
//                   "link": "https://www.swiggy.com/city/srivilliputhur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chidambaram",
//                   "link": "https://www.swiggy.com/city/chidambaram/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rajgarh",
//                   "link": "https://www.swiggy.com/city/rajgarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Pratapgarh",
//                   "link": "https://www.swiggy.com/city/pratapgarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Washim",
//                   "link": "https://www.swiggy.com/city/washim/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Raghunathpur",
//                   "link": "https://www.swiggy.com/city/raghunathpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Suri",
//                   "link": "https://www.swiggy.com/city/suri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kadayanallur",
//                   "link": "https://www.swiggy.com/city/kadayanallur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Thiruvarur",
//                   "link": "https://www.swiggy.com/city/thiruvarur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ranaghat-WB",
//                   "link": "https://www.swiggy.com/city/ranaghat-wb/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Wayanad",
//                   "link": "https://www.swiggy.com/city/wayanad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Perambalur",
//                   "link": "https://www.swiggy.com/city/perambalur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Paramakudi",
//                   "link": "https://www.swiggy.com/city/paramakudi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Bela Pratapgarh",
//                   "link": "https://www.swiggy.com/city/bela-pratapgarh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mahoba",
//                   "link": "https://www.swiggy.com/city/mahoba/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sitamarhi",
//                   "link": "https://www.swiggy.com/city/sitamarhi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chakdaha",
//                   "link": "https://www.swiggy.com/city/chakdaha/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Khalilabad",
//                   "link": "https://www.swiggy.com/city/khalilabad/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Pattukkottai",
//                   "link": "https://www.swiggy.com/city/pattukkottai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tindivanam",
//                   "link": "https://www.swiggy.com/city/tindivanam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tiruttani",
//                   "link": "https://www.swiggy.com/city/tiruttani/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gangarampur",
//                   "link": "https://www.swiggy.com/city/gangarampur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dharapuram",
//                   "link": "https://www.swiggy.com/city/dharapuram/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Arakkonam",
//                   "link": "https://www.swiggy.com/city/arakkonam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sirkali",
//                   "link": "https://www.swiggy.com/city/sirkali/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mettupalayam",
//                   "link": "https://www.swiggy.com/city/mettupalayam/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Digboi",
//                   "link": "https://www.swiggy.com/city/digboi/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Biswanath Chariali",
//                   "link": "https://www.swiggy.com/city/biswanath-chariali/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nalbari",
//                   "link": "https://www.swiggy.com/city/nalbari/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Shirdi city",
//                   "link": "https://www.swiggy.com/city/shirdi-city/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mukerian",
//                   "link": "https://www.swiggy.com/city/mukerian/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hosur",
//                   "link": "https://www.swiggy.com/city/hosur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Palakollu",
//                   "link": "https://www.swiggy.com/city/palakollu/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ravulapalem",
//                   "link": "https://www.swiggy.com/city/ravulapalem/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Barh",
//                   "link": "https://www.swiggy.com/city/barh/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Palghar",
//                   "link": "https://www.swiggy.com/city/palghar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kushalnagar",
//                   "link": "https://www.swiggy.com/city/kushalnagar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dungarpur",
//                   "link": "https://www.swiggy.com/city/dungarpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Chaibasa",
//                   "link": "https://www.swiggy.com/city/chaibasa/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Haveri",
//                   "link": "https://www.swiggy.com/city/haveri/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Karaikal",
//                   "link": "https://www.swiggy.com/city/karaikal/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jjajjar",
//                   "link": "https://www.swiggy.com/city/jjajjar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Kokrajhar",
//                   "link": "https://www.swiggy.com/city/kokrajhar/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rangia",
//                   "link": "https://www.swiggy.com/city/rangia/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hamirpur",
//                   "link": "https://www.swiggy.com/city/hamirpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Una",
//                   "link": "https://www.swiggy.com/city/una/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sulthan Bathery",
//                   "link": "https://www.swiggy.com/city/sulthan-bathery/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rayagada",
//                   "link": "https://www.swiggy.com/city/rayagada/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Paradeep",
//                   "link": "https://www.swiggy.com/city/paradeep/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Mandapeta",
//                   "link": "https://www.swiggy.com/city/mandapeta/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jamui",
//                   "link": "https://www.swiggy.com/city/jamui/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Pilkhuwa",
//                   "link": "https://www.swiggy.com/city/pilkhuwa/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Parvathipuram",
//                   "link": "https://www.swiggy.com/city/parvathipuram/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Ambajogai",
//                   "link": "https://www.swiggy.com/city/ambajogai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Araria",
//                   "link": "https://www.swiggy.com/city/araria/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in North Lakhimpur",
//                   "link": "https://www.swiggy.com/city/north-lakhimpur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Rajampet",
//                   "link": "https://www.swiggy.com/city/rajampet/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Udumalaipettai",
//                   "link": "https://www.swiggy.com/city/udumalaipettai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Tirupattur",
//                   "link": "https://www.swiggy.com/city/tirupattur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Hojai",
//                   "link": "https://www.swiggy.com/city/hojai/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Khagaria",
//                   "link": "https://www.swiggy.com/city/khagaria/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Dasuya",
//                   "link": "https://www.swiggy.com/city/dasuya/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Gudur",
//                   "link": "https://www.swiggy.com/city/gudur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Sullurpeta",
//                   "link": "https://www.swiggy.com/city/sullurpeta/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Piler",
//                   "link": "https://www.swiggy.com/city/piler/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in SankaranKoil",
//                   "link": "https://www.swiggy.com/city/sankarankoil/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Nabha",
//                   "link": "https://www.swiggy.com/city/nabha/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in LPU - Phagwara",
//                   "link": "https://www.swiggy.com/city/lpu-phagwara/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Jangipur",
//                   "link": "https://www.swiggy.com/city/jangipur/best-restaurants"
//                 },
//                 {
//                   "text": "Best Restaurants in Roha",
//                   "link": "https://www.swiggy.com/city/roha/best-restaurants"
//                 }
//               ],
//               "id": "best_city_link"
//             }
//           }
//         },
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.seo.widgets.v1.CuisinesContent",
//               "title": "Best Cuisines Near Me",
//               "facetId": "catalog_cuisines",
//               "cuisines": [
//                 {
//                   "text": "Afghani Restaurant Near Me",
//                   "id": "query_afghani",
//                   "link": "https://www.swiggy.com/afghani-restaurants-near-me"
//                 },
//                 {
//                   "text": "American Restaurant Near Me",
//                   "id": "query_american",
//                   "link": "https://www.swiggy.com/american-restaurants-near-me"
//                 },
//                 {
//                   "text": "Andhra Restaurant Near Me",
//                   "id": "query_andhra",
//                   "link": "https://www.swiggy.com/andhra-restaurants-near-me"
//                 },
//                 {
//                   "text": "Arabian Restaurant Near Me",
//                   "id": "query_arabian",
//                   "link": "https://www.swiggy.com/arabian-restaurants-near-me"
//                 },
//                 {
//                   "text": "Asian Restaurant Near Me",
//                   "id": "query_asian",
//                   "link": "https://www.swiggy.com/asian-restaurants-near-me"
//                 },
//                 {
//                   "text": "Australian Restaurant Near Me",
//                   "id": "query_australian",
//                   "link": "https://www.swiggy.com/australian-restaurants-near-me"
//                 },
//                 {
//                   "text": "Bakery Restaurant Near Me",
//                   "id": "query_bakery",
//                   "link": "https://www.swiggy.com/bakery-restaurants-near-me"
//                 },
//                 {
//                   "text": "Barbecue Restaurant Near Me",
//                   "id": "query_barbecue",
//                   "link": "https://www.swiggy.com/barbecue-restaurants-near-me"
//                 },
//                 {
//                   "text": "Bengali Restaurant Near Me",
//                   "id": "query_bengali",
//                   "link": "https://www.swiggy.com/bengali-restaurants-near-me"
//                 },
//                 {
//                   "text": "Beverages Restaurant Near Me",
//                   "id": "query_beverages",
//                   "link": "https://www.swiggy.com/beverages-restaurants-near-me"
//                 },
//                 {
//                   "text": "Bihari Restaurant Near Me",
//                   "id": "query_bihari",
//                   "link": "https://www.swiggy.com/bihari-restaurants-near-me"
//                 },
//                 {
//                   "text": "Biryani Restaurant Near Me",
//                   "id": "query_biryani",
//                   "link": "https://www.swiggy.com/biryani-restaurants-near-me"
//                 },
//                 {
//                   "text": "Burgers Restaurant Near Me",
//                   "id": "query_burgers",
//                   "link": "https://www.swiggy.com/burgers-restaurants-near-me"
//                 },
//                 {
//                   "text": "Cafe Restaurant Near Me",
//                   "id": "query_cafe",
//                   "link": "https://www.swiggy.com/cafe-restaurants-near-me"
//                 },
//                 {
//                   "text": "Chaat Restaurant Near Me",
//                   "id": "query_chaat",
//                   "link": "https://www.swiggy.com/chaat-restaurants-near-me"
//                 },
//                 {
//                   "text": "Chettinad Restaurant Near Me",
//                   "id": "query_chettinad",
//                   "link": "https://www.swiggy.com/chettinad-restaurants-near-me"
//                 },
//                 {
//                   "text": "Chinese Restaurant Near Me",
//                   "id": "query_chinese",
//                   "link": "https://www.swiggy.com/chinese-restaurants-near-me"
//                 },
//                 {
//                   "text": "Combo Restaurant Near Me",
//                   "id": "query_combo",
//                   "link": "https://www.swiggy.com/combo-restaurants-near-me"
//                 },
//                 {
//                   "text": "Continental Restaurant Near Me",
//                   "id": "query_continental",
//                   "link": "https://www.swiggy.com/continental-restaurants-near-me"
//                 },
//                 {
//                   "text": "Desserts Restaurant Near Me",
//                   "id": "query_desserts",
//                   "link": "https://www.swiggy.com/desserts-restaurants-near-me"
//                 },
//                 {
//                   "text": "Fast Food Restaurant Near Me",
//                   "id": "query_fast_food",
//                   "link": "https://www.swiggy.com/fast-food-restaurants-near-me"
//                 },
//                 {
//                   "text": "Grill Restaurant Near Me",
//                   "id": "query_grill",
//                   "link": "https://www.swiggy.com/grill-restaurants-near-me"
//                 },
//                 {
//                   "text": "Healthy Food Restaurant Near Me",
//                   "id": "query_healthy_food",
//                   "link": "https://www.swiggy.com/healthy-food-restaurants-near-me"
//                 },
//                 {
//                   "text": "Hyderabadi Restaurant Near Me",
//                   "id": "query_hyderabadi",
//                   "link": "https://www.swiggy.com/hyderabadi-restaurants-near-me"
//                 },
//                 {
//                   "text": "Ice Cream Restaurant Near Me",
//                   "id": "query_ice_cream",
//                   "link": "https://www.swiggy.com/ice-cream-restaurants-near-me"
//                 },
//                 {
//                   "text": "Ice Cream Cakes Restaurant Near Me",
//                   "id": "query_ice_cream_cakes",
//                   "link": "https://www.swiggy.com/ice-cream-cakes-restaurants-near-me"
//                 },
//                 {
//                   "text": "Indian Restaurant Near Me",
//                   "id": "query_indian",
//                   "link": "https://www.swiggy.com/indian-restaurants-near-me"
//                 },
//                 {
//                   "text": "Italian Restaurant Near Me",
//                   "id": "query_italian",
//                   "link": "https://www.swiggy.com/italian-restaurants-near-me"
//                 },
//                 {
//                   "text": "Italian-American Restaurant Near Me",
//                   "id": "query_italian-american",
//                   "link": "https://www.swiggy.com/italian-american-restaurants-near-me"
//                 },
//                 {
//                   "text": "Japanese Restaurant Near Me",
//                   "id": "query_japanese",
//                   "link": "https://www.swiggy.com/japanese-restaurants-near-me"
//                 },
//                 {
//                   "text": "Juices Restaurant Near Me",
//                   "id": "query_juices",
//                   "link": "https://www.swiggy.com/juices-restaurants-near-me"
//                 },
//                 {
//                   "text": "Kashmiri Restaurant Near Me",
//                   "id": "query_kashmiri",
//                   "link": "https://www.swiggy.com/kashmiri-restaurants-near-me"
//                 },
//                 {
//                   "text": "Kebabs Restaurant Near Me",
//                   "id": "query_kebabs",
//                   "link": "https://www.swiggy.com/kebabs-restaurants-near-me"
//                 },
//                 {
//                   "text": "Kerala Restaurant Near Me",
//                   "id": "query_kerala",
//                   "link": "https://www.swiggy.com/kerala-restaurants-near-me"
//                 },
//                 {
//                   "text": "Keto Restaurant Near Me",
//                   "id": "query_keto",
//                   "link": "https://www.swiggy.com/keto-restaurants-near-me"
//                 },
//                 {
//                   "text": "Korean Restaurant Near Me",
//                   "id": "query_korean",
//                   "link": "https://www.swiggy.com/korean-restaurants-near-me"
//                 },
//                 {
//                   "text": "Lucknowi Restaurant Near Me",
//                   "id": "query_lucknowi",
//                   "link": "https://www.swiggy.com/lucknowi-restaurants-near-me"
//                 },
//                 {
//                   "text": "Maharashtrian Restaurant Near Me",
//                   "id": "query_maharashtrian",
//                   "link": "https://www.swiggy.com/maharashtrian-restaurants-near-me"
//                 },
//                 {
//                   "text": "Meat Restaurant Near Me",
//                   "id": "query_meat",
//                   "link": "https://www.swiggy.com/meat-restaurants-near-me"
//                 },
//                 {
//                   "text": "Mexican Restaurant Near Me",
//                   "id": "query_mexican",
//                   "link": "https://www.swiggy.com/mexican-restaurants-near-me"
//                 },
//                 {
//                   "text": "Middle Eastern Restaurant Near Me",
//                   "id": "query_middle_eastern",
//                   "link": "https://www.swiggy.com/middle-eastern-restaurants-near-me"
//                 },
//                 {
//                   "text": "Mughlai Restaurant Near Me",
//                   "id": "query_mughlai",
//                   "link": "https://www.swiggy.com/mughlai-restaurants-near-me"
//                 },
//                 {
//                   "text": "North Eastern Restaurant Near Me",
//                   "id": "query_north_eastern",
//                   "link": "https://www.swiggy.com/north-eastern-restaurants-near-me"
//                 },
//                 {
//                   "text": "North Indian Restaurant Near Me",
//                   "id": "query_north_indian",
//                   "link": "https://www.swiggy.com/north-indian-restaurants-near-me"
//                 },
//                 {
//                   "text": "Oriental Restaurant Near Me",
//                   "id": "query_oriental",
//                   "link": "https://www.swiggy.com/oriental-restaurants-near-me"
//                 },
//                 {
//                   "text": "Pastas Restaurant Near Me",
//                   "id": "query_pastas",
//                   "link": "https://www.swiggy.com/pastas-restaurants-near-me"
//                 },
//                 {
//                   "text": "Pizzas Restaurant Near Me",
//                   "id": "query_pizzas",
//                   "link": "https://www.swiggy.com/pizzas-restaurants-near-me"
//                 },
//                 {
//                   "text": "Punjabi Restaurant Near Me",
//                   "id": "query_punjabi",
//                   "link": "https://www.swiggy.com/punjabi-restaurants-near-me"
//                 },
//                 {
//                   "text": "Rajasthani Restaurant Near Me",
//                   "id": "query_rajasthani",
//                   "link": "https://www.swiggy.com/rajasthani-restaurants-near-me"
//                 },
//                 {
//                   "text": "Salads Restaurant Near Me",
//                   "id": "query_salads",
//                   "link": "https://www.swiggy.com/salads-restaurants-near-me"
//                 },
//                 {
//                   "text": "Seafood Restaurant Near Me",
//                   "id": "query_seafood",
//                   "link": "https://www.swiggy.com/seafood-restaurants-near-me"
//                 },
//                 {
//                   "text": "Snacks Restaurant Near Me",
//                   "id": "query_snacks",
//                   "link": "https://www.swiggy.com/snacks-restaurants-near-me"
//                 },
//                 {
//                   "text": "South Indian Restaurant Near Me",
//                   "id": "query_south_indian",
//                   "link": "https://www.swiggy.com/south-indian-restaurants-near-me"
//                 },
//                 {
//                   "text": "Sri Lankan Restaurant Near Me",
//                   "id": "query_sri_lankan",
//                   "link": "https://www.swiggy.com/sri-lankan-restaurants-near-me"
//                 },
//                 {
//                   "text": "Street Food Restaurant Near Me",
//                   "id": "query_street_food",
//                   "link": "https://www.swiggy.com/street-food-restaurants-near-me"
//                 },
//                 {
//                   "text": "Sweets Restaurant Near Me",
//                   "id": "query_sweets",
//                   "link": "https://www.swiggy.com/sweets-restaurants-near-me"
//                 },
//                 {
//                   "text": "Tandoor Restaurant Near Me",
//                   "id": "query_tandoor",
//                   "link": "https://www.swiggy.com/tandoor-restaurants-near-me"
//                 },
//                 {
//                   "text": "Thai Restaurant Near Me",
//                   "id": "query_thai",
//                   "link": "https://www.swiggy.com/thai-restaurants-near-me"
//                 },
//                 {
//                   "text": "Thalis Restaurant Near Me",
//                   "id": "query_thalis",
//                   "link": "https://www.swiggy.com/thalis-restaurants-near-me"
//                 },
//                 {
//                   "text": "Tibetan Restaurant Near Me",
//                   "id": "query_tibetan",
//                   "link": "https://www.swiggy.com/tibetan-restaurants-near-me"
//                 },
//                 {
//                   "text": "Turkish Restaurant Near Me",
//                   "id": "query_turkish",
//                   "link": "https://www.swiggy.com/turkish-restaurants-near-me"
//                 },
//                 {
//                   "text": "Waffle Restaurant Near Me",
//                   "id": "query_waffle",
//                   "link": "https://www.swiggy.com/waffle-restaurants-near-me"
//                 }
//               ],
//               "id": "cuisines_near_you"
//             }
//           }
//         },
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
//               "title": "Explore Every Restaurants Near Me",
//               "brands": [
//                 {
//                   "text": "Explore Restaurants Near Me",
//                   "link": "https://www.swiggy.com/restaurants-near-me"
//                 },
//                 {
//                   "text": "Explore Top Rated Restaurants Near Me",
//                   "link": "https://www.swiggy.com/best-restaurants-near-me"
//                 }
//               ],
//               "id": "restaurant_near_me_links"
//             }
//           }
//         },
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
//               "title": "For better experience,download the Swiggy app now",
//               "androidAppImage": "portal/m/play_store.png",
//               "androidAppLink": "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
//               "iosAppImage": "portal/m/app_store.png",
//               "iosAppLink": "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
//               "id": "app_install_links"
//             }
//           }
//         },
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
//               "cities": [
//                 {
//                   "text": "Bangalore",
//                   "link": "https://www.swiggy.com/city/bangalore"
//                 },
//                 {
//                   "text": "Gurgaon",
//                   "link": "https://www.swiggy.com/city/gurgaon"
//                 },
//                 {
//                   "text": "Hyderabad",
//                   "link": "https://www.swiggy.com/city/hyderabad"
//                 },
//                 {
//                   "text": "Delhi",
//                   "link": "https://www.swiggy.com/city/delhi"
//                 },
//                 {
//                   "text": "Mumbai",
//                   "link": "https://www.swiggy.com/city/mumbai"
//                 },
//                 {
//                   "text": "Pune",
//                   "link": "https://www.swiggy.com/city/pune"
//                 },
//                 {
//                   "text": "Kolkata",
//                   "link": "https://www.swiggy.com/city/kolkata"
//                 },
//                 {
//                   "text": "Chennai",
//                   "link": "https://www.swiggy.com/city/chennai"
//                 },
//                 {
//                   "text": "Ahmedabad",
//                   "link": "https://www.swiggy.com/city/ahmedabad"
//                 },
//                 {
//                   "text": "Chandigarh",
//                   "link": "https://www.swiggy.com/city/chandigarh"
//                 },
//                 {
//                   "text": "Jaipur",
//                   "link": "https://www.swiggy.com/city/jaipur"
//                 },
//                 {
//                   "text": "Kochi",
//                   "link": "https://www.swiggy.com/city/kochi"
//                 },
//                 {
//                   "text": "Coimbatore",
//                   "link": "https://www.swiggy.com/city/coimbatore"
//                 },
//                 {
//                   "text": "Lucknow",
//                   "link": "https://www.swiggy.com/city/lucknow"
//                 },
//                 {
//                   "text": "Nagpur",
//                   "link": "https://www.swiggy.com/city/nagpur"
//                 },
//                 {
//                   "text": "Vadodara",
//                   "link": "https://www.swiggy.com/city/vadodara"
//                 },
//                 {
//                   "text": "Indore",
//                   "link": "https://www.swiggy.com/city/indore"
//                 },
//                 {
//                   "text": "Guwahati",
//                   "link": "https://www.swiggy.com/city/guwahati"
//                 },
//                 {
//                   "text": "Vizag",
//                   "link": "https://www.swiggy.com/city/vizag"
//                 },
//                 {
//                   "text": "Surat",
//                   "link": "https://www.swiggy.com/city/surat"
//                 },
//                 {
//                   "text": "Dehradun",
//                   "link": "https://www.swiggy.com/city/dehradun"
//                 },
//                 {
//                   "text": "Noida",
//                   "link": "https://www.swiggy.com/city/noida"
//                 },
//                 {
//                   "text": "Ludhiana",
//                   "link": "https://www.swiggy.com/city/ludhiana"
//                 },
//                 {
//                   "text": "Trichy",
//                   "link": "https://www.swiggy.com/city/trichy"
//                 },
//                 {
//                   "text": "Vijayawada",
//                   "link": "https://www.swiggy.com/city/vijayawada"
//                 },
//                 {
//                   "text": "Kanpur",
//                   "link": "https://www.swiggy.com/city/kanpur"
//                 },
//                 {
//                   "text": "Mysore",
//                   "link": "https://www.swiggy.com/city/mysore"
//                 },
//                 {
//                   "text": "Nashik",
//                   "link": "https://www.swiggy.com/city/nashik"
//                 },
//                 {
//                   "text": "Pondicherry",
//                   "link": "https://www.swiggy.com/city/pondicherry"
//                 },
//                 {
//                   "text": "Agra",
//                   "link": "https://www.swiggy.com/city/agra"
//                 },
//                 {
//                   "text": "Aurangabad",
//                   "link": "https://www.swiggy.com/city/aurangabad"
//                 },
//                 {
//                   "text": "Jalandhar",
//                   "link": "https://www.swiggy.com/city/jalandhar"
//                 },
//                 {
//                   "text": "Kota",
//                   "link": "https://www.swiggy.com/city/kota"
//                 },
//                 {
//                   "text": "Madurai",
//                   "link": "https://www.swiggy.com/city/madurai"
//                 },
//                 {
//                   "text": "Allahabad",
//                   "link": "https://www.swiggy.com/city/allahabad"
//                 },
//                 {
//                   "text": "Manipal",
//                   "link": "https://www.swiggy.com/city/manipal"
//                 },
//                 {
//                   "text": "Amritsar",
//                   "link": "https://www.swiggy.com/city/amritsar"
//                 },
//                 {
//                   "text": "Bareilly",
//                   "link": "https://www.swiggy.com/city/bareilly"
//                 },
//                 {
//                   "text": "Meerut",
//                   "link": "https://www.swiggy.com/city/meerut"
//                 },
//                 {
//                   "text": "Bhopal",
//                   "link": "https://www.swiggy.com/city/bhopal"
//                 },
//                 {
//                   "text": "Ooty",
//                   "link": "https://www.swiggy.com/city/ooty"
//                 },
//                 {
//                   "text": "Bhubaneswar",
//                   "link": "https://www.swiggy.com/city/bhubaneswar"
//                 },
//                 {
//                   "text": "Raipur",
//                   "link": "https://www.swiggy.com/city/raipur"
//                 },
//                 {
//                   "text": "Bikaner",
//                   "link": "https://www.swiggy.com/city/bikaner"
//                 },
//                 {
//                   "text": "Rajkot",
//                   "link": "https://www.swiggy.com/city/rajkot"
//                 },
//                 {
//                   "text": "Kozhikode",
//                   "link": "https://www.swiggy.com/city/kozhikode"
//                 },
//                 {
//                   "text": "Central Goa",
//                   "link": "https://www.swiggy.com/city/central-goa"
//                 },
//                 {
//                   "text": "Sirsa",
//                   "link": "https://www.swiggy.com/city/sirsa"
//                 },
//                 {
//                   "text": "Gwalior",
//                   "link": "https://www.swiggy.com/city/gwalior"
//                 },
//                 {
//                   "text": "Thrissur",
//                   "link": "https://www.swiggy.com/city/thrissur"
//                 },
//                 {
//                   "text": "Kharagpur",
//                   "link": "https://www.swiggy.com/city/kharagpur"
//                 },
//                 {
//                   "text": "Tirupati",
//                   "link": "https://www.swiggy.com/city/tirupati"
//                 },
//                 {
//                   "text": "Tirupur",
//                   "link": "https://www.swiggy.com/city/tirupur"
//                 },
//                 {
//                   "text": "Vellore",
//                   "link": "https://www.swiggy.com/city/vellore"
//                 },
//                 {
//                   "text": "Thiruvananthapuram",
//                   "link": "https://www.swiggy.com/city/thiruvananthapuram"
//                 },
//                 {
//                   "text": "Warangal",
//                   "link": "https://www.swiggy.com/city/warangal"
//                 },
//                 {
//                   "text": "Varanasi",
//                   "link": "https://www.swiggy.com/city/varanasi"
//                 },
//                 {
//                   "text": "Mangaluru",
//                   "link": "https://www.swiggy.com/city/mangaluru"
//                 },
//                 {
//                   "text": "Patna",
//                   "link": "https://www.swiggy.com/city/patna"
//                 },
//                 {
//                   "text": "Ranchi",
//                   "link": "https://www.swiggy.com/city/ranchi"
//                 },
//                 {
//                   "text": "Faridabad",
//                   "link": "https://www.swiggy.com/city/faridabad"
//                 },
//                 {
//                   "text": "Guntur",
//                   "link": "https://www.swiggy.com/city/guntur"
//                 },
//                 {
//                   "text": "Ujjain",
//                   "link": "https://www.swiggy.com/city/ujjain"
//                 },
//                 {
//                   "text": "Patiala",
//                   "link": "https://www.swiggy.com/city/patiala"
//                 },
//                 {
//                   "text": "Karnal",
//                   "link": "https://www.swiggy.com/city/karnal"
//                 },
//                 {
//                   "text": "Kakinada",
//                   "link": "https://www.swiggy.com/city/kakinada"
//                 },
//                 {
//                   "text": "Rajahmundry",
//                   "link": "https://www.swiggy.com/city/rajahmundry"
//                 },
//                 {
//                   "text": "Bilaspur",
//                   "link": "https://www.swiggy.com/city/bilaspur"
//                 },
//                 {
//                   "text": "Bhilai",
//                   "link": "https://www.swiggy.com/city/bhilai"
//                 },
//                 {
//                   "text": "Anand",
//                   "link": "https://www.swiggy.com/city/anand"
//                 },
//                 {
//                   "text": "Bhavnagar",
//                   "link": "https://www.swiggy.com/city/bhavnagar"
//                 },
//                 {
//                   "text": "Jammu",
//                   "link": "https://www.swiggy.com/city/jammu"
//                 },
//                 {
//                   "text": "Muktsar",
//                   "link": "https://www.swiggy.com/city/muktsar"
//                 },
//                 {
//                   "text": "Panipat",
//                   "link": "https://www.swiggy.com/city/panipat"
//                 },
//                 {
//                   "text": "Dhanbad",
//                   "link": "https://www.swiggy.com/city/dhanbad"
//                 },
//                 {
//                   "text": "Hubli",
//                   "link": "https://www.swiggy.com/city/hubli"
//                 },
//                 {
//                   "text": "Belgaum",
//                   "link": "https://www.swiggy.com/city/belgaum"
//                 },
//                 {
//                   "text": "Jabalpur",
//                   "link": "https://www.swiggy.com/city/jabalpur"
//                 },
//                 {
//                   "text": "Kolhapur",
//                   "link": "https://www.swiggy.com/city/kolhapur"
//                 },
//                 {
//                   "text": "Solapur",
//                   "link": "https://www.swiggy.com/city/solapur"
//                 },
//                 {
//                   "text": "Shillong",
//                   "link": "https://www.swiggy.com/city/shillong"
//                 },
//                 {
//                   "text": "Cuttack",
//                   "link": "https://www.swiggy.com/city/cuttack"
//                 },
//                 {
//                   "text": "Aligarh",
//                   "link": "https://www.swiggy.com/city/aligarh"
//                 },
//                 {
//                   "text": "Salem",
//                   "link": "https://www.swiggy.com/city/salem"
//                 },
//                 {
//                   "text": "Jodhpur",
//                   "link": "https://www.swiggy.com/city/jodhpur"
//                 },
//                 {
//                   "text": "Ajmer",
//                   "link": "https://www.swiggy.com/city/ajmer"
//                 },
//                 {
//                   "text": "Jhansi",
//                   "link": "https://www.swiggy.com/city/jhansi"
//                 },
//                 {
//                   "text": "Gorakhpur",
//                   "link": "https://www.swiggy.com/city/gorakhpur"
//                 },
//                 {
//                   "text": "Thanjavur",
//                   "link": "https://www.swiggy.com/city/thanjavur"
//                 },
//                 {
//                   "text": "Erode",
//                   "link": "https://www.swiggy.com/city/erode"
//                 },
//                 {
//                   "text": "Nellore",
//                   "link": "https://www.swiggy.com/city/nellore"
//                 },
//                 {
//                   "text": "Rourkela",
//                   "link": "https://www.swiggy.com/city/rourkela"
//                 },
//                 {
//                   "text": "Anantapur",
//                   "link": "https://www.swiggy.com/city/anantapur"
//                 },
//                 {
//                   "text": "Kurnool",
//                   "link": "https://www.swiggy.com/city/kurnool"
//                 },
//                 {
//                   "text": "Ahmednagar",
//                   "link": "https://www.swiggy.com/city/ahmednagar"
//                 },
//                 {
//                   "text": "Phagwara",
//                   "link": "https://www.swiggy.com/city/phagwara"
//                 },
//                 {
//                   "text": "Ambala",
//                   "link": "https://www.swiggy.com/city/ambala"
//                 },
//                 {
//                   "text": "Ballari",
//                   "link": "https://www.swiggy.com/city/ballari"
//                 },
//                 {
//                   "text": "Saharanpur",
//                   "link": "https://www.swiggy.com/city/saharanpur"
//                 },
//                 {
//                   "text": "Tirunelveli",
//                   "link": "https://www.swiggy.com/city/tirunelveli"
//                 },
//                 {
//                   "text": "Bathinda",
//                   "link": "https://www.swiggy.com/city/bathinda"
//                 },
//                 {
//                   "text": "Mathura",
//                   "link": "https://www.swiggy.com/city/mathura"
//                 },
//                 {
//                   "text": "Haridwar",
//                   "link": "https://www.swiggy.com/city/haridwar"
//                 },
//                 {
//                   "text": "Ratnagiri",
//                   "link": "https://www.swiggy.com/city/ratnagiri"
//                 },
//                 {
//                   "text": "Sangli",
//                   "link": "https://www.swiggy.com/city/sangli"
//                 },
//                 {
//                   "text": "Amravati",
//                   "link": "https://www.swiggy.com/city/amravati"
//                 },
//                 {
//                   "text": "Rishikesh",
//                   "link": "https://www.swiggy.com/city/rishikesh"
//                 },
//                 {
//                   "text": "Nagercoil",
//                   "link": "https://www.swiggy.com/city/nagercoil"
//                 },
//                 {
//                   "text": "KanyaKumari",
//                   "link": "https://www.swiggy.com/city/kanyakumari"
//                 },
//                 {
//                   "text": "Kadapa",
//                   "link": "https://www.swiggy.com/city/kadapa"
//                 },
//                 {
//                   "text": "Nizamabad",
//                   "link": "https://www.swiggy.com/city/nizamabad"
//                 },
//                 {
//                   "text": "Shivamogga",
//                   "link": "https://www.swiggy.com/city/shivamogga"
//                 },
//                 {
//                   "text": "Davanagere",
//                   "link": "https://www.swiggy.com/city/davanagere"
//                 },
//                 {
//                   "text": "Roorkee",
//                   "link": "https://www.swiggy.com/city/roorkee"
//                 },
//                 {
//                   "text": "Nanded",
//                   "link": "https://www.swiggy.com/city/nanded"
//                 },
//                 {
//                   "text": "Rewa",
//                   "link": "https://www.swiggy.com/city/rewa"
//                 },
//                 {
//                   "text": "Satna",
//                   "link": "https://www.swiggy.com/city/satna"
//                 },
//                 {
//                   "text": "Shimla",
//                   "link": "https://www.swiggy.com/city/shimla"
//                 },
//                 {
//                   "text": "Muzaffarpur",
//                   "link": "https://www.swiggy.com/city/muzaffarpur"
//                 },
//                 {
//                   "text": "Valsad",
//                   "link": "https://www.swiggy.com/city/valsad"
//                 },
//                 {
//                   "text": "Vapi",
//                   "link": "https://www.swiggy.com/city/vapi"
//                 },
//                 {
//                   "text": "Chhapra",
//                   "link": "https://www.swiggy.com/city/chhapra"
//                 },
//                 {
//                   "text": "Dharamshala",
//                   "link": "https://www.swiggy.com/city/dharamshala"
//                 },
//                 {
//                   "text": "Kollam",
//                   "link": "https://www.swiggy.com/city/kollam"
//                 },
//                 {
//                   "text": "Silchar",
//                   "link": "https://www.swiggy.com/city/silchar"
//                 },
//                 {
//                   "text": "Alappuzha",
//                   "link": "https://www.swiggy.com/city/alappuzha"
//                 },
//                 {
//                   "text": "Sonipat",
//                   "link": "https://www.swiggy.com/city/sonipat"
//                 },
//                 {
//                   "text": "Rohtak",
//                   "link": "https://www.swiggy.com/city/rohtak"
//                 },
//                 {
//                   "text": "Mehsana",
//                   "link": "https://www.swiggy.com/city/mehsana"
//                 },
//                 {
//                   "text": "Kullu",
//                   "link": "https://www.swiggy.com/city/kullu"
//                 },
//                 {
//                   "text": "Dhule",
//                   "link": "https://www.swiggy.com/city/dhule"
//                 },
//                 {
//                   "text": "Dharwad",
//                   "link": "https://www.swiggy.com/city/dharwad"
//                 },
//                 {
//                   "text": "Latur",
//                   "link": "https://www.swiggy.com/city/latur"
//                 },
//                 {
//                   "text": "Vizianagaram",
//                   "link": "https://www.swiggy.com/city/vizianagaram"
//                 },
//                 {
//                   "text": "Khammam",
//                   "link": "https://www.swiggy.com/city/khammam"
//                 },
//                 {
//                   "text": "Hampi",
//                   "link": "https://www.swiggy.com/city/hampi"
//                 },
//                 {
//                   "text": "Nainital",
//                   "link": "https://www.swiggy.com/city/nainital"
//                 },
//                 {
//                   "text": "Akola",
//                   "link": "https://www.swiggy.com/city/akola"
//                 },
//                 {
//                   "text": "Kalaburagi",
//                   "link": "https://www.swiggy.com/city/kalaburagi"
//                 },
//                 {
//                   "text": "Gaya",
//                   "link": "https://www.swiggy.com/city/gaya"
//                 },
//                 {
//                   "text": "Muzaffarnagar",
//                   "link": "https://www.swiggy.com/city/muzaffarnagar"
//                 },
//                 {
//                   "text": "Dewas",
//                   "link": "https://www.swiggy.com/city/dewas"
//                 },
//                 {
//                   "text": "Korba",
//                   "link": "https://www.swiggy.com/city/korba"
//                 },
//                 {
//                   "text": "Mussoorie",
//                   "link": "https://www.swiggy.com/city/mussoorie"
//                 },
//                 {
//                   "text": "Jalgaon",
//                   "link": "https://www.swiggy.com/city/jalgaon"
//                 },
//                 {
//                   "text": "Yamuna Nagar",
//                   "link": "https://www.swiggy.com/city/yamuna-nagar"
//                 },
//                 {
//                   "text": "Bhagalpur",
//                   "link": "https://www.swiggy.com/city/bhagalpur"
//                 },
//                 {
//                   "text": "Hapur",
//                   "link": "https://www.swiggy.com/city/hapur"
//                 },
//                 {
//                   "text": "Morena",
//                   "link": "https://www.swiggy.com/city/morena"
//                 },
//                 {
//                   "text": "Hassan",
//                   "link": "https://www.swiggy.com/city/hassan"
//                 },
//                 {
//                   "text": "Hisar",
//                   "link": "https://www.swiggy.com/city/hisar"
//                 },
//                 {
//                   "text": "Godhra",
//                   "link": "https://www.swiggy.com/city/godhra"
//                 },
//                 {
//                   "text": "Kolar ",
//                   "link": "https://www.swiggy.com/city/kolar"
//                 },
//                 {
//                   "text": "Rampur",
//                   "link": "https://www.swiggy.com/city/rampur"
//                 },
//                 {
//                   "text": "Sitapur",
//                   "link": "https://www.swiggy.com/city/sitapur"
//                 },
//                 {
//                   "text": "Etawah",
//                   "link": "https://www.swiggy.com/city/etawah"
//                 },
//                 {
//                   "text": "Porbandar",
//                   "link": "https://www.swiggy.com/city/porbandar"
//                 },
//                 {
//                   "text": "Nadiad",
//                   "link": "https://www.swiggy.com/city/nadiad"
//                 },
//                 {
//                   "text": "Sagar",
//                   "link": "https://www.swiggy.com/city/sagar"
//                 },
//                 {
//                   "text": "Morbi",
//                   "link": "https://www.swiggy.com/city/morbi"
//                 },
//                 {
//                   "text": "Chhindwara",
//                   "link": "https://www.swiggy.com/city/chhindwara"
//                 },
//                 {
//                   "text": "Tumakuru",
//                   "link": "https://www.swiggy.com/city/tumakuru"
//                 },
//                 {
//                   "text": "Singrauli",
//                   "link": "https://www.swiggy.com/city/singrauli"
//                 },
//                 {
//                   "text": "Thoothukudi",
//                   "link": "https://www.swiggy.com/city/thoothukudi"
//                 },
//                 {
//                   "text": "Katni",
//                   "link": "https://www.swiggy.com/city/katni"
//                 },
//                 {
//                   "text": "Khandwa",
//                   "link": "https://www.swiggy.com/city/khandwa"
//                 },
//                 {
//                   "text": "Eluru",
//                   "link": "https://www.swiggy.com/city/eluru"
//                 },
//                 {
//                   "text": "Malappuram",
//                   "link": "https://www.swiggy.com/city/malappuram"
//                 },
//                 {
//                   "text": "Dibrugarh",
//                   "link": "https://www.swiggy.com/city/dibrugarh"
//                 },
//                 {
//                   "text": "Deoghar",
//                   "link": "https://www.swiggy.com/city/deoghar"
//                 },
//                 {
//                   "text": "Khanna",
//                   "link": "https://www.swiggy.com/city/khanna"
//                 },
//                 {
//                   "text": "Bidar",
//                   "link": "https://www.swiggy.com/city/bidar"
//                 },
//                 {
//                   "text": "Madikeri",
//                   "link": "https://www.swiggy.com/city/madikeri"
//                 },
//                 {
//                   "text": "Haldwani",
//                   "link": "https://www.swiggy.com/city/haldwani"
//                 },
//                 {
//                   "text": "Farrukhabad",
//                   "link": "https://www.swiggy.com/city/farrukhabad"
//                 },
//                 {
//                   "text": "Malegaon",
//                   "link": "https://www.swiggy.com/city/malegaon"
//                 },
//                 {
//                   "text": "Dindigul",
//                   "link": "https://www.swiggy.com/city/dindigul"
//                 },
//                 {
//                   "text": "Shahjahanpur",
//                   "link": "https://www.swiggy.com/city/shahjahanpur"
//                 },
//                 {
//                   "text": "Beed",
//                   "link": "https://www.swiggy.com/city/beed"
//                 },
//                 {
//                   "text": "Junagadh",
//                   "link": "https://www.swiggy.com/city/junagadh"
//                 },
//                 {
//                   "text": "Asansol",
//                   "link": "https://www.swiggy.com/city/asansol"
//                 },
//                 {
//                   "text": "Beawar",
//                   "link": "https://www.swiggy.com/city/beawar"
//                 },
//                 {
//                   "text": "Kishangarh",
//                   "link": "https://www.swiggy.com/city/kishangarh"
//                 },
//                 {
//                   "text": "Budhwal",
//                   "link": "https://www.swiggy.com/city/budhwal"
//                 },
//                 {
//                   "text": "Parbhani",
//                   "link": "https://www.swiggy.com/city/parbhani"
//                 },
//                 {
//                   "text": "Gondia",
//                   "link": "https://www.swiggy.com/city/gondia"
//                 },
//                 {
//                   "text": "Ichalkaranji",
//                   "link": "https://www.swiggy.com/city/ichalkaranji"
//                 },
//                 {
//                   "text": "Jalna",
//                   "link": "https://www.swiggy.com/city/jalna"
//                 },
//                 {
//                   "text": "Yavatmal",
//                   "link": "https://www.swiggy.com/city/yavatmal"
//                 },
//                 {
//                   "text": "Shivpuri",
//                   "link": "https://www.swiggy.com/city/shivpuri"
//                 },
//                 {
//                   "text": "Moga",
//                   "link": "https://www.swiggy.com/city/moga"
//                 },
//                 {
//                   "text": "Abohar",
//                   "link": "https://www.swiggy.com/city/abohar"
//                 },
//                 {
//                   "text": "Adoni",
//                   "link": "https://www.swiggy.com/city/adoni"
//                 },
//                 {
//                   "text": "Madanapalle",
//                   "link": "https://www.swiggy.com/city/madanapalle"
//                 },
//                 {
//                   "text": "Tiruvannamalai",
//                   "link": "https://www.swiggy.com/city/tiruvannamalai"
//                 },
//                 {
//                   "text": "Satara",
//                   "link": "https://www.swiggy.com/city/satara"
//                 },
//                 {
//                   "text": "Ambur",
//                   "link": "https://www.swiggy.com/city/ambur"
//                 },
//                 {
//                   "text": "Karimnagar",
//                   "link": "https://www.swiggy.com/city/karimnagar"
//                 },
//                 {
//                   "text": "Ratlam",
//                   "link": "https://www.swiggy.com/city/ratlam"
//                 },
//                 {
//                   "text": "Moradabad",
//                   "link": "https://www.swiggy.com/city/moradabad"
//                 },
//                 {
//                   "text": "Machilipatnam",
//                   "link": "https://www.swiggy.com/city/machilipatnam"
//                 },
//                 {
//                   "text": "Ongole",
//                   "link": "https://www.swiggy.com/city/ongole"
//                 },
//                 {
//                   "text": "Kottayam",
//                   "link": "https://www.swiggy.com/city/kottayam"
//                 },
//                 {
//                   "text": "Darbhanga",
//                   "link": "https://www.swiggy.com/city/darbhanga"
//                 },
//                 {
//                   "text": "Kurukshetra",
//                   "link": "https://www.swiggy.com/city/kurukshetra"
//                 },
//                 {
//                   "text": "Unnao",
//                   "link": "https://www.swiggy.com/city/unnao"
//                 },
//                 {
//                   "text": "Bulandshahr",
//                   "link": "https://www.swiggy.com/city/bulandshahr"
//                 },
//                 {
//                   "text": "Durgapur",
//                   "link": "https://www.swiggy.com/city/durgapur"
//                 },
//                 {
//                   "text": "Siliguri",
//                   "link": "https://www.swiggy.com/city/siliguri"
//                 },
//                 {
//                   "text": "Pali",
//                   "link": "https://www.swiggy.com/city/pali"
//                 },
//                 {
//                   "text": "Tadepalligudem",
//                   "link": "https://www.swiggy.com/city/tadepalligudem"
//                 },
//                 {
//                   "text": "Ramagundam",
//                   "link": "https://www.swiggy.com/city/ramagundam"
//                 },
//                 {
//                   "text": "Mahbubnagar",
//                   "link": "https://www.swiggy.com/city/mahbubnagar"
//                 },
//                 {
//                   "text": "Bhiwani",
//                   "link": "https://www.swiggy.com/city/bhiwani"
//                 },
//                 {
//                   "text": "Cuddalore",
//                   "link": "https://www.swiggy.com/city/cuddalore"
//                 },
//                 {
//                   "text": "Kaithal",
//                   "link": "https://www.swiggy.com/city/kaithal"
//                 },
//                 {
//                   "text": "Jagtial",
//                   "link": "https://www.swiggy.com/city/jagtial"
//                 },
//                 {
//                   "text": "Palakkad",
//                   "link": "https://www.swiggy.com/city/palakkad"
//                 },
//                 {
//                   "text": "Guna",
//                   "link": "https://www.swiggy.com/city/guna"
//                 },
//                 {
//                   "text": "Kumbakonam",
//                   "link": "https://www.swiggy.com/city/kumbakonam"
//                 },
//                 {
//                   "text": "Maunath Bhanjan",
//                   "link": "https://www.swiggy.com/city/maunath-bhanjan"
//                 },
//                 {
//                   "text": "Baripada",
//                   "link": "https://www.swiggy.com/city/baripada"
//                 },
//                 {
//                   "text": "Orai",
//                   "link": "https://www.swiggy.com/city/orai"
//                 },
//                 {
//                   "text": "Bhadrak",
//                   "link": "https://www.swiggy.com/city/bhadrak"
//                 },
//                 {
//                   "text": "Batala",
//                   "link": "https://www.swiggy.com/city/batala"
//                 },
//                 {
//                   "text": "Firozpur",
//                   "link": "https://www.swiggy.com/city/firozpur"
//                 },
//                 {
//                   "text": "Barnala",
//                   "link": "https://www.swiggy.com/city/barnala"
//                 },
//                 {
//                   "text": "Raigarh",
//                   "link": "https://www.swiggy.com/city/raigarh"
//                 },
//                 {
//                   "text": "Nagaon",
//                   "link": "https://www.swiggy.com/city/nagaon"
//                 },
//                 {
//                   "text": "Mainpuri",
//                   "link": "https://www.swiggy.com/city/mainpuri"
//                 },
//                 {
//                   "text": "Balurghat",
//                   "link": "https://www.swiggy.com/city/balurghat"
//                 },
//                 {
//                   "text": "Giridih",
//                   "link": "https://www.swiggy.com/city/giridih"
//                 },
//                 {
//                   "text": "Ghazipur",
//                   "link": "https://www.swiggy.com/city/ghazipur"
//                 },
//                 {
//                   "text": "Jagdalpur",
//                   "link": "https://www.swiggy.com/city/jagdalpur"
//                 },
//                 {
//                   "text": "Vidisha",
//                   "link": "https://www.swiggy.com/city/vidisha"
//                 },
//                 {
//                   "text": "Dimapur",
//                   "link": "https://www.swiggy.com/city/dimapur"
//                 },
//                 {
//                   "text": "Shikohabad",
//                   "link": "https://www.swiggy.com/city/shikohabad"
//                 },
//                 {
//                   "text": "Imphal",
//                   "link": "https://www.swiggy.com/city/imphal"
//                 },
//                 {
//                   "text": "Lakhimpur",
//                   "link": "https://www.swiggy.com/city/lakhimpur"
//                 },
//                 {
//                   "text": "Rudrapur",
//                   "link": "https://www.swiggy.com/city/rudrapur"
//                 },
//                 {
//                   "text": "Ambikapur",
//                   "link": "https://www.swiggy.com/city/ambikapur"
//                 },
//                 {
//                   "text": "Rae Bareli",
//                   "link": "https://www.swiggy.com/city/rae-bareli"
//                 },
//                 {
//                   "text": "Tinsukia",
//                   "link": "https://www.swiggy.com/city/tinsukia"
//                 },
//                 {
//                   "text": "Rajapalayam",
//                   "link": "https://www.swiggy.com/city/rajapalayam"
//                 },
//                 {
//                   "text": "Rajnandgaon",
//                   "link": "https://www.swiggy.com/city/rajnandgaon"
//                 },
//                 {
//                   "text": "Kashipur",
//                   "link": "https://www.swiggy.com/city/kashipur"
//                 },
//                 {
//                   "text": "Ranibennur",
//                   "link": "https://www.swiggy.com/city/ranibennur"
//                 },
//                 {
//                   "text": "Burhanpur",
//                   "link": "https://www.swiggy.com/city/burhanpur"
//                 },
//                 {
//                   "text": "Bhadravati",
//                   "link": "https://www.swiggy.com/city/bhadravati"
//                 },
//                 {
//                   "text": "Chittoor",
//                   "link": "https://www.swiggy.com/city/chittoor"
//                 },
//                 {
//                   "text": "Pudukkottai",
//                   "link": "https://www.swiggy.com/city/pudukkottai"
//                 },
//                 {
//                   "text": "Hardoi",
//                   "link": "https://www.swiggy.com/city/hardoi"
//                 },
//                 {
//                   "text": "Basti",
//                   "link": "https://www.swiggy.com/city/basti"
//                 },
//                 {
//                   "text": "Karaikkudi",
//                   "link": "https://www.swiggy.com/city/karaikkudi"
//                 },
//                 {
//                   "text": "Lalitpur",
//                   "link": "https://www.swiggy.com/city/lalitpur"
//                 },
//                 {
//                   "text": "Hospet",
//                   "link": "https://www.swiggy.com/city/hospet"
//                 },
//                 {
//                   "text": "Budaun",
//                   "link": "https://www.swiggy.com/city/budaun"
//                 },
//                 {
//                   "text": "Neemuch",
//                   "link": "https://www.swiggy.com/city/neemuch"
//                 },
//                 {
//                   "text": "Pilibhit",
//                   "link": "https://www.swiggy.com/city/pilibhit"
//                 },
//                 {
//                   "text": "Barshi",
//                   "link": "https://www.swiggy.com/city/barshi"
//                 },
//                 {
//                   "text": "Sri Ganganagar",
//                   "link": "https://www.swiggy.com/city/sri-ganganagar"
//                 },
//                 {
//                   "text": "Wardha",
//                   "link": "https://www.swiggy.com/city/wardha"
//                 },
//                 {
//                   "text": "Sehore",
//                   "link": "https://www.swiggy.com/city/sehore"
//                 },
//                 {
//                   "text": "Bhimavaram",
//                   "link": "https://www.swiggy.com/city/bhimavaram"
//                 },
//                 {
//                   "text": "Hanumangarh",
//                   "link": "https://www.swiggy.com/city/hanumangarh"
//                 },
//                 {
//                   "text": "Pathankot",
//                   "link": "https://www.swiggy.com/city/pathankot"
//                 },
//                 {
//                   "text": "Puri",
//                   "link": "https://www.swiggy.com/city/puri"
//                 },
//                 {
//                   "text": "Fatehpur",
//                   "link": "https://www.swiggy.com/city/fatehpur"
//                 },
//                 {
//                   "text": "Surendranagar Dudhrej",
//                   "link": "https://www.swiggy.com/city/surendranagar-dudhrej"
//                 },
//                 {
//                   "text": "Jamnagar",
//                   "link": "https://www.swiggy.com/city/jamnagar"
//                 },
//                 {
//                   "text": "Bhuj",
//                   "link": "https://www.swiggy.com/city/bhuj"
//                 },
//                 {
//                   "text": "Gandhidham",
//                   "link": "https://www.swiggy.com/city/gandhidham"
//                 },
//                 {
//                   "text": "Bharuch",
//                   "link": "https://www.swiggy.com/city/bharuch"
//                 },
//                 {
//                   "text": "Navsari",
//                   "link": "https://www.swiggy.com/city/navsari"
//                 },
//                 {
//                   "text": "Amreli",
//                   "link": "https://www.swiggy.com/city/amreli"
//                 },
//                 {
//                   "text": "Palanpur",
//                   "link": "https://www.swiggy.com/city/palanpur"
//                 },
//                 {
//                   "text": "Bhilwara",
//                   "link": "https://www.swiggy.com/city/bhilwara"
//                 },
//                 {
//                   "text": "Suratgarh",
//                   "link": "https://www.swiggy.com/city/suratgarh"
//                 },
//                 {
//                   "text": "Sikar",
//                   "link": "https://www.swiggy.com/city/sikar"
//                 },
//                 {
//                   "text": "Churu",
//                   "link": "https://www.swiggy.com/city/churu"
//                 },
//                 {
//                   "text": "Alwar",
//                   "link": "https://www.swiggy.com/city/alwar"
//                 },
//                 {
//                   "text": "Bhiwadi",
//                   "link": "https://www.swiggy.com/city/bhiwadi"
//                 },
//                 {
//                   "text": "Bharatpur",
//                   "link": "https://www.swiggy.com/city/bharatpur"
//                 },
//                 {
//                   "text": "Mount Abu",
//                   "link": "https://www.swiggy.com/city/mount-abu"
//                 },
//                 {
//                   "text": "Bundi",
//                   "link": "https://www.swiggy.com/city/bundi"
//                 },
//                 {
//                   "text": "Sawai Madhopur",
//                   "link": "https://www.swiggy.com/city/sawai-madhopur"
//                 },
//                 {
//                   "text": "Purulia",
//                   "link": "https://www.swiggy.com/city/purulia"
//                 },
//                 {
//                   "text": "Bardhaman",
//                   "link": "https://www.swiggy.com/city/bardhaman"
//                 },
//                 {
//                   "text": "Raniganj",
//                   "link": "https://www.swiggy.com/city/raniganj"
//                 },
//                 {
//                   "text": "Darjeeling",
//                   "link": "https://www.swiggy.com/city/darjeeling"
//                 },
//                 {
//                   "text": "Jalpaiguri",
//                   "link": "https://www.swiggy.com/city/jalpaiguri"
//                 },
//                 {
//                   "text": "Chittorgarh",
//                   "link": "https://www.swiggy.com/city/chittorgarh"
//                 },
//                 {
//                   "text": "Dholpur",
//                   "link": "https://www.swiggy.com/city/dholpur"
//                 },
//                 {
//                   "text": "Uluberia",
//                   "link": "https://www.swiggy.com/city/uluberia"
//                 },
//                 {
//                   "text": "Nabadwip",
//                   "link": "https://www.swiggy.com/city/nabadwip"
//                 },
//                 {
//                   "text": "Bongaon",
//                   "link": "https://www.swiggy.com/city/bongaon"
//                 },
//                 {
//                   "text": "Kanchrapara",
//                   "link": "https://www.swiggy.com/city/kanchrapara"
//                 },
//                 {
//                   "text": "Habra",
//                   "link": "https://www.swiggy.com/city/habra"
//                 },
//                 {
//                   "text": "Firozabad",
//                   "link": "https://www.swiggy.com/city/firozabad"
//                 },
//                 {
//                   "text": "Nalgonda",
//                   "link": "https://www.swiggy.com/city/nalgonda"
//                 },
//                 {
//                   "text": "Chandrapur",
//                   "link": "https://www.swiggy.com/city/chandrapur"
//                 },
//                 {
//                   "text": "Bijapur",
//                   "link": "https://www.swiggy.com/city/bijapur"
//                 },
//                 {
//                   "text": "Bhusawal",
//                   "link": "https://www.swiggy.com/city/bhusawal"
//                 },
//                 {
//                   "text": "Raichur",
//                   "link": "https://www.swiggy.com/city/raichur"
//                 },
//                 {
//                   "text": "Bahraich",
//                   "link": "https://www.swiggy.com/city/bahraich"
//                 },
//                 {
//                   "text": "Azamgarh",
//                   "link": "https://www.swiggy.com/city/azamgarh"
//                 },
//                 {
//                   "text": "Bahadurgarh",
//                   "link": "https://www.swiggy.com/city/bahadurgarh"
//                 },
//                 {
//                   "text": "Jind",
//                   "link": "https://www.swiggy.com/city/jind"
//                 },
//                 {
//                   "text": "Rewari",
//                   "link": "https://www.swiggy.com/city/rewari"
//                 },
//                 {
//                   "text": "Palwal",
//                   "link": "https://www.swiggy.com/city/palwal"
//                 },
//                 {
//                   "text": "Hathras",
//                   "link": "https://www.swiggy.com/city/hathras"
//                 },
//                 {
//                   "text": "Sambalpur",
//                   "link": "https://www.swiggy.com/city/sambalpur"
//                 },
//                 {
//                   "text": "Banda",
//                   "link": "https://www.swiggy.com/city/banda"
//                 },
//                 {
//                   "text": "Hoshiarpur",
//                   "link": "https://www.swiggy.com/city/hoshiarpur"
//                 },
//                 {
//                   "text": "Faridkot",
//                   "link": "https://www.swiggy.com/city/faridkot"
//                 },
//                 {
//                   "text": "Mandsaur",
//                   "link": "https://www.swiggy.com/city/mandsaur"
//                 },
//                 {
//                   "text": "Suryapet",
//                   "link": "https://www.swiggy.com/city/suryapet"
//                 },
//                 {
//                   "text": "Adilabad",
//                   "link": "https://www.swiggy.com/city/adilabad"
//                 },
//                 {
//                   "text": "Narasaraopet",
//                   "link": "https://www.swiggy.com/city/narasaraopet"
//                 },
//                 {
//                   "text": "Faizabad",
//                   "link": "https://www.swiggy.com/city/faizabad"
//                 },
//                 {
//                   "text": "Tadpatri",
//                   "link": "https://www.swiggy.com/city/tadpatri"
//                 },
//                 {
//                   "text": "Gonda",
//                   "link": "https://www.swiggy.com/city/gonda"
//                 },
//                 {
//                   "text": "Mughalsarai",
//                   "link": "https://www.swiggy.com/city/mughalsarai"
//                 },
//                 {
//                   "text": "Medinipur",
//                   "link": "https://www.swiggy.com/city/medinipur"
//                 },
//                 {
//                   "text": "Nagda",
//                   "link": "https://www.swiggy.com/city/nagda"
//                 },
//                 {
//                   "text": "Raiganj",
//                   "link": "https://www.swiggy.com/city/raiganj"
//                 },
//                 {
//                   "text": "Deoria City",
//                   "link": "https://www.swiggy.com/city/deoria-city"
//                 },
//                 {
//                   "text": "Sultanpur",
//                   "link": "https://www.swiggy.com/city/sultanpur"
//                 },
//                 {
//                   "text": "Shamli",
//                   "link": "https://www.swiggy.com/city/shamli"
//                 },
//                 {
//                   "text": "Krishnanagar",
//                   "link": "https://www.swiggy.com/city/krishnanagar"
//                 },
//                 {
//                   "text": "Ballia",
//                   "link": "https://www.swiggy.com/city/ballia"
//                 },
//                 {
//                   "text": "Guntakal",
//                   "link": "https://www.swiggy.com/city/guntakal"
//                 },
//                 {
//                   "text": "Miryalaguda",
//                   "link": "https://www.swiggy.com/city/miryalaguda"
//                 },
//                 {
//                   "text": "Etah",
//                   "link": "https://www.swiggy.com/city/etah"
//                 },
//                 {
//                   "text": "Berhampore",
//                   "link": "https://www.swiggy.com/city/berhampore"
//                 },
//                 {
//                   "text": "Gudivada",
//                   "link": "https://www.swiggy.com/city/gudivada"
//                 },
//                 {
//                   "text": "Haldia",
//                   "link": "https://www.swiggy.com/city/haldia"
//                 },
//                 {
//                   "text": "Santipur",
//                   "link": "https://www.swiggy.com/city/santipur"
//                 },
//                 {
//                   "text": "Basirhat",
//                   "link": "https://www.swiggy.com/city/basirhat"
//                 },
//                 {
//                   "text": "Udgir",
//                   "link": "https://www.swiggy.com/city/udgir"
//                 },
//                 {
//                   "text": "Proddatur",
//                   "link": "https://www.swiggy.com/city/proddatur"
//                 },
//                 {
//                   "text": "Nagapattinam",
//                   "link": "https://www.swiggy.com/city/nagapattinam"
//                 },
//                 {
//                   "text": "Chikmagalur",
//                   "link": "https://www.swiggy.com/city/chikmagalur"
//                 },
//                 {
//                   "text": "Chandausi",
//                   "link": "https://www.swiggy.com/city/chandausi"
//                 },
//                 {
//                   "text": "Bhind",
//                   "link": "https://www.swiggy.com/city/bhind"
//                 },
//                 {
//                   "text": "Mandya",
//                   "link": "https://www.swiggy.com/city/mandya"
//                 },
//                 {
//                   "text": "Bagalkot",
//                   "link": "https://www.swiggy.com/city/bagalkot"
//                 },
//                 {
//                   "text": "Nandurbar",
//                   "link": "https://www.swiggy.com/city/nandurbar"
//                 },
//                 {
//                   "text": "Chitradurga",
//                   "link": "https://www.swiggy.com/city/chitradurga"
//                 },
//                 {
//                   "text": "Osmanabad",
//                   "link": "https://www.swiggy.com/city/osmanabad"
//                 },
//                 {
//                   "text": "Modinagar",
//                   "link": "https://www.swiggy.com/city/modinagar"
//                 },
//                 {
//                   "text": "Gadag-Betigeri",
//                   "link": "https://www.swiggy.com/city/gadag-betigeri"
//                 },
//                 {
//                   "text": "Hoshangabad",
//                   "link": "https://www.swiggy.com/city/hoshangabad"
//                 },
//                 {
//                   "text": "Jaunpur",
//                   "link": "https://www.swiggy.com/city/jaunpur"
//                 },
//                 {
//                   "text": "Port Blair",
//                   "link": "https://www.swiggy.com/city/port-blair"
//                 },
//                 {
//                   "text": "Jorhat",
//                   "link": "https://www.swiggy.com/city/jorhat"
//                 },
//                 {
//                   "text": "Nandyal",
//                   "link": "https://www.swiggy.com/city/nandyal"
//                 },
//                 {
//                   "text": "Biharsharif",
//                   "link": "https://www.swiggy.com/city/biharsharif"
//                 },
//                 {
//                   "text": "Buxar",
//                   "link": "https://www.swiggy.com/city/buxar"
//                 },
//                 {
//                   "text": "Siwan",
//                   "link": "https://www.swiggy.com/city/siwan"
//                 },
//                 {
//                   "text": "Dehri",
//                   "link": "https://www.swiggy.com/city/dehri"
//                 },
//                 {
//                   "text": "Bettiah",
//                   "link": "https://www.swiggy.com/city/bettiah"
//                 },
//                 {
//                   "text": "Kishanganj",
//                   "link": "https://www.swiggy.com/city/kishanganj"
//                 },
//                 {
//                   "text": "Saharsa",
//                   "link": "https://www.swiggy.com/city/saharsa"
//                 },
//                 {
//                   "text": "Hajipur",
//                   "link": "https://www.swiggy.com/city/hajipur"
//                 },
//                 {
//                   "text": "Motihari",
//                   "link": "https://www.swiggy.com/city/motihari"
//                 },
//                 {
//                   "text": "Sasaram",
//                   "link": "https://www.swiggy.com/city/sasaram"
//                 },
//                 {
//                   "text": "Munger",
//                   "link": "https://www.swiggy.com/city/munger"
//                 },
//                 {
//                   "text": "Katihar",
//                   "link": "https://www.swiggy.com/city/katihar"
//                 },
//                 {
//                   "text": "Arrah",
//                   "link": "https://www.swiggy.com/city/arrah"
//                 },
//                 {
//                   "text": "Srikakulam",
//                   "link": "https://www.swiggy.com/city/srikakulam"
//                 },
//                 {
//                   "text": "Begusarai",
//                   "link": "https://www.swiggy.com/city/begusarai"
//                 },
//                 {
//                   "text": "Neyveli",
//                   "link": "https://www.swiggy.com/city/neyveli"
//                 },
//                 {
//                   "text": "Waidhan",
//                   "link": "https://www.swiggy.com/city/waidhan"
//                 },
//                 {
//                   "text": "Markapur",
//                   "link": "https://www.swiggy.com/city/markapur"
//                 },
//                 {
//                   "text": "Chikkaballapur",
//                   "link": "https://www.swiggy.com/city/chikkaballapur"
//                 },
//                 {
//                   "text": "Bhatkal",
//                   "link": "https://www.swiggy.com/city/bhatkal"
//                 },
//                 {
//                   "text": "Gokak",
//                   "link": "https://www.swiggy.com/city/gokak"
//                 },
//                 {
//                   "text": "Itarsi",
//                   "link": "https://www.swiggy.com/city/itarsi"
//                 },
//                 {
//                   "text": "Dhar",
//                   "link": "https://www.swiggy.com/city/dhar"
//                 },
//                 {
//                   "text": "Chalisgaon",
//                   "link": "https://www.swiggy.com/city/chalisgaon"
//                 },
//                 {
//                   "text": "Thiruvallur",
//                   "link": "https://www.swiggy.com/city/thiruvallur"
//                 },
//                 {
//                   "text": "Namakkal",
//                   "link": "https://www.swiggy.com/city/namakkal"
//                 },
//                 {
//                   "text": "Dharmapuri",
//                   "link": "https://www.swiggy.com/city/dharmapuri"
//                 },
//                 {
//                   "text": "Bhandara",
//                   "link": "https://www.swiggy.com/city/bhandara"
//                 },
//                 {
//                   "text": "Virudhunagar",
//                   "link": "https://www.swiggy.com/city/virudhunagar"
//                 },
//                 {
//                   "text": "Siddipet",
//                   "link": "https://www.swiggy.com/city/siddipet"
//                 },
//                 {
//                   "text": "Gadwal",
//                   "link": "https://www.swiggy.com/city/gadwal"
//                 },
//                 {
//                   "text": "Bodhan-Rural",
//                   "link": "https://www.swiggy.com/city/bodhan-rural"
//                 },
//                 {
//                   "text": "Kamareddy",
//                   "link": "https://www.swiggy.com/city/kamareddy"
//                 },
//                 {
//                   "text": "Jhunjhunu",
//                   "link": "https://www.swiggy.com/city/jhunjhunu"
//                 },
//                 {
//                   "text": "Kapurthala",
//                   "link": "https://www.swiggy.com/city/kapurthala"
//                 },
//                 {
//                   "text": "Sangrur",
//                   "link": "https://www.swiggy.com/city/sangrur"
//                 },
//                 {
//                   "text": "Gurdaspur",
//                   "link": "https://www.swiggy.com/city/gurdaspur"
//                 },
//                 {
//                   "text": "Ramgarh",
//                   "link": "https://www.swiggy.com/city/ramgarh"
//                 },
//                 {
//                   "text": "Bantwal",
//                   "link": "https://www.swiggy.com/city/bantwal"
//                 },
//                 {
//                   "text": "Doddaballapura",
//                   "link": "https://www.swiggy.com/city/doddaballapura"
//                 },
//                 {
//                   "text": "Buldana",
//                   "link": "https://www.swiggy.com/city/buldana"
//                 },
//                 {
//                   "text": "Karad",
//                   "link": "https://www.swiggy.com/city/karad"
//                 },
//                 {
//                   "text": "Krishnagiri",
//                   "link": "https://www.swiggy.com/city/krishnagiri"
//                 },
//                 {
//                   "text": "Tiptur",
//                   "link": "https://www.swiggy.com/city/tiptur"
//                 },
//                 {
//                   "text": "Bhadrachalam",
//                   "link": "https://www.swiggy.com/city/bhadrachalam"
//                 },
//                 {
//                   "text": "Mancherial",
//                   "link": "https://www.swiggy.com/city/mancherial"
//                 },
//                 {
//                   "text": "Balrampur",
//                   "link": "https://www.swiggy.com/city/balrampur"
//                 },
//                 {
//                   "text": "Bharabanki",
//                   "link": "https://www.swiggy.com/city/bharabanki"
//                 },
//                 {
//                   "text": "Malout",
//                   "link": "https://www.swiggy.com/city/malout"
//                 },
//                 {
//                   "text": "Fatehgarh Sahib",
//                   "link": "https://www.swiggy.com/city/fatehgarh-sahib"
//                 },
//                 {
//                   "text": "Ropar",
//                   "link": "https://www.swiggy.com/city/ropar"
//                 },
//                 {
//                   "text": "Nangal",
//                   "link": "https://www.swiggy.com/city/nangal"
//                 },
//                 {
//                   "text": "Narnaul",
//                   "link": "https://www.swiggy.com/city/narnaul"
//                 },
//                 {
//                   "text": "Naraingarh",
//                   "link": "https://www.swiggy.com/city/naraingarh"
//                 },
//                 {
//                   "text": "Himmatnagar",
//                   "link": "https://www.swiggy.com/city/himmatnagar"
//                 },
//                 {
//                   "text": "Dausa",
//                   "link": "https://www.swiggy.com/city/dausa"
//                 },
//                 {
//                   "text": "Jahanabad",
//                   "link": "https://www.swiggy.com/city/jahanabad"
//                 },
//                 {
//                   "text": "Samastipur",
//                   "link": "https://www.swiggy.com/city/samastipur"
//                 },
//                 {
//                   "text": "Purnea",
//                   "link": "https://www.swiggy.com/city/purnea"
//                 },
//                 {
//                   "text": "Berhampur",
//                   "link": "https://www.swiggy.com/city/berhampur"
//                 },
//                 {
//                   "text": "Malda",
//                   "link": "https://www.swiggy.com/city/malda"
//                 },
//                 {
//                   "text": "Tuni",
//                   "link": "https://www.swiggy.com/city/tuni"
//                 },
//                 {
//                   "text": "Puttur",
//                   "link": "https://www.swiggy.com/city/puttur"
//                 },
//                 {
//                   "text": "Rayachoty",
//                   "link": "https://www.swiggy.com/city/rayachoty"
//                 },
//                 {
//                   "text": "Nirmal",
//                   "link": "https://www.swiggy.com/city/nirmal"
//                 },
//                 {
//                   "text": "Mirzapur",
//                   "link": "https://www.swiggy.com/city/mirzapur"
//                 },
//                 {
//                   "text": "Tanuku",
//                   "link": "https://www.swiggy.com/city/tanuku"
//                 },
//                 {
//                   "text": "Dahod",
//                   "link": "https://www.swiggy.com/city/dahod"
//                 },
//                 {
//                   "text": "Barmer",
//                   "link": "https://www.swiggy.com/city/barmer"
//                 },
//                 {
//                   "text": "Gangapur City",
//                   "link": "https://www.swiggy.com/city/gangapur-city"
//                 },
//                 {
//                   "text": "Mandi Gobindgarh",
//                   "link": "https://www.swiggy.com/city/mandi-gobindgarh"
//                 },
//                 {
//                   "text": "Tarn Taran Sahib",
//                   "link": "https://www.swiggy.com/city/tarn-taran-sahib"
//                 },
//                 {
//                   "text": "Nakodar",
//                   "link": "https://www.swiggy.com/city/nakodar"
//                 },
//                 {
//                   "text": "Ankleshwar",
//                   "link": "https://www.swiggy.com/city/ankleshwar"
//                 },
//                 {
//                   "text": "Vyara",
//                   "link": "https://www.swiggy.com/city/vyara"
//                 },
//                 {
//                   "text": "Bardoli",
//                   "link": "https://www.swiggy.com/city/bardoli"
//                 },
//                 {
//                   "text": "Halol",
//                   "link": "https://www.swiggy.com/city/halol"
//                 },
//                 {
//                   "text": "Bijnor",
//                   "link": "https://www.swiggy.com/city/bijnor"
//                 },
//                 {
//                   "text": "Sangamner",
//                   "link": "https://www.swiggy.com/city/sangamner"
//                 },
//                 {
//                   "text": "Baramati",
//                   "link": "https://www.swiggy.com/city/baramati"
//                 },
//                 {
//                   "text": "Betul",
//                   "link": "https://www.swiggy.com/city/betul"
//                 },
//                 {
//                   "text": "Chhatarpur",
//                   "link": "https://www.swiggy.com/city/chhatarpur"
//                 },
//                 {
//                   "text": "Balaghat",
//                   "link": "https://www.swiggy.com/city/balaghat"
//                 },
//                 {
//                   "text": "Sivakasi",
//                   "link": "https://www.swiggy.com/city/sivakasi"
//                 },
//                 {
//                   "text": "Viluppuram",
//                   "link": "https://www.swiggy.com/city/viluppuram"
//                 },
//                 {
//                   "text": "Ramanathapuram",
//                   "link": "https://www.swiggy.com/city/ramanathapuram"
//                 },
//                 {
//                   "text": "Sirsi",
//                   "link": "https://www.swiggy.com/city/sirsi"
//                 },
//                 {
//                   "text": "Theni",
//                   "link": "https://www.swiggy.com/city/theni"
//                 },
//                 {
//                   "text": "Karur",
//                   "link": "https://www.swiggy.com/city/karur"
//                 },
//                 {
//                   "text": "Karwar",
//                   "link": "https://www.swiggy.com/city/karwar"
//                 },
//                 {
//                   "text": "Sindhanur",
//                   "link": "https://www.swiggy.com/city/sindhanur"
//                 },
//                 {
//                   "text": "Kannur",
//                   "link": "https://www.swiggy.com/city/kannur"
//                 },
//                 {
//                   "text": "Noida 1",
//                   "link": "https://www.swiggy.com/city/noida-1"
//                 },
//                 {
//                   "text": "Thiruvalla",
//                   "link": "https://www.swiggy.com/city/thiruvalla"
//                 },
//                 {
//                   "text": "Thodupuzha",
//                   "link": "https://www.swiggy.com/city/thodupuzha"
//                 },
//                 {
//                   "text": "Kadiri",
//                   "link": "https://www.swiggy.com/city/kadiri"
//                 },
//                 {
//                   "text": "Kavali",
//                   "link": "https://www.swiggy.com/city/kavali"
//                 },
//                 {
//                   "text": "Tezpur",
//                   "link": "https://www.swiggy.com/city/tezpur"
//                 },
//                 {
//                   "text": "Kayamkulam",
//                   "link": "https://www.swiggy.com/city/kayamkulam"
//                 },
//                 {
//                   "text": "Kottarakkara",
//                   "link": "https://www.swiggy.com/city/kottarakkara"
//                 },
//                 {
//                   "text": "Mandi Dabwali",
//                   "link": "https://www.swiggy.com/city/mandi-dabwali"
//                 },
//                 {
//                   "text": "Fatehabad",
//                   "link": "https://www.swiggy.com/city/fatehabad"
//                 },
//                 {
//                   "text": "Jagraon",
//                   "link": "https://www.swiggy.com/city/jagraon"
//                 },
//                 {
//                   "text": "Mansa",
//                   "link": "https://www.swiggy.com/city/mansa"
//                 },
//                 {
//                   "text": "Pinjore City",
//                   "link": "https://www.swiggy.com/city/pinjore-city"
//                 },
//                 {
//                   "text": "Fazilka",
//                   "link": "https://www.swiggy.com/city/fazilka"
//                 },
//                 {
//                   "text": "Baddi",
//                   "link": "https://www.swiggy.com/city/baddi"
//                 },
//                 {
//                   "text": "Solan",
//                   "link": "https://www.swiggy.com/city/solan"
//                 },
//                 {
//                   "text": "Daltonganj",
//                   "link": "https://www.swiggy.com/city/daltonganj"
//                 },
//                 {
//                   "text": "Balangir",
//                   "link": "https://www.swiggy.com/city/balangir"
//                 },
//                 {
//                   "text": "Kothagudem",
//                   "link": "https://www.swiggy.com/city/kothagudem"
//                 },
//                 {
//                   "text": "Hansi",
//                   "link": "https://www.swiggy.com/city/hansi"
//                 },
//                 {
//                   "text": "Aurangabad_Bihar",
//                   "link": "https://www.swiggy.com/city/aurangabadbihar"
//                 },
//                 {
//                   "text": "Gopalganj",
//                   "link": "https://www.swiggy.com/city/gopalganj"
//                 },
//                 {
//                   "text": "Jharsuguda",
//                   "link": "https://www.swiggy.com/city/jharsuguda"
//                 },
//                 {
//                   "text": "Tohana",
//                   "link": "https://www.swiggy.com/city/tohana"
//                 },
//                 {
//                   "text": "Jhalawar",
//                   "link": "https://www.swiggy.com/city/jhalawar"
//                 },
//                 {
//                   "text": "Sivasagar",
//                   "link": "https://www.swiggy.com/city/sivasagar"
//                 },
//                 {
//                   "text": "Bagdogra",
//                   "link": "https://www.swiggy.com/city/bagdogra"
//                 },
//                 {
//                   "text": "Kendrapada",
//                   "link": "https://www.swiggy.com/city/kendrapada"
//                 },
//                 {
//                   "text": "Mallapuram (Do not Use)",
//                   "link": "https://www.swiggy.com/city/mallapuram-do-not-use"
//                 },
//                 {
//                   "text": "Veraval",
//                   "link": "https://www.swiggy.com/city/veraval"
//                 },
//                 {
//                   "text": "Daman",
//                   "link": "https://www.swiggy.com/city/daman"
//                 },
//                 {
//                   "text": "Chiplun",
//                   "link": "https://www.swiggy.com/city/chiplun"
//                 },
//                 {
//                   "text": "Silvassa",
//                   "link": "https://www.swiggy.com/city/silvassa"
//                 },
//                 {
//                   "text": "Lonavla",
//                   "link": "https://www.swiggy.com/city/lonavla"
//                 },
//                 {
//                   "text": "Bongaigaon",
//                   "link": "https://www.swiggy.com/city/bongaigaon"
//                 },
//                 {
//                   "text": "Golaghat",
//                   "link": "https://www.swiggy.com/city/golaghat"
//                 },
//                 {
//                   "text": "Duliajan",
//                   "link": "https://www.swiggy.com/city/duliajan"
//                 },
//                 {
//                   "text": "Bolpur",
//                   "link": "https://www.swiggy.com/city/bolpur"
//                 },
//                 {
//                   "text": "Madhubani",
//                   "link": "https://www.swiggy.com/city/madhubani"
//                 },
//                 {
//                   "text": "Balasore",
//                   "link": "https://www.swiggy.com/city/balasore"
//                 },
//                 {
//                   "text": "Palampur",
//                   "link": "https://www.swiggy.com/city/palampur"
//                 },
//                 {
//                   "text": "Kotdwar",
//                   "link": "https://www.swiggy.com/city/kotdwar"
//                 },
//                 {
//                   "text": "Koppal",
//                   "link": "https://www.swiggy.com/city/koppal"
//                 },
//                 {
//                   "text": "Chikhli",
//                   "link": "https://www.swiggy.com/city/chikhli"
//                 },
//                 {
//                   "text": "Dahanu",
//                   "link": "https://www.swiggy.com/city/dahanu"
//                 },
//                 {
//                   "text": "Itanagar",
//                   "link": "https://www.swiggy.com/city/itanagar"
//                 },
//                 {
//                   "text": "Rangpo",
//                   "link": "https://www.swiggy.com/city/rangpo"
//                 },
//                 {
//                   "text": "Aizawl",
//                   "link": "https://www.swiggy.com/city/aizawl"
//                 },
//                 {
//                   "text": "Gangtok",
//                   "link": "https://www.swiggy.com/city/gangtok"
//                 },
//                 {
//                   "text": "Mayiladuthurai",
//                   "link": "https://www.swiggy.com/city/mayiladuthurai"
//                 },
//                 {
//                   "text": "Kannauj",
//                   "link": "https://www.swiggy.com/city/kannauj"
//                 },
//                 {
//                   "text": "Cooch Behar",
//                   "link": "https://www.swiggy.com/city/cooch-behar"
//                 },
//                 {
//                   "text": "Palani",
//                   "link": "https://www.swiggy.com/city/palani"
//                 },
//                 {
//                   "text": "Bilimora",
//                   "link": "https://www.swiggy.com/city/bilimora"
//                 },
//                 {
//                   "text": "Boisar",
//                   "link": "https://www.swiggy.com/city/boisar"
//                 },
//                 {
//                   "text": "Kohima",
//                   "link": "https://www.swiggy.com/city/kohima"
//                 },
//                 {
//                   "text": "Naharlagun",
//                   "link": "https://www.swiggy.com/city/naharlagun"
//                 },
//                 {
//                   "text": "Dumka",
//                   "link": "https://www.swiggy.com/city/dumka"
//                 },
//                 {
//                   "text": "Rajsamand",
//                   "link": "https://www.swiggy.com/city/rajsamand"
//                 },
//                 {
//                   "text": "Gauriganj",
//                   "link": "https://www.swiggy.com/city/gauriganj"
//                 },
//                 {
//                   "text": "Bodinayakanur",
//                   "link": "https://www.swiggy.com/city/bodinayakanur"
//                 },
//                 {
//                   "text": "Bhawanipatna",
//                   "link": "https://www.swiggy.com/city/bhawanipatna"
//                 },
//                 {
//                   "text": "Baran",
//                   "link": "https://www.swiggy.com/city/baran"
//                 },
//                 {
//                   "text": "Narsinghpur",
//                   "link": "https://www.swiggy.com/city/narsinghpur"
//                 },
//                 {
//                   "text": "Kovilpatti",
//                   "link": "https://www.swiggy.com/city/kovilpatti"
//                 },
//                 {
//                   "text": "Pusad",
//                   "link": "https://www.swiggy.com/city/pusad"
//                 },
//                 {
//                   "text": "Kendujhar",
//                   "link": "https://www.swiggy.com/city/kendujhar"
//                 },
//                 {
//                   "text": "Manali",
//                   "link": "https://www.swiggy.com/city/manali"
//                 },
//                 {
//                   "text": "Diu",
//                   "link": "https://www.swiggy.com/city/diu"
//                 },
//                 {
//                   "text": "Khamgaon",
//                   "link": "https://www.swiggy.com/city/khamgaon"
//                 },
//                 {
//                   "text": "Ramanagara",
//                   "link": "https://www.swiggy.com/city/ramanagara"
//                 },
//                 {
//                   "text": "Alipurduar",
//                   "link": "https://www.swiggy.com/city/alipurduar"
//                 },
//                 {
//                   "text": "Almora",
//                   "link": "https://www.swiggy.com/city/almora"
//                 },
//                 {
//                   "text": "Jhargram",
//                   "link": "https://www.swiggy.com/city/jhargram"
//                 },
//                 {
//                   "text": "Arambagh",
//                   "link": "https://www.swiggy.com/city/arambagh"
//                 },
//                 {
//                   "text": "Bhadohi",
//                   "link": "https://www.swiggy.com/city/bhadohi"
//                 },
//                 {
//                   "text": "Tenkasi",
//                   "link": "https://www.swiggy.com/city/tenkasi"
//                 },
//                 {
//                   "text": "Srivilliputhur",
//                   "link": "https://www.swiggy.com/city/srivilliputhur"
//                 },
//                 {
//                   "text": "Chidambaram",
//                   "link": "https://www.swiggy.com/city/chidambaram"
//                 },
//                 {
//                   "text": "Rajgarh",
//                   "link": "https://www.swiggy.com/city/rajgarh"
//                 },
//                 {
//                   "text": "Pratapgarh",
//                   "link": "https://www.swiggy.com/city/pratapgarh"
//                 },
//                 {
//                   "text": "Washim",
//                   "link": "https://www.swiggy.com/city/washim"
//                 },
//                 {
//                   "text": "Raghunathpur",
//                   "link": "https://www.swiggy.com/city/raghunathpur"
//                 },
//                 {
//                   "text": "Suri",
//                   "link": "https://www.swiggy.com/city/suri"
//                 },
//                 {
//                   "text": "Kadayanallur",
//                   "link": "https://www.swiggy.com/city/kadayanallur"
//                 },
//                 {
//                   "text": "Thiruvarur",
//                   "link": "https://www.swiggy.com/city/thiruvarur"
//                 },
//                 {
//                   "text": "Ranaghat-WB",
//                   "link": "https://www.swiggy.com/city/ranaghat-wb"
//                 },
//                 {
//                   "text": "Wayanad",
//                   "link": "https://www.swiggy.com/city/wayanad"
//                 },
//                 {
//                   "text": "Perambalur",
//                   "link": "https://www.swiggy.com/city/perambalur"
//                 },
//                 {
//                   "text": "Paramakudi",
//                   "link": "https://www.swiggy.com/city/paramakudi"
//                 },
//                 {
//                   "text": "Bela Pratapgarh",
//                   "link": "https://www.swiggy.com/city/bela-pratapgarh"
//                 },
//                 {
//                   "text": "Mahoba",
//                   "link": "https://www.swiggy.com/city/mahoba"
//                 },
//                 {
//                   "text": "Sitamarhi",
//                   "link": "https://www.swiggy.com/city/sitamarhi"
//                 },
//                 {
//                   "text": "Chakdaha",
//                   "link": "https://www.swiggy.com/city/chakdaha"
//                 },
//                 {
//                   "text": "Khalilabad",
//                   "link": "https://www.swiggy.com/city/khalilabad"
//                 },
//                 {
//                   "text": "Pattukkottai",
//                   "link": "https://www.swiggy.com/city/pattukkottai"
//                 },
//                 {
//                   "text": "Tindivanam",
//                   "link": "https://www.swiggy.com/city/tindivanam"
//                 },
//                 {
//                   "text": "Tiruttani",
//                   "link": "https://www.swiggy.com/city/tiruttani"
//                 },
//                 {
//                   "text": "Gangarampur",
//                   "link": "https://www.swiggy.com/city/gangarampur"
//                 },
//                 {
//                   "text": "Dharapuram",
//                   "link": "https://www.swiggy.com/city/dharapuram"
//                 },
//                 {
//                   "text": "Arakkonam",
//                   "link": "https://www.swiggy.com/city/arakkonam"
//                 },
//                 {
//                   "text": "Sirkali",
//                   "link": "https://www.swiggy.com/city/sirkali"
//                 },
//                 {
//                   "text": "Mettupalayam",
//                   "link": "https://www.swiggy.com/city/mettupalayam"
//                 },
//                 {
//                   "text": "Digboi",
//                   "link": "https://www.swiggy.com/city/digboi"
//                 },
//                 {
//                   "text": "Biswanath Chariali",
//                   "link": "https://www.swiggy.com/city/biswanath-chariali"
//                 },
//                 {
//                   "text": "Nalbari",
//                   "link": "https://www.swiggy.com/city/nalbari"
//                 },
//                 {
//                   "text": "Shirdi city",
//                   "link": "https://www.swiggy.com/city/shirdi-city"
//                 },
//                 {
//                   "text": "Mukerian",
//                   "link": "https://www.swiggy.com/city/mukerian"
//                 },
//                 {
//                   "text": "Hosur",
//                   "link": "https://www.swiggy.com/city/hosur"
//                 },
//                 {
//                   "text": "Palakollu",
//                   "link": "https://www.swiggy.com/city/palakollu"
//                 },
//                 {
//                   "text": "Ravulapalem",
//                   "link": "https://www.swiggy.com/city/ravulapalem"
//                 },
//                 {
//                   "text": "Barh",
//                   "link": "https://www.swiggy.com/city/barh"
//                 },
//                 {
//                   "text": "Palghar",
//                   "link": "https://www.swiggy.com/city/palghar"
//                 },
//                 {
//                   "text": "Kushalnagar",
//                   "link": "https://www.swiggy.com/city/kushalnagar"
//                 },
//                 {
//                   "text": "Dungarpur",
//                   "link": "https://www.swiggy.com/city/dungarpur"
//                 },
//                 {
//                   "text": "Chaibasa",
//                   "link": "https://www.swiggy.com/city/chaibasa"
//                 },
//                 {
//                   "text": "Haveri",
//                   "link": "https://www.swiggy.com/city/haveri"
//                 },
//                 {
//                   "text": "Karaikal",
//                   "link": "https://www.swiggy.com/city/karaikal"
//                 },
//                 {
//                   "text": "Jjajjar",
//                   "link": "https://www.swiggy.com/city/jjajjar"
//                 },
//                 {
//                   "text": "Kokrajhar",
//                   "link": "https://www.swiggy.com/city/kokrajhar"
//                 },
//                 {
//                   "text": "Rangia",
//                   "link": "https://www.swiggy.com/city/rangia"
//                 },
//                 {
//                   "text": "Hamirpur",
//                   "link": "https://www.swiggy.com/city/hamirpur"
//                 },
//                 {
//                   "text": "Una",
//                   "link": "https://www.swiggy.com/city/una"
//                 },
//                 {
//                   "text": "Sulthan Bathery",
//                   "link": "https://www.swiggy.com/city/sulthan-bathery"
//                 },
//                 {
//                   "text": "Rayagada",
//                   "link": "https://www.swiggy.com/city/rayagada"
//                 },
//                 {
//                   "text": "Paradeep",
//                   "link": "https://www.swiggy.com/city/paradeep"
//                 },
//                 {
//                   "text": "Mandapeta",
//                   "link": "https://www.swiggy.com/city/mandapeta"
//                 },
//                 {
//                   "text": "Jamui",
//                   "link": "https://www.swiggy.com/city/jamui"
//                 },
//                 {
//                   "text": "Pilkhuwa",
//                   "link": "https://www.swiggy.com/city/pilkhuwa"
//                 },
//                 {
//                   "text": "Parvathipuram",
//                   "link": "https://www.swiggy.com/city/parvathipuram"
//                 },
//                 {
//                   "text": "Ambajogai",
//                   "link": "https://www.swiggy.com/city/ambajogai"
//                 },
//                 {
//                   "text": "Araria",
//                   "link": "https://www.swiggy.com/city/araria"
//                 },
//                 {
//                   "text": "North Lakhimpur",
//                   "link": "https://www.swiggy.com/city/north-lakhimpur"
//                 },
//                 {
//                   "text": "Rajampet",
//                   "link": "https://www.swiggy.com/city/rajampet"
//                 },
//                 {
//                   "text": "Udumalaipettai",
//                   "link": "https://www.swiggy.com/city/udumalaipettai"
//                 },
//                 {
//                   "text": "Tirupattur",
//                   "link": "https://www.swiggy.com/city/tirupattur"
//                 },
//                 {
//                   "text": "Hojai",
//                   "link": "https://www.swiggy.com/city/hojai"
//                 },
//                 {
//                   "text": "Khagaria",
//                   "link": "https://www.swiggy.com/city/khagaria"
//                 },
//                 {
//                   "text": "Dasuya",
//                   "link": "https://www.swiggy.com/city/dasuya"
//                 },
//                 {
//                   "text": "Gudur",
//                   "link": "https://www.swiggy.com/city/gudur"
//                 },
//                 {
//                   "text": "Sullurpeta",
//                   "link": "https://www.swiggy.com/city/sullurpeta"
//                 },
//                 {
//                   "text": "Piler",
//                   "link": "https://www.swiggy.com/city/piler"
//                 },
//                 {
//                   "text": "SankaranKoil",
//                   "link": "https://www.swiggy.com/city/sankarankoil"
//                 },
//                 {
//                   "text": "Nabha",
//                   "link": "https://www.swiggy.com/city/nabha"
//                 },
//                 {
//                   "text": "LPU - Phagwara",
//                   "link": "https://www.swiggy.com/city/lpu-phagwara"
//                 },
//                 {
//                   "text": "Jangipur",
//                   "link": "https://www.swiggy.com/city/jangipur"
//                 },
//                 {
//                   "text": "Roha",
//                   "link": "https://www.swiggy.com/city/roha"
//                 }
//               ],
//               "id": "footer_content"
//             }
//           }
//         },
//         {
//           "card": {
//             "card": {
//               "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
//               "citySlug": "jalandhar",
//               "lat": "31.3260152",
//               "lng": "75.57618289999999",
//               "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
//               "gandalfRequest": "{\"sortAttribute\":\"relevance\",\"isFiltered\":false,\"queryId\":\"seo-data-5ee82af7-6755-4583-8d3d-1c1e747f032f\",\"seoParams\":{\"apiName\":\"FoodHomePage\",\"brandId\":\"\",\"seoUrl\":\"www.swiggy.com\",\"pageType\":\"FOOD_HOME_PAGE\"}}",
//               "id": "meta_data",
//               "metaInfo": {
//                 "pageType": "FOOD_HOME_PAGE",
//                 "pageTitle": "Food home delivery | Swiggy"
//               },
//               "screenType": "filteredCollection",
//               "seoParams": {
//                 "apiName": "FoodHomePage",
//                 "seoUrl": "www.swiggy.com",
//                 "pageType": "FOOD_HOME_PAGE"
//               }
//             }
//           }
//         }
//       ],
//       "firstOffsetRequest": true,
//       "cacheExpiryTime": 240,
//       "nextFetch": 1
//     },
//     "tid": "05da36ce-ed31-4298-938f-4f634c1842c3",
//     "sid": "8mm83655-88e0-4d14-8467-90e5a5f9c480",
//     "deviceId": "68d5e199-540d-88d1-f833-9473ba8323ca",
//     "csrfToken": "0JiqfV5CAcnf-Zi9eqbubOO1mD7c5WXUT7ZU6CPk"
//   }

const Header =()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNfydBcY6mBLVm0goD73pk1aGfIweGaM4_w&usqp=CAU"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>

                </ul>

            </div>
            
        </div>
    )
}

// doordash
// const RestaurantCard =(props)=>{
//      const {
//         headerImgUrl,
//         name,
//         averageRating,
//         description
//      } = props?.respData
//     return (
//         <div className="res-card">
//             <img className="img-container"  src ={headerImgUrl}></img>
//             <h3>{name}</h3>
//             <h3>{averageRating}</h3>
//             <h3>{description}</h3>
          
//         </div>
//     )
// }


restaurants= [
    {
      "info": {
        "id": "248278",
        "name": "AAR KAY Vaishno Dhaba (Nakodar Road)",
        "cloudinaryImageId": "siiyygdsewrchwglfyre",
        "locality": "Abadpura",
        "areaName": "Avtar Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Thalis",
          "Punjabi",
          "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "248278",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "25988",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/aar-kay-vaishno-dhaba-nakodar-road-abadpura-avtar-nagar-jalandhar-248278",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "283662",
        "name": "Aggarwal Vaishno Dhaba",
        "cloudinaryImageId": "l68iq6yh6tenyntrxwgb",
        "locality": "Vasant Vihar Road",
        "areaName": "Model Town",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Biryani",
          "Punjabi"
        ],
        "avgRating": 4.2,
        "veg": true,
        "feeDetails": {
          "restaurantId": "283662",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "27734",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/aggarwal-vaishno-dhaba-vasant-vihar-road-model-town-jalandhar-283662",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "283810",
        "name": "Yummy Delicious Till Last Bite",
        "cloudinaryImageId": "wwgslew60sfsdtfy2ijz",
        "locality": "Guru Teg Bahadur Nagar",
        "areaName": "Model Town",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Chinese",
          "Continental",
          "Italian"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "283810",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "228634",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/yummy-delicious-till-last-bite-guru-teg-bahadur-nagar-model-town-jalandhar-283810",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "137429",
        "name": "GFC- The Chaap Hub",
        "cloudinaryImageId": "gozmdkxc3riqz0ot1lcu",
        "locality": "Durga Colony",
        "areaName": "Adarsh Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "137429",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "87056",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:40:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/gfc-the-chaap-hub-durga-colony-adarsh-nagar-jalandhar-137429",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "115812",
        "name": "Bliss Vaishno Dhaba",
        "cloudinaryImageId": "hw5cdbjkyhopb3phddde",
        "locality": "Civil Line",
        "areaName": "Master Tara Singh Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Punjabi",
          "Chinese"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "115812",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "47904",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "16 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/bliss-vaishno-dhaba-civil-line-master-tara-singh-nagar-jalandhar-115812",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "285860",
        "name": "Nanak Vegetarian Dhaba",
        "cloudinaryImageId": "usllk61gnicqmykbiyrb",
        "locality": "Transport Nagar",
        "areaName": "Harnam Daspura",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "South Indian"
        ],
        "avgRating": 4.1,
        "veg": true,
        "feeDetails": {
          "restaurantId": "285860",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "143799",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nanak-vegetarian-dhaba-transport-nagar-harnam-daspura-jalandhar-285860",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "125658",
        "name": "Kanta Chhuri",
        "cloudinaryImageId": "ixcejpncyybk4kbm1tjb",
        "locality": "Krishna Nagar",
        "areaName": "Chick Chick Chownk",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Punjabi",
          "Chinese"
        ],
        "avgRating": 4.2,
        "veg": true,
        "feeDetails": {
          "restaurantId": "125658",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "114789",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kanta-chhuri-krishna-nagar-chick-chick-chownk-jalandhar-125658",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "263164",
        "name": "Hari Burger",
        "cloudinaryImageId": "ynarnd0haqjsbgrzeasx",
        "locality": "Dilbagh Nagar",
        "areaName": "North_Jalandhar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Burgers",
          "Chinese",
          "Pizzas",
          "Pastas",
          "Italian-American"
        ],
        "avgRating": 4.2,
        "veg": true,
        "feeDetails": {
          "restaurantId": "263164",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "21810",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 22:15:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hari-burger-dilbagh-nagar-north-jalandhar-jalandhar-263164",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "74858",
        "name": "Hot Drive",
        "cloudinaryImageId": "bojtrgxax2ubwyaipuka",
        "locality": "Rainbow Road",
        "areaName": "South_Jalandhar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Snacks",
          "American",
          "Thalis",
          "Fast Food"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "74858",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "97285",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hot-drive-rainbow-road-south-jalandhar-jalandhar-74858",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "98909",
        "name": "Chick Chick Restaurant (Adarsh Nagar)",
        "cloudinaryImageId": "yccnymxyzkppypoyqfet",
        "locality": "Krishna Nagar",
        "areaName": "Chick Chick Chowk",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "North Indian",
          "Chinese"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "98909",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "60329",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 22:50:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chick-chick-restaurant-adarsh-nagar-krishna-nagar-chick-chick-chowk-jalandhar-98909",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "480739",
        "name": "Aman Chicken (Ludhiana Wale) Since 1985",
        "cloudinaryImageId": "kuaurv0dd1zetgpsh11f",
        "locality": "New Jawahar Nagar",
        "areaName": "New Jawahar Nagar",
        "costForTwo": "₹310 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "480739",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "288765",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/aman-chicken-ludhiana-wale-since-1985-new-jawahar-nagar-jalandhar-480739",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "302704",
        "name": "Barbeque Nation",
        "cloudinaryImageId": "kaaglnavvlkyvqv2bjlm",
        "locality": "Rainbow Road",
        "areaName": "Model Town",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "302704",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "2438",
        "avgRatingString": "3.8",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/barbeque-nation-rainbow-road-model-town-jalandhar-302704",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "260766",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Shastri Nagar",
        "areaName": "Nakodar Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "260766",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "2",
        "avgRatingString": "3.8",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-08 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-shastri-nagar-nakodar-road-jalandhar-260766",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "284035",
        "name": "Guru Kripa Pure Vegeterian Food",
        "cloudinaryImageId": "uugvcmzfc0tvavn3dda7",
        "locality": "Shiv Nagar",
        "areaName": "GT Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Indian",
          "Chinese"
        ],
        "avgRating": 3.9,
        "veg": true,
        "feeDetails": {
          "restaurantId": "284035",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "92060",
        "avgRatingString": "3.9",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 22:35:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/guru-kripa-pure-vegeterian-food-shiv-nagar-gt-road-jalandhar-284035",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "93642",
        "name": "B4 Veg & Non Veg Dhaba",
        "cloudinaryImageId": "bjao0qsbg2yklugwa2xx",
        "locality": "Durga Colony",
        "areaName": "Adarsh Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Thalis",
          "Tandoor"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "93642",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "38654",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-08 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/b4-veg-and-non-veg-dhaba-durga-colony-adarsh-nagar-jalandhar-93642",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "80969",
        "name": "S.K Dhaba",
        "cloudinaryImageId": "hfvyztca90mf6vz6lfhy",
        "locality": "Jawahar Nagar",
        "areaName": "Shastri Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Chinese"
        ],
        "avgRating": 4.2,
        "veg": true,
        "feeDetails": {
          "restaurantId": "80969",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "173675",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:41:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/s-k-dhaba-jawahar-nagar-shastri-nagar-jalandhar-80969",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "136845",
        "name": "Dhan Guru Ramdass Sweet Shop",
        "cloudinaryImageId": "fijqroiqqvukagkvnlp2",
        "locality": "Shaheed Bagat Singh Chowk",
        "areaName": "Fentonganj",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Sweets",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "136845",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "72021",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dhan-guru-ramdass-sweet-shop-shaheed-bagat-singh-chowk-fentonganj-jalandhar-136845",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "94252",
        "name": "Billa Kulfi Corner",
        "cloudinaryImageId": "vnh3zeptkmcgt92rgsud",
        "locality": "Attari Bazar",
        "areaName": "Jatpura",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "94252",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "46003",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "15 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-07 23:55:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/billa-kulfi-corner-attari-bazar-jatpura-jalandhar-94252",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "91788",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Guru Nanak Mission Chowk",
        "areaName": "Lajpat Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "91788",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1900
        },
        "parentId": "166",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-08 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-guru-nanak-mission-chowk-lajpat-nagar-jalandhar-91788",
        "type": "WEBLINK"
      }
    }
  ]

const RestaurantCard=(props)=>{
    const {cloudinaryImageId,name,avgRating,cuisines}=props?.respData
    console.log(name);
    url='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
    return (
        <div className="res-card">
            <img className="img-container" src={url+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h3>{avgRating}</h3>
            <h3>{cuisines.join(", ")}</h3>
        </div>
    )
}
const Body =() =>{
    return(

        
        <div className="body">
            <div className="search-container">
            <input type="text" placeholder="search for restaurants" className="search-input"></input>
            <button type="submit" className="search-button">search</button>
            </div>

            <div className="res-container">
                    {/* <RestaurantCard  name = {values[0].name} rating ={values[0].averageRating} cuisine= {values[0].description} url ={values[0].headerImgUrl}/> */}
                    {/* <RestaurantCard  respData = {values[0]}/> */}
                    
                    {restaurants.map(restaurant =><RestaurantCard key={restaurant.info["id"]} respData ={restaurant.info}/>)}
                    {/* {restaurants.map(restaurant=>{console.log(restaurant.info);})} */}
            </div>
            
        </div>
    )
}
const Footer =()=>{
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}

const AppComponent =() => {
return (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);