import { useState, useRef } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface FileUploadProps {
  onFileUpload: (data: any[], headers: string[]) => void;
}

export const FileUpload = ({ onFileUpload }: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const parseCSV = (text: string) => {
    const lines = text.trim().split("\n");
    if (lines.length === 0) {
      throw new Error("CSV file is empty");
    }

    const headers = lines[0].split(",").map((h) => h.trim());
    const data = lines.slice(1).map((line) => {
      const values = line.split(",").map((v) => v.trim());
      const row: any = {};
      headers.forEach((header, index) => {
        row[header] = values[index] || "";
      });
      return row;
    });

    return { headers, data };
  };

  const handleFile = async (file: File) => {
    if (!file.name.endsWith(".csv")) {
      toast({
        title: "Invalid file type",
        description: "Please upload a CSV file",
        variant: "destructive",
      });
      return;
    }

    try {
      const text = await file.text();
      const { headers, data } = parseCSV(text);
      
      if (data.length === 0) {
        throw new Error("No data found in CSV file");
      }

      onFileUpload(data, headers);
      toast({
        title: "Success!",
        description: `Loaded ${data.length} rows from ${file.name}`,
      });
    } catch (error) {
      toast({
        title: "Error parsing CSV",
        description: error instanceof Error ? error.message : "Failed to parse CSV file",
        variant: "destructive",
      });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <Card
      className={`p-8 border-2 border-dashed transition-all duration-300 ${
        isDragging
          ? "border-accent bg-accent/5 scale-[1.02]"
          : "border-border hover:border-accent/50"
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="p-6 rounded-full bg-accent/10">
          <Upload className="w-12 h-12 text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Upload CSV File</h3>
          <p className="text-muted-foreground mb-4">
            Drag and drop your CSV file here, or click to browse
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={handleFileInput}
          className="hidden"
        />
        <Button
          onClick={() => fileInputRef.current?.click()}
          className="bg-accent hover:bg-accent/90"
        >
          Select File
        </Button>
      </div>
    </Card>
  );
};
