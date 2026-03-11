import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

function HourlySkeleton() {
  return (
    <Card
      title="Hourly Forecast (48 Hours)"
      childrenClassName="flex gap-6 overflow-x-auto"
    >
      {Array.from({ length: 48 }).map((_, index) => (
        <div className="flex flex-col gap-2 items-center p-2" key={index}>
          <Skeleton className="w-16 h-5" />
          <Skeleton className="size-11 rounded-full" />
          <Skeleton className="w-16 h-5" />
          <Skeleton className="w-16 h-5" />
        </div>
      ))}
    </Card>
  );
}

export default HourlySkeleton;
