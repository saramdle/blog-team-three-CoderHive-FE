type SkillProps = {
  title: string;
};

export default function Skill({ title }: SkillProps) {
  return (
    <div className="relative mb-1 rounded-full py-1.5 px-3 font-medium text-gray-600 bg-gray-100 hover:bg-gray-200">
      {title}
    </div>
  );
}
