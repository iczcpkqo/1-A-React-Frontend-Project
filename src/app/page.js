import Image from 'next/image'
import Card from './components/card/Card'
import Form from './components/form/Form'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*<Card/>*/}
        <Form/>
    </main>
  )
}
