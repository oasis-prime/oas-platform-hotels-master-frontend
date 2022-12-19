import * as Types from '@/types';

export type MemberRegisterMutationVariables = Types.Exact<{
  input: Types.MemberRegisterInput;
}>;


export type MemberRegisterMutation = { __typename?: 'Mutation', memberRegister: { __typename?: 'MemberRegisterData', message: string } };
