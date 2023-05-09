import Link from 'next/link'
import './global.css'

export default function Home() {
  return (
    <div>
      Hello World. <Link href="/about">About</Link>
    </div>
  )
}
