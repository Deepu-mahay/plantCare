import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Services() {
const [plantName , setPlantName] = useState()
const [type , setType] = useState(null)
const [plantDetail , setPlantDetail] = useState(null)
const [diseases , setDiseases] = useState(null)
const [treatment , setTreatment] = useState(null)
const [care , setcare] = useState(null)
const [categoryName , setcategory] = useState()
const [detail , setDetail] = useState(null)

const Navigate  = useNavigate()
const handlePlantName=(data)=>{
    setPlantName(data.target.value)
    console.log(data.target.value)
}
const handleDisease=(data)=>{
    setDiseases(data.target.value)
    console.log(data.target.value)
}
const handleCategoryName=(data)=>{
    setcategory(data.target.value)
    console.log(data.target.value)
}
console.log(diseases)
console.log(detail)
    
    async function fetchData() {
    // const options = {
    //         method: 'GET',
    //         url: `https://house-plants2.p.rapidapi.com/category/${categoryName}`,
    //         headers: {
    //             'X-RapidAPI-Key': 'de48716b7emsh8f5d8c663f5428ap16550fjsnc98f3b4b389c',
    //             'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
    //         }
    //     };

     
        // await setTimeout(() => {

        // }, 7000);
        Navigate('/plantInfo',{state:{data:{diseases:diseases,detail:detail,treatment:treatment,care:care,plantDetail:plantDetail}}}) 
    //         try {
    //         const response = await axios.request(options)
    //         console.log(await response.data)
    //         setType(await response.data)
    // }catch(error){
    //     console.log(error)
    // }

        } 

const getallLite = async()=>{

    const options = {
        method: 'GET',
        url: 'https://house-plants2.p.rapidapi.com/all-lite',
        headers: {
            'X-RapidAPI-Key': 'de48716b7emsh8f5d8c663f5428ap16550fjsnc98f3b4b389c',
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
        }
    };
    
    // try {
    //     const response = await axios.request(options);
    //     console.log(response.data);
    //     setType(response.data);

    // } catch (error) {
    //     console.error(error);
    // }
    Navigate('/plantInfo',{state:{data:plantDetail}})
}
const PlantCare = async()=>{
    const options = {
        method: 'GET',
        url: 'https://plantwise.p.rapidapi.com/plant_care/',
        params: {plant_type: plantName},
        headers: {
            'X-RapidAPI-Key': 'de48716b7emsh8f5d8c663f5428ap16550fjsnc98f3b4b389c',
            'X-RapidAPI-Host': 'plantwise.p.rapidapi.com'
        }
    };
    // key 1 de48716b7emsh8f5d8c663f5428ap16550fjsnc98f3b4b389c
    // key 2 4f487956a4msh833b734d99c3b63p177a87jsn78a589d726e3
    try {
        const response = await axios.request(options);
        console.log(await response.data);
        setPlantDetail(await response.data);

    } catch (error) {
        console.log(error);
    }
    
    console.log(plantDetail)
    console.log(detail)
    setTimeout(() => {   
         fetchData()
        }, 5000);
}

    return (
    <>
    <div class="container-fluid quote my-5 py-5" data-parallax="scroll" data-image-src="img/carousel-2.jpg">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="bg-white rounded p-4 p-sm-5 wow fadeIn" data-wow-delay="0.5s">
                        <h1 class="display-5 text-center mb-5">Search and get plant</h1>
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <div class="form-floating">
                                    <input type="text" onChange={handlePlantName} class="form-control bg-light border-0" id="gname" placeholder="Gurdian Name"/>
                                    <label for="gname">Plant name</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-floating">
                                <button class="btn btn-primary py-3 px-4" onClick={PlantCare}>plant_care</button>

                                    {/* <input type="text" onChange={handleCategoryName} class="form-control bg-light border-0" id="gmail" placeholder="Gurdian Email"/>
                                    <label for="gmail">type of plant</label> */}
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-floating">
                                    <input type="checkbox" className="bg-light border-0" name='dieases' onClick={handleDisease}/> Diseases <br/>   
                                    <input type="checkbox" className="bg-light border-0" name='treatment' onClick={((e)=>{setTreatment(e.target.value)})}/> Factor Affecting Plant <br/>
                                    <input type="checkbox" className="bg-light border-0" name='care' onClick={((e)=>{setcare(e.target.value)})}/> Propagation <br/>
                                    <input type="checkbox" className="bg-light border-0" name='detail'onClick={((e)=>{setDetail(e.target.value)})}/> Product <br/>
                                </div>
                            </div>
                            {/* <div class="col-sm-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control bg-light border-0" id="cname" placeholder="Child Name"/>
                                    <label for="cname">Your Mobile</label>
                                </div>
                            </div> */}
                            {/* <div class="col-sm-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control bg-light border-0" id="cage" placeholder="Child Age"/>
                                    <label for="cage">Service Type</label>
                                </div>
                            </div> */}
                            {/* <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control bg-light border-0" placeholder="Leave a message here" id="message" style={{height:" 100px"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div> */}
                            <div class="col-12 text-center">
                                <button class="btn btn-primary py-3 px-4" onClick={fetchData}>Submit Now</button>
                            </div>
                            {/* <div class="col-12 text-center">
                                <button class="btn btn-primary py-3 px-4" onClick={getallLite}>Get All Categories</button>
                            </div> */}
                            {/* <div class="col-12 text-center">
                                <button class="btn btn-primary py-3 px-4" onClick={PlantCare}>plant_care</button>
                            </div> */}
                        {type == null
                        ?""
                        :type.map((data)=>{
                            return(
                                <>
                                     <div class="card" style={{width: "18rem"}}>
                                        <img src ={data.Img} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">{data.Categories}</h5>
                                            <p class="card-text">
                                                Common Name: {data['Common name']}
                                               <br/> Climate : {data.Climat}
                                                <br/>Family : {data.Family}
                                                <br/>Origin : {data.Origin}
                                                <br/>Lain name : {data['Latin name']}
                                                
                                            </p>

                                        </div>
                                        </div>
                                </>
                            )
                        })}
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Quote End --> */}
    </>
  )
}
