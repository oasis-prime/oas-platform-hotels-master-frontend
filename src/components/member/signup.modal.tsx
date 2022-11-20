import * as yup from 'yup'

import { Button, ButtonIcons, ButtonOutline } from '@components/misc/button'
import { Controller, useForm } from 'react-hook-form'

import { Checkbox } from '@components/misc/checkbox/main.checkbox'
import Image from 'next/image'
import { TSignUp } from '@model/member'
import { TextField } from '@components/misc/textField'
import classNames from 'classnames'
import { setErrorMessage } from '@auth/error.message'
import { useFirebaseAuth } from '@auth/auth'
import useModal from '@store/useModal'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { yupResolver } from '@hookform/resolvers/yup'

const MemberTextField = 'w-full bg-white border p-3 rounded-lg font-semibold border-gray-200 focus:border-gray-400 outline-none placeholder-gray-400'

const SignupModal: React.FC = () => {
  const { t } = useTranslation()

  const router = useRouter()
  const auth = useFirebaseAuth()

  const validationSchema = yup.object().shape({
    'display': yup.string().required('Display is a required field'),
    'email': yup.string().required('Email is a required field'),
    'password': yup.string().required('Password is a required field'),
    'confirmPassword': yup.string().required('Confirm Password is a required field'),
  })

  const methods = useForm<TSignUp>({
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
      confirmPassword: '',
      display: '',
      email: '',
      password: '',
    },
  })
  const { handleSubmit, control } = methods

  const { signUp, setSignUp } = useModal()

  const onHandlerSignUp = (data: TSignUp) => {
    auth
      ?.signUp(data.display, data.email, data.password)
      .then((data) => {
        if (!data.error) {
          setSignUp(false)
        }
      })
      .catch((error) => {
        console.log(error)
      })
      // .then(() => {
      //   setSignUp(false)
      // })
      // .catch((error) => {
      //   setSignUp(false)
      //   const { title, description } = setErrorMessage(error)
      //   // do something with error title and description here
      //   alert(title + ': ' + description)
      // })
  }

  const onHandlerSignUpWithFacebook = () => {
    auth
      ?.signUpFacebook()
      .then(() => {
        setSignUp(false)
      })
      .catch((error) => {
        setSignUp(false)
        const { title, description } = setErrorMessage(error)
        // do something with error title and description here
        alert(title + ': ' + description)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onHandlerSignUp)}>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="absolute top-0 right-0 z-10">
              <ButtonIcons onClick={() => setSignUp(false)}>
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
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div
                className={classNames(
                  'grid grid-flow-row-dense p-6',
                  'md:grid-cols-2 sm:grid-cols-1',
                  'gap-4',
                )}
              >
                <div className="col-span-1 h-full relative w-full">
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
                <div className="col-span-1 grid grid-flow-row gap-2">
                  <div>
                    <p className="text-lg">{ t('common:signupForm.title') }</p>
                  </div>
                  <div>
                    <ButtonOutline
                      type="button"
                      onClick={
                        () => onHandlerSignUpWithFacebook()
                      }
                    >
                      { t('common:signupForm.facebook') }
                    </ButtonOutline>
                  </div>
                  <div>
                    <p className="text-lg">{ t('common:signupForm.name-surname') }</p>
                    <Controller
                      render={({ field: { onChange, value }, fieldState: { error }}) => (
                        <TextField
                          name={'display'}
                          value={value}
                          onChange={(e) => {
                            onChange(e)
                          }}
                          className={classNames(
                            MemberTextField,
                            error && 'border-red-400',
                          )}
                        />
                      )}
                      name="display"
                      control={control}
                    />
                  </div>
                  <div>
                    <p className="text-lg">{ t('common:signupForm.email') }</p>
                    <Controller
                      render={({ field: { onChange, value }, fieldState: { error }}) => (
                        <TextField
                          name="email"
                          value={value}
                          onChange={(e) => {
                            onChange(e)
                          }}
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
                    <p className="text-lg">{ t('common:signupForm.password') }</p>
                    <Controller
                      render={({ field: { onChange, value }, fieldState: { error }}) => (
                        <TextField
                          name="password"
                          type="password"
                          value={value}
                          onChange={(e) => {
                            onChange(e)
                          }}
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
                  <div>
                    <p className="text-lg">{ t('common:signupForm.passwordConfirm') }</p>
                    <Controller
                      render={({ field: { onChange, value }, fieldState: { error }}) => (
                        <TextField
                          name="confirm-password"
                          type="password"
                          value={value}
                          onChange={(e) => {
                            onChange(e)
                          }}
                          className={classNames(
                            MemberTextField,
                            error && 'border-red-400',
                          )}
                        />
                      )}
                      name="confirmPassword"
                      control={control}
                    />
                  </div>
                  <div className="mt-2">
                    <Checkbox className="float-left mr-2" />
                    <p className="">
                      { t('common:signupForm.confirmPolicy') }{ ' ' }
                      <span>{ t('common:signupForm.confirmPolicyInSpan') }</span>
                      { t('common:signupForm.confirmPolicyOutSpan') }
                    </p>
                  </div>
                  <div className="">
                    <Button>{ t('common:signupForm.submit') }</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
    </div>
  )
}

export default SignupModal
