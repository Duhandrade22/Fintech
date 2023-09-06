import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IVenda } from "../context/DataContext";
import Loading from "../components/Loading";

type VendaSemData = Omit<IVenda, "data">;

const Venda = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading === true) return <Loading />;
  if (data === null) return null;
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BLR",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
    </div>
  );
};

export default Venda;
