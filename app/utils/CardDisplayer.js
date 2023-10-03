import PortfolioCard  from '../components/PortfolioCard';



const icon1 = '/images/portfolio/icon1.svg';
const icon2 = '/images/portfolio/icon2.svg';
const icon3 = '/images/portfolio/icon3.svg';


const datas = [
    {
        title: 'Cosmetica',
        description: 'Unique Store for cosmetic products, skin care and so more.',
        awards: ['SEO', 'Health Certificates', 'NHS Certificates', 'Paris Cosmetics'],
        image: '/images/portfolio/cosmetics.png',
        icon: icon1,
        id: 1
    },
    {
        title: 'Investiguide',
        description: 'Unique Store for cosmetic products, skin care and so more.',
        awards: ['Economics Certificates', 'Finance Certificates', 'SEO'],
        image: '/images/portfolio/investment.png',
        icon: icon2,
        id: 1
    },
    {
        title: 'Payeement Sys',
        description: 'Unique Store for cosmetic products, skin care and so more.',
        awards: ['BOA Certificates', 'SEO', 'IMLF Certificates', 'CR Banks' ],
        image: '/images/portfolio/payment.png',
        icon: icon3,
        id: 1
    },
    {
        title: 'Cosmetica',
        description: 'Unique Store for cosmetic products, skin care and so more.',
        awards: ['SEO', 'Health Certificates', 'NHS Certificates', 'Gurme Rest Certificate'],
        image: '/images/portfolio/rest.png',
        icon: icon1,
        id: 1
    }
]


export default function CardDisplayer () {

    return (
        <div className='w-full flex flex-col justify-center items-center mt-24 mb-10 lg:grid grid-cols-2'>
            {datas && datas.map((data ) => <PortfolioCard key={data.id} data={data} />)}
        </div>
    )
}