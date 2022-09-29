import { FormEvent, useState } from 'react'

import { Button } from '@components/misc/button'
import Head from 'next/head'
import Link from 'next/link'
import type { NextPage } from 'next'
import { TextField } from '@components/misc/textField'
import { setErrorMessage } from '@auth/error.message'
import { useAuth } from '@auth/auth'
import { useRouter } from 'next/router'
import { useSelector } from '@utils/main.hooks'

const Signup: NextPage = () => {
  const router = useRouter()
  const auth = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const storeAuth = useSelector((s) => s.auth)

  const signUp = (
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string,
  ) => {
    event.preventDefault()


    // auth
    //   ?.signUp(email, password)
    //   .then(() => {
    //     // do something after signing in. For example, router.push("/");
    //     router.push('/')
    //   })
    //   .catch((error) => {
    //     const { title, description } = setErrorMessage(error)
    //     // do something with error title and description here
    //     alert(title + ': ' + description)
    //   })
  }

  // loading state
  if (storeAuth.loading) {
    return <p>Loading...</p>
  }

  // // if a user is logged in, redirect to a page of your liking
  if (storeAuth.user) {
    router.push('/')
    return null
  }

  return (
    <div className={'container'}>
      <Head>
        <title>NextJS Firebase Auth Starter Kit</title>
        <meta
          name="description"
          content="A starter kit created by @official-carledwardfp"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={'container'}>
        <h1 className={'text-3xl'}>Signup</h1>
        { /* <br /> */ }
        <form onSubmit={(event) => signUp(event, email, password)}>
          <label htmlFor="email">Email Address</label>
          <TextField
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <TextField
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            onClick={() => {
              //
            }}
          >
            Submit123
          </Button>
        </form>
        <Link href="/">&larr; Go back</Link>
      </main>
    </div>
  )
}

export default Signup
