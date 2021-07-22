import Bar from "../components/Bar"
import { languages, tools } from "../data"

const resume = () => {
    return (
        <div className="px-6">
            {/* Education & Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h3 className="text-2xl font-bold">Education</h3>
                    <div>
                        <h6 className="my-1 text-xl font-bold">Universitas Nusantara PGRI Kediri</h6>
                        <p className="my-1 font-semibold">Lorem ipsum dolor sit amet.</p>
                        <p className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Experiece</h3>
                    <div>
                        <h6 className="my-1 text-xl font-bold">Universitas Nusantara PGRI Kediri</h6>
                        <p className="my-1 font-semibold">Lorem ipsum dolor sit amet.</p>
                        <p className="my-1">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
            </div>

            {/* Language & Tool */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Language</h5>
                    <div className="my-2">
                        {
                            languages.map((language)=><Bar data={language} key={language.name}/>)
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tool & Software</h5>
                    <div className="my-2">
                        {
                            tools.map((tool)=><Bar data={tool} key={tool.name}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default resume
