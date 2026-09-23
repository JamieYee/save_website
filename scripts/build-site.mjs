import { cp, mkdir, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const output = fileURLToPath(new URL('../dist/', import.meta.url))
const siteFiles = [
  'index.html',
  'privacy.html',
  'terms.html',
  'favicon.ico',
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

console.log(`Built site in ${output}`)
