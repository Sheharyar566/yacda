import React from 'react';
import 'App.scss';

import Sidebar from 'components/menu/Sidebar';
import Content from 'components/Content';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <Content />
    </div>
  );
}

export default App;