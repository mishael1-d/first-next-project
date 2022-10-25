import SingleCard from "./SingleCard";

function Cards({ users }) {
  return (
    <div className="container mx-auto mb-3 px-6 lg:px-0">
      <div className="mb-8">
        <h3 className="text-2xl font-medium">Team Members</h3>
      </div>
      <div className="block lg:grid lg:grid-cols-5 lg:gap-3">
        {users.map((user) => {
          return (
            <div key={user.id} className="mb-4">
              <SingleCard user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
