import ContactCard from "@/components/cards/ContactCard";
import Heading from "@/components/heading/Heading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import SelectInput from "@/components/ui/SelectInput";
import TextArea from "@/components/ui/TextArea";
import { servicesOptions } from "@/data";
import { FormEvent, useRef, useState } from "react";
import { FaPhoneVolume, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
    const [services, setServices] = useState<string[]>([]);

    const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (formRef.current) {
          emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
            formRef.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY as string
          )
          .then((result) => {
            console.log(result.text);
            console.log("Email sent successfully");
          }, (error) => {
            console.log(error.text);
          });
        } else {
          console.error('Form reference is null');
        }
      };
    
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* Contact cards */}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call me directly"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="+918825220737"
            />
            <ContactCard
              title="Email"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="rohit.kirti1219@gmail.com"
            />
          </div>
          {/* Contact form */}
          <form ref={formRef} onSubmit={sendEmail} className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                icon={<FaUser />}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                icon={<MdEmail />}
              />
            </div>
            <div className="flex items-center justify-between mb-4 gap-8">
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                icon={<MdSubject />}
              />
            </div>
            {/* Multiple select wrapper */}
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">
                  What services are you in need for?
                </h1>
              </div>
              <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                {/* Services */}
                {servicesOptions.map((service) => (
                  <SelectInput
                    key={service.id}
                    type="checkbox"
                    id={service.id}
                    text={service.text}
                    selectedOptions={services}
                    setSelectedOptions={setServices}
                    allowMultiple
                  />
                ))}
              </div>
            </div>
            {/* Message Textarea */}
            <TextArea
              name="message"
              placeholder="Write your message here"
              icon={<FaMessage />}
            />
            <div className="w-full flex justify-end">
              <div onClick={() => buttonRef.current?.click()}>
                  <Button className="!w-44 !py-3 !text-xl">
                    Send <SiMinutemailer />
                              </Button>
              </div>
                          {/* Hidden Services inputs */}
                          <div className="hidden">
                              <input type="text" value={services.join(", ")} name="services" hidden readOnly/>
                          </div>
                          <button type="submit" hidden ref={buttonRef}></button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
