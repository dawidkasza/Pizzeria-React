import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home.js';
import TablePage from './components/pages/TablePage/TablePage.js';
import NotFound from './components/pages/NotFound/NotFound.js';
const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/table/:id" element={<TablePage/>}></Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Container>
  )
}

export default App;
