import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './RoverPics.css';
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, get, child } from "firebase/database";

const RoverPics = () => {
    let [nextSaveId, setNextSave] = useState(0);

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


    let [photoData, setData] = useState('')

    let {name} = useParams();
    let {camera} = useParams();
    let {date} = useParams();
    //console.log(date)
    useEffect(() =>{

        const dbRef = ref(getDatabase());
        get(child(dbRef, `savedPhotos/`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            setNextSave(snapshot.val().length);
        } else {
            console.log("No data available");
            setNextSave(0)
        }
        }).catch((error) => {
        console.error(error);
        });



        setTimeout(() => {
            const fetchData = async() =>{
                const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?earth_date=${date}&camera=${camera}&api_key=t3g1xr0VlNIm3cfOcNDxjUVF9cROGadeS7TAnAh5`);
                const data = await response.json();
                setData(data.photos);
            }
            fetchData();
            ;}, 10);
            }, []);

    function enlargeImage(e){
        //console.log(e.target)
        let bigPhotos = document.getElementsByClassName("enlarged")
        if (bigPhotos[0]){
            for(let photo in bigPhotos){
                //console.log(bigPhotos[photo])
                bigPhotos[photo].style = "width: 80%; border: none;"
                bigPhotos[photo].classList.remove("enlarged");
            }
        }
        if (e.target.className === "enlarged"){
            e.target.className = "small";
            e.target.style.width= "40%";
            e.target.style.border= "none";
        }
        else{
            e.target.style.position= "absolute";
            e.target.style.width = "80%";
            e.target.style.left = "0";
            e.target.style.top = "10%";
            e.target.style.margin = "10%";
            e.target.style.border= "10px solid orange";
            e.target.className = "enlarged";
        }
    }

    function writePhotoToDB(url, photoId){
        set(ref(db, 'savedPhotos/'+photoId), {
            photoUrl: url
          });
        setNextSave(nextSaveId+1)
    }

    async function saveImage(photoUrl){
        let photoId = nextSaveId;
        //console.log(photoId)
        writePhotoToDB(photoUrl, photoId)
    }
    return (
        <div>
           <h2>{name} Rover camera {camera.toUpperCase()} </h2>
           <div className="picsWindow">
               {photoData[0]? photoData.map(photo => <div className="photoWithButton" ><img src={photo.img_src}alt="roverPhoto" onClick={(e) =>{
                enlargeImage(e)}} id="image"/><button href='#' onClick={(e)=> {
                    saveImage(photo.img_src)
                }}>SAVE</button></div>): <div>No pics for that date/camera</div>}
           </div>

        </div>
    )
}

export default RoverPics
