import Left from "@/components/leftFiskil";
import Right from "@/components/rightFiskil"
import Iconic from "@/components/iconic"

const Work = () => {
  return (
    <div className="content--body flex flex-col text-gray-700 text-2xl mx-auto max-w-screen-2xl px-[80px] py-16 max-md:px-[20px] dark:dark">
      <button className="btn flex bg-zinc-300 py-1 px-5 rounded-2xl mx-auto dark:bg-slate-500 dark:text-slate-200">Work</button>
      <p className="desc mx-auto py-7 dark:text-slate-300">Some of the noteworthy projects I have built:</p>
      <div className="containing flex flex-col mx-auto gap-16">
        <div className="work--right flex bg-slate-200 rounded-3xl justify-between drop-shadow-2xl max-md:flex-col">
          <div className="bg-zinc-100 rounded-l-3xl h-full w-full bg-slate-500 p-10 max-md:rounded-b-none max-md:rounded-t-3xl dark:bg-[#4B5563]">
            <Left />
          </div>
          <div className="right--fis flex flex-col w-fit p-10 bg-white rounded-r-3xl gap-8 max-md:rounded-b-3xl max-md:rounded-t-none dark:bg-[#374151]">
            <div className="flex flex-col">
              <Right />
            </div>
              <Iconic />
          </div>
        </div>
        <div className="work--right flex bg-slate-200 rounded-3xl justify-between drop-shadow-2xl max-md:flex-col">
          <div className="right--fis flex flex-col w-fit p-10 bg-white rounded-l-3xl gap-8 max-md:rounded-b-none max-md:rounded-t-3xl dark:bg-[#374151]">
            <div className="flex flex-col">
              <Right />
            </div>
              <Iconic />
          </div>
          <div className="bg-zinc-100 rounded-r-3xl h-full w-full bg-slate-500 p-10 max-md:rounded-b-3xl max-md:rounded-t-none dark:bg-[#4B5563]">
            <Left />
          </div>
        </div>
        <div className="work--right flex bg-slate-200 rounded-3xl justify-between drop-shadow-2xl max-md:flex-col">
          <div className="bg-zinc-100 rounded-l-3xl h-full w-full bg-slate-500 p-10 max-md:rounded-b-none max-md:rounded-t-3xl dark:bg-[#4B5563]">
            <Left />
          </div>
          <div className="right--fis flex flex-col w-fit p-10 bg-white rounded-r-3xl gap-8 max-md:rounded-b-3xl max-md:rounded-t-none dark:bg-[#374151]">
            <div className="flex flex-col">
              <Right />
            </div>
              <Iconic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
