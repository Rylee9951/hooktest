import React, { useState, useEffect } from 'react';

function App () {
 const [count, setCount] = useState(0)


 useEffect(() => {
  document.title = `You clicked ${count} time${count !== 1 ? 's' : ''}`
 })

 return (
   <div>
     <p>You clicked {count} time{count !== 1 ? 's' : ''}</p>
     <button onClick={() => setCount(count + 1)}>Click Me</button>
   </div>
 )
}

export default App;