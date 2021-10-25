import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Modal from "../components/modal";
import Portal from "../HOC/Portal";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("bottom");

  const Toggle = (pType: string) => {
    setModal(!modal);
    setType(pType);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="App">
          <button className="clickMe" onClick={() => Toggle("center")}>
            center Modal
          </button>

          <button className="clickMe" onClick={() => Toggle("bottom")}>
            Bottom Modal
          </button>

          <Portal
            show={modal}
            close={() => Toggle(type)}
            title="Dynamic Title"
            placedAt={type}
          >
            <Modal
              show={modal}
              close={() => Toggle(type)}
              title="Dynamic Title"
              placedAt={type}
            >
              This is modal content
            </Modal>
          </Portal>
        </div>
      </main>
    </div>
  );
};

export default Home;
