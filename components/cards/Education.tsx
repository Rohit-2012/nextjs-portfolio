import Card from "../ui/Card";
import TimeLine, { TimeLineItem } from "../ui/TimeLine";

const Education = () => {
    return (
        <Card title="My Education">
            <TimeLine>
                {
                    educationData.map((ed, i) => (
                        <TimeLineItem key={i} date={ed.date} title={ed.title} subTitle={ed.subTitle} />
                    ))
                }
            </TimeLine>
        </Card>
    );
}

const educationData = [
    {
        date: "2017-2021",
        title: "B.Tech - Mechanical Engineering",
        subTitle: "Alliance University, Bengaluru",
    },
    {
        date: "2015-20216",
        title: "Intermediate - PCM",
        subTitle: "D.A.V. Public School, Hazaribagh",
    },
]

export default Education;