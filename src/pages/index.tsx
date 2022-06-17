import { Button } from "@components/button";
import { Modal } from "@components/modal";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal isOpen={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Open</Button>
    </>
  );
};

export default Home;
