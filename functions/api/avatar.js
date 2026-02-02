import { micah, lorelei, adventurer, bigSmile } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import { Resvg, initWasm } from '@resvg/resvg-wasm';
import resvgWasm from '@resvg/resvg-wasm/index_bg.wasm';

let wasmInitialized = false;

export async function onRequest(context) {
    try {
        if (!wasmInitialized) {
            await initWasm(resvgWasm);
            wasmInitialized = true;
        }

        const url = new URL(context.request.url);
        const seed = url.searchParams.get('seed');
        const style = url.searchParams.get('style');

        const finalSeed = seed || Math.random().toString();

        const styles = { micah, lorelei, adventurer, bigSmile };
        const selectedStyle = styles[style] || micah;

        // Generate avatar as SVG
        const avatar = createAvatar(selectedStyle, {
            seed: finalSeed,
            size: 128,
            backgroundColor: ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf"]
        });

        const svg = avatar.toString();

        // Convert SVG to PNG
        const resvg = new Resvg(svg, {
            fitTo: { mode: 'width', value: 128 }
        });
        const pngData = resvg.render();
        const pngBuffer = pngData.asPng();

        return new Response(pngBuffer, {
            headers: {
                'Content-Type': 'image/png',
                'Cache-Control': 'public, max-age=86400, immutable'
            }
        });

    } catch (error) {
        console.error(error);
        return new Response('Error generating Avatar', { status: 500 });
    }
}
