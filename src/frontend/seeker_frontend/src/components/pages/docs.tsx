import { Link } from "react-router-dom";

export default function Docs() {
  const queryText = "{query}";
  const ql = "{";
  const qr = "}";

  return (
    <main className="w-full mt-15 flex-1 md:-mb-70">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mx-0">
        <div className="hidden md:flex max-w-[80%] h-full flex-col gap-6 text-center text-md mt-10 border-r border-neutral-500 pr-8">
          <Link to="/docs">
            <div className="text-black font-medium py-2 bg-neutral-200 border-2 rounded-r-full">
              Api Usage
            </div>
          </Link>
          <Link to="/docs-2">
            <div className="cursor-pointer py-2 bg-gradient-to-br from-neutral-600 to-black border-2 rounded-r-full border-neutral-400">
              Contribution Guide
            </div>
          </Link>
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
            <h1 className="text-2xl md:text-4xl font-semibold pb-6 ">
              API USAGE
            </h1>
            <div>
              <h4 className="text-xl md:text-2xl">
                Seeker API – Build with Search
              </h4>
              <div className="border-docs w-19 md:w-89"></div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Overview</h4>
            <div className="border-docs w-28"></div>
            <p className="mt-15 text-md">
              The Seeker API enables developers to programmatically interact
              with Seeker’s decentralized search infrastructure. From querying
              indexed resources to submitting new knowledge, you can integrate
              Seeker’s core functionality into your own tools, dashboards, or
              DApps.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Base URL</h4>
            <div className="border-docs w-28"></div>
            <p className="mt-15 text-purple-500">https://seeker.icp/api</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Authentication</h4>
            <div className="border-docs w-44"></div>
            <p className="pt-15">
              While querying is publicly accessible, endpoints that modify data
              (e.g., submissions) require authentication via Internet Identity.
              In future versions, Seeker will support DAO-approved contributors
              via Principal ID roles.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Search Resources</h4>
            <div className="border-docs w-54"></div>
            <p className="pt-15">GET /search?q={queryText}</p>
            <p>
              Returns an array of matching resources based on keyword, tags, or
              metadata.
            </p>
            <div className="flex flex-col justify-between gap-5 text-left">
              <p className="pt-5">Parameters:</p>
              <p>q [string] – The search term or keyword.</p>
              <p>limit [optional, default: 10] – Max number of results.</p>
              <p>filterBy [optional] – Resource type or category.</p>
              <p>Response [example]:</p>
            </div>
            <div className="mt-5 md:mx-10 py-7 px-6 md:py-5 md:px-10 text-[11px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
              [<p>{ql}</p>
              <p>"title": "Intro to Internet Computer",</p>
              <p> "url": "https://example.com/intro-icp",</p>
              <p> "tags": ["education", "icp"],</p>
              <p> "author": "dfn_community",</p>
              <p> "submittedAt": "2025-08-06T15:30:00Z"</p>
              <p>{qr}</p>]
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Submit a Resource</h4>
            <div className="border-docs w-56"></div>
            <p className="pt-15">POST /submit</p>
            <p>Submit a new on-chain resource to be indexed.</p>
            <p className="py-5">Body Parameters:</p>
            <div className="mt-5 md:mx-10 py-7 px-6 md:py-5 md:px-10 text-[11px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
              <p>{ql}</p>
              <p> "title": "Learn Motoko in 7 Days",</p>
              <p> "url": "https://example.com/motoko-course",</p>
              <p> "description": "A hands-on crash course for beginners",</p>
              <p> "tags": ["motoko", "tutorial", "web3"],</p>
              <p> "submittedBy": "principal_id_here"</p>
              <p>{qr}</p>
            </div>
            <div>
              <p className="py-5">Response:</p>
              <div className="md:mx-10 md:p-25 mt-5 p-15 text-[11px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
                <p>
                  {ql}"status": "success", "resourceId": "abc123"{qr}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold"> Fetch a Resource</h4>
            <div className="border-docs w-51"></div>
            <p className="pt-15">
              GET /resource/{ql}id{qr}
            </p>
            <p>Retrieve a resource’s full metadata by its unique ID.</p>
            <p className="py-5">Response:</p>
            <div className="mt-5 md:mx-10 py-7 px-6 md:py-5 md:px-10 text-[11px] md:text-[15px] bg-gradient-to-br from-neutral-600 to-black border-2 rounded-3xl border-neutral-400">
              <p>{ql}</p>
              <p> "id": "abc123",</p>
              <p> "title": "Learn Motoko in 7 Days",</p>
              <p> "description": "...",</p>
              <p>"tags": ["motoko"],</p>
              <p>"submittedBy": "aaaa-bbbb-cccc",</p>
              <p>"indexed": true</p>
              <p>{qr}</p>
            </div>
          </div>
          <div className="pb-20">
            <h4 className="text-2xl font-semibold">Rate Limits & Quotas</h4>
            <div className="border-docs w-62"></div>
            <p className="pt-15">
              Currently, Seeker APIs are rate-limited to prevent abuse.
            </p>
            <p>Standard plan: 100 requests/min per IP.</p>
            <p className="pt-5">Custom plans coming soon.</p>
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
