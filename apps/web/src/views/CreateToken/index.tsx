import { Button, Checkbox, Flex, Heading, Input, Text } from '@pancakeswap/uikit'
import AppWrapper from 'components/AppWrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import FormError from 'views/Bridge/components/FormError'

const schema = z
  .object({
    tokenName: z.string().min(1, 'Token name must be at least 1 character'),
    tokenSymbol: z.string().min(1, 'Token symbol must be at least 1 character'),
    initialSupply: z
      .string()
      .transform(Number)
      .refine((value) => value > 0, 'Must be greater than 0'),
    burnable: z.boolean().default(false),
    mintable: z.boolean().default(false),
    maxSupply: z
      .string()
      .transform(Number)
      .refine((value) => value > 0, 'Must be greater than 0')
      .optional(),
  })
  .refine((data) => (data.maxSupply ? data.maxSupply > data.initialSupply : true), {
    path: ['maxSupply'],
    message: 'Max supply must be greater than initial supply',
  })

type FormValues = z.infer<typeof schema>

export const CreateToken: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const mintable = watch('mintable')

  return (
    <AppWrapper title="Create Token" subtitle="Create your own Token in seconds">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
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
          <Text>Initial Supply</Text>
          <Input type="number" placeholder="Initial Supply" {...register('initialSupply')} />
          {errors.initialSupply && <FormError>{errors.initialSupply.message}</FormError>}
        </Flex>
        <Heading as="h3" size="sm">
          Features
        </Heading>
        <Flex alignItems="center">
          <Checkbox type="checkbox" {...register('burnable')} scale="sm" id="burnable" />
          <Text as="label" ml="10px" style={{ userSelect: 'none' }} htmlFor="burnable">
            Burnable
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Checkbox type="checkbox" {...register('mintable')} scale="sm" id="mintable" />
          <Text as="label" ml="10px" style={{ userSelect: 'none' }} htmlFor="mintable">
            Mintable
          </Text>
        </Flex>
        {mintable && (
          <Flex flexDirection="column">
            <Text>Max Supply</Text>
            <Input type="number" placeholder="Max Supply" {...register('maxSupply')} />
            {errors.maxSupply && <FormError>{errors.maxSupply.message}</FormError>}
          </Flex>
        )}
        <Button type="submit">Create Token</Button>
      </form>
    </AppWrapper>
  )
}
