import React, {useEffect, useState} from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, get, child, remove } from "firebase/database";
import './SavedPhotos.css';

const SavedPhotos = () => {

    let [photoData, setPhotoData] = useState({})
    let [hasPhotos, setHasPhotos] = useState(false)

    const firebaseConfig = {
        apiKey: "AIzaSyC7P-qeFlIDaUlmhF2xA6t6JJfXAwZ8F0Y",
        authDomain: "nasaroverphotos.firebaseapp.com",
        databaseURL: "https://nasaroverphotos-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "nasaroverphotos",
        storageBucket: "nasaroverphotos.appspot.com",
        messagingSenderId: "5382280468",
        appId: "1:5382280468:web:03f91d9bf3768a4aea9e01"
      };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase();

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `savedPhotos/`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            setPhotoData(snapshot.val())
            setHasPhotos(true)
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
    }, [])

    function deleteImage(photoId){
        remove(ref(db, 'savedPhotos/' + photoId));
        document.location.reload();
    }
    return (
        <div>
           {hasPhotos? <div className="savedPhotoContainer">

               {photoData.map((photo, index) =><div className="photoWBtn"><img src={photo.photoUrl}alt="roverPhoto" /* onClick={(e) =>{
                enlargeImage(e)}} */ id="image"/><button href='#' onClick={(e)=> { deleteImage(index)
                }} className="btn delBtn">DELETE</button></div>)}
           </div>:<div><h2>No Photos Saved!</h2></div>} 
        </div>
    )
}

export default SavedPhotos
