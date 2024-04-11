import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

export function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return { loggedIn, checkingStatus };
}
