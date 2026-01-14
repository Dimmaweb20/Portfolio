"use client";

import Aside from "@/components/Aside"
import Contact from "@/components/Contact"

import pageanim from '@/animations/pageanim.json'

const page = () => {
    return (
        <main className='w-full flex mt-32 gap-5'>
            <Aside />
            <Contact></Contact>
        </main>
    )
}

export default page