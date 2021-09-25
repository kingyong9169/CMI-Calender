type DateProps = {
  date: number;
  today: boolean;
  sat: boolean;
  sun: boolean;
};

const Dates: React.FC<DateProps> = ({ date, today, sat, sun }: DateProps) => {
  return (
    <li
      className={`date${today === true ? ' today' : ''}${
        sat === true ? ' sat' : ''
      }${sun === true ? ' sun' : ''}`}
    >
      {date}
    </li>
  );
};

export default Dates;
