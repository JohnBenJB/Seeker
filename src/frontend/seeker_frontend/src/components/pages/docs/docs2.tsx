import { Link } from "react-router-dom";

export default function Docs2() {
  const ql = "{";
  const qr = "}";

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
            <p className="text-md">
              Whether you are a developer, designer, researcher, or enthusiast —
              your contributions help Seeker grow into a stronger decentralized
              search ecosystem.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Developer Contributions</h4>
            <div className="border-docs w-25"></div>
            <p className="mt-15 text-md">
              Improve features, fix bugs, or expand integrations with the Seeker
              API.
            </p>
            <div className="mt-5 md:mx-10 py-7 px-6 md:px-10 text-[12px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
              <p>{ql}</p>
              <p>Languages: Motoko, Rust, JavaScript</p>
              <p> Framework: React, Vite, TailwindCSS</p>
              <p> Version Control: GitHub (open-source repo)</p>
              <p>{qr}</p>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              Submit New Features / Ideas
            </h4>
            <div className="border-docs w-45"></div>
            <p className="pt-15">
              Propose enhancements, integrations, or improvements to how Seeker
              indexes and presents decentralized resources.
            </p>
            <div className="mt-5 md:mx-10 py-7 px-6 md:px-10 text-[12px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
              <p>{ql}</p>
              <p>Example: Dark mode toggle</p>
              <p> Example: Web3 wallet authentication</p>
              <p> Example: Category-based search filters</p>
              <p>{qr}</p>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              Non-Technical Contributions
            </h4>
            <div className="border-docs w-60"></div>
            <p className="pt-15">
              You don’t need to code to contribute! Help by creating educational
              content, sharing resources, or providing design feedback.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              Contributor Roles (Future DAO Plan)
            </h4>
            <div className="border-docs w-70"></div>
            <p className="pt-15">
              Seeker aims to transition into a DAO model where contributors earn
              roles and governance rights.
            </p>
            <div className="mt-5 md:mx-10 py-7 px-6 md:px-10 text-[12px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
              <p>{ql}</p>
              <p>Research Curators</p>
              <p> Developer Maintainers</p>
              <p> Community Moderators</p>
              <p>{qr}</p>
            </div>
          </div>
          <div className="pb-20">
            <h4 className="text-2xl font-semibold">Final Note</h4>
            <div className="border-docs w-32"></div>
            <p className="pt-15">
              All contributions are welcomed and valued — together, we build a
              decentralized future of search.
            </p>
          </div>
        </div>
        <div className="hidden md:flex ml-25 pl-8 flex-col gap-3 mt-10">
          <h4 className="text-2xl font-semibold">On this Page</h4>
          <p>Developer Contributions</p>
          <p>New Features</p>
          <p>Non-Technical</p>
          <p>Contributor Roles</p>
          <p>Final Note</p>
        </div>
      </div>
    </main>
  );
}
