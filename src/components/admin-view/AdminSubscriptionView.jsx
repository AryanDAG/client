import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { fetchAllSubscriptions } from "@/store/admin/subscription-slice";

function AdminSubscriptionView() {
  const { subscriptionList } = useSelector((state) => state.adminSubscriptions);
  const dispatch = useDispatch();
  console.log("subscriptionList",subscriptionList)
  useEffect(() => {
    dispatch(fetchAllSubscriptions());
  }, [dispatch]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Newsletter Subscriptions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptionList && subscriptionList.length > 0 ? (
              subscriptionList.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.email}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2}>No subscriptions found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default AdminSubscriptionView;
