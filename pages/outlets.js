import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    ShieldCheckIcon,
} from '@heroicons/react/outline'
import Header from "../components/Header";

const outlets = [
    { name: 'Vishal Nagar', icon: CloudUploadIcon, borderColor: 'border-pink-400', hoverColor: 'bg-pink-50', color: 'pink' },
    { name: 'Keshwapur Circle', icon: LockClosedIcon, borderColor: 'border-orange-400', hoverColor: 'bg-orange-50', color: 'orange' },
    { name: 'Gokul Road', icon: ShieldCheckIcon, borderColor: 'border-yellow-400', hoverColor: 'bg-yellow-100', color: 'yellow' },
    { name: 'Coen Road', icon: CogIcon, borderColor: 'border-red-400', hoverColor: 'bg-red-50', color: 'red' },
]

const addresses = [
    { name: 'Vishal Nagar, Hubballi 580030 Everyday 12 PM - 11 PM\n' +
            'Phone - +91 78299 99103' },
]

export default function Outlets() {
    return (
        <div>
            <Header />
            <div className="relative bg-white py-16 sm:py-24 lg:py-16">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="text-base font-semibold tracking-wider text-red-600 uppercase">Our Outlets</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Visit your nearest outlet now
                    </p>
                    <div className="mt-12 mx-8 lg:mx-36">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                            {outlets.map((feature) => (
                                <div key={feature.name} className="pt-6">
                                    <div className={`flow-root border-2 ${feature.borderColor} rounded-xl px-2 pb-8 group hover:${feature.hoverColor} cursor-pointer`}>
                                        <div className="-mt-6">
                                            <div>
                          <span className="inline-flex items-center justify-center p-3 bg-orange-500 rounded-md shadow-lg">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                                            </div>
                                            <h3 className={`mt-8 text-lg font-medium text-bold text-${feature.color}-500 tracking-tight`}>{feature.name}</h3>
                                            <p className={`mt-5 text-base text-black group-hover:text-${feature.color}-500`}>
                                                {addresses[0].name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
