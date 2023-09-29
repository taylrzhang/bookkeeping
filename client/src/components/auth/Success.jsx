import { Link } from "react-router-dom";

export default function Success() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-80">
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up successful</h1>
          <p className="block text-center font-medium leading-6 text-gray-900 py-8">
            You can sign in now.
          </p>
          <Link to="/login" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</Link>
      </div>
    </>
  )
} 