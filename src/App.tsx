import './App.css'
// import Person from './Person'
// import { Country } from './Person'
// import { PersonInterface } from './Person'
import UserContextProvider from './Context'
import User from './User'
import New from './New'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// let name: string = 'Hi'
// let age: number = 12
// let isLoggedIn: boolean = true
// let person: { name: string; age: number; isLoggedIn: boolean } = { name, age, isLoggedIn }
// let ages: number[] = [1,2,3,4]

function App() {
  return (
    <UserContextProvider>
      {/* <Person name={'Hamza'} age={21} isMarried={false} country={Country.PAK} /> */}
      {/* <Person name={'Ali'} age={"29"} isMarried={true} /> */}
      {/* <Person name={'Ali'} age={29} isMarried={true} /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
