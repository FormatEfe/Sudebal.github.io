import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <h1>SUDEBALIM SENİ ÇOK SEVİYORUM</h1>
        <div className="ratio ratio-16x9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gHh0qjeH2g0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </Container>
      
      
    </div>
  );
}

export default App;
