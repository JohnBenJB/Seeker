import { Link } from "react-router-dom";

export default function Docs3() {
  return (
    <main className="w-full mt-15 flex-1 md:-mb-70">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mx-0">
        <div className="hidden md:flex max-w-[80%] h-full flex-col gap-6 text-center text-md mt-10 border-r border-neutral-500 pr-8">
          <Link to="/docs">
            <div className="cursor-pointer py-2 bg-gradient-to-br from-neutral-600 to-black border-2 rounded-r-full border-neutral-400">
              API Usage
            </div>
          </Link>
          <Link to="/docs-2">
            <div className="cursor-pointer py-2 bg-gradient-to-br from-neutral-600 to-black border-2 rounded-r-full border-neutral-400">
              Contribution Guide
            </div>
          </Link>
          <Link to="/docs-3">
            <div className="text-black font-medium py-2 bg-neutral-200 border-2 rounded-r-full">
              Open Source Github Link
            </div>
          </Link>
          <Link to="/docs-4">
            <div className="cursor-pointer py-2 bg-gradient-to-br from-neutral-600 to-black border-2 rounded-r-full border-neutral-400 leading-5">
              Instructions For Submitting <br />
              Resources
            </div>
          </Link>
        </div>
        <div className="mx-6 md:-ml-16 md:-mr-25 flex flex-col justify-start text-left gap-20 mt-10 md:border-r md:border-neutral-500 md:pr-8">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold pb-6">
              Open Source Github Link
            </h1>
            <div>
              <h4 className="text-xl md:text-2xl">
                Open Source. Open Knowledge.
              </h4>
              <div className="border-docs w-90"></div>
            </div>

            <p className="mt-20 text-md">
              Seeker is fully open-source under the MIT License. Feel free to
              explore, fork, clone, or contribute to the project.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Repository Overview</h4>
            <div className="border-docs w-62"></div>
            <div className="pt-15 flex flex-col justify-between gap-3">
              <p>GitHub Repo:</p>
              <p>github.com/JohnBenJB/Seeker</p>
              <p>Structure:</p>
              <div className="mt-5 md:mx-10 py-7 px-6 md:p-14 text-[12px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
                <ul className="flex flex-col justify-center gap-3">
                  <li>/src/backend: Motoko search engine logic</li>
                  <li>/src/frontend: React components & UI</li>
                  <li> /docs: Project documentation</li>
                  <li>/scripts: Deployment automation (DFX)</li>
                </ul>
              </div>
              <p className="pt-5">Who Can Contribute?</p>
              <div className="mt-5 md:mx-10 py-7 px-6 md:p-14 text-[12px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
                <ul className="flex flex-col justify-center gap-3">
                  <li>Developers building on ICP.</li>
                  <li> Contributors improving the indexing engine.</li>
                  <li> UI/UX designers refining the search experience. </li>
                  <li>Writers/documentarians helping shape the ecosystem.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pb-20">
            <h4 className="text-2xl font-semibold">Licence</h4>
            <div className="border-docs w-22"></div>
            <p className="pt-15">
              MIT License – Free for personal and commercial use with
              attribution.
            </p>
            <p className="pt-5">
              Let’s build the future of open Web3 discovery — together.
            </p>
          </div>
        </div>
        <div className="hidden md:flex ml-25 pl-8 flex-col gap-3 mt-10">
          <h4 className="text-2xl font-semibold">On this Page </h4>
          <p>Usage</p>
          <p>Features</p>
          <p>Examples</p>
          <p>Links</p>
        </div>
      </div>
    </main>
  );
}
