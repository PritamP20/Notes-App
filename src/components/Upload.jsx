import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";
import { listAll } from "firebase/storage";

function Upload() {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const listAllNotes = () => {
    listAll("files/")
  }

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div className="flex items-center justify-center">
        <div className="pt-52">
            <form onSubmit={formHandler}>
                <input type="file" className="input" />
                <button type="submit" className="border pt-1 pb-1 pl-2 pr-3 ">Upload</button>
            </form>
            <h1 className="pl-32 pt-8 text-2xl">Uploading done {progress}%</h1>
        </div>
    </div>
  );
}

export default Upload;