import Image from "next/image";

const Dash = () => {
  return (
    <div>
      <div className="flex justify-between flex-wrap">
        <div>
          <Image
            src={"https://totalcareeurope.com/dashboard/images/welcome.png"}
            alt=""
            width={300}
            height={300}
          />
          <h2>WELCOME MULINDE FRED</h2>
          <h2>MUBIRU TO TOTAL CARE</h2>
          <h2>EUROPE UNIPESSOAL LDA</h2>
        </div>
        <div className="">
          <Image
            src={"https://totalcareeurope.com/dashboard/avatar_04.png"}
            alt=""
            width={140}
            height={140}
            className="mx-auto"
          />
          <div className="flex gap-5">
            <div>
              <p>Name: Mulinde Fred Mubiru</p>
              <p>Mobile No.: 0782200164</p>
              <p>Sponser ID: TC992757</p>
              <p>Logid Registered on: 23-07-21</p>
              <p>My Self SV : 50</p>
            </div>
            <div>
              <p>Logid: Mulinde Fred Mubiru</p>
              <p>Email ID: mulindefred@yahoo.com</p>
              <p>Sponser ID Name: MUBIRU STUART</p>
              <p>Rank Slab : N/A</p>
              <p>My Self RSV : 0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-flud gap-3">
        {dataLoad.map(({ heading, value, bg }) => (
          <div key={heading} style={{background: `${bg}`, color: "#fff", padding: '1rem', height:"150px", borderRadius:'10px'}}>
            <h3>{heading}</h3>
            <h3>{value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dash;

const dataLoad = [
  {
    heading: "TOTAL INCOME",
    value: "0.00",
    bg: "#2D676F"
  },
  {
    heading: "PERSONAL SALES BONUS",
    value: "0.00",
    bg: "#15313F"
  },
  {
    heading: "LEVEL BONUS",
    value: "0.00",
    bg: "#614F1B"
  },
  {
    heading: "MATCHING BONUS",
    value: "0.00",
    bg: "#264B07"
  },
  {
    heading: "LEADERSHIP BONUS",
    value: "0.00",
    bg: "#264B07"
  },
  {
    heading: "LEADERSHIP SELF BONUS",
    value: "0.00",
    bg: "#264B07"
  },
  {
    heading: "ACTIVE DIRECT TEAM",
    value: "0.00",
    bg: "#264B07"
  },
  {
    heading: "INACTIVE DIRECT TEAM",
    value: "0.00",
    bg: "#614F1B"
  },
  {
    heading: "ACTIVE TEAM",
    value: "0.00",
    bg: "#15313F"
  },
  {
    heading: "INACTIVE TEAM",
    value: "0.00",
    bg: "#2D676F"
  },
  {
    heading: "TOTAL SV",
    value: "0.00",
    bg: "#2D676F"
  },
  {
    heading: "TOTAL SV",
    value: "0.00",
    bg: "#15313F"
  },
  {
    heading: "TOTAL NEW SV",
    value: "0.00",
    bg: "#614F1B"
  },
  {
    heading: "TOTAL UNILEVEL SV",
    value: "0.00",
    bg: "#264B07"
  },
  {
    heading: "CARRY FORWARD SV",
    value: "0.00",
    bg: "#264B07"
  },
  {
    heading: "NEW MATCHING SV",
    value: "0.00",
    bg: "#264B07"
  },
  {
    heading: "CARRY FORWARD RSV",
    value: "0.00",
    bg: "#614F1B"
  },
  {
    heading: "INCOME WALLET",
    value: "0.00",
    bg: "#15313F"
  },
  {
    heading: "ACTIVATION WALLET",
    value: "0.00",
    bg: "#2D676F"
  },
  {
    heading: "SHOPPING WALLET",
    value: "0.00",
    bg: "#264B07"
  },
];
