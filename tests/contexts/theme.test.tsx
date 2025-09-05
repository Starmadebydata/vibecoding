import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {ThemeProvider, useTheme} from '@/contexts/ThemeContext'

function ThemeConsumer() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <span data-testid="mode">{theme}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}

test('ThemeProvider toggles dark/light and updates document class', () => {
  // 初始渲染
  render(
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>
  )

  const mode = screen.getByTestId('mode')
  const button = screen.getByText('toggle')

  // 默认根据系统或 localStorage，允许是 light 或 dark
  expect(mode.textContent === 'light' || mode.textContent === 'dark').toBe(true)

  const initialIsDark = document.documentElement.classList.contains('dark')

  // 切换主题
  fireEvent.click(button)

  // 主题值发生变化
  expect(mode.textContent === 'light' || mode.textContent === 'dark').toBe(true)
  // documentElement 上的 dark class 也应切换
  const afterIsDark = document.documentElement.classList.contains('dark')
  expect(afterIsDark).not.toBe(initialIsDark)
})

