import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

export default function SideCardSkeleton() {
  return (
    <Card
      childrenClassName="flex flex-col gap-3"
      className="hover:scale-102 transition-transform duration-300 from-sidebar-accent to-sidebar-accent/60"
    >
      <div className="flex justify-between">
      <Skeleton className="w-12 h-7 rounded-md bg-sidebar" />
      <Skeleton className="w-12 h-7 rounded-md bg-sidebar" />
      </div>
      <Skeleton className="w-full h-2 bg-sidebar" />
      <div className="flex justify-between text-xs text-gray-300">
        <Skeleton className="w-6 h-4 rounded-md bg-sidebar" />
        <Skeleton className="w-6 h-4 rounded-md bg-sidebar" />
      </div>
      <div className="flex justify-between text-xs text-gray-300">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton className="w-12 h-5 rounded-md bg-sidebar" key={index} />
        ))}
      </div>
    </Card>
  );
}
