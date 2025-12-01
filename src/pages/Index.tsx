import { useState } from "react";
import { FileUpload } from "@/components/FileUpload";
import { DataTable } from "@/components/DataTable";
import { ChartsDisplay } from "@/components/ChartsDisplay";
import { InsightsPanel } from "@/components/InsightsPanel";
import { Footer } from "@/components/Footer";
import { BarChart3 } from "lucide-react";

const Index = () => {
  const [data, setData] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  const handleFileUpload = (uploadedData: any[], uploadedHeaders: string[]) => {
    setData(uploadedData);
    setHeaders(uploadedHeaders);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <header className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="p-3 rounded-2xl bg-accent/10">
              <BarChart3 className="w-10 h-10 text-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            AwaHub Data Analytics
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your CSV data, visualize insights, and leverage AI-powered analytics
            to make data-driven decisions
          </p>
        </header>

        {data.length === 0 ? (
          <div className="max-w-2xl mx-auto animate-in fade-in duration-700">
            <FileUpload onFileUpload={handleFileUpload} />
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">
                  Dataset Analysis
                </h2>
                <p className="text-muted-foreground">
                  {data.length} rows • {headers.length} columns
                </p>
              </div>
              <FileUpload onFileUpload={handleFileUpload} />
            </div>

            <DataTable data={data} headers={headers} />

            <ChartsDisplay data={data} headers={headers} />

            <InsightsPanel data={data} headers={headers} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
