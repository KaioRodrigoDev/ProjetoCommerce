export default function Home() {
  return (
    //Pagina inicial da loja
    <div className="dark:bg-bg dark:text-white dark:h-screen">
      <div className="max-w-6xl flex justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-full w-full">
          <div className="flex w-full bg-sky-400">
            <div className="mx-auto flex items-center">
              <div className="pr-6">
                <h1 className="-mb-5 -ml-3">Lorem Ipsum</h1>
                <h1 className="-mb-5 -ml-4">Lorem Ipsum</h1>
                <h1 className="-ml-5">Lorem Ipsum</h1>
              </div>
              <img
                className="h-full"
                src="https://cdn-icons.flaticon.com/png/128/2347/premium/2347446.png?token=exp=1651727030~hmac=49dfa1d54a1f71b182404bde8aec7fd4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
