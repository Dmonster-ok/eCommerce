export default function Header() {
    return (
        <header className="bg-gray-800 p-4 px-8 flex justify-between">
            <span className="text-white">Logo</span>
            <ul className="flex">
                <li className="ml-4 text-white">Home</li>
                <li className="ml-4 text-white">About</li>
                <li className="ml-4 text-white">Contact</li>
            </ul>
        </header>
    )
}