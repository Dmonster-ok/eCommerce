export default function Footer() {
    return (
        <footer className="bg-gray-800 p-4 px-8 flex justify-between">
            <div className="text-white">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <div className="flex space-x-4 mt-2">
                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                    <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
                    <a href="/contact-us" className="hover:underline">Contact Us</a>
                </div>
            </div>
        </footer>
    )
}