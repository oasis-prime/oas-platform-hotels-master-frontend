import { MemberRegisterMutation, MemberRegisterMutationVariables } from './generated/member.generated'
import { gql, useMutation } from '@apollo/client'

const MEMBER_REGISTER = gql`
  mutation MemberRegister($input: MemberRegisterInput!) {
    memberRegister(input: $input) {
      message
    }
  }
`

const useRegister = () =>
  useMutation<MemberRegisterMutation, MemberRegisterMutationVariables>(MEMBER_REGISTER)

export { useRegister }
