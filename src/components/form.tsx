import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "./../styles/form.css";

const Form = () => {
  const [requestBody, setRequestBody] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const schema = yup
    .object({
      nome: yup.string().required("* Preencha o nome!"),
      email: yup.string().required("* Preencha a email!"),
      telefone: yup.string().required("* Preencha a telefone!"),
      mensagem: yup.string().required("* Preencha a mensagem!"),
    })
    .required();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [formSubmitted, setFormSubmitted] = useState(true);

  const submit = (data: any) => {
    setFormSubmitted(false);
  };
  return (
    <div className="card p-4">
      <>
        {formSubmitted ? (
          <form onSubmit={handleSubmit(submit)}>
            <div className="form-group text-center">
              <h3 className="header-form">Contato</h3>
              <input
                {...register("nome")}
                className="form-control pb-10"
                name="nome"
                placeholder="Nome"
              />
              <span>{errors.nome?.message}</span>
              <input
                {...register("email")}
                className="form-control"
                placeholder="E-mail"
              />
              <span>{errors.email?.message}</span>
              <input
                {...register("telefone")}
                className="form-control"
                placeholder="Telefone"
              />
              <span>{errors.telefone?.message}</span>
              <textarea
                {...register("mensagem")}
                className="form-control"
                placeholder="Mensagem"
              />
              <span>{errors.mensagem?.message}</span>
              <br></br>
              <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        ) : (
          <h2 className="success-form">Formulário enviado com sucesso!</h2>
        )}
      </>
    </div>
  );
};
export default Form;
