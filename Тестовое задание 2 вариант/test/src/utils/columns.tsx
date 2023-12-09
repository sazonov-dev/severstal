import {Tag} from "antd";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        onClick: (record: any, rowIndex: any) => {
            console.log(record, rowIndex)
        }
    },
    {
        title: "email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "balance",
        dataIndex: "balance",
        key: "balance",
    },
    {
        title: "isActive",
        dataIndex: "isActive",
        key: "isActive",

        render: (row: boolean) => {
            return <Tag color={row ? "green" : "red"}>{row ? "TRUE" : "FALSE"}</Tag>;
        },
    },
];

export default columns;
