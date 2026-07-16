export default function Header({ coinBalance, user }) {
  return (
    <header className="flex justify-between p-3">
      <h5>{user?.username ?? "tester"}</h5>
      <p>{coinBalance + "$"}</p>
    </header>
  );
}
