import { ButtonOutline, ButtonText } from '@components/misc/button'

import useModal from '@store/useModal'
import useAuth from '@store/useAuth'

type MainHeaderProps = {
  children?: JSX.Element
}

const SignHeader: React.FC<MainHeaderProps> = () => {
  // State
  const { signIn, signUp, setSignIn, setSignUp } = useModal()
  const { user } = useAuth()

  return (
    <>
      <div>
        <ButtonText
          type="button"
          onClick={() => {
            setSignIn(!signIn)
          }}
        >
                Sign In
        </ButtonText>
      </div>
      <div>
        <ButtonOutline
          onClick={() => {
            setSignUp(!signUp)
          }}
        >
                Sign Up
        </ButtonOutline>
      </div>

    </>
  )
}

export { SignHeader }
