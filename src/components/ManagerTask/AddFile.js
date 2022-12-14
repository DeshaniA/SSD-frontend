import React, { useState } from "react"
import axios from 'axios';
import Layout from '../../components/Layout';



export default function AddPaper() {

    const[title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [photo, setPhoto] = useState([]);

    const handleResearchpaper = (e) => {

        setPhoto([
            ...photo,
            e.target.files[0]

        ]);
    }
    

   
    function sendData(e){
        e.preventDefault();
       
        const form = new FormData();
        form.append('title', title);
        form.append('description',description);
        //console.log(researchpaper)
        //console.log('form' +form);

        console.log('calling');

        for (let pic of photo) {
            form.append('photo', pic);
        }
        console.log('photo'+photo)

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
          'http://localhost:8065/api/managertask/addmanagertask',
          form,
          config
        ).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            alert(err.message);
        });
    
        // .then((res) => {
        //     alert(res)
        //     console.log(res.data)
        //     this.setState({products: res.data});
        // })
        // ;
        // .then(
        //     alert("Successfully Added"),
        //     console.log).catch(
        //         alert("There are some Error"),
        //         console.log);


        
       
        // axios.post("http://localhost:8065/api/paper/create", form)
        //   .then(function (response) {
        //     console.log(response);

        //     console.log("HII")

        //     setTitle("");
        //     setEmail("");
        //     setDescription("");
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //     console.log("HII error")
        //     setTitle("");
        //     setEmail("");
        //     setDescription("");
        //   });



    }   
   

       
    

    
    return (

        <Layout>
                 
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
                    <input type="text" className="form-control" id="description"  placeholder="Enter description"onChange={(e)=>{
                        setDescription(e.target.value);
                    }}/>
              
                    
                </div>
                
                <div className="form-group">
                    <label for="photo">Research Paper</label>
                    {
                    photo.length > 0 ?
                    photo.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                }
                    <input type="file" className ="form-control" name="photo" onChange={handleResearchpaper} />
                   
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </Layout>

    )
}

