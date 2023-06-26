import { useContext } from 'react'
import Cookie from 'js-cookie'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme, THEME_DOMAIN, COOKIE_THEME_KEY } from '@pancakeswap/hooks'

export const COOKIE_THEME_KEY = 'theme'
export const THEME_DOMAIN = '.icecreamswap.com'

export { THEME_DOMAIN, COOKIE_THEME_KEY }

export default useTheme
