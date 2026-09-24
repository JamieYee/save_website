import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import test from 'node:test'

const script = readFileSync(new URL('../site/js/back-to-top.js', import.meta.url), 'utf8')

function setupBackToTop(reducedMotion = false) {
  const button = {
    hidden: true,
    addEventListener(_event, listener) { this.onClick = listener },
  }
  const window = {
    scrollY: 0,
    addEventListener(_event, listener) { this.onScroll = listener },
    matchMedia: () => ({ matches: reducedMotion }),
    scrollTo(options) { this.scrollOptions = options },
  }

  runInNewContext(script, {
    document: { querySelector: () => button },
    window,
  })
  return { button, window }
}

test('back-to-top button appears after scrolling and returns smoothly', () => {
  const { button, window } = setupBackToTop()
  assert.equal(button.hidden, true)

  window.scrollY = 400
  window.onScroll()
  assert.equal(button.hidden, false)

  button.onClick()
  assert.equal(window.scrollOptions.top, 0)
  assert.equal(window.scrollOptions.behavior, 'smooth')

  window.scrollY = 0
  window.onScroll()
  assert.equal(button.hidden, true)
})

test('back-to-top respects reduced motion', () => {
  const { button, window } = setupBackToTop(true)
  button.onClick()
  assert.equal(window.scrollOptions.behavior, 'auto')
})
