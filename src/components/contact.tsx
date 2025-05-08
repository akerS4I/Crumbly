import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-4xl font-semibold lg:mb-1 lg:text-5xl">
                Свяжитесь с нами
              </h1>
              <p className="text-muted-foreground mt-4">
                Мы всегда на связи — по вопросам, предложениям или сотрудничеству. Расскажите, чем можем быть полезны!
              </p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Контактные данные
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Телефон: </span>
                  (+777) 77 777 77 77 
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href="" className="underline">
                    recrentic@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Имя</Label>
                <Input type="text" id="firstname" placeholder="Имя" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Фамилия</Label>
                <Input type="text" id="lastname" placeholder="Фамилия" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Электронная почта</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Тема</Label>
              <Input type="text" id="subject" placeholder="Тема сообщения" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea placeholder="Напишите ваше сообщение здесь..." id="message" />
            </div>
            <Button className="w-full">Отправить сообщение</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
