import { DialogText, DialogWindow} from "@/Components/dialog";

import React from "react";

export default function Home() {
  return (
    <>
      <DialogWindow isOpen={true}
      header={{title: "Welcome to the Dialog Component"}}>
        <DialogText children={undefined} />
      </DialogWindow>
        
      
    </>
    );
}
