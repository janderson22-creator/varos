"use client";
import { useUser } from "@/context/user";
import React, { ChangeEvent, FormEvent, useState } from "react";

const Form = () => {
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
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-[24px] font-semibold">
          Cadastre-se para receber mais informações.
        </h2>
        <p className="mt-2 text-center text-sm font-semibold opacity-70">
          Fique ligado no que tem de melhor no Mercado Financeiro.
        </p>

        <form
          onSubmit={submit}
          className="mt-[40px] w-full rounded-[32px] border border-[#4D5358] bg-[#131516] px-[53px] py-[60px]"
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
