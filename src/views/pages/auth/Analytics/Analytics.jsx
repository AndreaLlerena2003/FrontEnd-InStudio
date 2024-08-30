import { BiDownload, BiCalendar, BiSearchAlt, BiCoin, BiPhoneOutgoing } from "react-icons/bi";
import CustomMetric from "../../../../shared/CustomMetric/CustomMetrix";

export default function Analytics() {
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
