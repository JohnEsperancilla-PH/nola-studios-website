"use client";

import { Column, Text, RevealFx } from "@/once-ui/components";
import styles from "./WorkVideo.module.scss";

interface WorkVideoProps {
  videoUrl: string;
  title: string;
  publishedAt?: string;
  summary?: string;
}

export function WorkVideo({ videoUrl, title, publishedAt, summary }: WorkVideoProps) {
  // Function to get video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Function to get video ID from Vimeo URL
  const getVimeoVideoId = (url: string) => {
    const regExp = /vimeo\.com\/(?:video\/)?([0-9]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const renderVideoEmbed = () => {
    const youtubeId = getYouTubeVideoId(videoUrl);
    const vimeoId = getVimeoVideoId(videoUrl);

    if (youtubeId) {
      return (
        <iframe
          width="100%"
          height="600"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 'none', borderRadius: '12px' }}
        />
      );
    } else if (vimeoId) {
      return (
        <iframe
          width="100%"
          height="600"
          src={`https://player.vimeo.com/video/${vimeoId}`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ border: 'none', borderRadius: '12px' }}
        />
      );
    } else {
      return (
        <Text variant="body-default-m" align="center" onBackground="neutral-weak">
          Invalid video URL provided
        </Text>
      );
    }
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
        <div className={styles.videoContainer}>
          {renderVideoEmbed()}
        </div>
      </RevealFx>
    </Column>
  );
} 