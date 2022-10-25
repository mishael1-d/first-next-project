import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

export default function Home({users}) {
  return (
    <>
      <Navbar />
      <Cards users={users} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
