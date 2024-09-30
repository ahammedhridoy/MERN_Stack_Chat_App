import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "./../../components/MessageContainer/MessageContainer";

function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen lg:w-[60%] w-[95%] mx-auto gap-4">
        {/* Sidebar */}
        <div className="w-2/5 p-5 rounded shadow-xl bg-base-200 md:min-h-[500px] h-auto">
          <Sidebar />
        </div>

        {/* MessageContainer */}
        <div className="w-4/5 p-5 rounded shadow-xl bg-base-200 min-h-[500px]">
          <MessageContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;
