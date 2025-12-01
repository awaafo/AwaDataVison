import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface InsightsPanelProps {
  data: any[];
  headers: string[];
}

export const InsightsPanel = ({ data, headers }: InsightsPanelProps) => {
  const [insights, setInsights] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateInsights = async () => {
    setIsLoading(true);
    try {
      const dataPreview = data.slice(0, 5).map((row) => {
        const obj: any = {};
        headers.forEach((header) => {
          obj[header] = row[header];
        });
        return obj;
      });

      const { data: result, error } = await supabase.functions.invoke(
        "generate-insights",
        {
          body: {
            headers,
            dataPreview,
            rowCount: data.length,
          },
        }
      );

      if (error) throw error;

      setInsights(result.insights);
    } catch (error) {
      console.error("Error generating insights:", error);
      toast({
        title: "Error generating insights",
        description: error instanceof Error ? error.message : "Failed to generate insights",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg border-accent/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent" />
          AI Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!insights && (
          <p className="text-muted-foreground">
            Get AI-powered insights about your data
          </p>
        )}
        {insights && (
          <div className="prose prose-sm max-w-none">
            <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
              <p className="whitespace-pre-wrap text-foreground">{insights}</p>
            </div>
          </div>
        )}
        <Button
          onClick={generateInsights}
          disabled={isLoading}
          className="w-full bg-accent hover:bg-accent/90"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating Insights...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Insights
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
