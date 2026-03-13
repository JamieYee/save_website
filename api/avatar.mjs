// api/avatar.js
import sharp from 'sharp';
import { micah, lorelei, adventurer, bigSmile} from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';

export default async function handler(req, res) {
  try {
    const { seed, style } = req.query;
    const finalSeed = seed || Math.random().toString();

    const styles = {micah,lorelei,adventurer,bigSmile};
    const selectedStyle = styles[style] || micah;

    // 3. 生成头像
    const avatar = createAvatar(selectedStyle, {
      seed: finalSeed, 
      size: 128, 
      backgroundColor: ["b6e3f4","c0aede","d1d4f9","ffd5dc","ffdfbf"]
    });
    
    const svg = avatar.toString();
    const pngBuffer = await sharp(Buffer.from(svg))
      .png()
      .toBuffer();
    
    res.setHeader('Content-Type', 'image/png');
    
    res.setHeader('Cache-Control', 'public, max-age=86400, immutable');
   
    // 6. 直接返回 PNG 图片
    res.status(200).send(pngBuffer);

  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating PNG');
  }
}