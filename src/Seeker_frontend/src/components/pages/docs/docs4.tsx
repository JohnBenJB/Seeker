import { Link } from "react-router-dom";

export default function Docs4() {
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
            <div className="cursor-pointer py-2 bg-gradient-to-br from-neutral-600 to-black border-2 rounded-r-full border-neutral-400 leading-5">
              Contribution Guide
            </div>
          </Link>
          <Link to="/docs-3">
            <div className="cursor-pointer py-2 bg-gradient-to-br from-neutral-600 to-black border-2 rounded-r-full border-neutral-400">
              Open Source Github Link
            </div>
          </Link>
          <Link to="/docs-4">
            <div className="text-black font-medium py-2 bg-neutral-200 border-2 rounded-r-full">
              Instructions For Submitting <br />
              Resources
            </div>
          </Link>
        </div>
        <div className="mx-6 md:-ml-16 md:-mr-25 flex flex-col justify-start text-left gap-20 mt-10 md:border-r md:border-neutral-500 md:pr-8">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold pb-6">
              Instructions For <br />
              Submitting Resources
            </h1>
            <div>
              <h4 className="text-xl md:text-2xl">
                Submit Resources to Seeker
              </h4>
              <div className="border-docs w-82"></div>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              Help Expand Web3 Knowledge
            </h4>
            <div className="border-docs w-87"></div>
            <p className="pt-15">
              You can submit high-quality resources relevant to the Internet
              Computer or broader Web3 development. Your contributions help
              others learn, build, and grow in the space.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">What You Can Submit</h4>
            <div className="border-docs w-62"></div>
            <ul className="pt-10 flex flex-col justify-between gap-3">
              <li> Blog posts / Medium articles</li>
              <li>YouTube tutorials / explainer videos</li>
              <li>GitHub repositories</li>
              <li>Documentation or whitepapers</li>
              <li>Tools, SDKs, or walkthroughs</li>
            </ul>
            <p className="pt-5">
              All submissions must be public and educational.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">What You Can Submit</h4>
            <div className="border-docs w-62"></div>
            <ol className="pt-10 flex flex-col justify-between gap-5">
              <li>1. Click the "Submit Resource" button on the homepage.</li>
              <li>2. Log in with Internet Identity (or GitHub, if enabled).</li>
              <li>3. Fill the submission form:</li>
            </ol>
            <div className="mt-5 md:mx-10 py-7 px-6 md:p-14 text-[12px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
              <ul className="flex flex-col justify-center gap-3">
                <li>Title</li>
                <li> Description</li>
                <li>Tags (e.g. #motoko, #tutorial)</li>
                <li>URL</li>
              </ul>
            </div>
            <p className="pt-5">4. Click Submit.</p>
            <p className="pt-5">
              5. Your resource will be indexed and searchable almost instantly.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Moderation</h4>
            <div className="border-docs w-12 md:w-86"></div>
            <p className="pt-15"> Seeker is open to all.</p>
            <p className="pt-5"> In future iterations:</p>
            <div className="mt-5 md:mx-10 py-7 px-6 md:p-14 text-[12px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
              <ul className="flex flex-col justify-between gap-3">
                <li>
                  Submissions may be verified by DAO-approved contributors.
                </li>
                <li>Flagged content can be reviewed or hidden.</li>
                <li> Spam or harmful content will be auto-rejected.</li>
              </ul>
            </div>
            <p className="pt-5 pb-30">
              Thank you for helping grow the ecosystem! Every resource counts.
            </p>
          </div>
        </div>
        <div className="hidden md:flex ml-25 pl-8 flex-col gap-3 mt-10">
          <h4 className="text-2xl font-semibold">On this Page </h4>
          <p>How to</p>
        </div>
      </div>
    </main>
  );
}
