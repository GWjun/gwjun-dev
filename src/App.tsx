import { useEffect, useState } from 'react'
import { Button } from '#components/_common/Button'

function App() {
  const [count, setCount] = useState(0)
  const [, setIsMount] = useState(false)

  useEffect(() => {
    setIsMount(true)
    console.log('mount!!')
  }, [])

  return (
    <>
      <Button variant="outline" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </>
  )
}

export default App
