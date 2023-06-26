import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainTable from './Pages/MainTable'
import AddNewEntry from './Pages/AddNewEntry'
import paths from './paths'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={paths.mainTable} element={<MainTable />} />
        <Route exact path={paths.addNewEntry} element={<AddNewEntry />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
