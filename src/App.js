import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/men/9.jpg"
        name="Martin Dean"
        status
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/13.jpg"
        name="Esther Kuhn"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/26.jpg"
        name="Edith Lewis"
        status
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/96.jpg"
        name="Beth May"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/57.jpg"
        name="Edgar Owens"
        status
      />
    </div>
  );
}

export default App;
