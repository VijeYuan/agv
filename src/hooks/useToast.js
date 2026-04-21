import { useState, useCallback } from 'react';

let _id = 0;

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((msg, sub = '', type = 'success') => {
    const id = ++_id;
    setToasts(prev => [...prev, { id, msg, sub, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3200);
  }, []);

  return { toasts, showToast };
}
