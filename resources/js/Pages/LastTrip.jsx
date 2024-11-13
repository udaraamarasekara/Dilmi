import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import styles from './Dashboard.module.css';
import Rectangle from './../../../public/Rectangle 214.png';
import Rectangle2 from './../../../public/Rectangle 220.png';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import PrimaryButton from '@/Components/PrimaryButton';
import 'react-circular-progressbar/dist/styles.css';
export default function LastTrip() {
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
            <Head title="Last Trip" />
             <div className='p-12 w-full'>

              <div className='text-4xl text-left' >Last Trip</div>
             <div>2024-04-04</div>
             <div className='flex flex-col md:flex-row'>
             <img className='my-12' src={Rectangle2}/>
             <div className='w-32 m-auto flex flex-col'>
             <CircularProgressbar value={60} text='60%'
                      styles={buildStyles({
                      textColor:red,
                       
                        pathColor: red,
                      })}
                      />
                  <div style={{color:red}} className='text-4xl my-3 w-max'>Risk Ride</div>    
             </div>
             
             </div>
             <div className=" w-auto my-4 ">
                    <div className={`${styles.card} overflow-hidden p-4 border-solid border-2 border-black  flex flex-col md:flex-col   shadow-sm`} style={{width:'60vw'}} >
                             <div className='flex flex-row w-full justify-center text-xl mb-12'>Kurunagala to Colombo</div>
                             <div className='flex flex-row w-full w-1/2 font-bold text-xl justify-between'>
                             <div className='flex flex-row w-full w-1/2 font-bold text-xl'>Distance :20km</div>
                             <div className='flex flex-row w-full w-1/2 font-bold text-xl'>Average Speed :20kmph</div>
                             </div>

                    </div>
                </div>
                <PrimaryButton className="ms-4" disabled={false}>
                       Map
                    </PrimaryButton>
                    <PrimaryButton className="ms-4" disabled={false}>
                       Back to home
                    </PrimaryButton>
             </div>
           
        </AuthenticatedLayout>
    );
}
