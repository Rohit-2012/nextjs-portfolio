import Card from "../ui/Card";
import TimeLine, { TimeLineItem } from "../ui/TimeLine";

const Certification = () => {
  return (
    <Card title="My Certificates">
      <TimeLine>
        {certificateData.map((certificate, i) => (
          <TimeLineItem
            key={i}
            date={certificate.date}
            title={certificate.title}
                subTitle={certificate.subTitle}
                link={certificate.link}
          />
        ))}
      </TimeLine>
    </Card>
  );
};

const certificateData = [
  {
    date: "Feb 2024",
    title: "Redux Toolkit Essentials",
    subTitle: "Mindluster",
    link: "https://www.mindluster.com/student/certificate/14048282576",
  },

  {
    date: "Feb 2024",
    title: "Typescript",
    subTitle: "Simplilearn",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMTE5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDg0NDQyNF8xNzA2ODg0MzAzLnBuZyIsInVzZXJuYW1lIjoiUm9oaXQgS2lydGkifQ%3D%3D&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F5896%2FTypescript-%3A-The-New-JavaScript-for-Web-Development%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1285125153784173506&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVL%2FKNNCpNjnAKck8CALXi3lUlAAAA",
  },
  {
    date: "Jan 2024",
    title: "React JS",
    subTitle: "Simplilearn",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzI1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDc4NzA5NV8xNzA1Mzk5NjIzLnBuZyIsInVzZXJuYW1lIjoiUm9oaXQgS2lydGkifQ%3D%3D&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4215%2FReactJS-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1285125153784173506&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVD%2FZNj3TxMzDNd08CAGt%2Fgb8lAAAA",
  },
  {
    date: "Dec 2023",
    title: "Javascript",
    subTitle: "Mindluster",
    link: "https://www.mindluster.com/student/certificate/14048287040",
  },
];

export default Certification;
