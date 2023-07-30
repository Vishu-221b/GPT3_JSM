import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css"

export default function Header()
    {
        return(
           <div>
                <div>
                    <h1>Let’s Build Something
amazing with GPT-3
OpenAI</h1>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <div>
                        <input type="email" placeholder="Enter your email"/>
                        <button type="button">Get Started </button>
                    </div>
                    <div>
                        <img src={people} />
                        <p>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>
                <div>
                    <img src ={ai} />
                </div>
            </div>
        )
    }
