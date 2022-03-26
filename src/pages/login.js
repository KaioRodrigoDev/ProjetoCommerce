export default function Login() {
  return (
    // LOGIN PAGE
    <div className="bg-white dark:h-screen dark:bg-slate-900">
      <div className="max-w-2xl mx-auto  px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="mt-4 flex-1">
            <form className="bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 dark:border-opacity-50 dark:shadow dark:shadow-sm dark:elevation-2">
              <div className="flex flex-col items-center justify-center p-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="email"
                        type="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        id="password"
                        type="password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
