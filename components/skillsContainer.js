export default function SkillsContainer({ name, type, level }) {
    return (
        <div className="flex flex-col mb-6">
            <span className="text-sm text-[#BCBCBC] opacity-60">{level}</span>
            <span className="text-lg my-1">{name}</span>
            <span className="text-sm text-[#BCBCBC] opacity-60">{type}</span>
        </div>
    )
}