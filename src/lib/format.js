import { store } from '../config.js'

const money = new Intl.NumberFormat(store.locale, { style: 'currency', currency: store.currency, maximumFractionDigits: 0 })

export const formatPrice = (amount) => money.format(amount)

export const discountPercent = ({ price, compareAt }) =>
  compareAt ? Math.round((1 - price / compareAt) * 100) : 0
