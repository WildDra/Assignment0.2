import React from "react";
import Link from 'next/link'

export default function FirstPage() {
    return (
        <div style={{backgroundImage: "url('https://img.freepik.com/free-vector/watercolor-sugar-cotton-clouds-background_23-2149231325.jpg?w=2000')",backgroundColor: 'black', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'  }}>
            <h2 style={{fontSize: '2.5rem', fontFamily: 'Helvetica Neue'}}>Hi Everyone!</h2> 
            <h3 style={{fontSize: '1.5rem', animation: "move 2s infinite"}}>My name is Irfan</h3>
            <h4 style={{fontSize: '1.5rem'}}>I am 20 years old</h4> 
            <h5 style={{fontSize: '1.5rem'}}>I enjoy playing football</h5>  
            <h6 style={{fontSize: '1.5rem'}}>
            GO TO{' '}<Link href="/posts/second-page"><>Second page!</></Link></h6>
            <Link href="/">Back to home</Link>
        </div>
    )
}

