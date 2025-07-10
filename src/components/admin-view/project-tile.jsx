// components/admin-view/project-tile.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

function AdminProjectTile({ project, setFormData, setOpenCreateProjectsDialog, setCurrentEditedId, handleDelete }) {
  return (
    <Card className="overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        className="object-cover w-full h-40"
      />
      <CardContent className="py-4">
        <h2 className="text-lg font-semibold">{project.name}</h2>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              setFormData({
                name: project.name,
                description: project.description,
                image: project.image,
              });
              setOpenCreateProjectsDialog(true);
              setCurrentEditedId(project._id);
            }}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="destructive"
            onClick={() => handleDelete(project._id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default AdminProjectTile;
