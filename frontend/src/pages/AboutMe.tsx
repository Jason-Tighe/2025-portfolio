
export default function AboutMe() {
    return (
    <section
        id="about"
        className="min-h-screen flex flex-col items-center"
    >
        <div className="mt-8 mb-6">
            <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
            <p className="text-sm text-gray-600 mt-2">Your Portrait Here</p>
        </div>
        <div className="max-w-3xl text-center text-gray-800 leading-relaxed space-y-6 text-justify">
            <p className="text-lg">
                I’m a <span className="font-semibold">software engineer</span> with a background in
                <span className="font-semibold"> accounting and information systems</span> — a combination that helps me think logically, communicate clearly, and build practical, business-minded software.
            </p>
            <p className="text-lg">
                One pivotal moment in my journey came while I was still in accounting. I had built and maintained a detailed report using nothing but Excel — complex formulas, XLOOKUPs, manual processes. Then, I watched a developer automate the entire thing with code. That moment stuck with me. I realized:{" "}
                <span className="italic text-gray-900 font-medium">that’s what I want to do.</span>
            </p>
            <p className="text-lg">
                Since then, I’ve focused on creating clean, efficient, and impactful software. I’ve worked on SaaS platforms, integrated third-party APIs, and built tools that save teams time and reduce friction.
            </p>
            <p className="text-lg">
                I believe in constant learning and iteration. One quote that guides me is:{" "}
                <span className="italic text-gray-900 font-medium">“It’s not what you know, it’s how you learn.”</span> Whether I’m picking up a new framework or debugging a tricky issue, I approach it with curiosity and focus.
            </p>
            <p className="text-lg">
                I’m currently building full-stack applications and automation tools that connect systems, improve workflows, and make teams more effective.
            </p>
        </div>
 
    </section>
    );
  }