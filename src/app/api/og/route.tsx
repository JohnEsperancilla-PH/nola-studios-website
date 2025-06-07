import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title');
    const type = searchParams.get('type') || 'default';

    // Font loading
    const interBold = await fetch(
      new URL('../../../../public/fonts/Inter-Bold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());

    // Define different layouts based on type
    const layouts = {
      default: {
        width: 1200,
        height: 630,
        background: 'rgb(22, 22, 22)',
        titleSize: 60,
        padding: 60,
      },
      work: {
        width: 1200,
        height: 630,
        background: 'rgb(22, 22, 22)',
        titleSize: 52,
        padding: 60,
      },
      contact: {
        width: 1200,
        height: 630,
        background: 'rgb(22, 22, 22)',
        titleSize: 56,
        padding: 60,
      },
    };

    const layout = layouts[type as keyof typeof layouts] || layouts.default;

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: layout.background,
            padding: layout.padding,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 40,
            }}
          >
            <span
              style={{
                fontSize: 32,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              NOLA Studios
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: layout.titleSize,
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.2,
                maxWidth: '80%',
              }}
            >
              {title || 'NOLA Studios'}
            </div>
          </div>

          {/* Bottom accent */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 8,
              background: 'linear-gradient(90deg, #FFB800 0%, #FF8A00 100%)',
            }}
          />
        </div>
      ),
      {
        width: layout.width,
        height: layout.height,
        fonts: [
          {
            name: 'Inter',
            data: interBold,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
} 