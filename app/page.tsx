export default function Home() {
  return (
    <>
      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn w-64 rounded-full">Button</button>
      <br />
      <button className="btn btn-primary">One</button>
      <button className="btn btn-secondary">Two</button>
      <button className="btn btn-accent btn-outline">Three</button>
      <br />
      <button className="btn rounded-full">One</button>
      <button className="btn rounded-none px-16 py-10">Two</button>
      <br />
      <input type="checkbox" className="checkbox checkbox-secondary" />
      <br />
      <div className="glass h-64 w-64">Glass</div>
    </>
  );
}
