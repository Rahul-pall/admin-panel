import React from "react";
import { BiDollar } from "react-icons/bi";
import { CgMenuBoxed } from "react-icons/cg";
import { RiWallet3Line } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
} from "recharts";
import NewChrts from "./Newchrts";
import Product from "./Product";
function Home() {
  const data = [
    {
      month: "Jan",
      profit: 10000,
    },
    {
      month: "Feb",
      profit: 20000,
    },
    {
      month: "Mar",
      profit: 30000,
    },
    {
      month: "Apr",
      profit: 15000,
    },
    {
      month: "May",
      profit: 17000,
    },
    {
      month: "Jun",
      profit: 13000,
    },
    {
      month: "Jul",
      profit: 15000,
    },
    {
      month: "Aug",
      profit: 19000,
    },
    {
      month: "Sep",
      profit: 14000,
    },
    {
      month: "Oct",
      profit: 27000,
    },
    {
      month: "Nov",
      profit: 21000,
    },
    {
      month: "Dec",
      profit: 20000,
    },
  ];
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];
  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-mini">
            <div className="logo">
              <div className="logo-circle">
                <BiDollar />
              </div>
            </div>
            <div className="text">
              <p className="light-text">Earning</p>
              <p className="text-bold">$198k</p>
              <p>
                <span className="green">icon 37.8% </span>this month
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-mini">
            <div className="logo">
              <div className="logo-circle page">
                <CgMenuBoxed />
              </div>
            </div>
            <div className="text">
              <p className="light-text">Earning</p>
              <p className="text-bold">$198k</p>
              <p>
                <span className="green">icon 37.8% </span>this month
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-mini">
            <div className="logo">
              <div className="logo-circle wallet">
                <RiWallet3Line />
              </div>
            </div>
            <div className="text">
              <p className="light-text">Earning</p>
              <p className="text-bold">$198k</p>
              <p>
                <span className="green">icon 37.8% </span>this month
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-mini">
            <div className="logo">
              <div className="logo-circle bag">
                <BsHandbag />
              </div>
            </div>
            <div className="text">
              <p className="light-text">Earning</p>
              <p className="text-bold">$198k</p>
              <p>
                <span className="green">icon 37.8% </span>this month
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="All-chart">
      <div className="right-chart">
        <div className="r-name">
          <div className="left-n">
            <p className="">Overview</p>
            <p className="light-text">Monthly earning</p>
          </div>
          <div className="right-nb light-text">
            Quantity <select name="Quantity" id=""></select>
          </div>
        </div>
        <div className="chart">
          <ResponsiveContainer width="100%" aspect={3}>
            <BarChart data={data} width={400} height={400}>
              <XAxis dataKey="month" />
              {/* <YAxis/> */}
              <Tooltip contentStyle={{ color: "black" }} />
              <Bar className="bar" dataKey="profit" fill="#e8e8e8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="pie-chart">
        <div className="pie-name">
          <p>Customer</p>
          <p className="light-text">customer that buy products</p>
        </div>
        <div className="p-chart">
          <PieChart width={500} height={250}>
            <Pie className="inner"
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="hotpink"
            />
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="skyblue"
              label
            />
          </PieChart>
        </div>
      </div>
      </div>
      <Product/>
    </main>
  );
}

export default Home;
