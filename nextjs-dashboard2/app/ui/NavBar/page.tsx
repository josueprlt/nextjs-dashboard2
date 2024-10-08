

export function Sidenav() {
  return (
    <>
      <nav className='bg-slate-300'>
        <ul className='flex gap-5 p-4'>
          <li><a className='hover:text-red-500' href="/">Home</a></li>
          <li><a className='hover:text-red-500' href="/sales">Sales</a></li>
          <li><a className='hover:text-red-500' href="/webdesign">Webdesign</a></li>
          <li><a className='hover:text-red-500' href="/development">Development</a></li>
          <li><a className='hover:text-red-500' href="/help">?</a></li>
        </ul>
      </nav>
    </>
  );
}
