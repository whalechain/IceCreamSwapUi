export const getDisplayApy = (cakeRewardsApr?: number, lpRewardsApr?: number) => {
  if (!cakeRewardsApr) {
    return null
  }
  let apr;
  if (cakeRewardsApr && lpRewardsApr) {
    apr = cakeRewardsApr + lpRewardsApr
  } else {
    apr = cakeRewardsApr
  }
  const apy = ((1 + (apr / 100 / 365)) ** 365 - 1) * 100
  const apyString = apy.toLocaleString('en-US', { maximumFractionDigits: 2 })
  console.info(cakeRewardsApr, lpRewardsApr, apr, apy, apyString)
  return apyString
}
