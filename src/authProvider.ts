import type { AuthProvider } from "react-admin";

const authorizedUsers = [
  {
    id: "admin",
    role: "admin",
    fullName: "John Admin",
    avatar: "https://i.pravatar.cc/150?img=64",
  },
  {
    id: "reader",
    role: "reader",
    fullName: "Bob Reader",
    avatar: "https://i.pravatar.cc/300?img=33",
  },
  {
    id: "user",
    role: "user",
    fullName: "Jane User",
    avatar: "https://i.pravatar.cc/300?img=45",
  },
];

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const user = authorizedUsers.find((user) => user.id === username);
    if (!user) {
      throw new Error("Invalid username or password");
    }
    localStorage.setItem("username", username);
    localStorage.setItem("role", user.role);
    localStorage.setItem("identity", JSON.stringify(user));
  },
  logout: async () => {
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("identity");
  },
  getIdentity: async () => {
    return JSON.parse(localStorage.getItem("identity")!);
  },
  checkError: async () => {},
  checkAuth: async () => {
    if (!localStorage.getItem("username")) {
      throw new Error();
    }
  },
  canAccess: async ({ resource, action }) => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      return true;
    }
    if (role === "reader") {
      return action === "list" || action === "show";
    }
    if (role === "user") {
      return ["orders", "customers", "products"].includes(resource);
    }
    return false;
  },
};
