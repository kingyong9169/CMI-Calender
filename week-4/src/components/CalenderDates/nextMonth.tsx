type NextProps = {
  next: number;
};

const NextMonth: React.FC<NextProps> = ({ next }: NextProps) => {
  return <li className="date nextMonth">{next}</li>;
};

export default NextMonth;
