/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ChartBarIcon,
    CursorClickIcon,
    DocumentReportIcon,
    MenuIcon,
    RefreshIcon,
    ShieldCheckIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
    {
        name: 'Reports',
        description: 'Get detailed reports that will help you make more informed decisions ',
        href: '#',
        icon: DocumentReportIcon,
    },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
    },
    { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
    { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <Popover className="relative bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            {({ open }) => (
                <>
                    <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10">

                            <a href="/" className="text-base font-medium text-white hover:text-gray-900">
                                Home
                            </a>
                            <a href="#" className="text-base font-medium text-white hover:text-gray-900">
                                Outlets
                            </a>

                            <a href="/contact" className="text-base font-medium text-white hover:text-gray-900">
                                Contact
                            </a>
                            <a href="/about" className="text-base font-medium text-white hover:text-gray-900">
                                About
                            </a>
                        </Popover.Group>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                                href="#"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-700 hover:bg-pink-800"
                            >
                                Order Now
                            </a>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid grid-cols-1 gap-7">
                                            {solutions.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                >
                                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            Pricing
                                        </a>

                                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            Docs
                                        </a>

                                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            Enterprise
                                        </a>
                                        {resources.map((item) => (
                                            <a
                                                key={resources.name}
                                                href={item.href}
                                                className="text-base font-medium text-gray-900 hover:text-gray-700"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                        >
                                            Sign up
                                        </a>
                                        <p className="mt-6 text-center text-base font-medium text-white">
                                            Existing customer?{' '}
                                            <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                                Sign in
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
