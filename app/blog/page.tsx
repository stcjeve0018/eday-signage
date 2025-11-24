"use client";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted (Frontend only)");
    alert("感謝您的留言！目前網站為演示階段，請直接撥打電話聯繫。");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-6">聯絡我們</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="姓名 / 聯絡人" placeholder="請輸入姓名" required />
            <Input label="聯絡電話" placeholder="09xx-xxx-xxx" required />
          </div>
          <Input label="店面位置 (選填)" placeholder="例如：台北市中山區..." />
          <Textarea label="需求描述" placeholder="請簡述您的招牌製作需求..." required />
          <Button type="submit" className="w-full">送出留言</Button>
        </form>
      </div>
    </div>
  );
}