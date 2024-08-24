const Buttons = ({ setActiveContent }) => {
  return (
    <div className="flex justify-center items-center gap-4 p-3">
      <button
        onClick={() => setActiveContent('users')}
        className="border-4 rounded-md border-sky-300 py-1 px-3 hover:cursor-pointer hover:border-zinc-500 transition-all"
      >
        USERS
      </button>
      <button
        onClick={() => setActiveContent('dogs')}
        className="border-4 rounded-md border-sky-300 py-1 px-3 hover:cursor-pointer hover:border-zinc-500 transition-all"
      >
        DOGS
      </button>
    </div>
  )
}

export default Buttons
