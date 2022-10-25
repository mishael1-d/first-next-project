import SingleCard from "./SingleCard";

function Cards({ users }) {
  return (
    <div className="container mx-auto mb-3">
      <div className="mb-8">
        <h3 className="text-2xl font-medium">Team Members</h3>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <SingleCard user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
