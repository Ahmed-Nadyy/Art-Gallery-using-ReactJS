import { FcCheckmark } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

export const navlist = [
    {
        text: "home",
        path: "/",
    },
    {
        text: "shop",
        path: "/shop",
    },
    // {
    //     text: "about us",
    //     path: "/about",
    // },
    {
        text: "blog",
        path: "/blog",
    },
    // {
    //     text: "contact us",
    //     path: "/contact",
    // },
]
export const hero = [
    {
        id: 1,
        cover: "assets/images/1.jpg",
        name: "Paintings",
        items: "25",
    },
    {
        id: 2,
        cover: "assets/images/2.jpg",
        name: "Sculptures",
        items: "15",
    },
    {
        id: 3,
        cover: "assets/images/3.jpg",
        name: "Photography",
        items: "18",
    },
    {
        id: 4,
        cover: "assets/images/4.jpg",
        name: "Digital Art",
        items: "22",
    },
    {
        id: 5,
        cover: "assets/images/5.jpg",
        name: "Prints",
        items: "30",
    },
]

export const products = [
    {
        id: 1,
        cover: "/assets/images/1.jpg",
        title: "Sunset Over the Hills",
        desc: "A captivating painting showcasing the vibrant colors of a sunset over rolling hills. The warm hues bring a sense of tranquility and peace.",
        artist: "by Emma Smith",
        price: 500.0,
        category: "paintings",
        qty: 0,
    },
    {
        id: 2,
        cover: "/assets/images/2.jpg",
        title: "Abstract Marble Sculpture",
        desc: "A modern abstract sculpture carved from high-quality marble. Its intricate curves and shapes represent the fluidity of human emotions.",
        artist: "by John Doe",
        price: 1200.0,
        category: "sculptures",
        qty: 0,
    },
    {
        id: 3,
        cover: "/assets/images/3.jpg",
        title: "City Lights",
        desc: "A stunning photograph capturing the vibrant nightlife of a bustling city. The contrast between the lights and shadows creates a dynamic composition.",
        artist: "by Sarah Lee",
        price: 300.0,
        category: "photography",
        qty: 0,
    },
    {
        id: 4,
        cover: "/assets/images/4.jpg",
        title: "Cosmic Dreams",
        desc: "A mesmerizing piece of digital art that explores the infinite possibilities of space and time. The vivid colors and abstract forms evoke a sense of wonder.",
        artist: "by Alex Turner",
        price: 150.0,
        category: "digital art",
        qty: 0,
    },
    {
        id: 5,
        cover: "/assets/images/5.jpg",
        title: "Botanical Print",
        desc: "A delicate print of various botanical elements, perfect for adding a touch of nature to your space. The soft greens and intricate details create a calming effect.",
        artist: "by Lisa Brown",
        price: 50.0,
        category: "prints",
        qty: 0,
    },
    {
        id: 6,
        cover: "/assets/images/6.jpg",
        title: "Ocean Breeze",
        desc: "An evocative painting of the ocean waves crashing onto the shore, filled with movement and texture. The cool blues and whites bring the scene to life.",
        artist: "by Mark Harris",
        price: 700.0,
        category: "paintings",
        qty: 0,
    },
    {
        id: 7,
        cover: "/assets/images/7.jpg",
        title: "Bronze Figure",
        desc: "A detailed bronze sculpture of a human figure in motion, capturing both strength and grace. The polished finish adds a timeless elegance to the piece.",
        artist: "by Ana Martinez",
        price: 1500.0,
        category: "sculptures",
        qty: 0,
    },
    {
        id: 8,
        cover: "/assets/images/8.jpg",
        title: "Mountain Majesty",
        desc: "This photograph captures the awe-inspiring beauty of a mountain range at dawn, with the first light of the day touching the peaks.",
        artist: "by Michael Ross",
        price: 250.0,
        category: "photography",
        qty: 0,
    },
]

export const banner = [
    {
        id: 1,
        title: "Exclusive Art Collection",
        desc: "Up to 40% Off For Art Enthusiasts",
        cover: "/assets/images/9.jpg",
    },
    {
        id: 2,
        title: "Discover Stunning Artworks",
        desc: "New Arrivals at Discounted Prices",
        cover: "/assets/images/10.jpg",
    },
]

