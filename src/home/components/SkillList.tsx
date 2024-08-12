// SkillList.tsx
import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { SKILLS } from '@/common/constants/skills';
import SkillCard from './SkillCard';
export default function SkillList() {
  return (
    <section className="py-[80px]">
      <div className="space-y-2">
        <SectionHeading
          className="text-3xl font-bold items-center justify-center font-sora"
          title="Skills"
        // icon={<HiCode className="mr-1 text-3xl font-bold" />}
        />
        <SectionSubHeading>
          <p className="font-sora mb-[16px] text-md font-normal text-neutral-600 dark:text-neutral-400 items-center justify-center">
            Tech Stacks
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center px-[20px]"> {/* Add flex-wrap and gap classes */}
            {SKILLS?.map((skill, index) => (

              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </SectionSubHeading>
      </div>
    </section>
  );
}
