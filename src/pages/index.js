export default function Home() {
  return (
    //Pagina inicial da loja
    <div className="dark:bg-bg dark:text-white dark:h-screen">
      <div className="max-w-6xl flex justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex mt-16 h-16 w-full">
          <div className="flex w-2/3 bg-sky-400">
            <h1>Promoção</h1>
          </div>
          <div className="flex w-1/3 bg-sky-600">
            <h1>Promoção 2</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
