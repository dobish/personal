import Link from 'next/link'

export default function Header({ menuItems: { menuItems } }) {
  console.log(menuItems.edges.map((item) => (item.node.path)))
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-blue-500 shadow-lg">
      <ul className="flex items-center justify-end flex-grow w-full">
        {menuItems.edges.map((item) => (

          <li key={item.node.path}>
            <Link
            className='text-white'
            href={item}
            >
              {item.node.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
