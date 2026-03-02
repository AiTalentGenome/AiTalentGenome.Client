import { AppCombobox } from "@/components/controls/AppCombobox";
import { AppStepper } from "@/components/analyze/AppStepper";
import { Button } from "@/components/controls/Button";
import { FormField } from "@/components/controls/FormField";
import { Logo } from "@/components/custom/Logo";
import { Upload } from "lucide-react";

const vacancies = [
  { value: "1", label: "Frontend Developer" },
  { value: "2", label: "Backend Developer" },
  { value: "3", label: "QA Engineer" },
  { value: "4", label: "Product Manager" },
  { value: "5", label: "DevOps Engineer" },
];

export default function Home() {
  return (
    <div>
      Main Page
    </div>
  );
}
