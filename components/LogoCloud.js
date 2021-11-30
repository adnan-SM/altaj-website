/* This example requires Tailwind CSS v2.0+ */
export default function LogoCloud({spacing}) {
    const marginTop = spacing? spacing : 'mt-16'
    return (
        <div className={`bg-white ${marginTop}`}>
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-8" src="https://htmlstream.com/front/assets/svg/clients-logo/weebly-dark.svg" alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-8" src="https://htmlstream.com/front/assets/svg/clients-logo/uber-original.svg" alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-8" src="https://htmlstream.com/front/assets/svg/clients-logo/slack-dark.svg" alt="StaticKit" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                            className="h-8"
                            src="https://htmlstream.com/front/assets/svg/clients-logo/airbnb-dark.svg"
                            alt="Transistor"
                        />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                            className="h-8"
                            src="https://htmlstream.com/front/assets/svg/clients-logo/spotify-dark.svg"
                            alt="Workcation"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
