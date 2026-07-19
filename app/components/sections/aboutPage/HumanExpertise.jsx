import { Check, ArrowDown , Cpu, Search, Users} from 'lucide-react';

export default function HumanExpertise() {
  const nodes = [
    {
      icon: Cpu,
      label: "Technology",
      description: "Scale & organization",
    },
    {
      icon: Search,
      label: "Research",
      description: "Focused discovery",
    },
    {
      icon: Users,
      label: "Human Review",
      description: "Context & relevance",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Human + Technology
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Technology helps us scale.
            <br />
            <span className="text-stone-400">
              Human judgment keeps us relevant.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-7 text-stone-600">
            Research and technology work together to turn raw information into
            structured data businesses can actually use.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* desktop connection */}
          <div className="absolute left-[16%] right-[16%] top-9 hidden h-px bg-stone-200 md:block" />

          <div className="relative grid gap-5 md:grid-cols-3">
            {nodes.map((node) => {
              const Icon = node.icon;

              return (
                <div key={node.label} className="text-center">
                  <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-stone-200 bg-white shadow-sm">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-5 font-semibold">{node.label}</h3>

                  <p className="mt-1 text-sm text-stone-500">
                    {node.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-14 flex max-w-md items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-stone-300" />

            <ArrowDown size={16} className="text-stone-400" />

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-stone-300" />
          </div>

          <div className="mx-auto mt-6 max-w-md rounded-2xl bg-stone-950 p-6 text-center text-white shadow-xl">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-stone-950">
              <Check size={18} strokeWidth={2.5} />
            </div>

            <p className="mt-4 text-lg font-medium">Business-ready data</p>

            <p className="mt-1 text-sm text-stone-400">
              Structured around the people you need to reach.
            </p>
          </div>

          <p className="mx-auto mt-12 max-w-xl text-center text-lg leading-8 text-stone-700">
            Behind every dataset is a process —{" "}
            <span className="font-medium text-stone-950">
              not just an export button.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}