import sharp from 'sharp'
import { adventurer, bigSmile, lorelei, micah } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'

const styles = { adventurer, bigSmile, lorelei, micah }

/** Generate a PNG avatar using the requested style and optional seed. */
export default async function handler(req, res) {
  try {
    const { seed, style } = req.query ?? {}
    const finalSeed = typeof seed === 'string' && seed ? seed : Math.random().toString()
    const selectedStyle = typeof style === 'string' ? styles[style] ?? micah : micah

    const svg = createAvatar(selectedStyle, {
      seed: finalSeed,
      size: 128,
      backgroundColor: ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf'],
    }).toString()
    const png = await sharp(Buffer.from(svg)).png().toBuffer()

    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Cache-Control', seed ? 'public, max-age=86400' : 'no-store')
    return res.status(200).send(png)
  } catch (error) {
    console.error('Avatar generation failed:', error)
    return res.status(500).send('Error generating PNG')
  }
}
