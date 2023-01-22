// import zodResolver from '@hookform/resolvers/zod'
import { Button, Container, Loading, Spacer, Text } from '@nextui-org/react'
import { MailFormSchema, submitContactForm } from '@sln/features-mail'
import { useForm } from 'react-hook-form'
import CheckboxField from '../atoms/inputs/CheckboxField.js'
import InputField from '../atoms/inputs/InputField.js'
import TextareaField from '../atoms/inputs/TextareaField.js'
//import { IFormValues } from './types.js'

export default function MailForm() {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    resetField,
    setValue,
  } = useForm<MailFormSchema>()

  //const { value, reset, bindings } = useInput("")

  // const validateEmail = (value) => {
  //   return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
  // }

  // const helper = React.useMemo(() => {
  //   if (!value)
  //     return {
  //       text: "",
  //       color: "",
  //     }
  //   const isValid = validateEmail(value)
  //   return {
  //     text: isValid ? "Correct email" : "Enter a valid email",
  //     color: isValid ? "success" : "error",
  //   }
  // }, [value]);

  return (
    <Container
      justify='center'
      fluid
    >
      {isSubmitSuccessful ? (
        <Text>Message sent successfully!</Text>
      ) : (
        <form onSubmit={handleSubmit(async (data) => await submitContactForm(data))}>
          <Text
            h3
            size='$5xl'
          >
            Contact
          </Text>
          <Spacer y={2} />
          <InputField
            label='mail'
            register={register}
            errors={errors}
            reset={resetField}
            required
          />
          <Spacer y={2} />
          <InputField
            label='name'
            register={register}
            errors={errors}
            reset={resetField}
            required
          />
          <Spacer y={2} />
          <TextareaField
            label='message'
            register={register}
            errors={errors}
            required
          />
          <Spacer y={1} />
          <CheckboxField
            label='emailUpdates'
            register={register}
            errors={errors}
            setValue={setValue}
          />
          <Spacer y={1} />
          <Button
            type='submit'
            disabled={isSubmitting}
            color='primary'
            size='xl'
          >
            {isSubmitting ? (
              <Loading
                type='points-opacity'
                color='currentColor'
                size='sm'
              />
            ) : (
              'Send email'
            )}
          </Button>
          <Spacer y={2} />
        </form>
      )}
    </Container>
  )
}
