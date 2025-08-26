import { FaCodeFork } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Docs2() {
  return (
    <main className="w-full mt-15 flex-1 md:-mb-70">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mx-0">
        <div className="hidden md:flex max-w-[80%] h-full flex-col gap-6 text-center text-md mt-10 border-r border-neutral-500 pr-8">
          <Link to="/docs">
            <div className="cursor-pointer py-2 bg-gradient-to-br from-neutral-600 to-black border-2 rounded-r-full border-neutral-400">
              API Usage
            </div>
          </Link>
          <div className="text-black font-medium py-2 bg-neutral-200 border-2 rounded-r-full">
            Contribution Guide
          </div>
          <Link to="/docs-3">
            <div className="cursor-pointer py-2 bg-gradient-to-br from-neutral-600 to-black border-2 rounded-r-full border-neutral-400">
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
              Contribution Guide
            </h1>
            <div>
              <h4 className="text-xl md:text-2xl">
                Build With Us: Contribution Guide
              </h4>
              <div className="border-docs w-94"></div>
            </div>
            <p className="mt-20 text-md">Welcome, Builder!</p>
            <p className="text-md">
              Seeker is open-source and community-first. Our mission is to
              decentralize knowledge access in the Web3 space, starting with the
              Internet Computer ecosystem. You can contribute to our codebase,
              documentation, or even curate knowledge.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Developer Contributions</h4>
            <div className="border-docs w-71"></div>
            <div className="pt-15 flex items-center gap-2">
              <span className="fill-neutral-500">
                <FaCodeFork />
              </span>
              <p>Code Contributions</p>
            </div>
            <ul>
              <li>Fork our Github repository.</li>
              <li>Set up locally (see README).</li>
              <li>Pick an issue from the "good first issue" tag.</li>
              <li>Create a branch, commit your changes, and open a PR.</li>
            </ul>
          </div>
          <div>
            <p className="text-md">Tech Stack</p>
            <div className="mt-5 md:mx-10 py-7 px-6 md:p-14 text-[12px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
              <ul className="flex flex-col justify-center gap-3">
                <li>Backend: Motoko</li>
                <li> Frontend: React + TailwindCSS</li>
                <li> Hosting: Internet computer Canisters</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">
              Submit New Features / Ideas
            </h4>
            <div className="border-docs w-12 md:w-86"></div>
            <p className="pt-15">Open a GitHub issue to propose:</p>
            <div className="mt-5 md:mx-10 py-7 px-6 md:p-14 text-[12px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
              <ul className="flex flex-col justify-between gap-3">
                <li>New search algorithms</li>
                <li>Smart indexing enhancements</li>
                <li> Resource validation tools</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              Non-Technical Contributions
            </h4>
            <div className="border-docs w-83"></div>
            <p className="pt-15">
              Improve our documentation.Improve our documentation.
            </p>
            <p>Suggest educational resources for indexing.</p>
            <p>Help translate Seeker into other languages.</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              Contributor Roles (Future DAO Plan)
            </h4>
            <div className="border-docs w-15 md:w-105"></div>
            <p className="pt-15">
              We aim to transition governance to the community.
            </p>
          </div>
          <div>
            <p>Roles may include: </p>
            <div className="mt-5 md:mx-10 py-7 px-6 md:p-14 text-[12px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
              <ul className="flex flex-col justify-between gap-3">
                <p>Verifiers: Curate and validate submissions.</p>
                <p> Maintainers: Manage codebase & updates.</p>
                <p> Evangelists: Grow Seeker's reach.</p>
              </ul>
            </div>
          </div>
          <div className="pb-20">
            <p>All contributions are welcomed and valued.</p>
          </div>
        </div>
        <div className="hidden md:flex ml-25 pl-8 flex-col gap-3 mt-10">
          <h4 className="text-2xl font-semibold">On this Page </h4>
          <p>Roles</p>
          <p>Features</p>
          <p>Examples</p>
        </div>
      </div>
    </main>
  );
}