export const topProducts = [
    {
        id: 20,
        cover: "/assets/images/11.jpg",
        title: "Sunset Over the Hills",
        artist: "by Emma Smith",
        price: "500.00",
        category: "paintings",
        qty: 0,
    },
    {
        id: 21,
        cover: "/assets/images/12.jpg",
        title: "Abstract Marble Sculpture",
        artist: "by John Doe",
        price: "1200.00",
        category: "sculptures",
        qty: 0,
    },
    {
        id: 22,
        cover: "/assets/images/13.jpg",
        title: "City Lights",
        artist: "by Sarah Lee",
        price: "300.00",
        category: "photography",
        qty: 0,
    },
    {
        id: 23,
        cover: "/assets/images/14.jpg",
        title: "Cosmic Dreams",
        artist: "by Alex Turner",
        price: "150.00",
        category: "digital art",
        qty: 0,
    },
    {
        id: 24,
        cover: "/assets/images/15.jpg",
        title: "Botanical Print",
        artist: "by Lisa Brown",
        price: "50.00",
        category: "prints",
        qty: 0,
    },
    {
        id: 25,
        cover: "/assets/images/16.jpg",
        title: "Ocean Breeze",
        artist: "by Mark Harris",
        price: "700.00",
        category: "paintings",
        qty: 0,
    },
    {
        id: 26,
        cover: "/assets/images/17.jpg",
        title: "Bronze Figure",
        artist: "by Ana Martinez",
        price: "1500.00",
        category: "sculptures",
        qty: 0,
    },
    {
        id: 27,
        cover: "/assets/images/18.jpg",
        title: "Mountain Majesty",
        artist: "by Michael Ross",
        price: "250.00",
        category: "photography",
        qty: 0,
    },
]

export const price = [
    {
        id: 1,
        name: "Free Trial",
        price: "0",
        desc: "Explore our exclusive art collections with a 14-day free trial.",
        list: [
            {
                para: "Access Limited Art Pieces",
                icon: '✔️',
            },
            {
                para: "Free Art Consultation",
                icon: '✔️',
            },
            {
                para: "Support and Updates",
                icon: '✖️',
            },
            {
                para: "Access All Collections",
                icon: '✖️',
            },
            {
                para: "Lifetime Art Access",
                icon: '✖️',
            },
            {
                para: "30 Days Money Back",
                icon: '✖️',
            },
        ],
    },
    {
        id: 2,
        name: "Premium",
        price: "49",
        desc: "Unlock a wider range of artwork with premium features.",
        list: [
            {
                para: "Access to Most Art Pieces",
                icon: '✔️',
            },
            {
                para: "Free Art Consultation",
                icon: '✔️',
            },
            {
                para: "Support and Updates",
                icon: '✔️',
            },
            {
                para: "Access All Collections",
                icon: '✔️',
            },
            {
                para: "Lifetime Art Access",
                icon: '✖️',
            },
            {
                para: "30 Days Money Back",
                icon: '✖️',
            },
        ],
    },
    {
        id: 3,
        name: "Unlimited Access",
        price: "99",
        desc: "Enjoy unlimited access to all artwork and exclusive benefits.",
        list: [
            {
                para: "Access to All Art Pieces",
                icon: '✔️',
            },
            {
                para: "Free Art Consultation",
                icon: '✔️',
            },
            {
                para: "Support and Updates",
                icon: '✔️',
            },
            {
                para: "Access All Collections",
                icon: '✔️',
            },
            {
                para: "Lifetime Art Access",
                icon: '✔️',
            },
            {
                para: "30 Days Money Back",
                icon: '✔️',
            },
        ],
    },
]

export const customer = [
    {
        id: 1,
        desc: "The variety and quality of art pieces available are remarkable. I found the perfect painting for my office, and the process was seamless!",
        name: "Lisa Walker",
        post: "Art Enthusiast",
    },
    {
        id: 2,
        desc: "I was amazed by the range of digital art and sculptures available. The customer support was fantastic and helped me pick the perfect piece.",
        name: "James Peterson",
        post: "Art Collector",
    },
    {
        id: 3,
        desc: "As a gallery owner, this platform has provided me with incredible access to unique and stunning artwork. Highly recommend for art lovers.",
        name: "Anna Roberts",
        post: "Gallery Owner",
    },
]

export const blog = [
    {
        id: 1,
        date: "October 15, 2023",
        title: "The Rising Popularity of Digital Art in 2023",
        category: "digital art",
        cover: "/assets/images/1.jpg",
    },
    {
        id: 2,
        date: "October 10, 2023",
        title: "Exploring the Beauty of Abstract Paintings",
        category: "paintings",
        cover: "/assets/images/1.jpg",
    },
    {
        id: 3,
        date: "October 5, 2023",
        title: "Sculptures That Define Modern Art",
        category: "sculptures",
        cover: "/assets/images/1.jpg",
    },
    {
        id: 4,
        date: "September 30, 2023",
        title: "Top Art Exhibitions to Visit This Fall",
        category: "events",
        cover: "/assets/images/1.jpg",
    },
    {
        id: 5,
        date: "September 25, 2023",
        title: "How to Start Your Own Art Collection",
        category: "collecting",
        cover: "/assets/images/1.jpg",
    },
    {
        id: 6,
        date: "September 20, 2023",
        title: "The Evolution of Photography in Modern Art",
        category: "photography",
        cover: "/assets/images/1.jpg",
    },
]

