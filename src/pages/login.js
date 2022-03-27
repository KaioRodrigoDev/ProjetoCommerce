import { firebase, auth } from '../../src/services/firebase'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserData } from '../services/redux/slices/slices'

export default function Login() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  async function SignInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await auth.signInWithPopup(provider)
    console.log(result.user.displayName)
    dispatch(
      updateUserData({ isLogged: true, userData: result.user.displayName })
    )
    return result
  }

  async function signInWithEmail() {
    console.log(`Ajustando Email= ${value.email} Senha= ${value.senha}`)
    const result = await auth
      .signInWithEmailAndPassword(value.email, value.senha)
      .catch(alert('Email ou senha Incorretos'))

    return result
  }

  function signOut() {
    auth.signOut()
  }

  return (
    // LOGIN PAGE

    <div className="min-h-full dark:h-screen dark:bg-slate-900 dark:text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="space-y-4 text-center">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold ">
            Faça Login com sua conta
          </h2>
          <button onClick={SignInWithGoogle}>
            <img
              className="h-6 w-auto"
              src="https://img.icons8.com/color/344/google-logo.png"
              alt="Google"
            />
          </button>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-slate-900 dark:text-white"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-slate-900 dark:text-white"
                placeholder="Password"
              />
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Não Possui Conta ?
                </a>
              </div>
            </div> */}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}