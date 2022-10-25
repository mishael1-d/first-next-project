import Link from "next/link";
function Navbar() {
  return (
    <div className="bg-white w-full h-16 flex items-center pl-5 mb-4">
      <Link href="/">
        <h3 className="text-black text-2xl font-bold cursor-pointer">My Company Logo</h3>
      </Link>
    </div>
  );
}

export default Navbar;
