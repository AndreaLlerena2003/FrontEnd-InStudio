import {
  BiDownload,
  BiCalendar,
  BiSearchAlt,
  BiCoin,
  BiPhoneOutgoing,
} from "react-icons/bi";
import CustomMetric from "../../../../shared/CustomMetric/CustomMetrix";
import { chartdata } from "../../../../utils";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function Analytics() {
  const dataFormatter = (number) =>
    `$${Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <div className="">
      <h2>Analíticas</h2>
      <p>Sigue el progreso de tu salón de belleza.</p>

      <hr />
      <div className="tw-flex tw-flex-row tw-justify-between tw-mx-5">
        <CustomMetric
          name="Vistas"
          icon={<BiSearchAlt />}
          value={405}
          changeRate={5}
        />
        <div className="tw-w-px tw-bg-gray-300"></div>
        <CustomMetric
          name="Reservas"
          icon={<BiCoin />}
          value={22}
          changeRate={-5}
        />
        <div className="tw-w-px tw-bg-gray-300"></div>
        <CustomMetric
          name="Tasa de rebote"
          icon={<BiPhoneOutgoing />}
          value={"15%"}
          changeRate={5}
        />
      </div>
      <hr />

      <div className="tw-flex tw-flex-row tw-justify-between tw-gap-4 tw-h-72 tw-mt-10">
        <div className="tw-flex tw-flex-1 tw-flex-col">
          <h4>Vistas </h4>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={chartdata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="1" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis axisLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="tw-w-px tw-bg-gray-300"></div>
        <div className="tw-flex tw-flex-1 tw-flex-col">
          <h4>Reservas </h4>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={chartdata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="1" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis axisLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="tw-absolute tw-right-0 tw-top-0 tw-pr-10 tw-pt-14 tw-flex tw-flex-row tw-gap-2">
        <div className="tw-flex tw-items-center tw-justify-center tw-text-sm">
          <span>01/08/24 - 31/08/24</span>
        </div>
        <button className="tw-w-10 tw-h-10 tw-text-2xl tw-rounded-xl tw-border-none tw-bg-[#E3E3F7] tw-flex tw-justify-center tw-items-center">
          <BiCalendar />
        </button>
        <button className="tw-w-10 tw-h-10 tw-text-2xl tw-rounded-xl tw-border-none tw-bg-[#E3E3F7] tw-flex tw-justify-center tw-items-center">
          <BiDownload />
        </button>
      </div>
    </div>
  );
  <p>Sigue el progreso de tu salón de belleza.</p>;
}
