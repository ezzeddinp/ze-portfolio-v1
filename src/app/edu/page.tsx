import React from 'react'
import UnderDevelopmentPage from '@/app/edu/educationCard/EducationSectionComponent'
import Container from "@/app/container/page"
import IdCard from '../components/IdCard'

export default function EducationPage() {
    return (
        <>
            <section className='relative flex flex-col items-center justify-center max-w-5xl h-screen max-h-[70%] lg:max-h-[90%] mx-auto my-auto pb-4 pt-7'>
                <Container className='mb-4'>
                    <UnderDevelopmentPage />
                </Container>
                <IdCard />
            </section>
        </>
    )
}