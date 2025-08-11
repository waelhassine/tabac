"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface LoginForm {
  username: string;
  password: string;
}

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<LoginForm>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      console.log("تسجيل الدخول:", data);
      alert("تم تسجيل الدخول بنجاح!");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-md">
        {/* Header with Logos */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Image
              src="/tunisien goverment.png"
              alt="الحكومة التونسية"
              width={80}
              height={80}
              className="object-contain"
            />
            <Image
              src="/minister des finanaces.png"
              alt="وزارة المالية"
              width={80}
              height={80}
              className="object-contain"
            />
            <Image
              src="/rnta.png"
              alt="RNTA"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            تابك لتحسين النفايات الصناعية
          </h1>
          <p className="text-gray-600">
            نظام إدارة النفايات الصناعية والتحسين البيئي
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              تسجيل الدخول
            </h2>
            <p className="text-gray-600">
              أدخل بياناتك للوصول إلى النظام
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                rules={{
                  required: "اسم المستخدم مطلوب",
                  minLength: {
                    value: 3,
                    message: "اسم المستخدم يجب أن يكون 3 أحرف على الأقل"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-right block">
                      اسم المستخدم
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="أدخل اسم المستخدم"
                        className="text-right"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                rules={{
                  required: "كلمة المرور مطلوبة",
                  minLength: {
                    value: 6,
                    message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-right block">
                      كلمة المرور
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="أدخل كلمة المرور"
                        className="text-right"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right" />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  نسيت كلمة المرور؟
                </a>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              لا تملك حساب؟{" "}
              <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
                تواصل مع الإدارة
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2024 تابك لتحسين النفايات الصناعية</p>
          <p>جميع الحقوق محفوظة - الجمهورية التونسية</p>
        </div>
      </div>
    </div>
  );
}
