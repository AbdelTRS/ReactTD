import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'

export default function Home() {
  const [ count, setCount ] = useState(0)
  const [ todolist, setTodoList ] = useState(["1", "2", "3"])
  const [ input, setInput ] = useState ('')

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1> Hello </h1>
        <h3> count: {count} </h3>
        <button onClick={() => setCount( count + 1 )}> click </button>

        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={() => setTodoList(e => [...e, input])}>Add</button>


        { todolist.length > 1 && (
          todolist.map((todo, i) => {
            return (
            <p key={i}> {todo} </p>)
          })
        )}
      </main>

    </div>
  )
}
