import { Luckiest_Guy, Pacifico } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { FiGithub, FiLink2, FiPocket } from 'react-icons/fi'
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })

const Work = () => {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <div className='flex gap-4 items-center'>
                <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>Portfolio <span className="text-5xl"></span></h1>
                <hr className="w-[50rem]" />
            </div>

            <div className="grid lg:grid-cols-2 gap-5 mt-5">
                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='hover:scale-150 transition duration-500 rounded-lg mb-4' src={'/Screenshot.png'} width={10000} height={2} alt='Fact App' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://home-sideprojects.com/'} target='_blank' className="font-bold text-lg">Home-Side Projects</Link>
                        </div>

                        <Link href={'https://home-sideprojects.com/'} target='_blank'>
                            <FiGithub className='ring-2 ring-black p-1 rounded-full' size={30} />
                        </Link>
                    </div>
                </div>


                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='hover:scale-150 transition duration-500 rounded-lg mb-4' src={'/Anchor.png'} width={10000} height={2} alt='nadice' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://anchorregnant.com/'} target='_blank' className="font-bold text-lg">Anchor Regnant</Link>
                        </div>

                        <Link href={'https://anchorregnant.com/'} target='_blank'>
                            <FiGithub className='ring-2 ring-black p-1 rounded-full' size={30} />
                        </Link>
                    </div>
                </div>


                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='hover:scale-150 transition duration-500 rounded-lg mb-4' src={'/geanco.png'} width={10000} height={2} alt='podpis' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://geancomissions.org'} target='_blank' className="font-bold text-lg">GEANCO Missions</Link>
                        </div>

                        <Link href={'https://geancomissions.org'} target='_blank'>
                            <FiGithub className='ring-2 ring-black p-1 rounded-full' size={30} />
                        </Link>
                    </div>
                </div>
                
                
                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='hover:scale-150 transition duration-500 rounded-lg mb-4' src={'/ckc.png'} width={10000} height={2} alt='asu' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://ckcanglican.church/'} target='_blank' className="font-bold text-lg">CKC Anglican church US</Link>
                        </div>

                        <Link href={'https://ckcanglican.church/'} target='_blank'>
                            <FiGithub className='ring-2 ring-black p-1 rounded-full' size={30} />
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Work