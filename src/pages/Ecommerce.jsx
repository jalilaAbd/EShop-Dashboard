import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import Button from "../components/Button";
import SparkLine from "../components/Charts/SparkLine";
import Stacked from "../components/Charts/StackedChart";
/* ";
import Pie from "../components";

 */
import {
  earningData,
  ecomPieChartData,
  SparklineAreaData,
} from "../data/dummy";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((i) => (
            <div
              key={i.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: i.iconColor, backgroundColor: i.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {i.icon}
              </button>
              <span className="text-lg font-semibold">{i.amount}</span>
              <span className={`text-sm ml-2 text-${i.pcColor}`}>
                {i.percentage}
              </span>
              <p className="text-sm text-gray-400 mt-1">{i.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-colorm-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>

                <div className="mt-8">
                  <p className="text-3xl font-semibold">$48,487</p>
                  <p className="text-gray-500 mt-1">Expense</p>
                </div>
                <div className="mt-5">
                  <SparkLine
                    currentColor={currentColor}
                    color={currentColor}
                    id="line-sparkline"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                  />
                </div>
                <div className="mt-10">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>
              <div>
                <Stacked
                  //currentMode={currentMode}
                  width="320px"
                  height="360px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
