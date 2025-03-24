
interface TableColumn {
  accessorKey: string;
  header: string;
  id: string;
  cell: (cell: { value: any }) => any;
  meta?: {
    align?: string;
    dataType?: string;
  };
  sortingFn?: string;
}

interface BasicTableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
}

const BasicTable = ({ columns, data }: BasicTableProps) => {
  return (
    <div className="basic-table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column: TableColumn) => (
              <th key={column.accessorKey}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: Record<string, any>, rowIndex: number) => (
            <tr key={rowIndex}>
              {columns.map((column: TableColumn) => (
                <td key={column.accessorKey}>
                  {column.cell({ value: row[column.accessorKey] })}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
