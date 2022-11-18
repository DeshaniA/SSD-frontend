import React, { useState } from "react"
import axios from 'axios';
import Layout from '../../components/Layout';



export default function AddPaper() {

    const[title,setTitle] = useState("");
    const [text,setText] = useState("");
    

    const handleResearchpaper = (e) => {

        setResearchpaper([
            ...researchpaper,
            e.target.files[0]

        ]);
    }
    

   
    function sendData(e){
        e.preventDefault();
       
        const form = new FormData();
        form.append('title', title);
        form.append('text',text);
        
        console.log('calling');

        const token = localStorage.getItem('token');

        console.log('token is '+token);

       //// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwYTQyMmRiMTI2YjQwMThlODc2ZTciLCJyb2xlIjoicmV2aWV3ZXIiLCJpYXQiOjE2MjQ4MDE0NDYsImV4cCI6MTYyNTQwNjI0Nn0.s3vyEE-jxlc3ZKZYxkyhdYjiUQktFLpy-1DShF4zw1c';

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        console.log('user token'+config);
        
        const bodyParameters = {
           title: "title"
        };
        
        axios.post( 
          'http://localhost:8065/api/workertask/addtext',
          form,
          config
        ).then(res => console.log(res))
        .then((res) => {
            alert(res.data)
            console.log(res.data)
            this.setState({products: res.data});
        })
        ;



    }   
   

       
    

    
    return (

        <Layout>
                  &nbsp;&npsp;
            &nbsp;&npsp; &nbsp;&npsp; &nbsp;&npsp; &nbsp;&npsp; &nbsp;&npsp;
            
            <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Add ResearchPapers</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </div>


        <div className ="container">
            <form onSubmit ={sendData}>
                <div className="form-group">
                    <label for="name">Title</label>
                    <input type="text" className="form-control" id="title"  placeholder="Enter Title"  onChange={(e)=>{
                        setTitle(e.target.value)
                    }}/>
                    
                </div>
                <div className="form-group">
                    <label for="phnum">Description</label>
                    <input type="text" className="form-control" id="text"  placeholder="Enter description"onChange={(e)=>{
                        setText(e.target.value);
                    }}/>
              
                    
                </div>
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </Layout>

    )
}

