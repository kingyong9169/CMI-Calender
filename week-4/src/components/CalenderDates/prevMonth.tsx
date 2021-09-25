type PrevProps = {
  prev: number;
};

const PrevMonth: React.FC<PrevProps> = ({ prev }: PrevProps) => {
  return <li className="date prevMonth">{prev}</li>;
};

export default PrevMonth;
