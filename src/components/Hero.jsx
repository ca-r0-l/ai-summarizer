import { logo } from '../assets';

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col p-3">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="sumz_logo" className="w-32 object-contain" />

            <button
                type="button"
                onClick={() => window.open('https://github.com/ca-r0-l/ai-summarizer')}
                className="black_btn"
            >
                Github
            </button>
        </nav>

        <h1 className="head_text">
            Summarize Articles with <br className="max-md:hidden" />
            <span className="orange_gradient">OpenAI GTP-4</span>
        </h1>
        <h2 className="desc">
            Simplify your reading with summarize, an open-source article summarizer that transforms lenghty articles into clear and concise summaries.
        </h2>
    </header>
  )
}

export default Hero
