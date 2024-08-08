import PledgeForm from '@/components/PldegeForm';
import React from 'react';

const PledgePage =()=>{

    return(
        <>
      
      <div className="flex min-h-[100vh] flex-1 flex-col justify-center bg-[#1e448a] p-4">
            <div className="w-full max-w-[570px] mx-auto rounded-3xl shadow-[0_20px_1px_#fdc839] bg-white">
                <div className="px-5 py-12 sm:px-7 sm:py-12">
                  <div className="text-center">
                    <h1 className="block text-2xl sm:text-4xl font-semibold text-gray-800 dark:text-white">Pledge Your Salawat</h1>
                  </div>         
                  <div className="mt-7">
                  <PledgeForm />
                  <div className="mt-8 space-y-1">
                        <p className="sm:text-[1rem] text-gray-700 font-bold uppercase tracking-wider sm:leading-6">Location: Thailand</p>
                        <p className=""><span  className="font-normal leading-6 text-[#649d74] sm:text-[1rem] sm:leading-6">Wrong Location ?</span></p>                        
                        <p className="font-normal text-gray-400 sm:text-[.8rem] sm:leading-5">If your location is still incorrect, please fill out <span className="text-[#649d74] font-medium">this form</span> and then sumit your pledge. We`ll update the details for your pledge within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>         
        </>
    )
}

export default PledgePage ;