import { useState } from 'react'
import './App.css'
import Question from './Question'
import data from "./data"

function App() {

  const questions = data.map(item => <Question title={item.title} info={item.info}  />)

  return (
    <section>
      <h2>Questions And Answers About Login</h2>

      <main>
        <div className="container">
            {questions}
        </div>
      </main>
    </section>
  )
}

export default App
