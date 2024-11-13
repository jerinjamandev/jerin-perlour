
import Jerin from "/public/assets/images/jerin.jpg";
import Image from "next/image";
import MaxWidthWrapper from "../../lib/MaxWidthWrapper";


const teamMembers = [
    {
        id: 1,
        quote: "Very easy this was to integrate",
        description: "If you care for your time, I hands down would go with this.",
        name: "Jerin Jaman",
        position: "Developer at Open AI",
        image: Jerin,
    },
    {
        id: 2,
        quote: "Solid foundation for any project",
        description: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
        name: "Jaman Jerin",
        position: "Lead designer at Dropbox",
        image: Jerin,
    },
    {
        id: 3,
        quote: "Mindblowing workflow",
        description: "Aesthetically, the well-designed components are beautiful and will undoubtedly level up your next application.",
        name: "Jerin Sheikh",
        position: "Software Engineer at Facebook",
        image: Jerin,
    },
    {
        id: 4,
        quote: "Efficient Collaborating",
        description: "You have many examples that can be used to create a fast prototype for your team.",
        name: "Sheikh Jerin",
        position: "CTO at Google",
        image: Jerin,
    },
];

const OurTeam = () => {
    return (
        <main>
            <MaxWidthWrapper>
                <div className="my-6 md:my-20">
                    <h1 className="text-center text-slate-500 text-4xl font-bold md:mb-10 underline decoration-wavy decoration-sky-300">Meet our <span className="text-pink-500">Heros</span></h1>

                    <section className="grid mb-8 rounded md:mb-12 md:grid-cols-2 px-2">
                        {teamMembers.map((member) => (

                            <figure key={member.id} className="flex flex-col items-center justify-center p-6 text-center bg-white border-b border-gray-200 md:rounded-es-lg">

                                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                                    <h3 className="text-xl text-slate-700 font-semibold">{member.quote}</h3>
                                    <p className="my-4">{member.description}</p>
                                </blockquote>

                                <figcaption className="flex items-center justify-center ">
                                    <Image className="rounded-full w-20 h-20 border-2 border-pink-500 hover:grayscale duration-300 hover:scale-110 cursor-pointer" src={member.image} alt="profile picture" />

                                    <div className="space-y-0.5 font-medium text-left ms-3">
                                        <div>{member.name}</div>
                                        <div className="text-sm text-gray-500">{member.position}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </section>
                </div>
            </MaxWidthWrapper>
        </main>
    );
};

export default OurTeam;
