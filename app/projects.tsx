import { StaticImageData } from 'next/image';
import bakeryImage from './assets/bakeryImage.png';
import tattooPortfolioImage from './assets/tattooPortfolioImage.png';
import eCommerceStoreImage from './assets/eCommerceStoreImage.png';
import cleansedCleaningImage from './assets/cleansedCleaningImage.png';
import moncraImage from './assets/moncraImage.png';
import mhWildsBuilderImage from './assets/mhWildsBuilderImage.png';

interface Project {
    image: StaticImageData;
    title: string;
    slug?: string;
    description: string;
    technology: string[];
    website?: string;
}

export const projects: Project[] = [
    {
        image: moncraImage,
        title: "Moncra",
        slug: "moncra",
        description:
            "A multiplayer 2D action RPG featuring real-time combat, procedurally generated dungeons, character progression, and an extensive gear and itemization system.",
        technology: ["NEXT.JS", "TYPESCRIPT", "EXCALIBUR", "COLYSEUS"],
    },
    {
        image: mhWildsBuilderImage,
        title: "MH Wilds Builder",
        slug: "mh-wilds-builder",
        description:
            "A Monster Hunter Wilds build planner that lets players create complete loadouts, manage skills and decorations, compare equipment, and optimize builds with real-time stat calculations.",
        technology: ["NEXT.JS", "TYPESCRIPT", "SUPABASE", "SWR"],
        website: "https://www.mhwildsbuilder.com",
    },
    {
        image: cleansedCleaningImage,
        title: "Cleansed Cleaning",
        description: "A modern cleaning service website featuring a responsive design, detailed service information, and a multi-step booking form that allows customers to request and customize their cleaning service.",
        technology: ["NEXT.JS", "TYPESCRIPT", "SUPABASE"],
    },
    {
        image: bakeryImage,
        title: "Bakery Shop",
        description: "A bakery e-commerce website featuring detailed product pages and a flexible order system that lets users customize box sizes, select cookies, and choose pick-up or delivery options.",
        technology: ["REACT", "JAVASCRIPT"],
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
        technology: ["NEXT.JS", "TYPESCRIPT", "SUPABASE"],
        website: "https://hippiefoxart.com"
    }

]