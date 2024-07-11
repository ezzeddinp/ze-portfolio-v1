// SkillCard.tsx
import React from 'react';
import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constants/stacks';

export default function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="flex items-center justify-center px-2"> {/* Add flex styling */}
      <Tooltip title={skill}>
        {STACKS[skill]}
      </Tooltip>
    </div>
  );
}
