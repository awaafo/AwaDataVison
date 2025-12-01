import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartsDisplayProps {
  data: any[];
  headers: string[];
}

export const ChartsDisplay = ({ data, headers }: ChartsDisplayProps) => {
  // Find numeric columns for visualization
  const numericColumns = headers.filter((header) => {
    return data.some((row) => !isNaN(parseFloat(row[header])));
  });

  const firstNumericCol = numericColumns[0] || headers[1];
  const secondNumericCol = numericColumns[1] || headers[2] || firstNumericCol;
  const labelCol = headers[0];

  // Prepare data for charts (limit to 10 items for readability)
  const chartData = data.slice(0, 10).map((row) => ({
    name: String(row[labelCol] || "N/A").slice(0, 20),
    value1: parseFloat(row[firstNumericCol]) || 0,
    value2: parseFloat(row[secondNumericCol]) || 0,
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Bar Chart
            <span className="text-sm text-muted-foreground font-normal">
              ({firstNumericCol})
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis 
                stroke="hsl(var(--foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
              <Bar 
                dataKey="value1" 
                fill="hsl(var(--chart-1))" 
                name={firstNumericCol}
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Line Chart
            <span className="text-sm text-muted-foreground font-normal">
              ({secondNumericCol})
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis 
                stroke="hsl(var(--foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="value2"
                stroke="hsl(var(--chart-2))"
                strokeWidth={3}
                name={secondNumericCol}
                dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
