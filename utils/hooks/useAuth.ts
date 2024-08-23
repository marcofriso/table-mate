import { useContext } from "react";
import axios from "axios";
import { AuthenticationContext } from "@/app/context/AuthContext";

const useAuth = () => {
  const { setAuthState } = useContext(AuthenticationContext);

  const signin = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    handleClose: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_FRONTEND_SERVER}/api/auth/signin`,
        {
          email,
          password,
        }
      );

      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  const signup = async () => {};

  return {
    signin,
    signup,
  };
};

export default useAuth;
