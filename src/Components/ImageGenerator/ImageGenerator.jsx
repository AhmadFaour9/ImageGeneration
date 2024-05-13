// @ts-ignore
import React, { useEffect, useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
// @ts-ignore
import "bootstrap/dist/js/bootstrap.js";
import "./ImageGenerator.css";
import imageDefault from '../../Assest/images/wallpaperflare.com_wallpaper (5).jpg'
import config from 'Constants/enviroment';
import axios from 'axios';
import OpenAI from "openai";

import { json } from 'react-router-dom';

const ImageGenerator = () => {
    
    const openai = new OpenAI({ apiKey: 'sk-proj-SDvyH39d0IgMhy20zmQVT3BlbkFJQsFSwfVTkZN4tVBSRe7a' ,dangerouslyAllowBrowser: true});

    const [text, setText] = useState('')

    const [imageUrl, setImageUrl] = useState(imageDefault)
    let inputRef = useRef(null)
    // @ts-ignore
    const [responseData, setResponseData] = useState();
    const [loading, setLoading] = useState();

    // @ts-ignore
    const handleSetData = async () => {


        // const response = await fetch(
        //     `${config.baseUrl}/${config.imageGeneration}`,
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization:
        //                 `Bearer ${token}`,
        //             "User-Agent": "Chrome",
        //         },
        //         body: JSON.stringify({
        //             prompt: `${inputRef.current.value}`,
        //             n: 1,
        //             size: "512x512",
        //         }),
        //     }
        // );
        const image = await openai.images.generate({ prompt: text });
setImageUrl(image.data[0].url)
        console.log(image.data);
    };
   
    return (

        <>
            <div className='image-generator container-fluid d-flex flex-column col-md-6 col-sm-12 col-lg-6'>
                <img
                    src={imageUrl}
                    alt='enter-the-description-to-generate-images'
                    width='250px'
                    height={'250px'}
                />
                <div className='inputs'>
                    <input
                        type='text'
                        value={text}
                        placeholder='please enter the decription to generate photo from that description '
                        onChange={e => setText(e.target.value)}
                        ref={inputRef}
                    />
                    <button
                        className='btn button'
                        title='Generate'
                        onClick={() => handleSetData()}
                    >Generate</button>
                </div>
            </div>
        </>
    )
}

export default ImageGenerator