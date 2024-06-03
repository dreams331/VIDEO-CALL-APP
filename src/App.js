// src/App.js
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import VideoCall from './VideoCall';
import PaymentForm from './PaymentForm';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <VideoCall />
          <PaymentForm />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
