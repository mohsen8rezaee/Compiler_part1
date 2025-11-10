import './App.css';
import EditorComponent from './components/EditorComponent';
import './components/HeaderComponent'
import HeaderComponent from './components/HeaderComponent';
// import SetDefaultComponents from './components/SetDefaultComponents';
import TokenList from './components/TokenList';
import { useState } from 'react';

function App() {
  const [shouldReload, setShouldReload] = useState(false);

  return (
    <div className="App">
      <HeaderComponent />
      <div className="main">
        <EditorComponent onAnalyzed={() => { setShouldReload(prev => !prev) }} />
        <TokenList reloadTrigger={shouldReload} />
        {/* <SetDefaultComponents /> */}
      </div>
    </div>
  );
}

export default App;
