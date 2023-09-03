import React from 'react';

const Profile = () => {

    return (
        <>
            <div className='mt-[20px] border-4 rounded-[10px]'>
                <div className='h-[400px] relative'>

                    <div className='h-[200px] w-[100%] rounded-[0px] bg-blue-400 p-[10px] '>
                        <p>Banner</p>
                    </div>
                    <div className='h-[70%] w-[20%] bg-green-400 absolute top-[100px] ml-[2%] border-[3px]'>
                        <p>image</p>
                    </div>
                    <div className=' w-[78%] align-middle absolute right-0 px-[50px] pt-[20px]'>
                        <div className='text-[30px]'>NameOfTheLawyer</div>
                        <div className='text-[20px]'>studied from</div>
                        <div className='text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
                    </div>
                </div>

                <div className='p-[20px]'>
                    <div className='flex'>
                        <div className='h-[300px] w-[60%] flex justify-between items-start'>
                            <p className='p-[20px] text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                        </div>
                        <div className='h-[300px] w-[40%] relative'>
                            <div className='p-[20px] text-[25px] items-center'>
                                <div className='px-[20px]'>
                                    <div>
                                        <div className='font-medium text-[25px]'>Contact</div>
                                        <div className='flex justify-between w-[100%] text-[20px]'>
                                            <div>+91 7623872398</div>
                                            <div>xyz@gmail.com</div>
                                            <div>Linkdin</div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className='flex justify-between'>
                                    <div className='px-[20px] bg-white '>
                                        <div className='font-medium text-[25px]'>Location</div>
                                        <p className='text-[20px]'>Some Location</p>
                                    </div>
                                    <div className='px-[20px] bg-white '>
                                        <div className='font-medium text-[25px]'>Experience</div>
                                        <p className='text-[20px]'>10+ years</p>
                                    </div>
                                </div>
                            </div>

                            <button className='px-[20px] py-[10px] h-[50px] bg-blue-700 text-white absolute bottom-[10px] right-[10px] rounded-[8px]'>Book Appointment</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Profile