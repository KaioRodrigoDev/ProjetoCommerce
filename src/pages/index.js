import Link from 'next/link'

export default function Home() {
  return (
    //Pagina inicial da loja
    <div className="dark:bg-bg dark:text-white dark:h-screen">
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
                <div>
                  <h1>Pedidos Seguros</h1>
                </div>
                <div>
                  <h1>Entregas Para todo Brasil</h1>
                </div>
                <div>
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
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
