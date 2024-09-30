import { FaSearch } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div>
      {/* Search */}
      <div className="flex items-center justify-center gap-2 my-4">
        <input type="text" placeholder="Type here" className="w-full max-w-xs input input-bordered" />
        <button className="btn bg-[var(--blue-color)] btn-md text-white rounded-full p-2 cursor-pointer shadow-xl">
          <FaSearch className="text-3xl text-white" />
        </button>
      </div>
      <div className="divider"></div>
      {/* ChatList */}

      <div className="max-h-[500px] overflow-auto" style={{ scrollbarWidth: "none" }}>
        <div className="flex items-center justify-between my-2 bg-[var(--blue-color)] p-2 rounded">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div>
              <div className="avatar">
                <div className="rounded-full w-14">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            {/* Name */}
            <div>
              <p className="text-xl font-bold text-white">John Doe</p>
            </div>
          </div>
          {/* Something */}
          <div>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between my-2 bg-[var(--blue-color)] p-2 rounded">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div>
              <div className="avatar">
                <div className="rounded-full w-14">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            {/* Name */}
            <div>
              <p className="text-xl font-bold text-white">John Doe</p>
            </div>
          </div>
          {/* Something */}
          <div>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between my-2 bg-[var(--blue-color)] p-2 rounded">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div>
              <div className="avatar">
                <div className="rounded-full w-14">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            {/* Name */}
            <div>
              <p className="text-xl font-bold text-white">John Doe</p>
            </div>
          </div>
          {/* Something */}
          <div>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-4">
        <button className="button button-logout ">
          <TbLogout2 className="text-3xl text-[var(--blue-color)] cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
