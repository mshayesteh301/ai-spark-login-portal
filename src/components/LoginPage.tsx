import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Bot, Sparkles, MessageCircle, Zap, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import aiHeroImage from "@/assets/ai-login-hero.jpg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen flex" dir="rtl">
      {/* Theme Toggle */}
      <div className="absolute top-4 left-4 z-50">
        <Button
          onClick={toggleTheme}
          variant="outline"
          size="sm"
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
      </div>

      {/* Right Column - AI Visual (moved to right for RTL) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-ai order-2">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={aiHeroImage}
            alt="AI Assistant Interface"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="space-y-8 text-center">
            <div className="animate-pulse-glow">
              <Bot className="w-16 h-16 mx-auto mb-4" />
            </div>
            
            <h1 className="text-4xl font-bold mb-4">
              به دستیار هوشمند خود خوش آمدید
            </h1>
            
            <p className="text-xl opacity-90 max-w-md">
              آینده گفتگوهای هوشمند و افزایش بهره‌وری را تجربه کنید
            </p>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 right-1/4 animate-float">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
              <CardContent className="p-4">
                <MessageCircle className="w-6 h-6 text-white mb-2" />
                <p className="text-sm text-white/80">پاسخ‌های هوشمند</p>
              </CardContent>
            </Card>
          </div>

          <div className="absolute top-3/4 left-1/4 animate-float" style={{ animationDelay: '1s' }}>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
              <CardContent className="p-4">
                <Zap className="w-6 h-6 text-white mb-2" />
                <p className="text-sm text-white/80">سرعت بالا</p>
              </CardContent>
            </Card>
          </div>

          <div className="absolute top-1/2 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-glow">
              <CardContent className="p-4">
                <Sparkles className="w-6 h-6 text-white mb-2" />
                <p className="text-sm text-white/80">قدرت هوش مصنوعی</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Left Column - Login Form (moved to left for RTL) */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-soft order-1">
        <div className="w-full max-w-md animate-fade-in">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Bot className="w-8 h-8 text-primary ml-2" />
              <h2 className="text-2xl font-bold text-foreground">دستیار هوشمند</h2>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2">سلام دوباره!</h3>
            <p className="text-muted-foreground">به فضای کاری هوشمند خود برگردید</p>
          </div>

          <Card className="shadow-ai border-ai-muted/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    آدرس ایمیل
                  </Label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="ایمیل خود را وارد کنید"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pr-10 h-12 border-ai-muted/30 focus:border-primary focus:ring-primary/20 text-right"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground font-medium">
                    رمز عبور
                  </Label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="رمز عبور خود را وارد کنید"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pr-10 pl-10 h-12 border-ai-muted/30 focus:border-primary focus:ring-primary/20 text-right"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-ai-muted/30" />
                    <span className="text-sm text-muted-foreground mr-2">مرا به خاطر بسپار</span>
                  </label>
                  <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">
                    رمز عبور را فراموش کرده‌اید؟
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-ai hover:shadow-glow transition-all duration-300 font-semibold"
                >
                  ورود به دستیار هوشمند
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-ai-muted/30" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">یا ادامه دهید با</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 border-ai-muted/30 hover:bg-ai-surface/50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  ورود با گوگل
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  حساب کاربری ندارید؟{" "}
                  <a href="#" className="text-primary hover:text-primary/80 font-medium transition-colors">
                    همین حالا ثبت نام کنید
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;