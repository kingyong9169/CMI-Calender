export default function Dates(props) {
  const { date, today, sat, sun } = props;
  return (
    <li
      className={`date${today === true ? " today" : ""}${
        sat === true ? " sat" : ""
      }${sun === true ? " sun" : ""}`}
    >
      {date}
    </li>
  );
}
