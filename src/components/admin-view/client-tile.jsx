import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function AdminClientTile({
  client,
  setFormData,
  setOpenCreateClientsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={client?.image}
            alt={client?.name}
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="mt-2 text-lg font-bold">{client?.name}</h2>
          <p className="text-sm text-muted-foreground">{client?.designation}</p>
          <p className="mt-1 text-sm">{client?.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button
            onClick={() => {
              setOpenCreateClientsDialog(true);
              setCurrentEditedId(client?._id);
              setFormData(client);
            }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDelete(client?._id)}>Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default AdminClientTile;
