import { NavMultiTab, NavTab } from "./NavTab.components"

const exploreMultiTab = [
    {
        title:"Depthfullness",
        path:"/depthfullness"
    },
    {
        title:"Socio-Neurology",
        path:"/socio-neurological"
    },
    {
        title:"Components",
        path:"/components"
    }
]



export const ConceptNav = ({Burger}) => {
    return(
        <div className="flex justify-between">
            <p className="text-white font-extralight h-min my-auto text-2xl md:text-3xl py-2 px-4 whitespace-nowrap">Sympathetic Intelligence</p>

            <nav className={`text-gray-700 text-lg justify-end transition-all duration-1400 md:flex hidden pr-6`}>
                <NavTab path="/about-concept" title="Concept" />
                <NavTab path="/origins" title="origins" />
                <NavTab path="/concept/tier1" title="the tiers"/>
                <div className="w-[4em]"></div>
                <div className="w-[4em] border-l"></div>
                <NavMultiTab path="/depthfullness" title="Elements" tabs={exploreMultiTab}/>
                <NavTab path="/applications" title="applications" />
                <NavTab path="/videos" title="videos" />
                <NavTab path="/experience" title="experience SI" />
            </nav>

            <Burger />
        </div>
    )
}
