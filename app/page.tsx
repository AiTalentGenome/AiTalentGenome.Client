import { AppCombobox } from "@/components/controls/AppCombobox";
import { Button } from "@/components/controls/Button";
import { FormField } from "@/components/controls/FormField";
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
    <div className="p-8 flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        {/* Обычная кнопка (подстроится под текст) */}
        <Button>Кандидаты</Button>

        {/* Кнопка с иконкой (gap 8 сработает автоматически) */}
        <Button variant="outline">
          <Upload className="w-5 h-5" />
          Загрузить PDF
        </Button>
      </div>

      {/* Кнопка на всю ширину (удобно для форм) */}
      <Button variant="secondary" fullWidth className="max-w-md">
        Создать аккаунт
      </Button>

      <div className="max-w-2xl p-10">
        <FormField
          placeholder="Введите должность кандидата"
          helperText="Под этой должностью будет отображаться кандидат в общем списке"
        />
      </div>

      <div className="p-10 flex flex-col gap-8">
      <h1 className="font-heading text-2xl">Настройка вакансии</h1>
      
      <AppCombobox options={vacancies} />
    </div>
    </div>
  );
}
