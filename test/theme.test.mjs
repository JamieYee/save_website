import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import test from 'node:test'

const script = readFileSync(new URL('../site/js/theme.js', import.meta.url), 'utf8')
const initScript = readFileSync(new URL('../site/js/theme-init.js', import.meta.url), 'utf8')

function setupTheme(savedTheme, systemDark) {
  const values = new Map()
  if (savedTheme) values.set('save-website-theme', savedTheme)

  const radios = ['light', 'system', 'dark'].map((value) => ({
    value,
    checked: false,
    addEventListener(_event, listener) {
      this.onChange = listener
    },
  }))
  const root = { dataset: {} }
  const media = {
    matches: systemDark,
    addEventListener(_event, listener) {
      this.onChange = listener
    },
  }

  runInNewContext(script, {
    document: {
      documentElement: root,
      querySelectorAll: () => radios,
    },
    window: { matchMedia: () => media },
    localStorage: {
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
      removeItem: (key) => values.delete(key),
    },
  })

  return { root, radios, media, values }
}

test('system mode follows device appearance', () => {
  const { root, radios, media } = setupTheme(null, true)
  assert.equal(root.dataset.theme, 'dark')
  assert.equal(radios[1].checked, true)

  media.matches = false
  media.onChange()
  assert.equal(root.dataset.theme, 'light')
})

test('manual mode persists and ignores device changes', () => {
  const { root, radios, media, values } = setupTheme(null, false)
  radios[2].checked = true
  radios[2].onChange()

  assert.equal(root.dataset.theme, 'dark')
  assert.equal(values.get('save-website-theme'), 'dark')

  media.matches = true
  media.onChange()
  assert.equal(root.dataset.theme, 'dark')

  radios[1].checked = true
  radios[1].onChange()
  assert.equal(values.has('save-website-theme'), false)
})

test('shared theme initializer respects saved mode', () => {
  const root = { dataset: {} }
  runInNewContext(initScript, {
    document: { documentElement: root },
    window: { matchMedia: () => ({ matches: false }) },
    localStorage: { getItem: () => 'dark' },
  })

  assert.equal(root.dataset.theme, 'dark')
})
