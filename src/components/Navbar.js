import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="flex p-3 border-2  border-y-black-900 box-content justify-center">
        <h1 className="static">Logo</h1>
        <div className="flex w-full justify-center space-x-6 font-black ">
          <ul>
            <li>
              <Link href="/produtos">Produtos</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="font-black" href="/sobre">
                Sobre
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="font-black " href="/sobre">
                Pronta Entrega
              </Link>
            </li>
          </ul>
        </div>
        <input className="flex static justify-end  max-w-[10%]" />
      </div>
    </>
  )
}
