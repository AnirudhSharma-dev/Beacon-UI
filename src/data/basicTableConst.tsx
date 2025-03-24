export const columns = [
  {
    accessorKey: 'number',
    cell: ({ value }: { value: number }) => value,
    header: '#',
    id: 'number',
    meta: { align: 'right' }
  },
  {
    accessorKey: 'status',
    cell: ({ value }: { value: string }) => value,
    header: 'Status',
    id: 'status',
    meta: { align: 'center' },
    sortingFn: 'status'
  },
  {
    accessorKey: 'name',
    cell: ({ value }: { value: string }) => value,
    header: 'Name',
    id: 'name',
    meta: { align: 'left' }
  },
  {
    accessorKey: 'mac',
    cell: ({ value }: { value: string }) => value,
    header: 'MAC address',
    id: 'mac',
    meta: { align: 'left', dataType: 'networking' },
    sortingFn: 'mac'
  },
  {
    accessorKey: 'serial',
    cell: ({ value }: { value: string }) => value,
    header: 'Serial number',
    id: 'serial',
    meta: { align: 'left' }
  },
  {
    accessorKey: 'ip',
    cell: ({ value }: { value: string }) => value,
    header: 'Local IP',
    id: 'ip',
    meta: { align: 'left', dataType: 'networking' },
    sortingFn: 'ipv4'
  }
];

export const data = [
  {
    className: 'admin-row',
    ip: '10.20.50.56',
    live: true,
    mac: '00:0a:95:9d:68:16',
    name: 'Meraki London - Media Center',
    number: 1,
    serial: 'Q2HP-B43M-7M3V',
    status: 'good'
  },
  {
    ip: '10.20.50.64',
    live: false,
    mac: 'e0:55:3d:d4:90:48',
    name: 'Meraki Sydney - Data Center',
    number: 2,
    status: 'inactive'
  },
  {
    ip: '10.20.50.64',
    live: true,
    mac: '88:15:44:5c:0b:54',
    name: 'Meraki Sydney - Christopher',
    number: 3,
    serial: 'Q3ED-WD9T-CFWB',
    status: 'good'
  },
  {
    ip: '10.20.50.64',
    live: true,
    mac: '88:15:44:5c:0b:54',
    name: 'Meraki London - Finsbury',
    number: 4,
    serial: 'Q3ED-WD9T-CFWB',
    status: 'critical'
  },
  {
    ip: '10.20.50.52',
    live: true,
    mac: 'e0:55:6f:d4:90:49',
    name: 'Meraki Sydney - Data Center',
    number: 5,
    serial: 'Q3DE-7X2Y-URHL',
    status: 'warning'
  },
  {
    ip: '10.20.50.55',
    live: true,
    mac: '88:15:44:5c:0b:54',
    name: 'Meraki Sydney',
    number: 6,
    serial: 'Q2FW-22Z8-TRPJ',
    status: 'good'
  },
  {
    ip: '10.20.50.56',
    live: true,
    mac: 'e0:55:3d:d4:90:48',
    name: 'Meraki AWS - US West Oregon',
    number: 7,
    serial: 'Q3DE-Q2Z8-TRQI',
    status: 'good'
  },
  {
    ip: '10.20.50.48',
    live: true,
    mac: 'e0:55:6f:d4:90:40',
    name: 'Meraki AWS - US West Oregon',
    number: 8,
    serial: 'Q2FW-K91D-MSFP',
    status: 'warning'
  },
  {
    ip: '10.20.50.48',
    live: true,
    mac: 'e0:55:6f:d4:90:40',
    name: 'Meraki AWS - US West Oregon',
    number: 9,
    serial: 'Q2FW-K91D-MSFP',
    status: 'good'
  },
  {
    ip: '10.20.50.48',
    live: true,
    mac: 'e0:55:6f:d4:90:40',
    name: 'Meraki AWS - US West Oregon',
    number: 10,
    serial: 'Q2FW-K91D-MSFP',
    status: 'good'
  }
];
