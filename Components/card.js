import React from 'react';
const Card = ({ img }) => {
    return (
        <>
            <div>
                <div className='w-[300px] h-[450px] bg-white shadow-x1 border-black m-5 rounded-xl p-[20px] shadow-lg'>
                    <div className='flex flex-col items-center justify-evenly'>
                        <img className='h-[150px] w-[100%] object cover rounded-xl inline' src={img} alt="dp" />
                        <div className='p-[10px] flex flex-col items-center'>
                            <div>
                                <h2 className='font-bold'>NameOfTheLawyer</h2>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consecutor adipisicing elit.</p>
                            </div>
                            <p>50+ clients</p>
                            <p>rating</p>
                            <p>Lorem ipsum dolor sit amet consecutor adipisicing elit.</p>

                        </div>
                        <div className='bg-[#6355FF] h-[40px] w-[150px] p-[10px] flex justify-center mt-[20px] rounded-md'>
                            <a className='text-white font-medium' href="#">Read More</a>
                        </div>
                    </div>

                    <div className='p-[10px]'>
                        <div className='flex'>
                            <div className='h-[100%] w-[250px]'>

                            </div>


                        </div>




                    </div>
                </div>
            </div>

        </>
    )
}
export default Card