import { StaticImageData } from 'next/image';
import bakeryImage from './assets/bakeryImage.png';
import tattooPortfolioImage from './assets/tattooPortfolioImage.png';
import eCommerceStoreImage from './assets/eCommerceStoreImage.png';

interface Project {
    image: StaticImageData;
    title: string;
    description: string;
    technology: string[];
    website: string;
}

export const projects: Project[] = [
    {
        image: bakeryImage,
        title: "Bakery Website",
        description: "A bakery e-commerce website featuring detailed product pages and a flexible order system that lets users customize box sizes, select cookies, and choose pick-up or delivery options.",
        technology: ["REACT", "JAVASCRIPT"],
        website: "https://example.com"
    },
    {
        image: eCommerceStoreImage,
        title: "E-Commerce Clothing Store",
        description: "An e-commerce streetwear store with dedicated product pages, separate men’s and women’s sections, and Shopify-powered backend and checkout functionality.",
        technology: ["REACT", "JAVASCRIPT", "SHOPIFY"],
        website: "https://flyerpassion.com"
    },
    {
        image: tattooPortfolioImage,
        title: "Tattoo Portfolio Website",
        description: "A portfolio website for a tattoo artist featuring an art gallery, a review section for client feedback, a booking information page, and an FAQ for clients.",
        technology: ["REACT", "JAVASCRIPT", "SUPABASE"],
        website: "https://hippiefoxart.com"
    }

]