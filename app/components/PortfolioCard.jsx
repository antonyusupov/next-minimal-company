import React from 'react';
import Image from 'next/image';

const PortfolioCard = ({data}) => {
    const {title, description, image, awards, icon, id} = data;


  return (
    <div className='flex flex-col justify-center items-center mt-9'>
        <div className='w-full flex justify-center'>
            <Image
                src={image}
                width={400}
                height={400}
                alt='card-image' 
                className='w-full lg:w-3/4'
            />
        </div>
        <div className='w-full mt-4 flex flex-col justify-center items-center'>
            <h3 className='flex items-center gap-3 text-xl'>
                <span>
                    <Image 
                        src={icon}
                        width={15}
                        height={15}
                        alt='icon'
                    />
                </span>
                {title}
            </h3>
            <p className='text-sm mt-2'>{description}</p>
            <p className='flex flex-wrap mt-2 gap-2'>
            {awards.map((award) => <span key={id} className='py-1 px-2 bg-slate-400 text-black text-xs'>{award}</span>)}
            </p>
        </div>
    </div>
  )
}

export default PortfolioCard