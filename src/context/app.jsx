import { createContext, useState } from 'react';

// Tạo context
export const AppContext = createContext();

export function AppProvider({ children }) {
  // Tạo state để quản lý dữ liệu chia sẻ
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
