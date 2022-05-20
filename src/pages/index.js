import Link from 'next/link'
import Products from '../components/Products'

export default function Home() {
  return (
    //Pagina inicial da loja
    <div className="dark:bg-bg dark:text-white min-h-screen pb-4">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className=" h-full w-full">
          <section>
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
          </section>
          <section>
            <div className="py-10">
              <div className="flex border justify-around p-4">
                <div className="sm:flex text-center">
                  <div className="lg:pr-4 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h1>Pedidos Seguros</h1>
                </div>
                <div className="sm:flex text-center">
                  <div className="lg:pr-4 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <h1>Entregas para todo Brasil</h1>
                </div>
                <div className="sm:flex text-center">
                  <div className="lg:pr-4 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h1>Aceitamos Cartão</h1>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div className="flex justify-between">
                <h1>Novidades</h1>
                <Link href="/produtos">
                  <a>Ver Tudo</a>
                </Link>
              </div>
              <Products />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
