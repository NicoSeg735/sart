import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-40 flex flex-col text-sm text-gray-500">
      <div className="flex h-14 items-center justify-between bg-brand px-4 text-white">
        <Link href={'/'} className="p-2 text-lg font-bold">
          SART
        </Link>
      </div>
    </header>
  )
}
