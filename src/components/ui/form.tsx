"use client";
import { useUser } from "@/context/user";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { ChangeEvent, FormEvent, useState } from "react";

const Form = () => {
  const { theme } = useTheme();
  const { postUser } = useUser();
  const [data, setData] = useState({
    name: "",
    email: "",
    cellphone: "",
  });

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postUser(data);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row md:items-start lg:justify-between">
        <div className="flex flex-col md:w-6/12 lg:w-4/12 md:mr-10">
          <h2 className="text-center text-[24px] font-semibold md:text-left">
            Cadastre-se para receber mais informações.
          </h2>
          <p className="mt-2 text-center text-sm font-semibold opacity-70 md:text-left">
            Fique ligado no que tem de melhor no Mercado Financeiro.
          </p>
        </div>

        <form
          onSubmit={submit}
          className={cn(
            "mt-[40px] md:mt-0 w-full md:w-6/12 lg:w-6/12 rounded-[32px] border border-[#4D5358] bg-[#131516] px-[53px] py-[60px]",
            theme === "light" ? "bg-[#cfd4d758]" : "bg-[#131516]",
          )}
        >
          <div className="mb-4">
            <input
              placeholder="Nome"
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={changeInput}
              className="w-full rounded border border-[#4D5358] bg-[#222729] px-3 py-2 text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Seu melhor e-mail"
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={changeInput}
              className="w-full rounded border border-[#4D5358] bg-[#222729] px-3 py-2 text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Celular"
              type="tel"
              id="cellphone"
              name="cellphone"
              value={data.cellphone}
              onChange={changeInput}
              className="w-full rounded border border-[#4D5358] bg-[#222729] px-3 py-2 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-sm border-[1px] border-white bg-[#19C819] px-4 py-2.5 text-lg font-medium text-black"
          >
            Quero me inscrever
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
