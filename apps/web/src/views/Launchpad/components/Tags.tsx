import { useTranslation } from '@pancakeswap/localization'
import { Tag, VerifiedIcon } from '@pancakeswap/uikit'

const KYCTag: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Tag
      variant="secondary"
      style={{ background: 'none' }}
      outline
      startIcon={<VerifiedIcon width="18px" color="secondary" mr="4px" />}
    >
      {t('KYC')}
    </Tag>
  )
}

export const LaunchpadTags = {
  Kyc: KYCTag,
}
