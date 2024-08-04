import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <>
      <div className="col-span-1">
        <Card className="flex flex-col overflow-hidden ">
          <CardHeader>
            <div className="w-full p-0 overflow-hidden">
              <Skeleton className="w-full h-[200px]"> </Skeleton>
            </div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="mt-auto my-2 space-y-3">
            <Skeleton className="w-full h-2.5"> </Skeleton>
            <Skeleton className="w-full h-2.5"> </Skeleton>
            <Skeleton className="w-4/5 h-2.5"> </Skeleton>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default GameCardSkeleton;
