import React from 'react';
import {CatGalleryCard} from "./CatGalleryCard";

export function CatGallery() {
    return (
        <div className="flex justify-center gap-4 mt-10">
            <CatGalleryCard/>
        </div>
    );
}
