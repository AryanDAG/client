import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProjectImageUpload from "@/components/admin-view/image-upload";
import AdminProjectTile from "@/components/admin-view/project-tile";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";

import { addProjectFormElements } from "@/config/addProjectFormElements";
import {
  addNewProject,
  deleteProject,
  editProject,
  fetchAllProjects,
} from "@/store/admin/projects-slice";

const initialFormData = {
  image: null,
  name: "",
  description: "",
};

function AdminProjects() {
  const [openCreateProjectsDialog, setOpenCreateProjectsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);

  const { projectList } = useSelector((state) => state?.adminProjects);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    currentEditedId !== null
      ? dispatch(
          editProject({
            id: currentEditedId,
            formData,
          })
        ).then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchAllProjects());
            setFormData(initialFormData);
            setOpenCreateProjectsDialog(false);
            setCurrentEditedId(null);
          }
        })
      : dispatch(
          addNewProject({
            ...formData,
            image: uploadedImageUrl,
          })
        ).then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchAllProjects());
            setOpenCreateProjectsDialog(false);
            setImageFile(null);
            setFormData(initialFormData);
            toast({ title: "Project added successfully" });
          }
        });
  }

  function handleDelete(currentProjectId) {
    dispatch(deleteProject(currentProjectId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProjects());
      }
    });
  }

  function isFormValid() {
    return Object.keys(formData)
      .map((key) => formData[key] !== "")
      .every(Boolean);
  }

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="flex justify-end w-full mb-5">
        <Button onClick={() => setOpenCreateProjectsDialog(true)}>
          Add New Project
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {projectList && projectList.length > 0
          ? projectList.map((projectItem) => (
              <AdminProjectTile
                key={projectItem._id}
                setFormData={setFormData}
                setOpenCreateProjectsDialog={setOpenCreateProjectsDialog}
                setCurrentEditedId={setCurrentEditedId}
                project={projectItem}
                handleDelete={handleDelete}
              />
            ))
          : null}
      </div>
      <Sheet
        open={openCreateProjectsDialog}
        onOpenChange={() => {
          setOpenCreateProjectsDialog(false);
          setCurrentEditedId(null);
          setFormData(initialFormData);
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
              {currentEditedId !== null ? "Edit Project" : "Add New Project"}
            </SheetTitle>
          </SheetHeader>
          <ProjectImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
            isEditMode={currentEditedId !== null}
          />
          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={currentEditedId !== null ? "Edit" : "Add"}
              formControls={addProjectFormElements}
              isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default AdminProjects;
