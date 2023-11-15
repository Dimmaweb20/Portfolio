import { Luckiest_Guy, Pacifico } from 'next/font/google'
import { FiPocket } from 'react-icons/fi'
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })

export default function Resume() {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <div className='flex gap-4 items-center'>
                <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>Skills <span className="text-5xl"></span></h1>
                <hr className="w-[50rem]" />
            </div>

            <div className="grid lg:grid-cols-3 gap-5 mt-5">
                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">JavaScript</h6>
                    </div>

                    <p className="text-sm">JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Grant Writing and Proposal</h6>
                    </div>

                    <p className="text-sm">Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Wordpress</h6>
                    </div>

                    <p className="text-sm">WordPress is a user-friendly and versatile content management system CMS that powers a significant portion of websites globally. It offers a flexible platform for creating&#44; managing&#44; and customizing websites&#44; making it ideal for beginners and experienced users alike. With its extensive range of themes&#44; plugins&#44; and easy-to-use interface&#44; WordPress enables users to build anything from simple blogs to complex e-commerce sites efficiently. </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Tailwind CSS</h6>
                    </div>

                    <p className="text-sm">Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.</p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Cyber Security</h6>
                    </div>

                    <p className="text-sm">Cybersecurity involves protecting digital systems&#44; networks&#44; and data from unauthorized access&#44; cyber threats&#44; and attacks. It encompasses the implementation of measures to safeguard information&#44; mitigate risks&#44; and ensure the confidentiality&#44; integrity&#44; and availability of sensitive data. </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">ZOHO CRM</h6>
                    </div>

                    <p className="text-sm">Zoho CRM is a robust customer relationship management CRM software designed to streamline sales&#44; marketing&#44; and customer support activities. It offers a user-friendly interface powerful customization options&#44; and automation features that enable businesses to manage leads&#44; contacts&#44; deals&#44; and accounts effectively. </p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">PHP</h6>
                    </div>

                    <p className="text-sm">PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group.</p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Office Productivity Tools</h6>
                    </div>

                    <p className="text-sm">Proficient in utilizing a diverse range of office productivity tools, including Microsoft Office Suite (Word&#44; Excel&#44; PowerPoint)&#44; Google Workspace (Docs&#44; Sheets&#44; Slides&#44; Gmail)&#44; and collaborative platforms like Microsoft Teams. Skilled in creating and formatting documents&#44; analyzing data&#44; designing presentations&#44; managing emails&#44; and fostering efficient team collaboration through these tools.</p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Project Managemen&#44; Grant Writing and Project Planning</h6>
                    </div>

                    <p className="text-sm">Project Management encompasses the strategic planning, coordination, and oversight of projects to meet specific objectives within defined constraints. Grant Writing involves composing persuasive proposals to secure funding for projects or initiatives. Project Planning is the initial phase of management, outlining objectives, creating schedules, and strategizing for successful project completion.</p>
                </div>


            </div>
        </main>
    )
}