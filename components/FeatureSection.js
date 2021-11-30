import FeatureBlock from "./FeatureBlock";

const features = [
    {
        id: 'Feature 1',
        color: '#EBF9F6',
        isMirror: false,
        content: {
            imageUrl: 'https://htmlstream.com/front/assets/img/900x450/img15.jpg',
            title: 'Hubble',
            description: 'The more affordable daily contact lens. Modify or cancel anytime.'
        },
        testimonial: {
            imageUrl: 'https://htmlstream.com/front/assets/svg/clients-logo/fitbit-original.svg',
            description: '"It\'s a beautiful looking theme with great support from the developers. The included demos are a great way to understand the theme, its features and speed up development."',
            person: {
                image: 'https://htmlstream.com/front/assets/img/100x100/img3.jpg',
                name: 'Max',
                title: 'Fitbit Agency Partner'
            }
        },
        descriptions: [
            {
                title: 'Support and Win',
                content: 'When we empower others to succeed, we all win.(And, we are not talking about participation trophies)'
            },
            {
                title: 'Open Communication',
                content: 'We\'re big fans of transparency for many reasons, but the abridged version is: it makes easier.'
            }
        ]
    },
    {
        id: 'Feature 2',
        color: '#feedf1',
        isMirror: true,
        content: {
            imageUrl: 'https://htmlstream.com/front/assets/img/900x450/img16.jpg',
            title: 'Curology',
            description: 'For healthy and beautiful skin, get skincare customized just for you from experts at Curology.'
        },
        testimonial: {
            imageUrl: 'https://htmlstream.com/front/assets/svg/clients-logo/airbnb-original.svg',
            description: '"I am absolutely floored by the level of care and attention to detail the team at Htmlstream have put into this theme and for one can guarantee that I will be a return customer."',
            person: {
                image: 'https://htmlstream.com/front/assets/img/100x100/img10.jpg',
                name: 'Luisa',
                title: 'Executive Creative Director'
            }
        },
        descriptions: [
            {
                title: 'Hit heavy, stay small',
                content: 'Tight-knit, dynamic teams work with more agility, communication, and freedom than large-scale companies.'
            },
            {
                title: 'Ambition by the boatload',
                content: 'We love people who aim for greatness. They inspire and excite their teammates, raising the bar for all of us.'
            }
        ]
    },
    {
        id: 'Feature 3',
        color: '#FDFAF4',
        isMirror: false,
        content: {
            imageUrl: 'https://htmlstream.com/front/assets/img/900x450/img17.jpg',
            title: 'Larq',
            description: 'LARQ Bottle Benefit Edition. 0. Lives will be saved with access. to clean water.'
        },
        testimonial: {
            imageUrl: 'https://htmlstream.com/front/assets/svg/clients-logo/slack-original.svg',
            description: '"It\'s a beautiful looking theme with great support from the developers. The included demos are a great way to understand the theme, its features and speed up development."',
            person: {
                image: 'https://htmlstream.com/front/assets/img/100x100/img2.jpg',
                name: 'Christina',
                title: 'Head Of Commercials'
            }
        },
        descriptions: [
            {
                title: 'Autonomy and attitude',
                content: 'We\'re a team of self-starters who take serious pride in our work – and it shows.'
            },
            {
                title: 'Teamwork makes the dream work',
                content: 'We work together to bring our passions and expertise to make Teachable the best it can be.'
            }
        ]
    }
]

export default function FeatureSections() {
    return (
        features.map((feature) => (
            <div className='mt-24'>
                <FeatureBlock
                    backgroundColor={feature.color}
                    isMirror={feature.isMirror}
                    content={feature.content}
                    testimonial={feature.testimonial}
                    descriptions={feature.descriptions}
                />
            </div>
        ))
    )
}
