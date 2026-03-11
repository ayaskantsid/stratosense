import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

function AdditionalSkeleton() {
  return (
    <Card title="Additional Info" childrenClassName="flex flex-col gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex justify-between">
          <div className="flex gap-4">
            <Skeleton className="w-22 h-5" />
            <Skeleton className="size-6 rounded-full" />
          </div>
          <span>
            <Skeleton className="size-6" />
          </span>
        </div>
      ))}
    </Card>
  );
}

export default AdditionalSkeleton;
