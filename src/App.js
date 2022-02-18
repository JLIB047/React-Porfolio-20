import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Nav from './components/Navigation';



function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav>
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Nav>
      <main>
      {!contactSelected ? (
        <>
        <About></About>
        </>
      ) : (
        <ContactForm></ContactForm>
      )}
      </main>
    </div>
  );
}

export default App;
