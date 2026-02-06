import { FileText, Download, Eye } from "lucide-react";

const docs = [
  { name: "Project Proposal v2.pdf", type: "PDF", size: "2.4 MB", date: "Sep 12, 2025", category: "Proposal" },
  { name: "Literature Review.docx", type: "DOCX", size: "1.8 MB", date: "Oct 28, 2025", category: "Literature Review" },
  { name: "SRS Document.pdf", type: "PDF", size: "3.1 MB", date: "Nov 15, 2025", category: "Documentation" },
  { name: "ER Diagram.png", type: "Image", size: "540 KB", date: "Nov 20, 2025", category: "Design" },
  { name: "Progress Report 1.pdf", type: "PDF", size: "1.2 MB", date: "Dec 10, 2025", category: "Report" },
  { name: "Code Architecture.pptx", type: "PPT", size: "4.5 MB", date: "Dec 22, 2025", category: "Presentation" },
];

const Documents = () => (
  <div>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-foreground">Documents</h1>
      <p className="text-muted-foreground text-sm mt-1">All your project files in one place</p>
    </div>
    <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="text-left text-xs font-semibold text-muted-foreground px-5 py-3">File</th>
            <th className="text-left text-xs font-semibold text-muted-foreground px-5 py-3">Category</th>
            <th className="text-left text-xs font-semibold text-muted-foreground px-5 py-3">Size</th>
            <th className="text-left text-xs font-semibold text-muted-foreground px-5 py-3">Date</th>
            <th className="text-right text-xs font-semibold text-muted-foreground px-5 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {docs.map((d, i) => (
            <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors animate-fade-in" style={{ animationDelay: `${i * 50}ms` }}>
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{d.name}</p>
                    <p className="text-xs text-muted-foreground">{d.type}</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3.5">
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">{d.category}</span>
              </td>
              <td className="px-5 py-3.5 text-sm text-muted-foreground">{d.size}</td>
              <td className="px-5 py-3.5 text-sm text-muted-foreground">{d.date}</td>
              <td className="px-5 py-3.5 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Documents;
