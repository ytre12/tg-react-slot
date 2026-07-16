export default function Header({ coinBalance }) {
  return (
    <header className="flex justify-between p-3">
      <h5>Hello user</h5>
      <p>{coinBalance + "$"}</p>
    </header>
  );
}
