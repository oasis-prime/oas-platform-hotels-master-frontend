import * as yup from 'yup'

import {
  Button,
  ButtonIcons,
  ButtonOutline,
  ButtonPrimary,
} from '@components/misc/button'
import { Controller, useForm } from 'react-hook-form'

import Image from 'next/image'
import { TSignIn } from '@model/member'
import { TextField } from '@components/misc/textField'
import classNames from 'classnames'
import { setErrorMessage } from '@auth/error.message'
import { useFirebaseAuth } from '@auth/auth'
import useModal from '@store/useModal'
import { useTranslation } from 'next-i18next'
import { yupResolver } from '@hookform/resolvers/yup'

const MemberTextField = 'w-full bg-white border p-3 rounded-lg font-semibold border-gray-200 focus:border-gray-400 outline-none placeholder-gray-400'

const SigninModal: React.FC = () => {
  const { signIn, setSignIn, setSignUp } = useModal()
  const { t } = useTranslation()

  const auth = useFirebaseAuth()

  const validationSchema = yup.object().shape({
    email: yup.string().required('Email is a required field'),
    password: yup.string().required('Password is a required field'),
  })

  const methods = useForm<TSignIn>({
    mode: 'onSubmit',
    // reValidateMode: 'onSubmit',
    resolver: yupResolver(validationSchema),
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { handleSubmit, control } = methods

  const onHandlerSignUp = (data: TSignIn) => {
    auth
      ?.signIn(data.email, data.password)
      .then(() => {
        setSignIn(false)
      })
      .catch((error) => {
        setSignIn(false)
        const { title, description } = setErrorMessage(error)
        // do something with error title and description here
        alert(title + ': ' + description)
      })
  }

  const onHandlerSignUpWithFacebook = () => {
    auth
      ?.signUpFacebook()
      .then(() => {
        setSignIn(false)
      })
      .catch((error) => {
        setSignIn(false)
        const { title, description } = setErrorMessage(error)
        // do something with error title and description here
        alert(title + ': ' + description)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onHandlerSignUp)}>
        <div
          className={classNames(
            'justify-center items-center flex',
            'overflow-x-hidden overflow-y-auto',
            'fixed inset-0 z-50 outline-none focus:outline-none',
          )}
        >
          <div
            className={classNames(
              'relative w-auto my-6 mx-auto max-w-3xl',
              'lg:min-w-md',
            )}
          >
            <div className="absolute top-0 right-0 z-10">
              <ButtonIcons onClick={() => setSignIn(false)}>
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  />
                  <line
                    x1="15"
                    y1="9"
                    x2="9"
                    y2="15"
                  />
                  <line
                    x1="9"
                    y1="9"
                    x2="15"
                    y2="15"
                  />
                </svg>
              </ButtonIcons>
            </div>
            <div
              className={classNames(
                'relative flex flex-col',
                'border-0 rounded-lg shadow-lg w-full bg-white outline-none',
                'focus:outline-none',
              )}
            >
              <div
                className={classNames(
                  'grid grid-flow-row-dense p-6',
                  'md:grid-cols-2 sm:grid-cols-1',
                  'gap-4',
                )}
              >
                <div
                  className={classNames(
                    'col-span-1 relative h-full w-full min-h-md',
                    'hidden sm:block',
                  )}
                >
                  <Image
                    unoptimized
                    placeholder="blur"
                    blurDataURL="/images/main/signin-image.jpeg"
                    src="/images/main/signin-image.jpeg"
                    layout="fill"
                    objectFit="cover"
                    alt="signin-image"
                  />
                </div>
                <div className="col-span-1 flex flex-col gap-2">
                  <div>
                    <p className="text-lg">{ t('common:signinForm.title') }</p>
                  </div>
                  <div>
                    <ButtonOutline
                      type="button"
                      onClick={() => onHandlerSignUpWithFacebook()}
                    >
                      { t('common:signupForm.facebook') }
                    </ButtonOutline>
                  </div>
                  <div>
                    <p className="text-lg">{ t('common:signinForm.email') }</p>
                    <Controller
                      render={({ field: { onChange, value }, fieldState: { error }}) => (
                        <TextField
                          name={'email'}
                          value={value}
                          onChange={onChange}
                          className={classNames(
                            MemberTextField,
                            error && 'border-red-400',
                          )}
                        />
                      )}
                      name="email"
                      control={control}
                    />
                  </div>
                  <div>
                    <p className="text-lg">{ t('common:signinForm.password') }</p>
                    <Controller
                      render={({ field: { onChange, value }, fieldState: { error }}) => (
                        <TextField
                          type="password"
                          name="password"
                          value={value}
                          onChange={onChange}
                          className={classNames(
                            MemberTextField,
                            error && 'border-red-400',
                          )}
                        />
                      )}
                      name="password"
                      control={control}
                    />
                  </div>
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
                    <ButtonPrimary type="submit">{ t('common:signinForm.signin') }</ButtonPrimary>
                    <Button
                      type="button"
                      onClick={() => {
                        setSignIn(false)
                        setSignUp(true)
                      }}
                    >{ t('common:signinForm.register') }</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
      </form>
    </>
  )
}

export default SigninModal
