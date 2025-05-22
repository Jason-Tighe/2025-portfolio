
export default function Contact() {
    return (
        <div className="flex flex-col items-center gap-8 p-8">
            <p className="text-center text-gray-600">
            Feel free to reach out to me through the links below. I'm always open to discussing new opportunities, collaborations, or just connecting!
            </p>
            <div className="flex gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
                LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
                GitHub
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
                Resume
            </a>
            </div>
            <p className="text-center text-gray-500">
            Or drop me an email at <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">your-email@example.com</a>
            </p>
            <form className="flex flex-col items-center gap-4 w-full max-w-md">
            <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
                placeholder="Your message"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                Send Message
            </button>
            </form>
        </div>
     );
}