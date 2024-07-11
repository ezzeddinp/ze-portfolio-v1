// SkillList.tsx
import { HiCode } from 'react-icons/hi';
import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { SKILLS } from '@/common/constants/skills';
import SkillCard from './SkillCard';

export default function SkillList() {
  return (
    <section className="pt-[93px]">
      <div className="space-y-2">
        <SectionHeading
          className="text-3xl font-bold items-center justify-center"
          title="Skills"
          icon={<HiCode className="mr-1 text-3xl font-bold" />}
        />
        <SectionSubHeading>
          <p className="text-xl font-semibold text-neutral-600 dark:text-neutral-400 items-center justify-center">
            Tech Stacks
          </p>
          <div className="flex flex-wrap items-center justify-center"> {/* Add flex-wrap and gap classes */}
            {SKILLS?.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </SectionSubHeading>
      </div>
    </section>
  );
}
