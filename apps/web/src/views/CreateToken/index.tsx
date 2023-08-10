import { Button, Flex, Heading, Input, Text, useModal } from '@pancakeswap/uikit'
import AppWrapper from 'components/AppWrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import FormError from 'views/Bridge/components/FormError'
import FileInput from 'components/FileInput'
import CreateModal from './components/CreateModal'
import { FormValues, schema } from './create-schema'
import { useState } from 'react'

export const CreateToken: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  })
  const [formValues, setFormValues] = useState<FormValues>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  const [onPresentCreateModal] = useModal(<CreateModal formValues={formValues} />, true, true, 'tokenCreateModal')

  return (
    <AppWrapper title="Create Token" subtitle="Create your own Token in seconds">
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit((data) => {
            setFormValues(data)
            onPresentCreateModal()
          })}
          style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}
        >
          <Flex flexDirection="column">
            <Text>Token Name</Text>
            <Input placeholder="Token Name" {...register('tokenName')} />
            {errors.tokenName && <FormError>{errors.tokenName.message}</FormError>}
          </Flex>
          <Flex flexDirection="column">
            <Text>Token Symbol</Text>
            <Input placeholder="Token Symbol" {...register('tokenSymbol')} />
            {errors.tokenSymbol && <FormError>{errors.tokenSymbol.message}</FormError>}
          </Flex>
          <Flex flexDirection="column">
            <Text>Logo</Text>
            <FileInput
              accept={{
                'image/png': ['.png'],
                'image/jpeg': ['.jpeg', '.jpg'],
              }}
              name="logo"
            />
            {errors.logo && <FormError>{errors.logo.message}</FormError>}
          </Flex>
          <Flex flexDirection="column">
            <Text>Initial Supply</Text>
            <Input type="number" placeholder="Initial Supply" {...register('initialSupply')} />
            {errors.initialSupply && <FormError>{errors.initialSupply.message}</FormError>}
          </Flex>
          <br/>
          <Heading as="h3" size="sm">
            Taxes
          </Heading>
          <Flex flexDirection="column">
            <Text>Buy Tax</Text>
            <Input type="number" placeholder="0%" {...register('buyTax')} />
            {errors.buyTax && <FormError>{errors.buyTax.message}</FormError>}
          </Flex>
          <Flex flexDirection="column">
            <Text>Sell Tax</Text>
            <Input type="number" placeholder="0%" {...register('sellTax')} />
            {errors.sellTax && <FormError>{errors.sellTax.message}</FormError>}
          </Flex>
          <br/>
          <Heading as="h3" size="sm">
            Tax distribution
          </Heading>
          <Flex flexDirection="column">
            <Text>Marketing Distribution</Text>
            <Input type="number" placeholder="0%" {...register('marketingDistribution')} />
            {errors.marketingDistribution && <FormError>{errors.marketingDistribution.message}</FormError>}
          </Flex>
          <Flex flexDirection="column">
            <Text>Dividend Distribution</Text>
            <Input type="number" placeholder="0%" {...register('dividendDistribution')} />
            {errors.dividendDistribution && <FormError>{errors.dividendDistribution.message}</FormError>}
          </Flex>
          <Flex flexDirection="column">
            <Text>Auto-Liquidity Distribution</Text>
            <Input type="number" placeholder="0%" {...register('liquidityDistribution')} />
            {errors.liquidityDistribution && <FormError>{errors.liquidityDistribution.message}</FormError>}
          </Flex>
          <Button type="submit">Create Token</Button>
        </form>
      </FormProvider>
    </AppWrapper>
  )
}
