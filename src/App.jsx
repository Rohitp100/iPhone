import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import SoundSection from './components/SoundSection';
import DisplaySection from './components/DisaplaySection';
import WebgiViewer from './components/WebgiViewer';
import { useRef } from 'react';

function App() {

  const WebgiViewerRef = useRef();

  const handlePreview = () => {
    WebgiViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection triggerPreview={handlePreview}/>
      <WebgiViewer ref={WebgiViewerRef} />
    </div>
  );
}

export default App;
