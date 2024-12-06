import React from 'react'
import Recherche from '../Recherche/Recherche'
import './index.css'
import { LineChart, Settings, PenTool, Car, BellElectric, HelpingHand, FireExtinguisher, HardDrive } from "lucide-react";
import { dataCenter } from './Data2';



const Accueil = () => {
   



  return (
    <div className="home">
        <Recherche/>
        <div className="option">
           <h1>Option</h1>
           <hr />
        </div>
        <div className="topOption">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {/* Likes and Comments Card */}
      <div className="bg-white p-5 shadow-sm">
        <div>
          <div>Like, Comments</div>
        </div>
        <div className="pt-6">
          <div className="space-y-1 p-1 flex-col">

            <div>
              <p className="text-gray-600">total likes : 25</p>
            </div>
            
            <div>
              <p className="text-gray-600">total comments : 12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Categories Card */}
      <div className="bg-white p-5 shadow-sm">
        <div>
          <div>Top Categories</div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 flex items-center gap-1">
              <HardDrive className="w-4 h-4" /> Defensive Driving
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 flex items-center gap-1">
              <LineChart className="w-4 h-4" /> Basic Rescue
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 flex items-center gap-1">
              <PenTool className="w-4 h-4" /> Risk Assesment
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 flex items-center gap-1">
              <Settings className="w-4 h-4" /> Rope Rigging
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 flex items-center gap-1">
              <Car className="w-4 h-4" /> Offroad Driving Skills
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 flex items-center gap-1">
              <BellElectric className="w-4 h-4" /> Electrical Safety
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 flex items-center gap-1">
              <HelpingHand className="w-4 h-4" /> First Aid
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 flex items-center gap-1">
              <FireExtinguisher className="w-4 h-4" /> Fire Safety
            </span>
          </div>
        </div>
      </div>

      {/* Popular Topics Card */}
      <div className="bg-white p-5 shadow-sm">
        <div>
          <div>Popular Topics</div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Opération & Sauvetage en hauteur</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Defensive Driving</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Offroad Driving Skills</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Climbing Equipment Inspection Management</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">PPE</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Electrical Safety & Authorisation</span>
          </div>
        </div>
      </div>

      {/* Become A Tutor Card */}
      <div className="bg-white p-5 shadow-sm">
        <div>
          <div>Video courses</div>
        </div>
        <div>
          <p className="text-gray-500 mb-4">
          Our video is now available!
          </p>
        </div>
      </div>
     
    </div>  
   </div> 
   <div className="OurCours">
          <h1>Our courses</h1>
          <div className="course">
          <div className='flex justify-center w-full mx-auto flex-wrap gap-16'>
       {
            dataCenter.map((index)  =>{
                return(
                  <div className="bg-white w-[300px] rounded-lg shadow-md overflow-hidden">
                  <img src={index.image} alt={index.titre} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl w-[200px] text-[15px] font-semibold mb-2">{index.titre}</h3>
                    <p className="text-gray-600 w-[200px] text-[12px] mb-4">{index.info}</p>
                  </div>
                </div>
                )
            })
        }
         </div>
        </div>
       </div>   
       <footer style={{display:"flex", alignItems:"center",justifyContent:"center", marginTop:"5rem"}}>
        © 2024 TechSkils Learning Institute. All right Reserved.
        <img src='/image/certificat.png' alt='' width='50px' />
      </footer>
   </div>  
  )
}

export default Accueil
