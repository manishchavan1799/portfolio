import React, { useState } from 'react'
import hello from '../assets/vg.png';
import toast from 'react-hot-toast';
import {motion} from "framer-motion";

const Contact = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
const animations={
    form:{
        initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            x:"0%",
            opacity:1
        }
    },
    button:{
        initial:{
            y:"-100%",
            opacity:0
        },
        whileInView:{
            y:"0%",
            opacity:1,
            
        },
        transition:{
            delay:0.2
        }
    }
}

const submitHandler=async (e)=>{
    e.preventDefault();
    console.log(name,email,message);
    toast.success("Message sent");
}

  return (
    <div id='contact'>
        <section >
            <motion.form onSubmit={submitHandler} {...animations.form}>
            <h2>Contact me</h2>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required placeholder='YOUR NAME' />
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='YOUR EMAIL' />
                <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}placeholder='YOUR MESSAGE' />
                <motion.button {...animations.button} type="submit" >SEND</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={hello} alt="" />
        </aside>
    </div>
  )
}

export default Contact