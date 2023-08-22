"use client";
import { second_font } from "../../fonts/fonts";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Input from "./Input";
import TextArea2 from "./TextArea2";
import sendToTelegram from "@/utils/functions/sendTotelegram";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const message = `Имя Отправителя: ${data.name}
Почта Отправителя: ${data.email}
Сообщение: ${data.message}
    `;
    sendToTelegram(message);
  };

  return (
    // bg-[url('/images/coffee.jpg')]
    <div className="w-full h-[60vh] relative flex items-center justify-center rounded-t-[40px] bg-[url('/images/back.png')] bg-top bg-cover">
      <div className="container   flex justify-center items-center w-full h-full">
        {/* <div className="w-1/2 h-full"></div> */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-light border mx-4 border-dark flex flex-col py-6 px-4 rounded-xl w-[500px] max-h-[500px] "
        >
          <h3
            className={` ${second_font.className} text-[36px] mb-6 text-center`}
          >
            Свяжитесь с нами
          </h3>

          <Input register={register} name="name" type="text">
            Имя
          </Input>
          <Input register={register} name="email" type="email">
            Почта
          </Input>
          <TextArea2 register={register} name="message">
            Сообщение
          </TextArea2>
          <button className="bg-dark text-light rounded-[4px] hover:bg-semiDark active:bg-light active:text-dark duration-100">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
