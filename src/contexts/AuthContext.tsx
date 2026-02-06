import { createContext, useContext, useState, ReactNode } from "react";

export type UserRole = "student" | "supervisor" | "admin";

interface AuthContextType {
  role: UserRole | null;
  userName: string;
  setRole: (role: UserRole | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole | null>(null);

  const nameMap: Record<UserRole, string> = {
    student: "Ahmed Khan",
    supervisor: "Dr. Sarah Ahmed",
    admin: "Admin User",
  };

  const logout = () => setRole(null);

  return (
    <AuthContext.Provider value={{ role, userName: role ? nameMap[role] : "", setRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};
