import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center p-3 border-2 border-y-black-900">
        <div className="flex space-x-6 font-black ">
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
      </div>
    </>
  )
}
