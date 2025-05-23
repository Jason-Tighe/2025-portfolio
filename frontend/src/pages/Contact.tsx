import resume from '../assets/2025-resume.pdf';
import emailjs from 'emailjs-com';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<'success' | 'error' | null>(null);

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget; 
        emailjs
          .sendForm(
            serviceId,
            templateId,
            form,
            publicKey
          )
          .then(
            () => {
                setStatus('success');
                form.reset();
            },
            () => {
                setStatus('error');
            }
        ).catch(() => {
            setStatus('error');
        });
    };



    return (
        <div className="flex flex-col items-center gap-8 p-8">
            <p className="text-center text-gray-600">
            Feel free to reach out to me through the links below.
            </p>
            <p className="text-center text-gray-600">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/jsntighe/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg flex items-center gap-2">
            <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Jason-Tighe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg flex items-center gap-2">
            <i className="fab fa-github"></i> GitHub
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg flex items-center gap-2">
            <i className="fas fa-file-alt"></i> Resume
            </a>
            </div>
            <form  onSubmit={sendEmail} className="flex flex-col items-center gap-4 w-full max-w-md">
                {status === 'success' && (
                    <p className="text-green-600 text-sm">Your message has been sent!</p>
                )}
                {status === 'error' && (
                    <p className="text-red-600 text-sm">Something went wrong. Please try again later.</p>
                )}
                <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                name="message"
                placeholder="Your message"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                />
                <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
                >
                    <i className="fas fa-paper-plane"></i> Send Message
                </button>
            </form>
        </div>
     );
}