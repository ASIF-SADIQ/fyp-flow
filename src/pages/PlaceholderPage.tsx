import { Construction } from "lucide-react";

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
      <Construction className="w-7 h-7 text-muted-foreground" />
    </div>
    <h1 className="text-xl font-bold text-foreground">{title}</h1>
    <p className="text-sm text-muted-foreground mt-2">This section is under development.</p>
  </div>
);

export default PlaceholderPage;
