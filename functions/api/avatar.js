import { micah, lorelei, adventurer, bigSmile } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';

export async function onRequest(context) {
    try {
        const url = new URL(context.request.url);
        const seed = url.searchParams.get('seed');
        const style = url.searchParams.get('style');

        const finalSeed = seed || Math.random().toString();

        const styles = { micah, lorelei, adventurer, bigSmile };
        const selectedStyle = styles[style] || micah;

        // Generate avatar as SVG (Workers friendly)
        const avatar = createAvatar(selectedStyle, {
            seed: finalSeed,
            size: 128,
            backgroundColor: ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf"]
        });

        const svg = avatar.toString();

        return new Response(svg, {
            headers: {
                'Content-Type': 'image/svg+xml',
                'Cache-Control': 'public, max-age=86400, immutable'
            }
        });

    } catch (error) {
        console.error(error);
        return new Response('Error generating Avatar', { status: 500 });
    }
}
