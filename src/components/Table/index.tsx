import AntTable from "antd/lib/table";
import { TableProps } from "antd";

interface Props extends TableProps<any> {}

export const Table = ({ ...props }: Props) => {
  return <AntTable {...props} />;
};
