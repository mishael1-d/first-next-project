import Link from "next/link";

function SingleCard({ user }) {
  return (
    <div className="bg-white w-full flex justify-center items-center py-5 rounded-lg shadow-lg hover:scale-105 duration-500">
      <div className="space-y-2">
        <div className="w-28 h-28 rounded-full bg-slate-300 p-2 mb-4 mx-auto">
          <img
            className="rounded-full w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/close-up-portrait-wonderful-child-with-shiny-brown-eyes-looking-with-interest-enthusiastic-little-girl-vintage-straw-hat-decorated-with-ribbon-posing-during-game-park_197531-3960.jpg?w=2000"
            alt=""
          />
        </div>
        <p className="text-center text-xl font-semibold">{user.name}</p>
        <p className="text-center text-slate-500 text-xl font-semibold">
          {user.email}
        </p>
        <p className="text-center text-slate-500 text-xl font-semibold">
          {user.address.city}
        </p>
        <div className="text-center">
          <Link href={`/${user.id}`}>
            <button className="bg-slate-700 text-white p-2 rounded-lg my-auto cursor-pointer hover:opacity-75">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
