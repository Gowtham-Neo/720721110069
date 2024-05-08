import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AverageCalculator from './cal'

function App() {
  const exp="1715162552"
  const accessCode="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTYyNTUyLCJpYXQiOjE3MTUxNjIyNTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFjNWE0MTcwLTJiMzktNDZhMS1hNjM5LTkzYzI1Yjc0YmZiNSIsInN1YiI6IjcyMDcyMTExMDA2OS05QGhpY2V0LmFjLmluIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkTWVkIiwiY2xpZW50SUQiOiIxYzVhNDE3MC0yYjM5LTQ2YTEtYTYzOS05M2MyNWI3NGJmYjUiLCJjbGllbnRTZWNyZXQiOiJCSkNOeU9zQ3ZXQkVyYkdHIiwib3duZXJOYW1lIjoiR293dGhhbSIsIm93bmVyRW1haWwiOiI3MjA3MjExMTAwNjktOUBoaWNldC5hYy5pbiIsInJvbGxObyI6IjcyMDcyMTExMDA2OSJ9.rnnKa1uTl34FhWbYHzyhwnoiRftyVQ3KPSOdTlv8XTM"


  return (
    <>
      <AverageCalculator/>
    </>
  )
}

export default App
