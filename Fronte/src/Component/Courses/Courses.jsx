import { dataCenter } from './Data2';
import './index.css'
import Recherche from "../Recherche/Recherche"
import { Play } from 'lucide-react';




const CoursesPage = () => {
      

  return (
    <div className="OurCours">
      <Recherche/>
          <h1>Our courses</h1>
          <div className="course">
          <div className='flex justify-center w-full mx-auto flex-wrap gap-16'>
       {
            dataCenter.map((index)  =>{
                return(
                  <div className="bg-white w-[300px] rounded-lg shadow-md overflow-hidden">
                  <img src={index.image} alt={index.titre} className="w-full h-48 object-cover cursor-pointer" />
                  <div className="p-4">
                    <h3 className="text-xl w-[200px] text-[15px] font-semibold mb-2">{index.titre}</h3>
                    <p className="text-gray-600 w-[200px] text-[12px] mb-4">{index.info}</p>
                    <div className="flex justify-between items-center">
                     <span className="text-lg text-[12px]">15000 Ar</span>
                     <button className=" text-black px-4 py-2">
                       Acheter
                     </button>
                   </div>
                  </div>
                </div>
                )
            })
        }
         </div>
        </div>
        <footer style={{display:"flex", alignItems:"center",justifyContent:"center", marginTop:"5rem"}}>
        © 2024 TechSkils Learning Institute. All right Reserved.
        <img src='/image/certificat.png' alt='' width='50px' />
      </footer>
       </div> 
  );
};
export default CoursesPage
