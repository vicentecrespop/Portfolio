export default function CredentialsContainer({ credential }) {
    return (
        <div className="flex flex-col mb-[50px]">
            <span className="text-[#BCBCBC] opacity-60 text-sm">{credential.start} - {credential.finish}</span>
            <h4 className="text-[#5B78F6] text-xl">{credential.name}</h4>
            <span className="text-[#BCBCBC] opacity-60 text-sm">{credential.company}</span>
            <ul className="list-disc ml-5">
                {credential.description.map((item, index) => (
                    <li key={index} className="text-md">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}