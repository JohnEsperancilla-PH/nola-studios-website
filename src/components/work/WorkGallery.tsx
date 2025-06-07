"use client";

import Masonry from "react-masonry-css";
import { SmartImage, Column, Text, RevealFx } from "@/once-ui/components";
import styles from "./WorkGallery.module.scss";
import Image from "next/image";
import { useState } from "react";

interface WorkGalleryProps {
  images: string[];
  title: string;
  publishedAt?: string;
  summary?: string;
}

export function WorkGallery({ images, title, publishedAt, summary }: WorkGalleryProps) {
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  const breakpointColumnsObj = {
    default: 2,
    1200: 2,
    720: 2,
    480: 2
  };

  if (!images || images.length === 0) return null;

  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageSrc]: true
    }));
  };

  return (
    <Column gap="16" fillWidth>
      <RevealFx>
        <Column gap="8" className={styles.header}>
          <Text variant="display-strong-l" align="center">{title}</Text>
          {publishedAt && (
            <Text variant="body-default-m" align="center" onBackground="neutral-weak">
              {publishedAt}
            </Text>
          )}
          {summary && (
            <Text 
              variant="heading-default-m" 
              align="center" 
              onBackground="neutral-weak"
              className={styles.summary}
            >
              {summary}
            </Text>
          )}
        </Column>
      </RevealFx>
      
      <RevealFx delay={0.2}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonryGrid}
          columnClassName={styles.masonryGridColumn}
        >
          {images.map((image, index) => (
            <div key={index} className={`${styles.imageContainer} ${!loadedImages[image] ? styles.loading : ''}`}>
              <Image
                priority={index < 4}
                sizes="(max-width: 720px) 45vw, (max-width: 1200px) 45vw, 50vw"
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className={styles.gridItem}
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto' }}
                onLoad={() => handleImageLoad(image)}
                onError={() => console.error(`Failed to load image: ${image}`)}
              />
              {!loadedImages[image] && (
                <div className={styles.placeholder}>
                  <Text variant="body-default-s" align="center" onBackground="neutral-weak">Loading...</Text>
                </div>
              )}
            </div>
          ))}
        </Masonry>
      </RevealFx>
    </Column>
  );
} 