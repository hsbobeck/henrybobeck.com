import React, { useState, useEffect, useCallback } from "react";
import Image from 'next/image';

const cont = {
    backgroundColor: "#eee",
    overflow: "hidden",
    position: "relative"
};

const NextGalleryImage = ({
    index,
    photo,
    margin,
    direction,
    top,
    left
}) => {

    if (direction === "column") {
        cont.position = "absolute";
        cont.left = left;
        cont.top = top;
    }

    return (
        <div
            style={{ margin, height: photo.height, width: photo.width, ...cont }}
        >
            <Image
                priority
                alt={photo.title}
                {...photo}
            />
        </div>
    );
};

const nextGalleryImageRenderer =
    ({ index, left, top, key, photo, margin }) => (
        <NextGalleryImage
            key={key}
            margin={margin}
            index={index}
            photo={photo}
            left={left}
            top={top}
        />
    );

export default nextGalleryImageRenderer;