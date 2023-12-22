import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getStorage, ref,getDownloadURL } from "firebase/storage";


const Preview2 = (props) => {

    const location2 = useLocation();

    // gsutil cors set cors.json gs://fir-app-5920f.appspot.com/files

    const storage = getStorage();
    getDownloadURL(ref(storage, 'files/web dev report example.pdf'))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
    
        console.log("This is the url of mechanics",url)

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
      })
      .catch((error) => {
      });

  return (
    <>

    <div className='relative h-[90%] flex'>
        <div className='flex w-[80%] h-[100%]'>
            <iframe className="w-[100%] " src={location2.state} frameborder="0"></iframe>
        </div>

    </div>

    </>
  )
}

export default Preview2
