import React from 'react'
import profileimage from '../images/profileimage.jpeg';
export default function profile() {
  return (<>
    <div className='grid grid-rows-5 size-96 '>
      
      <div className='row-span-2 bg-sky-500'>
        <div className='relative left-36 top-24  rounded-full h-24 w-24 place-self-center'>
        <img src={profileimage} alt='profile' style={{ borderRadius: '50%', width: '100px', height: '100px'}}/>
      </div>
      </div>
      <div className='row-span-2 bg-white border-2 border-b-black'>
        <div className='grid'>
          <div className='flex place-self-center pt-12 '>
            <div>
              <p className='text-black font-bold  '>
                Deepansh Gupta
              </p>

            </div>
            <div className='pl-2'>
              <p className='text-slate-400 font-semibold'>
                22
              </p>
            </div>

          </div>
          <div>
            <p className='text-slate-400 font-medium'>
              Aligarh
            </p>
          </div>
        </div>
      </div>
      <div className='row-span-1 bg-white '>
        <div className='flex space-x-10 justify-center' >
          <div >
            <p className='text-black text-2xl font-bold'>80K</p>
            <p className='text-slate-500'>
            followers
            </p>
            
          </div>
          <div><p className='text-black text-2xl font-bold'>
            40K
            </p>
            <p className='text-slate-500'>
          likes   
          </p>
             
          </div>
          <div>
            <p className='text-black text-2xl font-bold'>
              166
            </p>
            <p className='text-slate-500'>
            posts
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </>

  )
}
