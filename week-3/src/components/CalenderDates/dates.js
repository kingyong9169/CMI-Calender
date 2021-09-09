export default function Dates(props) {
  const { date, today } = props;
  return <li className={`date ${today === true ? "today" : ""}`}>{date}</li>;
}
