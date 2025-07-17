import GalleryHeroSection from "@/components/Gallery/GalleryHeroSection";
import GallerySection from "@/components/Gallery/GallerySection";
import React from "react";

const imageList = [
    "/PG/images (1).jpg",
    "/PG/images (2).jpg",
    "/PG/images (3).jpg",
    "/PG/images (4).jpg",
    "/PG/images (5).jpg",
    "/PG/images (6).jpg",
    "/PG/images (7).jpg",
    "/PG/images (8).jpg",
    "/PG/images (9).jpg",
    "/PG/images (10).jpg",
    "/PG/images (11).jpg",
    "/PG/images (12).jpg",
    "/PG/images (13).jpg",
    "/PG/images (14).jpg",
    "/PG/images (15).jpg",
    "/PG/images (16).jpg",
    "/PG/images (17).jpg",
    "/PG/images (18).jpg",
    "/PG/images (19).jpg",
    "/PG/images (20).jpg",
    "/PG/images (21).jpg",
    "/PG/images (22).jpg",
    "/PG/images (23).jpg",
    "/PG/images (24).jpg",
]
function Gallery() {
    return (
        <div>
            <GalleryHeroSection />
            <GallerySection images={imageList} />
        </div>
    )
}

export default Gallery;
