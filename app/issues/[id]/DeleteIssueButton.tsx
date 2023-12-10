import { Button } from "@radix-ui/themes";

const DeleteIssueButton = ({ IssueId }: { IssueId: Number }) => {
  return <Button color="red">Delete Issue</Button>;
};

export default DeleteIssueButton;
