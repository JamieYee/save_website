import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const output = fileURLToPath(new URL('../dist/', import.meta.url))
const siteFiles = [
  'index.html',
  'privacy.html',
  'terms.html',
  'favicon.ico',
  'robots.txt',
  'css',
  'images',
  'js',
  'help',
]

await rm(output, { recursive: true, force: true })
await mkdir(output, { recursive: true })

for (const file of siteFiles) {
  await cp(new URL(`../site/${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url), {
    recursive: true,
  })
}

const siteUrl = 'https://save.xjjnb.com'
const helpFiles = await readdir(new URL('../site/help/', import.meta.url))
const pages = [
  '/',
  '/privacy.html',
  '/terms.html',
  ...helpFiles
    .filter((file) => file.endsWith('.html') && file !== '404.html')
    .map((file) => file === 'index.html' ? '/help/' : `/help/${file}`),
]
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map((path) => `  <url><loc>${new URL(path, siteUrl).href}</loc></url>`),
  '</urlset>',
  '',
].join('\n')
await writeFile(new URL('../dist/sitemap.xml', import.meta.url), sitemap)

console.log(`Built site in ${output}`)
