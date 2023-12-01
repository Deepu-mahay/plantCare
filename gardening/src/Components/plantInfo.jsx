import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function PlantInfo( ){
    const location = useLocation()
    const [plantDetail , setPlantDetail] = useState(null)
    const plantInput = location.state?.data
    const care = plantInput.care
    const plantName = plantInput.plantDetail.plant_info
    const Detail = plantInput.detail
    const Treatment = plantInput.treatment
    const diseases = plantInput.diseases 
    console.log(plantInput)
    console.log(plantName)
  
   

        
        // key 1 de48716b7emsh8f5d8c663f5428ap16550fjsnc98f3b4b389c
        // key 2 4f487956a4msh833b734d99c3b63p177a87jsn78a589d726e3

    console.log(plantDetail)


    return(
    <>
        <div style={{}}>
                               <> { diseases === null
                               ?""
                                   :(
                                       
                                       <div style={{background:"white", width:"300px", border:"1px solid green",borderRadius:"20px",padding:"20px", float:"left" , margin:"20px"}}>
                                        <h5>Diseases </h5>
                                        <h6> {plantName.info.diseases.common}</h6>
                                        <h5>Prevention </h5>
                                            <h6> {plantName.info.diseases.prevention}</h6>
                                        <h5>Treatment</h5> 
                                            <h6> {plantName.info.diseases.treatment}</h6>
                                        </div>
                               )
                                
                        } 
                        { Treatment === null
                               ?""
                                   :(
                                      <>
                                      <div style={{background:"white", border:"1px solid green",borderRadius:"20px",padding:"20px" ,float:"left" }}>
                                        <h4>Factors Affecting Plant</h4>
                                        
                                        <div style={{float:"left",width:"250px", background:"#68de7c",width:"500px", padding:"20px",borderRadius:"20px",margin:"20px" }}>
                                        <h4>Light</h4> 
                                            <h5>Requirement:</h5>
                                                <h6> {plantName.info.light.requirement}</h6>
                                            <h6>unit: {plantName.info.light.unit}</h6>
                                        </div>
                                        <div style={{float:"left",width:"250px", margin:"20px", background:"#68de7c", padding:"20px",borderRadius:"20px"}}>
                                            <h4>Temperature</h4>

                                            <h5>Requirement:</h5>
                                                <h6> {plantName.info.temperature.requirement}</h6>
                                            <h5>unit:</h5>
                                                <h6> {plantName.info.temperature.unit}</h6> 
                                        </div>
                                        <div style={{float:"left",width:"250px", margin:"20px", background:"#68de7c", padding:"20px",borderRadius:"20px"}}>
                                        <h4>Water</h4> 
                                            <h5>Requirement:</h5>
                                                <h6> {plantName.info.watering.requirement}</h6>
                                            <h5>unit:</h5>
                                                <h6> {plantName.info.watering.unit}</h6>
                                            <h6>Wilting point: {plantName.info.watering.wilting_point}</h6>
                                        </div>
                                        <div style={{float:"left",margin:"20px",width:"250px", background:"#68de7c", padding:"20px",borderRadius:"20px"}}>
                                        <h4>Soil</h4>
                                            <h5>Requirement</h5>
                                                <h6> {plantName.info.soil.requirement}</h6>                                         
                    
                                        </div>
                                        <div style={{float:"left",margin:"20px", width:"250px",background:"#68de7c", padding:"20px",borderRadius:"20px"}}>
                                        <h4>Fertilizers</h4>
                                            <h5>Requirement:</h5>
                                                <h6> {plantName.info.fertilizers.requirement}</h6>
                                            <h5>unit:</h5>
                                                <h6> {plantName.info.fertilizers.unit}</h6>
                                            </div>
                                            <div style={{float:"left", width:"250px",margin:"20px",background:"#68de7c", padding:"20px",borderRadius:"20px"}}>

                                        <h5>humidity:</h5> 
                                            <h5>Requirement</h5>
                                            <h6> {plantName.info.humidity.requirement}</h6>
                                            <h5>Unit</h5>
                                                <h6> {plantName.info.humidity.unit}</h6>
                                        
                                        </div>
                                        </div>
                                      
                                      </> 
                               )
                                
                        }          
                        { care === null
                               ?""
                                   :(
                                       
                                    <div style={{float:"left",border:"1px solid green" ,borderRadius:"20px",background:"white", padding:"20px",borderRadius:"20px"}}>
                                        <h4> Propagation</h4>
                                    <div style={{float:"left",width:"450px", background:"#68de7c", padding:"20px",borderRadius:"20px"}}>

                                        <h5>Method:</h5>
                                            <h6>{plantName.info.propagation.method}</h6>
                                        <h5>steps:</h5>
                                            <h6>{plantName.info.propagation['steps']}</h6>
                                         </div>
                                         </div>
                               )
                                
                        }          
                        { Detail === null
                               ?""
                                   :(
                                       
                                       <div style={{background:"#f6f6f8",border:"1px solid green", borderRadius: "20px",padding:"10px",float:"left" }}>
                                        <h4>Product of Plant</h4>
                                        <div style={{float:"left", margin:"10px",background:"#68de7c", padding:"20px",borderRadius:"20px", width:"250px"}}>
                                        <h4>Fruits</h4>
                                            <h5>harvest_time:</h5>
                                                <h6>{plantName.info.fruits.harvest_time}</h6>
                                                <h6>type: {plantName.info.fruits.type}</h6>
                                        </div>
                                        <div style={{float:"left", margin:"10px",background:"#68de7c", padding:"20px",borderRadius:"20px"}}>
                                            <h4>Flowers</h4>
                                                <h5>blooming_season:</h5>
                                                   <h6>  {plantName.info.flowers.blooming_season}</h6>
                                                <h5>type:</h5>
                                                    <h6> {plantName.info.flowers.color}</h6>
                                        </div>
                                        <div style={{background:"#68de7c",margin:"10px",float:"left", padding:"20px",borderRadius:"20px"}}>

                                        <h4>Stages of Growth</h4>
                                            <h5>harvest_time:</h5>
                                            <h6> {plantName.info.growth.rate}</h6>
                                            <h5>Type:</h5>
                                            <h6> {plantName.info.growth.stages}</h6>
                                        </div>
                                
                                        </div>
                                )
                        }                   

                                
        </> 
        </div>              
                             
                         
    </>
    )
}