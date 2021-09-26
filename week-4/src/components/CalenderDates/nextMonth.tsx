type NextProps = {
  next: number;
};

export default function NextMonth({ next }: NextProps) {
  return <li className="date nextMonth">{next}</li>;
}
