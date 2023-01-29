import { Button, Container, Loading, Text } from '@nextui-org/react'
import { MailFormSchema } from '@sln/features-mail'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import SuperJSON from 'superjson'
import InputField from '../atoms/inputs/InputField'
import TextareaField from '../atoms/inputs/TextareaField'

export async function submitMailOld(data: MailFormSchema) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mail`, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  const result = await res.json()
  alert(`Is this your full name: ${result.name}`)
}

export async function submitMail(data: MailFormSchema) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mail`, {
    body: SuperJSON.stringify(data),
    method: 'POST',
  })

  if (!res.ok) {
    console.log('error fetching!')
  }
  alert(`Is this your full name: ${SuperJSON.stringify(res)}`)
  const result = await res.json()
  return result
}

export default function MailForm() {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    resetField,
    reset,
  } = useForm<MailFormSchema>()

  const { mutate, isSuccess, isLoading, isError } = useMutation((data: MailFormSchema) =>
    submitMail(data)
  )

  useEffect(() => {
    if (isSuccess && isSubmitSuccessful) reset()
  }, [isSuccess, isSubmitSuccessful, reset])

  return (
    <>
      <Container
        as='form'
        id='contact-form'
        gap={2}
        justify='center'
        alignContent='center'
        alignItems='center'
        onSubmit={handleSubmit(submitMail)}
        css={{
          width: 'min(30em, 80vw)',
          height: 'fit-content',
          marginInline: 'auto',
          textAlign: 'center',
        }}
      >
        <InputField
          label='mail'
          register={register}
          errors={errors}
          reset={resetField}
          required
        />
        <InputField
          label='name'
          register={register}
          errors={errors}
          reset={resetField}
          required
        />
        <TextareaField
          label='message'
          register={register}
          errors={errors}
          required
        />

        <Button
          type='submit'
          disabled={isSubmitting || isLoading || isError}
          color='gradient'
          bordered
          size='xl'
          css={{
            minWidth: '15ch',
          }}
        >
          {isSubmitting ||
            (isLoading && (
              <Loading
                type='points-opacity'
                color='currentColor'
                size='sm'
              />
            ))}
          <Text
            as='div'
            size='$3xl'
            css={{
              letterSpacing: '$wide',
            }}
          >
            submit
          </Text>
        </Button>
      </Container>
      {isSuccess && <Text>Submit Successfull!</Text>}
    </>
  )
}

// const { data } = useQuery({
//   queryKey: ['mail', values],
//   queryFn: () => fetchPerson(id),
//   staleTime: Infinity,
// })

// setValue,
//mutate(values, { onSuccess: () => reset() })

/* <CheckboxField
        text='Send me occasional email updates'
        label='emailUpdates'
        register={register}
        errors={errors}
        setValue={setValue}
      /> */
