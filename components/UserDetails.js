function UserDetails({ user }) {
  return (
    <div className="container mx-auto mt-16">
      <div className="flex">
        <div className="bg-white p-4 mr-40 rounded-xl max-h-60">
          <div className="w-40 h-40 rounded-full bg-slate-300 p-2 mb-4">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/close-up-portrait-wonderful-child-with-shiny-brown-eyes-looking-with-interest-enthusiastic-little-girl-vintage-straw-hat-decorated-with-ribbon-posing-during-game-park_197531-3960.jpg?w=2000"
              alt=""
            />
          </div>
          <h2 className="text-center text-xl font-bold mb-2">{user.name}</h2>
        </div>
        <div className="bg-white p-4 w-full rounded-xl">
          <h2 className="text-4xl font-bold mb-2">User Details</h2>
          <ul className="space-y-2">
            <li className="text-2xl font-medium">
              Full name:{" "}
              <span className="font-normal text-slate-600">{user.name}</span>
            </li>
            <li className="text-2xl font-medium">
              Email Address:{" "}
              <span className="font-normal text-slate-600">{user.email}</span>
            </li>
            <li className="text-2xl font-medium">
              Phone Number:{" "}
              <span className="font-normal text-slate-600">{user.phone}</span>
            </li>
            <li className="text-2xl font-medium">
              Username:{" "}
              <span className="font-normal text-slate-600">
                {" "}
                {user.username}
              </span>
            </li>
            <li className="text-2xl font-medium">
              Website:{" "}
              <span className="font-normal text-slate-600">{user.website}</span>
            </li>
            <li className="text-2xl font-medium">
              Address:{" "}
              <span className="font-normal text-slate-600">
                {user.address.suite} {user.address.street} {user.address.city}
              </span>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
