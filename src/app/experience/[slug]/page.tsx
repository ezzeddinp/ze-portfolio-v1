// import { Metadata } from 'next'

// import { getZeddinData } from '../../../../services/zeddin'

// import BackButton from '@/common/components/elements/BackButton'
// import Container from '@/common/components/elements/Container'
// import { METADATA } from '@/common/constants/metadata'
// import { CareerProps } from '@/common/types/careers'

// import ExperienceDetail from '../../../../modules/experience'

// export const metadata: Metadata = {
//   title: `Experience ${METADATA.exTitle}`,
//   description: 'My proffesional carrer journey in detail as software development',
//   keywords: 'blog Zeddin, zeddin',
//   alternates: {
//     canonical: `${process.env.DOMAIN}/blog`
//   }
// }

// export default async function ExperienceDetailPage({ params }: { params: { slug: string } }) {
//   const careers = await getCareers()
//   const career: CareerProps = careers.find(item => item.slug === params.slug) as CareerProps
//   return (
//     <>
//       <Container data-aos="fade-left">
//         <BackButton />
//         <ExperienceDetail {...career} />
//       </Container>
//     </>
//   )
// }

// async function getCareers(): Promise<CareerProps[]> {
//   const response = await getZeddinData();
//   return response.careers
// }
