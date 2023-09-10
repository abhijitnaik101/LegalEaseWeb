import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../Firebase";
import React, { useState } from 'react';



const Storage = () => {

    const storage = getStorage(app);

    const [imageUpload, setImageUpload] = useState();
    const [imageDownload, setImageDownload] = useState("https://firebasestorage.googleapis.com/v0/b/legaleaseweb.appspot.com/o/legalease%2Fpfp%2FDreamShaper_v7_2d_fantasy_illustration_black_color_rocky_mount_1.jpg?alt=media&token=6ddd80f8-96eb-4227-8739-e1b2218d0199");


    
    const uploadFile = () => {
        if(!imageUpload) return;

        const imageRef = ref(storage, "legalease/pfp/" + imageUpload.name);

        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url);
            });
        })
    }

    const downloadFile = () => {
        if(!imageDownload) return;
        const imageRef = ref(storage, "legalease/pfp/" + imageDownload.name);
        getDownloadURL(imageRef)
        .then((url) => {
        // Insert url into an <img> tag to "download"
        return (<img href={url} alt="hp"/>)
    }).catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            alert("File doesn't exist");
            break;
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            alert("Unauthorised access");
            break;
          case 'storage/canceled':
            // User canceled the upload
            alert("Upload is cancelled");
            break;
    
          // ...
    
          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            alert("An unknown error occured");
            break;
        }
    }
    )
}
    
    return(
        <>
        <div className="h-[400px] w-[100%] bg-green-300">
                <input type="file" onChange={ (event)=>{setImageUpload(event.target.files[0]); }} />
            <button onClick={uploadFile} className="h-[50px] w-[100px] p-[15px] rounded-lg bg-blue-400 hover:bg-blue-600">
                Upload
            </button>
            <div className="h-[500px] w-[100%] bg-red-100">
                <img src={imageDownload} alt="pfp"/>
            </div>
        </div>
        </>
    )

}
export default Storage