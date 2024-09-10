export default function CustomMetric({ name, icon, value, changeRate }) {
  return (
    <div className="tw-w-200 tw-flex tw-items-center tw-gap-4 tw-mr-8">
      <button className="tw-w-10 tw-h-10 tw-text-2xl tw-rounded-xl tw-border-none tw-bg-[#E3E3F7] tw-flex tw-justify-center tw-items-center">
        {icon}
      </button>
      <div className="tw-flex tw-flex-col">
        <div className="tw-font-semibold tw-leading-none">{name}</div>
        <div className="tw-flex tw-items-center tw-gap-2">
          <div className="tw-font-bold tw-text-2xl tw-leading-8">{value}</div>
          {changeRate > 0 ? (
            <div className="tw-font-semibold tw-text-sm tw-text-green-500">+{changeRate}% {name}</div>
          ) : (
            <div className="tw-font-semibold tw-text-sm tw-text-red-500">{changeRate}% {name}</div>
          )}
        </div>
      </div>
    </div>
  );
}
