import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive')


  return (
    <div className=' h-screen w-screen duration-300' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white text-black rounded-3xl py-2 px-3">
          <button className="outline-none text-white text-center py-1 px-3 rounded-2xl" style={{ backgroundColor: 'red' }} onClick={()=>setColor('red')}>Red</button>
          <button className="outline-none text-white text-center py-1 px-3 rounded-2xl" style={{ backgroundColor: 'blue' }}  onClick={()=>setColor('blue')}>blue</button>
          <button className="outline-none text-white text-center py-1 px-3 rounded-2xl" style={{ backgroundColor: 'green' }}onClick={()=>setColor('green')}>green</button>
          <button className="outline-none text-white text-center py-1 px-3 rounded-2xl" style={{ backgroundColor: 'purple' }}onClick={()=>setColor('purple')}>purple</button>
          <button className="outline-none text-dark text-center py-1 px-3 rounded-2xl" style={{ backgroundColor: 'lavender' }}onClick={()=>setColor('lavender')}>lavender</button>
          <button className="outline-none text-dark text-center py-1 px-3 rounded-2xl" style={{ backgroundColor: 'pink' }}onClick={()=>setColor('pink')}>pink</button>
          <button className="outline-none text-dark text-center py-1 px-3 rounded-2xl" style={{ backgroundColor: '#fff5d7' }}onClick={()=>setColor('#fff5d7')}>peach</button>
        </div>
      </div>
    </div>
  )
}

export default App
