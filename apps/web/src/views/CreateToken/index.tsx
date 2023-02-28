import { Button, Flex, Input, Text } from '@pancakeswap/uikit'
import AppWrapper from 'components/AppWrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import FormError from 'views/Bridge/components/FormError'

const schema = z.object({
  tokenName: z.string().min(1, 'Token name must be at least 1 character'),
  tokenSymbol: z.string().min(1, 'Token symbol must be at least 1 character'),
  initialSupply: z.number().min(1),
  burnable: z.boolean().default(false),
  mintable: z.boolean().default(false),
  maxSupply: z.number().min(1),
})

type FormValues = z.infer<typeof schema>

export const CreateToken: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  return (
    <AppWrapper title="Create Token" subtitle="Create your own Token in seconds">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
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
        <Button type="submit">Create Token</Button>
      </form>
    </AppWrapper>
  )
}
