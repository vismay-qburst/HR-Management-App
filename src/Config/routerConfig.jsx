import Home from "../Pages/Home";
import Table from "../Pages/Table";
import NotFound from "../Pages/NotFound";

const routeMap = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/table",
            element: <Table />
        },
        {
            path: "/table/view-employee/:empid",
            element: <Table />
        },
        {
            path: "/table/delete-employee/:empid",
            element: <Table />
        },
        {
            path: "/table/edit-employee/:empid",
            element: <Table />
        },
        {
            path: "/table/add-employee",
            element: <Table />
        },
        {
            path: "*",
            element: <NotFound />
        }
]

export default routeMap