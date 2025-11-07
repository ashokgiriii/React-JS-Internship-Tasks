import { useAuthContext } from "@/src/context/Authcontext";

export const useLogout = () => {
  const { logout } = useAuthContext();
  return logout;
};
