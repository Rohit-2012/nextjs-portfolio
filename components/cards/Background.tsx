import Card from "../ui/Card";

const BackgroundCard = () => {
    return (
        <Card className="md:h-full" title="My Background">
            <div>
                <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
                    Originating from a small town &nbsp;
                    <span className="text-white underline">
                        Hazaribagh in India
                    </span>
                    , my early years were marked by a very good school life that laid a strong foundation for my future endeavors. My educational journey led me to Bengaluru, where I earned a Bachelor of Technology in Mechanical Engineering.<br />
                    <br />
                    <span>
                        It was during these formative years that my fascination with technology truly blossomed.
                    </span>
                    &nbsp; I found myself deeply immersed in the world of <span className="text-white underline">web development</span>, where my <span className="text-white underline">passion for coding and technology</span> began to flourish. This passion propelled me to master a diverse range of skills including <span className="text-white underline">HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, TailwindCSS, Material-UI, SASS/SCSS, NodeJS, Express, and MongoDB.</span> <br />
                    <br />
                    My journey into the tech world didn&apos;t stop there. I ventured into various <span className="text-white underline">fields of interest, including artificial intelligence, Android and iOS development</span>. This exploration naturally led me to <span className="text-white underline">full-stack web development</span>, where I mastered the art of crafting immersive online experiences. <br />
                    <br /> <span className="text-white underline">In February 2023</span>, I joined FunctionUp as a <span className="text-white underline">frontend developer trainee</span> and was selected as a <span className="text-white underline">Teaching Assistant</span>. I worked on individual and group projects, gaining invaluable experience. As an instructor, I share my expertise through curated courses, leveraging my communication, planning, teamwork, creativity, and problem-solving skills. <br />
                    <br />
                    <span className="text-white italic">
                        Driven by the transformative power of technology, I create solutions that resonate deeply with users, turning everyday experiences into memorable and inspiring ones.
                    </span>
                </p>
            </div>
        </Card>
    );
}

export default BackgroundCard;