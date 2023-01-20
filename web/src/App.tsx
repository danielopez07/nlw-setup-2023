
import { Habit } from './components/Habit'
import './styles/global.css'


function App() {

  return (
    <div className="">
      <Habit completed={3} />
      <Habit completed={5} />
      <Habit completed={7} />
      <Habit completed={9} />
    </div>
  )
}

export default App
