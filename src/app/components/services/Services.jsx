import moreServices from '../../lib/MoreServices';
import Image from 'next/image'


const Services = () => {
    return (
        <main>
            <div className='py-20'>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold text-center'>Our Awesome <span className='text-pink-500 md:text-4xl'>Services</span></h1>
                </div><br /><br />

                {/* card section */}
                <div className='grid grid-cols-1 md:grid-cols-3  gap-6'>
                    {moreServices.map((service) => (
                        <div className='p-4 rounded-xl space-y-2 text-center hover:shadow-xl duration-500 cursor-pointer border' key={service.id}>
                            <div className='flex justify-center items-center'>
                                <Image
                                    src={service.image}
                                    alt='service image'
                                    className='w-16 h-16'
                                />
                            </div>
                            <h3 className='text-xl font-semibold'>{service.title}</h3>
                            <p className='text-pink-500'>{service.price}</p>
                            <p className='text-slate-500'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Services;