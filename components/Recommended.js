/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
*/
import Fade from "react-reveal/Fade";
import Link from "next/link";

const people = [
    {
        name: 'Chicken Biryani',
        role: 'Main Course',
        imageUrl:
            'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlyeWFuaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Chicken Shawarma',
        role: 'Appetizer',
        imageUrl:
            'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Paneer Tikka',
        role: 'Starter',
        imageUrl:
            'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Kebabs',
        role: 'Starter',
        imageUrl:
            'https://images.unsplash.com/photo-1590828413506-d632c9e582c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Butter Chicken',
        role: 'Main Course',
        imageUrl:
            'https://images.unsplash.com/photo-1606471191009-63994c53433b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Virgin Mojito',
        role: 'Beverages',
        imageUrl:
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
]

export default function Recommended() {
    return (
        <div className="bg-white">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <Fade bottom cascade>
                        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Bestsellers</h2>
                            <p className="text-xl text-gray-500">
                                Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus
                                quis et.
                            </p>
                        </div>
                    </Fade>
                    <Fade bottom cascade>
                        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="space-y-4">
                                        <div className="aspect-w-3 aspect-h-2">
                                            <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                                        </div>

                                        <div className="space-y-2">
                                            <div className="text-red-600 text-lg leading-6 font-medium space-y-1">
                                                <h3 className="mb-4">{person.name}</h3>
                                                <p className="inline p-2 font-mono bg-red-300 rounded-md text-black text-sm">{person.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
