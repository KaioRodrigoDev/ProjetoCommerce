import { useRouter } from 'next/router'

export default function produto() {
  const router = useRouter()
  const id = router.query.id
  return (
    <>
      <h1>Produto de numero {id}</h1>
    </>
  )
}
