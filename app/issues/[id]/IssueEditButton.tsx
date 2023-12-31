import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueEditButton = ({ IssueId }: { IssueId: number }) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/${IssueId}/edit`}> Edit Issues</Link>
    </Button>
  );
};

export default IssueEditButton;
