import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-gradient-to-r from-blue-500 to-orange-400 text-white py-10 shadow-md">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Summafy AI</h1>
          <p className="mt-4 text-lg">Summarize PDFs, websites, YouTube videos & more in English or Hindi</p>
          <a
            href="https://huggingface.co/spaces/hrg10/ai-multi-summarizer"
            target="_blank"
            className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
          >
            🚀 Try It Now
          </a>
        </div>
      </header>

      <main className="py-16">
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">✨ Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">📄 File Summarization</h3>
              <p>Upload PDF, DOCX, or TXT and get instant summaries with optional TTS.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">🌐 Website & YouTube</h3>
              <p>Paste a URL or YouTube link to get a smart summary of the content.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">🗣️ Hindi & English</h3>
              <p>Supports bilingual summarization and voice output using TTS.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">⭐ Feedback + Downloads</h3>
              <p>Download summaries, listen to them, and provide feedback to improve.</p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mt-20 px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">💰 Freemium Plan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-300 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Free Plan</h3>
              <ul className="text-left mt-4 space-y-2">
                <li>✔️ 3 summaries per day</li>
                <li>✔️ Website & YouTube support</li>
                <li>✔️ Hindi & English support</li>
                <li>❌ No long TTS or export features</li>
              </ul>
            </div>
            <div className="border border-yellow-500 rounded-xl p-6 text-center bg-yellow-50 shadow">
              <h3 className="text-2xl font-bold text-yellow-700 mb-2">Pro Plan (Coming Soon)</h3>
              <ul className="text-left mt-4 space-y-2">
                <li>✔️ Unlimited summaries</li>
                <li>✔️ Full PDF/DOCX uploads</li>
                <li>✔️ Longer audio summaries</li>
                <li>✔️ Priority response time</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto mt-24 px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6">📬 Stay Updated</h2>
          <p className="mb-4">We'll notify you when the Pro version is live. No spam, we promise.</p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Notify Me
            </button>
          </form>
        </section>
      </main>

      <footer className="mt-20 py-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Summafy AI. Built with ❤️ by Harry.
      </footer>
    </div>
  );
}