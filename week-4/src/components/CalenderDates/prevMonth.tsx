type PrevProps = {
  prev: number;
};

export default function PrevMonth({ prev }: PrevProps) {
  return <li className="date prevMonth">{prev}</li>;
}
