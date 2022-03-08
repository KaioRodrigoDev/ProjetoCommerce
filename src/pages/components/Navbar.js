import Link from 'next/link'
import styled from 'styled-components'

const Lista = styled.li`
  color: #fff;
  transition: 0.7s;
  list-style-type: none;
  font-size: 20px;
  padding-right: 1rem;
  &:hover {
    color: #999;
  }
`
const Container = styled.div`
  display: flex;
  background-color: #000;
  padding: 20px 20px;
`

export default function Navbar() {
  return (
    <>
      <Container>
        <ul>
          <Lista>
            <Link href="/">Home</Link>
          </Lista>
        </ul>
        <ul>
          <Lista>
            <Link href="/">Home</Link>
          </Lista>
        </ul>
        <ul>
          <Lista>
            <Link href="/">Home</Link>
          </Lista>
        </ul>
        <ul>
          <Lista>
            <Link href="/">Home</Link>
          </Lista>
        </ul>
      </Container>
    </>
  )
}
