import { Button, Grid, Loading, Text } from '@nextui-org/react'
import { MailFormSchema, submitContactForm } from '@sln/features-mail'
import { useForm } from 'react-hook-form'
import CheckboxField from '../atoms/inputs/CheckboxField'
import InputField from '../atoms/inputs/InputField'
import TextareaField from '../atoms/inputs/TextareaField'

export default function MailForm() {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    resetField,
    setValue,
  } = useForm<MailFormSchema>()

  return (
    <>
      {isSubmitSuccessful && <Text>Submit Successfull!</Text>}

      <Grid.Container
        as='form'
        gap={3}
        justify='center'
        alignContent='center'
        alignItems='center'
        onSubmit={handleSubmit(async (data) => await submitContactForm(data))}
      >
        <Grid xs={12}>
          <InputField
            label='mail'
            register={register}
            errors={errors}
            reset={resetField}
            required
          />
        </Grid>
        <Grid xs={12}>
          <InputField
            label='name'
            register={register}
            errors={errors}
            reset={resetField}
            required
          />
        </Grid>
        <Grid xs={12}>
          <TextareaField
            label='message'
            register={register}
            errors={errors}
            required
          />
        </Grid>
        <Grid
          xs={12}
          justify='center'
        >
          <CheckboxField
            text='Send me occasional email updates'
            label='emailUpdates'
            register={register}
            errors={errors}
            setValue={setValue}
          />
        </Grid>
        <Grid
          xs={12}
          justify='center'
        >
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
                letterSpacing: '$wide',
              }}
            >
              submit
            </Text>
          </Button>
        </Grid>
      </Grid.Container>
    </>
  )
}
