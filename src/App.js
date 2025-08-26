import { useState } from "react";
import "./styles.css";
const faqs = [
  {
    title: "where are these chairs assembled ?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos sint sed dolor unde maiores ipsum quia, temporibus commodi hicquis amet accusantium deserunt modi dicta accusamus dolorem asperioresmolestias.",
  },
  {
    title: "how long do i have to return my chair ?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos sint sed dolor unde maiores ipsum quia, temporibus commodi hicquis amet accusantium deserunt modi dicta accusamus dolorem asperioresmolestias.",
  },
  {
    title: " Do you ship to countries outside the EU ?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos sint sed dolor unde maiores ipsum quia, temporibus commodi hicquis amet accusantium deserunt modi dicta accusamus dolorem asperioresmolestias.",
  },
];
export default function App() {
  return (
    <div className="App">
      <Accordian data={faqs} />
    </div>
  );
}

function Accordian({ data }) {
  const [curOpen, setIsOpen] = useState(1);
  return (
    <div>
      {data.map((ele, i) => (
        <AccordianItem
          number={i}
          title={ele.title}
          curopen={curOpen}
          onopen={setIsOpen}
          key={ele.title}
        >
          {ele.text}
        </AccordianItem>
      ))}

      <AccordianItem
        number={22}
        title="test1"
        curopen={curOpen}
        onopen={setIsOpen}
        key="test1"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        amet dicta quas quod incidunt enim commodi nulla saepe illum voluptatem
        dolor sint aliquam eveniet ipsam atque. Voluptatibus voluptas qui dolor.
      </AccordianItem>
    </div>
  );
}

function AccordianItem({ number, title, children, curopen, onopen }) {
  const isOpen = number === curopen;
  const handleToglle = () => {
    onopen(number);
  };
  return (
    <div onClick={handleToglle} className={`card ${isOpen ? "open" : ""}`}>
      <div className="card-header">
        <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
      </div>

      <div>{isOpen && <p>{children}</p>}</div>
    </div>
  );
}
