import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaInstagram , FaTelegram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Игамбердиев Асадулла",
    role: "Веб разработчик",
    image: "head/Asadulla.jpg",
    socials: {
      github: "https://github.com/asadulla",
      instagram: "https://www.instagram.com/akeraminai_sai/",
      telegram: "https://t.me/akeraminai",
    },
    contribution: "Приложил много труда и времени создавая для вас этот прекрасный вебсайт",
  },
  {
    name: "Кузин Михаил",
    role: "Python разработчик",
    image: "head/Michael.jpg",
    socials: {
      github: "https://github.com/Michael9Kuzin",
      instagram: "https://www.instagram.com/k_misha.nya/",
      telegram: "https://t.me/k_misha_nya",
    },
    contribution: "Работал над созданием для нашей платформы телеграмм бота со встроенным веб приложением",
  },
  {
    name: "Зокирходжаева Робия",
    role: "UI/UX дизайнер",
    image: "head/Robiya.jpg",
    socials: {
      github: "https://github.com/Rubi5836",
      instagram: "https://www.instagram.com/robii.khodjaevaa/",
      telegram: "https://t.me/weymiii",
    },
    contribution: "Упорно трудилась создавая для вас прекрасный дизайн нашей платформы",
  },
];

const TeamPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center font-semibold text-2xl mb-6">
        Наша Команда
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 pb-10">
        {teamMembers.map((member, index) => (
          <Card key={index} className="rounded-2xl shadow-md p-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[370px] object- object-cover rounded-lg mb-4"
            />
            <CardContent className="flex flex-col">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="mt-3 text-sm">{member.contribution}</p>
              <div className="flex gap-4 mt-4 text-xl">
                {member.socials.github && (
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
                {member.socials.instagram && (
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                )}
                {member.socials.telegram && (
                  <a href={member.socials.telegram} target="_blank" rel="noopener noreferrer">
                    <FaTelegram />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TeamPage;
