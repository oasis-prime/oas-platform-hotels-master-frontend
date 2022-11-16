/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MemberRegisterInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: MemberRegister
// ====================================================

export interface MemberRegister_memberRegister {
  __typename: "MemberRegisterData";
  message: string;
}

export interface MemberRegister {
  memberRegister: MemberRegister_memberRegister;
}

export interface MemberRegisterVariables {
  input: MemberRegisterInput;
}
