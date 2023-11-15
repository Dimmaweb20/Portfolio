import { Luckiest_Guy, Pacifico } from 'next/font/google'
import { FiDroplet, FiDownloadCloud, FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import Link from "next/link";
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })

export default function About() {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>About Me <span className="text-6xl"></span></h1>
            <p className="mt-4">Hello there! I&apos;m thrilled to welcome you to my portfolio. A versatile and accomplished professional with a solid foundation in tech support encompassing CRM and LMS Moodle administration, adept project management skills, fortified cybersecurity expertise, and comprehensive website management capabilities. With a proven track record in troubleshooting and customer support, I bring a holistic approach to technology operations. I possess a keen eye for optimizing systems, ensuring seamless functionality, and safeguarding against cyber threats. Thriving in dynamic environments, I leverage my multifaceted skill set to drive operational excellence and elevate technological landscapes.</p>

            <div className="icons flex gap-3 mt-3 lg:hidden">
                <Link href={'https://web.facebook.com/godson.azubuike.7'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiFacebook size={16} className='text-blue-500' />
                </Link>
                <Link href={'https://www.linkedin.com/in/godson-azubuike-9b462b1b1'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiLinkedin size={16} className='text-sky-500' />
                </Link>
                <Link href={'https://twitter.com/azubuike_godson'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiTwitter size={16} className='text-indigo-500' />
                </Link>
                <Link href={'https://github.com/godson-pius'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiGithub size={16} className='text-black' />
                </Link>
            </div>

            <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gray-500 lg:hidden rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                <FiDownloadCloud className='text-white' />
                <Link href={'/GodsonAzubuike.pdf'} target="_blank" className="capitalize rounded-full text-sm">Download Resume</Link>
            </button>

            <hr className="my-6" />

            <h1 className="uppercase font-bold text-2xl flex items-center gap-2 my-6">What i do</h1>

            <div className="grid lg:grid-cols-2 gap-7">
                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Web Development</h6>
                    </div>

                    <p className="text-sm">Proficient in web development with expertise in creating robust and user-centric websites. Skilled in front-end and back-end technologies, adept at crafting responsive layouts, implementing functionalities, and ensuring seamless user experiences. Experienced in utilizing various programming languages, frameworks, and tools to build scalable and dynamic web solutions aligned with business objectives..</p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Customer Relationship Management</h6>
                    </div>

                    <p className="text-sm">Proficient in harnessing the power of Zoho CRM to drive seamless customer relationship management. Skilled in utilizing its robust features to streamline sales processes, optimize customer interactions, and enhance overall business efficiency. Capable of customizing and configuring Zoho CRM to meet unique organizational needs, maximizing its potential to boost sales, improve lead management, and foster lasting client relationships.</p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">LMS Moodle Management</h6>
                    </div>

                    <p className="text-sm">Proficient in LMS Moodle administration, adept at configuring, customizing, and maintaining the platform to facilitate engaging and effective online learning experiences. Skilled in course creation, user management, troubleshooting, and implementing innovative solutions to enhance educational outcomes. Demonstrated ability to streamline workflows, optimize user interfaces, and provide comprehensive support to ensure seamless functionality within the LMS Moodle environment.</p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Project Management</h6>
                    </div>

                    <p className="text-sm">I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career. </p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Website Management</h6>
                    </div>

                    <p className="text-sm">Proficient in website management, adept at overseeing the creation, maintenance, and optimization of online platforms. Skilled in ensuring seamless functionality, user-friendly interfaces, and responsive design. Capable of implementing strategies to enhance user experience, drive traffic, and improve site performance. </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Cyber Security</h6>
                    </div>

                    <p className="text-sm">"Proficient in cybersecurity practices encompassing threat assessment, risk mitigation, and incident response. Well versed in implementing robust security measures to safeguard digital assets, networks, and systems.</p>
                </div>
            </div>
        </main>
    )
}