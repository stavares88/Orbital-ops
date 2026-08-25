type DashboardPanelProps = {
  title: string;
  children: React.ReactNode;
};

function DashboardPanel({
  title,
  children,
}: DashboardPanelProps) {
  return (
    <section className="panel">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default DashboardPanel;