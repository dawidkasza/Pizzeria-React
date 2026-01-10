import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home.js';
import TablePage from './components/pages/TablePage/TablePage.js';
import NotFound from './components/pages/NotFound/NotFound.js';
import Header from './components/views/Header/Header.js';
import Footer from './components/views/Footer/Footer.js';
const App = () => {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/table/:id" element={<TablePage/>}></Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Container>
  )
}

export default App;
