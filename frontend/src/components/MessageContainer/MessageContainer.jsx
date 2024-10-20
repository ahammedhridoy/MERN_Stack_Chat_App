function MessageContainer() {
  const noChatSelected = false;
  return (
    <div>
      <div className="flex flex-col justify-evenly ">
        {noChatSelected ? (
          <>
            <div className="bg-[var(--blue-color)] p-2 rounded flex justify-center items-center h-[500px]">
              <p className="text-lg font-bold text-white">Select a chat to start messaging</p>
            </div>
          </>
        ) : (
          <>
            {/* Message Header */}
            <div className="bg-[var(--blue-color)] p-2 rounded">
              <p className="text-lg font-bold text-white">To: John Doe</p>
            </div>

            {/* Messages */}
            <div className="max-h-[500px] overflow-auto my-4 h-[200px]" style={{ scrollbarWidth: "none" }}>
              <div className="">
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  {/* <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div> */}
                  <div className="chat-bubble">
                    You were the Chosen One! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio porro
                    eaque cum voluptates reprehenderit alias illum quaerat, accusamus eligendi, facilis, consectetur
                    doloremque nisi! Laborum enim ut sunt magni voluptas fuga eius quis similique quo veniam optio non,
                    cumque ratione ipsa cum, quos placeat. Officiis vel quis sunt consequatur sit?
                  </div>
                  {/* <div className="opacity-50 chat-footer">Delivered</div> */}
                </div>
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  {/* <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div> */}
                  <div className="chat-bubble bg-[var(--blue-color)]">
                    You were the Chosen One! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio porro
                    eaque cum voluptates reprehenderit alias illum quaerat, accusamus eligendi, facilis, consectetur
                    doloremque nisi! Laborum enim ut sunt magni voluptas fuga eius quis similique quo veniam optio non,
                    cumque ratione ipsa cum, quos placeat. Officiis vel quis sunt consequatur sit?
                  </div>
                  {/* <div className="opacity-50 chat-footer">Seen at 12:46</div> */}
                </div>
              </div>
            </div>

            {/* Send Message */}
            <div>
              <textarea
                placeholder="Write a message..."
                className="w-full textarea textarea-bordered textarea-md"
              ></textarea>
              <div className="flex justify-end gap-2 my-2">
                <button className="btn bg-[var(--blue-color)] btn-md text-white">Send</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MessageContainer;
