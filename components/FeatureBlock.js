export default function FeatureBlock({ backgroundColor, isMirror,
                                         content, testimonial, descriptions }) {
    const bgColor = backgroundColor ? backgroundColor : '#FDFAF4'
    const imageOrder = isMirror ? 'md:order-2 order-2' : 'order-2 md:order-1'
    const textOrder = isMirror ? 'md:order-1 order-1' : 'order-1 md:order-2'
    return (
        <div className={`bg-[${bgColor}] rounded-2xl max-w-9xl md:max-w-6xl mx-1 md:mx-auto p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 md:gap-8`}>
            <div className={`col-span-1 md:col-span-2 flex flex-col justify-around ${imageOrder} items-start`}>
                <img
                    src={content.imageUrl}
                    className='rounded-xl '
                />
                <div className='flex flex-row justify-around mt-8'>
                    <div className='flex flex-col justify-between max-w-sm text-left'>
                        <h4 className='font-semibold'>{descriptions[0].title}</h4>
                        <p className='text-gray-500 pr-12 pt-1'>
                            {descriptions[0].content}
                        </p>
                    </div>
                    <div className='flex flex-col justify-between max-w-sm text-left'>
                        <h4 className='font-semibold'>{descriptions[1].title}</h4>
                        <p className='text-gray-500'>
                            {descriptions[1].content}
                        </p>
                    </div>
                </div>
            </div>
            <div className={`col-span-1 ${textOrder} mb-8 md:mb-0`}>
                <div className='h-100 flex flex-col'>
                    <div className='mb-12'>
                        <h2 className='mb-2 text-black text-4xl font-semibold'>{content.title}</h2>
                        <p className='text-gray-500'>{content.description}</p>
                    </div>
                    <div className='bg-white rounded-xl px-8 py-4 flex flex-col gap-y-3'>
                        <div>
                            <img src={testimonial.imageUrl} className='max-w-[6rem] h-full' />
                        </div>
                        <blockquote className='text-md md:text-lg'>
                            {testimonial.description}
                        </blockquote>
                        <div className='flex flex-row gap-x-3'>
                            <img
                                src={testimonial.person.image}
                                className='h-[3rem] max-w-full object-cover rounded-full align-middle' />
                            <div className='flex flex-col gap-y-1'>
                                <div className='font-semibold'>{testimonial.person.name}</div>
                                <div className='text-gray-500'>{testimonial.person.title}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
