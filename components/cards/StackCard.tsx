import { stackData } from "@/data";
import Card from "../ui/Card";
import Tooltip from "../ui/Tooltip";


const StackCard = () => {
    return (
        <Card title="My Tech stacks">
            <div className="flex flex-col gap-6 mt-2">
                {
                    stackData.map((stack, i) => (
                        <div key={i} className="grid items-center gap-[90px]" style={{ gridTemplateColumns: "50px 1fr" }}>
                            {/* Stack group name */}
                            <div className="h-auto flex-none break-words whitespace-pre">
                                <p className="text-secondary-foreground">{stack.title}</p>
                            </div>
                            {/* Tool tip */}
                            <div className="flex gap-4">
                                {stack.stacks.map((item, i) => (
                                    <Tooltip
                                        key={i}
                                    title={item.title}
                                        image={item.image}
                                    bgColor={item.bgColor}
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </Card>
    );
}

export default StackCard;