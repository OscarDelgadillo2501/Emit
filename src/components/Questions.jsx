import { useState, useEffect } from "react"

export default function Questions() {
  const [text, setText] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  const sendQuestion = async () => {
    setLoading(true)
    const res = await fetch("https://birsbane-dingo-aaza.2.us-1.fl0.io/question/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    }).then(res => res.json())

    setLoading(false)
    setAnswer(res)
  }

  return (
    <section className="bg-white">
      <div className="max-w-screen-md mx-auto py-16">
        <label htmlFor="message" className="block mb-2 font-medium text-2xl">
          Escribe una pregunta sobre EMIT
        </label>

        <div className="flex mx-auto">
          <input
            id="message"
            className="block p-2.5 w-full  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:focus:border-primary-500"
            value={text}
            onChange={e => setText(e.target.value)}
            disabled={loading}
          />
          <button
            className={
              (loading ? "bg-gray-300" : "bg-purple-800") + " text-white rounded-lg px-4 ml-2"
            }
            onClick={sendQuestion}
          >
            {loading ? "Esperando respuesta..." : "Enviar"}
          </button>
        </div>

        <textarea
          disabled
          value={answer}
          rows="6"
          className="mt-4 block p-2.5 w-full  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:focus:border-primary-500"
          onChange={e => setText(e.target.value)}
        />
      </div>
    </section>
  )
}
