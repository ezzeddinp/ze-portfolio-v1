import React from 'react'
import EducationSectionComponent from '@/app/edu/educationCard/EducationSectionComponent'
import Container from "@/app/container/page"

export default function EducationPage() {
    return (
        <>
            <Container>
                <EducationSectionComponent initial="hidden" whileInView="show" />
            </Container>
        </>
    )
}
