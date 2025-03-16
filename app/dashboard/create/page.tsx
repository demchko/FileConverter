import { createNewPost } from "@/app/actions";
import { SubmitButton } from "@/components/custom/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DashboardCreate() {
  return (
    <div className="py-4 flex justify-center items-center w-full">
      <Card className="w-1/3 min-w-[500px]">
        <CardHeader>
          <CardTitle>Create post</CardTitle>
          <CardDescription>Create a new post</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-5" action={createNewPost}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input required name="title" placeholder="Title of the post" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="content">Content</Label>
                <Input required name="content" placeholder="Content of post" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="img">Image URL</Label>
                <Input
                  required
                  type="url"
                  name="img"
                  placeholder="Image of post"
                />
              </div>
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
