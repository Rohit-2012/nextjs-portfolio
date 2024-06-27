import Card from "../ui/Card";
import TimeLine, { TimeLineItem } from "../ui/TimeLine";

const Experience = () => {
    return (
        <Card title="My Experience">
            <TimeLine>
                {
                    experienceData.map((ex, i) => (
                        <TimeLineItem key={i} date={ex.date} title={ex.title} subTitle={ex.subTitle} tag={ ex.tag} />
                    ))
                }
            </TimeLine>
        </Card>
    );
}

const experienceData = [
    {
        date: "2023-2024",
        title: "Frontend Developer Trainee",
        subTitle: "FunctionUp",
        tag: "Remote",
    },
    {
        date: "2023-2024",
        title: "Teaching Assistant",
        subTitle: "FunctionUp",
        tag: "Remote",
    },
]

export default Experience;