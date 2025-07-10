import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContacts } from "@/store/admin/contact-slice";

function AdminContactView() {
  const { contactList } = useSelector((state) => state.adminContacts);
  const dispatch = useDispatch();
 console.log(contactList)
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Form Submissions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Full Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>City/Area</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
  {contactList && contactList.length > 0
    ? contactList.map((item) => (
        <TableRow key={item._id}>
          <TableCell>{item.fullName}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.mobile}</TableCell>
          <TableCell>{item.city}</TableCell>
        </TableRow>
      ))
    : null}
</TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default AdminContactView;
