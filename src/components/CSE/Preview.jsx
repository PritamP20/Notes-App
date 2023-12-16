import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getStorage, ref,getDownloadURL } from "firebase/storage";


const Preview = (props) => {

    const location = useLocation();

    // gsutil cors set cors.json gs://fir-app-5920f.appspot.com/files

    const storage = getStorage();
    getDownloadURL(ref(storage, 'files/Unit 3_Mechanics.pdf'))
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
    
        // Or inserted into an <img> element
        // const img = document.getElementById('myimg');
        // img.setAttribute('src', url);
      })
      .catch((error) => {
        // Handle any errors
      });

      useEffect(()=>{
        getDownloadURL()
      },[])

  return (
    <>

    <div className='h-[90%] flex'>
        <div className='flex w-[80%] h-[100%]'>
            <iframe className="w-[100%] " src={location.state} frameborder="0"></iframe>
        </div>
        <div className='flex flex-col ml-16 w-[20%]'>
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                <img src="/src/assets/BEEE_thumbnail.png" alt="" />
                Extra Notes
            </button>
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                <img src="/src/assets/BEEE_thumbnail.png" alt="" />
                Extra Notes
            </button>
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                <img src="/src/assets/BEEE_thumbnail.png" alt="" />
                Extra
            </button>
        </div>    

    </div>

    </>
  )
}

export default Preview
