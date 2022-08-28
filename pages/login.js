import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { useFileContext, handleModal } from "../utils/context";
import LoginForm from "../compos/LoginForm";
import Modal from "../compos/Modal";

const Login = () => {
  const router = useRouter();
  const [state, dispatch] = useFileContext();
  const { user, login } = state;
  React.useEffect(() => {
    if (user.name && user.email) {
      router.push("/");
    }
  }, [user.name, user.email, router]);
  return (
    <div className="login-entry">
      <div className="left-side">
        <div className="logo-wrapper">
          <Image src="/logo.png" height="24" width="36" alt="Tandm" />
          <span className="logo-des">
            <strong>Tandm</strong> collaboration platform
          </span>
        </div>
        <div className="login-detail">
          <div>
            <h3>Login</h3>
            <p>
              Welcome to the collaboration system. Please put your login
              credentials below to start using it
            </p>
          </div>
          <LoginForm />
          <p className="login-extra--info">
            Don&#39;t have an account? <span>Sign up</span>
          </p>
        </div>
      </div>
      <div className="right-side">
        <div className="rs-image-wrapper">
          <Image src="/image/1.jpg" height="230" width="340" alt="show" />
        </div>
        <div className="rs-text-wrapper">
          <h3>Meet our online collaboration features</h3>
          <p>
            Tandm&#39;s visual integration platform lets you manage your
            architectural project in real-time in an intuitive way
          </p>
        </div>
      </div>
      <Modal
        open={login.trim().length !== 0}
        handleClose={() => handleModal(dispatch)}
        msg={login}
      />
    </div>
  );
};

export default Login;
