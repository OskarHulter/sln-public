import { Button, Container, Loading, Spacer, Text } from '@nextui-org/react'
import { MailFormSchema } from '@sln/features-mail'
import axios from 'axios'
import { log } from 'next-axiom'
import { useForm } from 'react-hook-form'
import InputField from '../atoms/inputs/InputField'
import TextareaField from '../atoms/inputs/TextareaField'

export async function submitMailOld(data: MailFormSchema) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mail`, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  const result = await res.json()
  alert(`Is this your full name: ${result.name}`)
}

export async function submitMail(formValues: MailFormSchema) {
  try {
    //: AxiosResponse<MailFormSchema>
    const { data } = await axios({
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/mail`,
      data: formValues,
      method: 'POST',
    })
    return data
  } catch (e) {
    log.debug('error', { e })
  }
}

export default function MailForm() {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    resetField,
    reset,
  } = useForm<MailFormSchema>()

  // const { mutate, isSuccess, isLoading, isError } = useMutation((data: MailFormSchema) =>
  //   submitMail(data)
  // )

  return (
    <>
      <Spacer y={2} />
      <Text
        h2
        size='$5xl'
        css={{
          fontWeight: '$regular',
          textAlign: 'center',
          m: 0,
          p: 0,
        }}
      >
        Contact
      </Text>
      <Container
        as='form'
        id='contact-form'
        gap={2}
        justify='center'
        alignContent='center'
        alignItems='center'
        onSubmit={handleSubmit(submitMail)}
        css={{
          width: 'min(25em, 80vw)',
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
          disabled={isSubmitting}
          color='gradient'
          bordered
          size='xl'
          css={{
            minWidth: '15ch',
          }}
        >
          {isSubmitting && (
            <Loading
              type='points-opacity'
              color='currentColor'
              size='sm'
            />
          )}
          <Text
            as='div'
            size='$3xl'
            css={{
              letterSpacing: '$tighter',
              fontWeight: '$thin',
            }}
          >
            submit
          </Text>
        </Button>
      </Container>
      {isSubmitSuccessful && <Text>Submit Successfull!</Text>}
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
