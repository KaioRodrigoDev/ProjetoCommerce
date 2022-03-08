import { useRouter } from 'next/router'

export default function produto() {
  const useRota = useRouter()
  const id = useRota.query.id
  return (
    <>
      <h1>Produto de numero {id}</h1>
    </>
  )
}
