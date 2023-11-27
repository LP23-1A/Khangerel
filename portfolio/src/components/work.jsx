import Left from "@/components/leftFiskil";
import Right from "@/components/rightFiskil"
import Iconic from "@/components/iconic"

const Work = (props) => {
  return (
    <div className="content--body flex flex-col text-gray-700 text-2xl mx-auto max-w-7xl py-16">
      <button className="btn flex bg-zinc-300 py-1 px-5 rounded-2xl mx-auto">Work</button>
      <p className="desc mx-auto py-7">Some of the noteworthy projects I have built:</p>
      <div className="containing flex flex-col mx-auto gap-16">
        <div className="work--right flex bg-slate-200 rounded-3xl justify-between drop-shadow-2xl max-md:flex-col">
          <div className="bg-zinc-100 rounded-l-3xl h-full w-full bg-slate-500 p-10 max-md:rounded-t-3xl max-md:rounded-b-none">
            <Left />
          </div>
          <div className="right--fis flex flex-col w-fit p-10 bg-white rounded-r-3xl gap-8 max-md:rounded-b-3xl max-md:rounded-t-none">
            <div className="flex flex-col">
              <Right />
            </div>
              <Iconic />
          </div>
        </div>
        <div className="work--right flex bg-slate-200 rounded-3xl justify-between drop-shadow-2xl max-md:flex-col max-md:rounded-3xl">
          <div className="right--fis flex flex-col w-fit p-10 bg-white rounded-l-3xl gap-8 max-md:rounded-t-3xl max-md:rounded-b-none">
            <div className="flex flex-col">
              <Right />
            </div>
              <Iconic />
          </div>
          <div className="bg-zinc-100 rounded-r-3xl h-full w-full bg-slate-500 p-10 max-md:rounded-b-3xl max-md:rounded-t-none">
            <Left />
          </div>
        </div>
        <div className="work--right flex bg-slate-200 rounded-3xl justify-between drop-shadow-2xl max-md:flex-col">
          <div className="bg-zinc-100 rounded-l-3xl h-full w-full bg-slate-500 p-10 max-md:rounded-t-3xl max-md:rounded-b-none">
            <Left />
          </div>
          <div className="right--fis flex flex-col w-fit p-10 bg-white rounded-r-3xl gap-8 max-md:rounded-b-3xl max-md:rounded-t-none">
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
