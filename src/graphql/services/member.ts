import { MemberRegister, MemberRegisterVariables } from './__generated__/MemberRegister'
import { gql, useMutation } from '@apollo/client'

const MEMBER_REGISTER = gql`
  mutation MemberRegister($input: MemberRegisterInput!) {
    memberRegister(input: $input) {
      message
    }
  }
`

const useRegister = () =>
  useMutation<MemberRegister, MemberRegisterVariables>(MEMBER_REGISTER)

export { useRegister }
