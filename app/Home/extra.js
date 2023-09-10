import React from 'react';
const extra = () => {
    return(
        <>
        <div className='bg-[#EFEEFD] w-[100%] rounded-[20px] p-[30px] my-10'>
                <div>
                    <div className='bg-[#EFEEFD] py-[10px] px-[50px]'>
                        <p className='font-medium text-2xl inline'>Search for lawyers</p>
                        <hr className='h-[2px] bg-black w-[70%] float-right mt-3' />
                    </div>
                    <div className='py-1 px-[50px]'>
                        <p>This platform i s best forsearching top lawyers etc etc Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                    </div>

                </div>

            </div>

            <h1>This is Heading</h1>
            <div className='h-[50px] w-[100%] flex justify-start items-center'>
              <p className='text-lg mr-[50px]'>filter</p>
              <DropDown/>
            </div>
        <div className='bg-[#EFEEFD] rounded-[10px] py-3'>
          <div className='m-5'>

            <div className='bg-[#EFEEFD] py-[10px] px-[50px]'>
              <p className='font-medium text-xl inline'>Top rated</p>
              <hr className='h-[2px] bg-black w-[80%] float-right mt-3' />
            </div>

            <hr />
            <MySlider />
            <div className='bg-[#EFEEFD] py-[10px] px-[50px]'>
              <p className='font-medium text-xl inline'>Best in your area</p>
              <hr className='h-[2px] bg-black w-[80%] float-right mt-3' />
            </div>
            <MySlider />

          </div>
          
        </div>
        </>
    )
}
export default Extra