// SkillList.tsx
import SectionHeading from '@/common/components/elements/SectionHeading'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import { SKILLS } from '@/common/constants/skills'
import SkillCard from './SkillCard'

export default function SkillList() {
  return (
    <section className="px-2 py-16 md:px-6 lg:px-4">
      <div className="mx-auto max-w-5xl space-y-6">
        <SectionHeading className="flex items-center justify-center text-3xl" title="Skills" />
        <SectionSubHeading>
          <p className="mb-8 text-center font-sora text-base font-normal text-neutral-600 dark:text-neutral-400">
            Tech Stacks
          </p>
          <div className="grid grid-cols-2 place-items-center gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {SKILLS.map(skill => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </SectionSubHeading>
      </div>
    </section>
  )
}
