import { IVenda } from "../context/DataContext";
import {
  LineChart,
  XAxis,
  Tooltip,
  YAxis,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const tranformedData = transformData(data);
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={tranformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#387908" />
        <Line type="monotone" dataKey="processando" stroke="#ff7300" />
        <Line type="monotone" dataKey="falha" stroke="#d40404" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
