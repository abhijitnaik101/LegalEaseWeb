import React from 'react';

const Profile = () => {

    return (
        <>
            <div className='mt-[20px] border-4 rounded-[10px]'>
                <div className='h-[150px] w-[100%] rounded-[10px] bg-blue-400 p-[10px] '>
                    <p>Banner</p>
                </div>
                <div className='p-[20px]'>
                    <div className='flex'>
                        <div className='h-[250px] w-[300px] bg-green-400'>
                            <p>image</p>
                        </div>
                        <div className=' w-[100%] bg-red-400'>

                        </div>
                    </div>
                    <div className='flex'>
                        <div className='h-[300px] w-[600px] bg-blue-400'>
                            <p>image</p>
                        </div>
                        <div className='h-[300px] w-[100%] bg-purple-500'>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )

}

export default Profile