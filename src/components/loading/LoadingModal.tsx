import { useLoading } from "../../context/LoadingContext";

import Modal from 'react-modal';
import { Loading } from "./Loading";

export const LoadingModal = () => {
  const { loading } = useLoading();

  const styleModal = {
    overlay : {
      zIndex : '10000',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    content: {
      width: "100vh",
      height: "100vh",
      borderRadius: '7px',
      backgroundColor : "#0000",
      border : 'none',
      transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
      transformOrigin: "center bottom",
    }
  };

  return (
    <Modal
      isOpen={loading}
      onRequestClose={() => {}}
      style={styleModal}
      className={{
        base: 'fixed inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out m-auto',
        afterOpen: 'translate-y-0 opacity-100',
        beforeClose: 'translate-y-full opacity-0',
      }}
      overlayClassName="fixed inset-0"
      closeTimeoutMS={300}
    >
      <Loading width={400} height={400}/>
    </Modal>
  );
};