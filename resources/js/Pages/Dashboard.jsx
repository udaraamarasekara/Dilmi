import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import styles from './Dashboard.module.css';
import Rectangle from './../../../public/Rectangle 214.png';
import Rectangle2 from './../../../public/Rectangle 220.png';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Dashboard() {
    var red ='#D53B3B'
    var orange = '#FFA500'
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto w-full sm:px-6 lg:px-8">
                    <div  className={`${styles.card} overflow-hidden flex  flex-col md:flex-row bg-white shadow-sm`}>
                         <div className='flex flex-column' >
                           <p className={`${styles.header} whitespace-nowrap`} >Hello Dilmi</p>    
                        </div>   
                        <img className="ml-auto" src={Rectangle}/>
                        
                    </div>
                </div>
                <div className="mx-auto w-full  my-4 sm:px-6 lg:px-8">

                <div style={{borderRadius:'30px',borderLeft:'none',borderRight:'none', borderTop:'none'}} className={` py-5 px-5 border-solid border-2 justify-between items-center border-black  flex flex-col md:flex-row bg-white shadow-sm`}>
                   <p>End-Of-Day Summary</p>
                   <div className='flex w-1/3 flex-col'>
                   Date
                       <input type='date'/>
                   </div>
                  </div>
                  </div>

                <div className="mx-auto w-full  my-4 sm:px-6 lg:px-8">
 
                <div style={{borderRadius:'30px',borderLeft:'none',borderRight:'none'}} className={`   border-solid border-2 border-black  flex flex-col bg-white shadow-sm`}>

            {[...Array(4)].map((_, i) => (
                <div className="mx-auto w-auto my-4 sm:px-6 lg:px-8">
                    <div className={`${styles.card} overflow-hidden p-4 border-solid border-2 border-black  flex flex-col md:flex-row  bg-white shadow-sm`} style={{width:'60vw'}} >
                      <img src={Rectangle2}/>
                      <div className='flex w-full md:mx-4 flex-col'>
                        <div className='text-4xl'>Kurunagala To Colombo</div>   
                        <div className='text-xl md:ml-3 '>Date: 31/10/2024</div>    
                        <div className='text-xl md:ml-3'>Time :01.01.01 AM</div>    
                         <div className='justify-between flex flex-col md:flex-row'>
                            <button className='bg-black m-2 rounded-lg py-2 px-3 text-white'>View More </button>
                            <div style={{color:red}} className='text-4xl font-bold '>RISK RIDE</div>   

                         </div>
                      </div>
                      <CircularProgressbar value={60} text='60%'
                      styles={buildStyles({
                      textColor:red,
                       
                        pathColor: red,
                      })}
                      />


                        

                    </div>
                </div>
            ))}
                </div>
                </div>
                </div>

        </AuthenticatedLayout>
    );
}
