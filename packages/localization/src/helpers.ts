import { EN } from './config/languages'
import { default as ZHCN } from '../../../locales/zh-CN.json'

export const LS_KEY = 'pancakeswap_language'

export const fetchLocale = async (locale: string) => {
  if (locale == "zh-CN") {
    return ZHCN
  }

  console.error(`API: Failed to fetch locale ${locale}`)
  return null
}

export const getLanguageCodeFromLS = () => {
  try {
    const codeFromStorage = localStorage.getItem(LS_KEY)

    return codeFromStorage || EN.locale
  } catch {
    return EN.locale
  }
}
