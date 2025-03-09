export default async function DashboardId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>Hello from next js dynamic page id: {id}</div>;
}
